/**
 * WordPress dependencies
 */
import { SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
// import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';

/**
 * ContextControls component
 *
 * @param {*} param0
 * @return {Element} ContextAuthorControls
 */
export const ContextAuthorControls = ( {
	attributes,
	setAttributes,
	context,
} ) => {
	const { query } = attributes;
	const { query: { postType, querycontext } = {} } = attributes;

	const onContextualAuthorChange = ( value ) => {
		const currentQueryContext = attributes.query?.querycontext || {};
		const newQueryContext = { ...currentQueryContext };

		if ( newQueryContext.author && value === 1 ) {
			delete newQueryContext.author;
		} else {
			newQueryContext.author = value;
			delete newQueryContext.user;
		}

		setAttributes( {
			query: {
				...attributes.query,
				querycontext: newQueryContext,
			},
		} );
	};
	const onContextualUserChange = () => {
		const currentQueryContext = attributes.query?.querycontext || {};
		const newQueryContext = { ...currentQueryContext };

		if ( newQueryContext.user ) {
			delete newQueryContext.user;
		} else {
			delete newQueryContext.author;
			newQueryContext.user = 1;
		}

		setAttributes( {
			query: {
				...attributes.query,
				querycontext: newQueryContext,
			},
		} );
	};

	const postTypeSupportsAuthor = useSelect( ( select ) =>
		postType
			? !! select( coreStore ).getPostType( postType )?.supports.author
			: false
	);

	// The queried post type has no support for the author.
	// Bail out early.
	if ( ! postTypeSupportsAuthor ) {
		return;
	}

	// console.log(querycontext);
	// if ( ! querycontext ) {
	// 	return <div>{ __( 'Loading…undefined', 'contextual-query-loop' ) }</div>;
	// }
	return (
		<>
			<h2> { __( 'Contextual Author', 'contextual-query-loop' ) }</h2>
			<ToggleControl
				label={ __( 'Contextual Author', 'contextual-query-loop' ) }
				help="Include posts by the same author as the context post."
				checked={ !! querycontext?.author }
				onChange={ () => onContextualAuthorChange( 1 ) }
				disabled={ !! querycontext?.user }
			/>
			{ /* 
				Exclude Posts Belonging to an Author

				Display all posts except those from an author(singular) by prefixing its id with a ‘-‘ (minus) sign:

				@see https://developer.wordpress.org/reference/classes/wp_query/#author-parameters
			*/ }
			<ToggleControl
				label={ __(
					'Exclude contextual Author',
					'contextual-query-loop'
				) }
				help="Include posts by different authors as author of the context post."
				checked={ querycontext?.author === -1 }
				onChange={ () => onContextualAuthorChange( -1 ) }
				disabled={ !! querycontext?.user }
			/>
			<ToggleControl
				label={ __( 'Contextual User', 'contextual-query-loop' ) }
				help="Include posts by the currently logged-in user."
				checked={ !! querycontext?.user }
				onChange={ onContextualUserChange }
			/>
		</>
	);
};
