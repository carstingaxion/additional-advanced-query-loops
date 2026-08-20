/**
 * WordPress dependencies
 */
import {
	SelectControl,
	Button,
	FormTokenField,
	BaseControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Allowed 'operator's for a (php) taxonomy Query.
 *
 * operator (string) – Operator to test.
 * Possible values are ‘IN’, ‘NOT IN’, ‘AND’, ‘EXISTS’ and ‘NOT EXISTS’.
 *
 * Default value is ‘IN’.
 *
 * @see https://developer.wordpress.org/reference/classes/wp_query/#taxonomy-parameters
 */
const compareTaxOptions = [ 'IN', 'NOT IN', 'AND', 'EXISTS', 'NOT EXISTS' ];

export const ContextTaxControl = ( {
	registeredTaxKeys,
	id,
	queries,
	attributes,
	setAttributes,
} ) => {
	const activeQuery = queries.find( ( query ) => query.id === id );

	/**
	 * Update a query param.
	 *
	 * @param {*} queries
	 * @param {*} queryId
	 * @param {*} item
	 * @param {*} value
	 * @return
	 */
	const updateQueryParam = ( queries, queryId, item, value ) => {
		return queries.map( ( query ) => {
			if ( query.id === queryId ) {
				return {
					...query,
					[ item ]: value,
				};
			}
			return query;
		} );
	};

	// Get taxonomy slug by human-readable name of the taxonomy.
	const getSlugByName = ( newTaxName ) => {
		return Object.keys( registeredTaxKeys ).find(
			( key ) => registeredTaxKeys[ key ] === newTaxName
		);
	};
	// Get list of human-readable names of all taxonomies.
	const registeredTaxNames = Object.values( registeredTaxKeys );

	return (
		<>
			<BaseControl
				help={ __(
					'Start typing to search for a taxonomy.',
					'contextual-query-loop'
				) }
			>
				<FormTokenField
					label={ __( 'Tax Key', 'contextual-query-loop' ) }
					value={
						activeQuery?.tax_key?.length
							? [ activeQuery.tax_key ]
							: []
					}
					__experimentalShowHowTo={ false }
					suggestions={ registeredTaxNames }
					maxLength={ 1 }
					onChange={ ( newTax ) => {
						const tax_slug = getSlugByName( newTax[ 0 ] );
						setAttributes( {
							query: {
								...attributes.query,
								querycontext: {
									...attributes.query.querycontext,
									tax_query: {
										...attributes.query.querycontext
											.tax_query,
										queries: updateQueryParam(
											queries,
											id,
											'tax_key',
											tax_slug
										),
									},
								},
							},
						} );
					} }
				/>
			</BaseControl>

			<SelectControl
				label={ __( 'Tax Operator', 'contextual-query-loop' ) }
				value={ activeQuery.tax_compare }
				options={ [
					...compareTaxOptions.map( ( operator ) => {
						return { label: operator, value: operator };
					} ),
				] }
				onChange={ ( newCompare ) => {
					setAttributes( {
						query: {
							...attributes.query,
							querycontext: {
								...attributes.query.querycontext,
								tax_query: {
									...attributes.query.querycontext.tax_query,
									queries: updateQueryParam(
										queries,
										id,
										'tax_compare',
										newCompare
									),
								},
							},
						},
					} );
				} }
			/>
			<Button
				isSmall
				variant="secondary"
				isDestructive
				onClick={ () => {
					const updatedQueries = queries.filter(
						( query ) => query.id !== id
					);
					setAttributes( {
						query: {
							...attributes.query,
							querycontext: {
								...attributes.query.querycontext,
								tax_query: {
									...attributes.query.querycontext.tax_query,
									queries: updatedQueries,
								},
							},
						},
					} );
				} }
			>
				{ __( 'Remove contextual tax query', 'contextual-query-loop' ) }
			</Button>
		</>
	);
};
