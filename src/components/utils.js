/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Hook that returns the taxonomies associated with a specific post type.
 *
 * @source https://github.com/WordPress/gutenberg/blob/6108134aae75d1bd4826256490c609cb29044cd8/packages/block-library/src/query/utils.js#L129C1-L152C3
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
export const useTaxonomies = ( postType ) => {
	const taxonomies = useSelect(
		( select ) => {
			const { getTaxonomies } = select( coreStore );
			return getTaxonomies( {
				type: postType,
				per_page: -1,
			} );
		},
		[ postType ]
	);
	return useMemo( () => {
		return taxonomies?.filter(
			( { visibility } ) => !! visibility?.publicly_queryable
		);
	}, [ taxonomies ] );
};
