<?php
/**
 * Handles the filters we need to add to the query.
 *
 * @package ContextualQueryLoop
 */

namespace ContextualQueryLoop;

/**
 * Adds the custom query attributes to the Query Loop block.
 *
 * @param array $meta_query_data Post meta query data.
 * @return array
 */
function parse_meta_query( $meta_query_data ) {
	$meta_queries = array();
	if ( isset( $meta_query_data ) ) {
		$meta_queries = array(
			'relation' => isset( $meta_query_data['relation'] ) ? $meta_query_data['relation'] : '',
		);

		if ( isset( $meta_query_data['queries'] ) ) {
			foreach ( $meta_query_data['queries'] as $query ) {
				$meta_queries[] = array_filter(
					array(
						'key'     => $query['meta_key'] ?? '',
						'value'   => $query['meta_value'],
						'compare' => $query['meta_compare'],
					)
				);
			}
		}
	}

	return array_filter( $meta_queries );
}

/**
 * Returns an array with Post IDs that should be excluded from the Query.
 *
 * @param array
 * @return array
 */
function get_exclude_ids( $attributes ) {
	$exclude_ids = array();

	// Exclude Current Post.
	if ( isset( $attributes['exclude_current'] ) && boolval( $attributes['exclude_current'] ) ) {
		array_push( $exclude_ids, $attributes['exclude_current'] );
	}

	return $exclude_ids;
}

/**
 * Returns an array with Post IDs to be included on the Query
 *
 * @param array
 * @return array
 */
function get_include_ids( $include_posts ) {
	return array_column( $include_posts, 'id' );
}

/**
 * Updates the query on the front end based on custom query attributes.
 */
