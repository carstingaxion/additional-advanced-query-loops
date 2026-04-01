/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * A component that lets you choose if the currently viewed (contextualised) post should be be excluded from the query.
 *
 * @return {Element} ContextExcludeControls
 */
export const ContextExcludeControls = ( { attributes, setAttributes } ) => {
	const {
		query: {
			querycontext: { exclude_current: excludeCurrent } = {},
		} = {},
	} = attributes;

	return (
		<>
			<h2> { __( 'Exclude Post', 'contextual-query-loop' ) }</h2>
			<ToggleControl
				label={ __( 'Exclude Contextual Post', 'contextual-query-loop' ) }
				checked={ !! excludeCurrent }
				onChange={ () => {
					if ( attributes.query.querycontext && attributes.query.querycontext.exclude_current ) {
						delete attributes.query.querycontext.exclude_current;
			
						setAttributes( {
							query: {
								...attributes.query,
								querycontext: { ...attributes.query.querycontext }
							}
						} );
						return;
					}
					setAttributes( {
						query: {
							...attributes.query,
							querycontext: {
								...attributes.query.querycontext,
								exclude_current: 1,
							}
						},
					} );
				} }
			/>
		</>
	);
};
