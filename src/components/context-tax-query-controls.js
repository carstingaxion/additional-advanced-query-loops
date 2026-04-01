/**
 * External dependencies
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * WordPress dependencies
 */
import { Button, SelectControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { ContextTaxControl } from './context-tax-control';
import { useTaxonomies } from './utils';

/**
 * Converts the tax keys from the all sources into a single array.
 *
 * @param {Array} postType
 * @return {Array} tax keys
 */
const combineTaxKeys = ( postType ) => {
	// DEMO
	const taxonomies = { post_tag: 'Post tags', category: 'Cats' };
	// console.log('var 1',taxonomies);

	// Get registered taxonmies of queried post_type.
	const taxObjs = useTaxonomies( postType );
	// console.log('taxObjs', taxObjs);
	// const taxList = taxObjs.map

	let taxonomies2 = {};
	if ( taxObjs && taxObjs.length > 0 ) {
		// // taxObjs.keys().forEach( taxonomy => {
		// [...taxObjs.keys()].forEach( taxonomy => {

		// 	console.log('each tax: ', taxonomy );

		// 	var key = taxonomy.slug;
		// 	taxonomies2[key] = taxonomy.name;
		// });
		taxonomies2 = taxObjs.reduce( ( taxonomy, { name, slug } ) => {
			taxonomy[ slug ] = name;
			return taxonomy;
		}, {} );

		// console.log('var 2',taxonomies2);
		// console.log('var 3',{
		// 	...taxonomies2,
		// });
	}

	// const taxonomies2 = taxObjs?.map( ( taxonomy ) => {
	// 	// if ( taxonomy.id === queryId ) {
	// 		return taxonomy.slug: taxonomy.name,

	// 	// }
	// 	// return taxonomy;
	// } );

	// return taxonomies2;
	return {
		// ...records?.[ 0 ]?.tax,
		// ...records?.[ 0 ]?.acf,
		...taxonomies2,
	};
};

// A component to render a select control for the post tax query.
export const ContextTaxQueryControls = ( { attributes, setAttributes } ) => {
	const {
		query: {
			postType,
			querycontext: {
				tax_query: {
					relation: relationFromQuery = '',
					queries = [],
				} = {},
			} = {},
		} = {},
	} = attributes;

	// const { records } = useEntityRecords( 'postType', postType, {
	// 	per_page: 1,
	// } );

	const [ selectedPostType ] = useState( postType );

	// TODO // Duplicate func. for tax-terms
	// const [ selectedPostType ] = useState( postType );

	useEffect( () => {
		// If the post type changes, reset the tax query.
		if ( postType !== selectedPostType ) {
			// setAttributes( {
			// 	query: {
			// 		...attributes.query,
			// 		include_posts: [],
			// 		tax_query: {},
			// 	},
			// } );
			setAttributes( {
				query: {
					...attributes.query,
					// include_posts: [],
					querycontext: {
						...attributes.query.querycontext,
						tax_query: {},
					},
				},
			} );
		}
	}, [ postType ] );

	// Get (key => value) pairs of taxonomy-slugs and their human-readable names.
	const registeredTax = combineTaxKeys( postType );
	// console.log('registeredTax',registeredTax);
	// console.log('registeredTax',Object.keys(registeredTax).length);

	// No taxonomies, no tax-queries.
	// Bail out early.
	if ( Object.keys( registeredTax ).length < 1 ) {
		return;
	}

	return (
		<>
			<h2>{ __( 'Context Tax Query', 'contextual-query-loop' ) }</h2>
			<>
				{ queries.length > 1 && (
					<SelectControl
						label={ __(
							'Query Relationship',
							'contextual-query-loop'
						) }
						value={ relationFromQuery }
						options={ [
							{ label: 'Choose relationship', value: '' },
							{ label: 'AND', value: 'AND' },
							{ label: 'OR', value: 'OR' },
						] }
						onChange={ ( relation ) =>
							setAttributes( {
								query: {
									...attributes.query,
									querycontext: {
										...attributes.query.querycontext,
										tax_query: {
											...attributes.query.querycontext
												.tax_query,
											relation,
										},
									},
								},
							} )
						}
					/>
				) }

				{ queries.length < 1 && (
					<p>
						{ __(
							'Add a tax query to select post tax to query',
							'contextual-query-loop'
						) }
					</p>
				) }

				{ queries.map(
					( {
						id,
						tax_key: taxKey,
						// tax_value: taxValue,
						compare,
					} ) => {
						return (
							<PanelBody key={ id }>
								<ContextTaxControl
									id={ id }
									taxKey={ taxKey }
									// taxValue={ taxValue }
									taxCompare={ compare }
									// registeredTaxKeys={ Object.keys(
									// 	registeredTax
									// ) }
									registeredTaxKeys={ registeredTax }
									queries={ queries }
									attributes={ attributes }
									setAttributes={ setAttributes }
								/>
							</PanelBody>
						);
					}
				) }
				<Button
					isSmall
					variant="primary"
					onClick={ () => {
						const newQueries = [
							...queries,
							{
								id: uuidv4(),
								tax_key: '',
								// tax_value: '',
								tax_compare: '',
							},
						];
						// setAttributes( {
						// 	query: {
						// 		...attributes.query,
						// 		tax_query: {
						// 			...attributes.query.tax_query,
						// 			queries: newQueries,
						// 		},
						// 	},
						// } );
						setAttributes( {
							query: {
								...attributes.query,
								querycontext: {
									...attributes.query.querycontext,
									tax_query: {
										...attributes.query.querycontext
											.tax_query,
										queries: newQueries,
									},
								},
							},
						} );
					} }
				>
					{ __(
						'Add contextual tax query',
						'contextual-query-loop'
					) }
				</Button>
			</>
		</>
	);
};
