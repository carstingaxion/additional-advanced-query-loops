<?php
/**
 * Handles enqueueing of assets for the plugin.
 *
 * @package ContextualQueryLoop
 */

namespace ContextualQueryLoop;

/**
 * Enqueue our index.
*/
\add_action(
	'enqueue_block_editor_assets',
	function () {
		// Variations.
		$index_assets_file = CQL_BUILD_DIR_PATH . 'index.asset.php';

		if ( file_exists( $index_assets_file ) ) {
			$assets = include $index_assets_file;
			\wp_enqueue_script(
				'contextual-query-loop',
				CQL_BUILD_DIR_URL . 'index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			// Allow for translation.
			wp_set_script_translations( 'contextual-query-loop', 'contextual-query-loop' );
		}
	}
);