\add_filter(
	'pre_render_block',
	function ( $pre_render, $parsed_block ) {
		if ( isset( $parsed_block['attrs']['namespace'] ) && 'contextual-query-loop' === $parsed_block['attrs']['namespace'] ) {

			// Hijack the global query. It's a hack, but it works.
			if ( isset( $parsed_block['attrs']['query']['inherit'] ) && true === $parsed_block['attrs']['query']['inherit'] ) {
				global $wp_query;
				$query_args = array_merge(
					$wp_query->query_vars,
					array(
						'posts_per_page' => $parsed_block['attrs']['query']['perPage'],
						'order'          => $parsed_block['attrs']['query']['order'],
						'orderby'        => $parsed_block['attrs']['query']['orderBy'],
					)
				);

				/**
				 * Filter the query vars.
				 *
				 * Allows filtering query params when the query is being inherited.
				 *
				 * @since 1.5
				 *
				 * @param array   $query_args  Arguments to be passed to WP_Query.
				 * @param array   $block_query The query attribute retrieved from the block.
				 * @param boolean $inherited   Whether the query is being inherited.
				 *
				 * @param array $filtered_query_args Final arguments list.
				 */
				$filtered_query_args = \apply_filters(
					'cql_query_vars',
					$query_args,
					$parsed_block['attrs']['query'],
					true,
				);

				$wp_query = new \WP_Query( array_filter( $filtered_query_args ) );
			} else {
				\add_filter(
					'query_loop_block_query_vars',
					function ( $default_query, $block ) {
						// Retrieve the query from the passed block context.
						$block_query = $block->context['query'];

						// Generate a new custom query will all potential query vars.
						$query_args = array();

						// Post Related.
						if ( isset( $block_query['multiple_posts'] ) && ! empty( $block_query['multiple_posts'] ) ) {
							$query_args['post_type'] = array_merge( array( $default_query['post_type'] ), $block_query['multiple_posts'] );
						}

						// Exclude Posts.
						$exclude_ids = get_exclude_ids( $block_query );
						if ( ! empty( $exclude_ids ) ) {
							$query_args['post__not_in'] = $exclude_ids;
						}

						// Include Posts.
						if ( isset( $block_query['include_posts'] ) && ! empty( $block_query['include_posts'] ) ) {
							$include_ids            = get_include_ids( $block_query['include_posts'] );
							$query_args['post__in'] = $include_ids;
						}

						// Check for meta queries.
						// Ensure any old meta is removed @see https://github.com/ryanwelcher/contextual-query-loop/issues/29
						$query_args['meta_query'] = array();
						if ( isset( $block_query['meta_query'] ) && ! empty( $block_query['meta_query'] ) ) {
							$query_args['meta_query'] = parse_meta_query( $block_query['meta_query'] ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
						}

						// Date queries.
						$date_query        = $block_query['date_query'] ?? null;
						$date_relationship = $date_query['relation'] ?? null;
						$date_primary      = $date_query['date_primary'] ?? null;
						if ( $date_query && $date_relationship && $date_primary ) {
							$date_is_inclusive = $date_query['inclusive'] ?? false;
							$date_secondary    = $date_query['date_secondary'] ?? null;

							// Date format: 2022-12-27T11:14:21.
							$primary_year  = substr( $date_primary, 0, 4 );
							$primary_month = substr( $date_primary, 5, 2 );
							$primary_day   = substr( $date_primary, 8, 2 );

							if ( 'between' === $date_relationship && $date_secondary ) {
								$secondary_year  = substr( $date_secondary, 0, 4 );
								$secondary_month = substr( $date_secondary, 5, 2 );
								$secondary_day   = substr( $date_secondary, 8, 2 );

								$date_queries = array(
									'after'  => array(
										'year'  => $primary_year,
										'month' => $primary_month,
										'day'   => $primary_day,
									),
									'before' => array(
										'year'  => $secondary_year,
										'month' => $secondary_month,
										'day'   => $secondary_day,
									),
								);
							} else {
								$date_queries = array(
									$date_relationship => array(
										'year'  => $primary_year,
										'month' => $primary_month,
										'day'   => $primary_day,
									),
								);
							}

							$date_queries['inclusive'] = $date_is_inclusive;

							// Add the date queries to the custom query.
							$query_args['date_query'] = array_filter( $date_queries );

						}

						// Contextual inheritance.
						if ( isset( $block_query['querycontext'] ) && ! empty( $block_query['querycontext'] ) ) {
							$queried_object = get_queried_object();
							switch ( true ) {
								case $queried_object instanceof \WP_Post:
									if ( in_array( 'author', $block_query['querycontext'], true ) ) {
										unset( $block_query['author'] );
										$query_args['author'] = (int) $queried_object->post_author;
									}
									break;

								default:
									// code...
									break;
							}
						}
						/** This filter is documented in includes/query-loop.php */
						$filtered_query_args = \apply_filters(
							'cql_query_vars',
							$query_args,
							$block_query,
							false
						);

						// Return the merged query.
						return array_merge(
							$default_query,
							$filtered_query_args
						);
					},
					10,
					2
				);
			}
		}

		return $pre_render;
	},
	10,
	2
);

/**
 * Updates the query vars for the Query Loop block in the block editor
 */
// Add a filter to each rest endpoint to add our custom query params.
\add_action(
	'init',
	function () {
		$registered_post_types = \get_post_types( array( 'public' => true ) );
		foreach ( $registered_post_types as $registered_post_type ) {
			\add_filter( 'rest_' . $registered_post_type . '_query', __NAMESPACE__ . '\add_custom_query_params', 10, 2 );

			// We need more sortBy options.
			\add_filter( 'rest_' . $registered_post_type . '_collection_params', __NAMESPACE__ . '\add_more_sort_by', 10, 2 );
		}
	},
	PHP_INT_MAX
);


/**
 * Override the allowed items
 *
 * @see https://developer.wordpress.org/reference/classes/wp_rest_posts_controller/get_collection_params/
 *
 * @param array $query_params The query params.
 * @param array $post_type    The post type.
 *
 * @return array
 */
function add_more_sort_by( $query_params, $post_type ) {
	$query_params['orderby']['enum'][] = 'menu_order';
	$query_params['orderby']['enum'][] = 'meta_value';
	$query_params['orderby']['enum'][] = 'meta_value_num';
	$query_params['orderby']['enum'][] = 'rand';
	return $query_params;
}

/**
 * Callback to handle the custom query params. Updates the block editor.
 *
 * @param array           $args    The query args.
 * @param WP_REST_Request $request The request object.
 */
function add_custom_query_params( $args, $request ) {
	// Generate a new custom query will all potential query vars.
	$custom_args = array();

	// Post Related.
	$multiple_post_types = $request->get_param( 'multiple_posts' );
	if ( $multiple_post_types ) {
		$custom_args['post_type'] = array_merge( array( $args['post_type'] ), $multiple_post_types );
	}

	// Exclusion Related.
	$exclude_current = $request->get_param( 'exclude_current' );
	if ( $exclude_current ) {
		$attributes = array(
			'exclude_current' => $exclude_current,
		);

		$custom_args['post__not_in'] = get_exclude_ids( $attributes );
	}

	// Inclusion Related.
	$include_posts = $request->get_param( 'include_posts' );
	if ( $include_posts ) {
		$include_ids             = get_include_ids( $include_posts );
		$custom_args['post__in'] = $include_ids;
	}

	// Meta related.
	$meta_query = $request->get_param( 'meta_query' );
	if ( $meta_query ) {
		$custom_args['meta_query'] = parse_meta_query( $meta_query ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
	}

	// Date related.
	$date_query        = $request->get_param( 'date_query' );
	$date_relationship = $date_query['relation'] ?? null;
	$date_primary      = $date_query['date_primary'] ?? null;

	if ( $date_query && $date_relationship && $date_primary ) {
		$date_is_inclusive = 'true' === $date_query['inclusive'] ?? false;
		$date_secondary    = $date_query['date_secondary'] ?? null;

		// Date format: 2022-12-27T11:14:21.
		$primary_year  = substr( $date_primary, 0, 4 );
		$primary_month = substr( $date_primary, 5, 2 );
		$primary_day   = substr( $date_primary, 8, 2 );

		if ( 'between' === $date_relationship && $date_secondary ) {
			$secondary_year  = substr( $date_secondary, 0, 4 );
			$secondary_month = substr( $date_secondary, 5, 2 );
			$secondary_day   = substr( $date_secondary, 8, 2 );

			$date_queries = array(
				'after'  => array(
					'year'  => $primary_year,
					'month' => $primary_month,
					'day'   => $primary_day,
				),
				'before' => array(
					'year'  => $secondary_year,
					'month' => $secondary_month,
					'day'   => $secondary_day,
				),
			);
		} else {
			$date_queries = array(
				$date_relationship => array(
					'year'  => $primary_year,
					'month' => $primary_month,
					'day'   => $primary_day,
				),
			);
		}
		$date_queries['inclusive'] = $date_is_inclusive;

		$custom_args['date_query'] = array_filter( $date_queries );
	}


	// Contextual inheritance.
	$querycontext = $request->get_param( 'querycontext' );
	if ( $querycontext ) {
		/*
		 * Get context, where REST request is coming from.
		 *
		 * @see https://developer.wordpress.org/reference/classes/wp_rest_request/get_header/
		 */
		$referer      = $request->get_header( 'referer' );
		$query_string = \wp_parse_url( $referer, PHP_URL_QUERY );
		parse_str( $query_string, $query_params );

		// We are on a typical /wp-admin/post.php?post=173&action=edit page.
		if ( isset( $query_params['post'] ) ) {
			$post = \get_post( (int) $query_params['post'] );

			if ( in_array( 'author', $querycontext, true ) && $post instanceof \WP_Post ) {
				$custom_args['author'] = (int) $post->post_author;
			}
		}
	}

	/** This filter is documented in includes/query-loop.php */
	$filtered_query_args = \apply_filters(
		'cql_query_vars',
		$custom_args,
		$request->get_params(),
		false,
	);

	// Merge all queries.
	return array_merge(
		$args,
		array_filter( $filtered_query_args )
	);
}
