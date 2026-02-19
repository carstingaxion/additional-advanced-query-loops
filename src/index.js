/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody,	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem, } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 *  Internal dependencies
 */
// import { CQL } from '.';
import CQLControls from './slots/cql-controls';
import CQLControlsInheritedQuery from './slots/cql-controls-inherited-query';

import { PostOrderControls } from './components/post-order-controls';

import { ContextAuthorControls } from './components/context-author-controls';
import { ContextDateQueryControls } from './components/context-date-query-controls';
import { ContextExcludeControls } from './components/context-exclude-controls';
import { ContextTaxQueryControls } from './components/context-tax-query-controls';

/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withContextualQueryControls = ( BlockEdit ) => ( props ) => {

	const { attributes, setAttributes } = props;
	const resetAll = ( ) => {
		// delete attributes.query.querycontext;
		setAttributes( {
			query: {
				...attributes.query,
				// querycontext: undefined,
				querycontext: {}, // ✅ always defined
			}
		} );
	};

	// If the inherit prop is false, add all the controls.
	// if ( attributes.query.inherit === false || ! attributes.query.inherit ) {
	if ( attributes.query?.inherit === false ) {
		return (
			<>
				<InspectorControls>
					<ToolsPanel
						// { ...props }
						label="Contextual Filters"
						resetAll={ resetAll }
						// `key` property here is used as a hack to force `ToolsPanel` to re-render
						// See https://github.com/WordPress/gutenberg/pull/38262/files#r793422991
						// key="true"
						// key={
						// 	isFirstToolsPanelItemShownByDefault
						// 		? 'true'
						// 		: 'false'
						// }
					>
						<ToolsPanelItem
							hasValue={() => !!attributes.query.querycontext?.exclude_current}
							label="ContextExclude"
							// onDeselect={() => delete attributes.query.querycontext.exclude_current}
							onDeselect={() => {
								const newQueryContext = {
									...attributes.query.querycontext,
								};
								delete newQueryContext.exclude_current;

								setAttributes({
									query: {
										...attributes.query,
										querycontext: newQueryContext,
									},
								});
							}}
							isShownByDefault={false}
						>
							<ContextExcludeControls { ...props } />
						</ToolsPanelItem>

						<ToolsPanelItem
							hasValue={() => !!attributes.query.querycontext?.date_query}
							label="ContextDateQuery"
							// onDeselect={() => delete attributes.query.querycontext.date_query}
							onDeselect={() => {
								const newQueryContext = {
									...attributes.query.querycontext,
								};
								delete newQueryContext.date_query;

								setAttributes({
									query: {
										...attributes.query,
										querycontext: newQueryContext,
									},
								});
							}}
							isShownByDefault={false}
						>
							<ContextDateQueryControls { ...props } />
						</ToolsPanelItem>

						<ToolsPanelItem
							hasValue={() => !!attributes.query.querycontext?.tax_query}
							label="ContextTaxQuery"
							// onDeselect={() => delete attributes.query.querycontext.tax_query}
							onDeselect={() => {
								const newQueryContext = {
									...attributes.query.querycontext,
								};
								delete newQueryContext.tax_query;

								setAttributes({
									query: {
										...attributes.query,
										querycontext: newQueryContext,
									},
								});
							}}
							isShownByDefault={false}
						>
							<ContextTaxQueryControls { ...props } />
						</ToolsPanelItem>

						<ToolsPanelItem
							hasValue={() => ( !!attributes.query.querycontext?.author || !!attributes.query.querycontext?.user) }
							label="ContextAuthor"
							// onDeselect={() =>  {
								// delete attributes.query.querycontext.author;
								// delete attributes.query.querycontext.user;
							// }}
							onDeselect={() => {
								const newQueryContext = {
									...attributes.query.querycontext,
								};
								delete newQueryContext.author;
								delete newQueryContext.user;

								setAttributes({
									query: {
										...attributes.query,
										querycontext: newQueryContext,
									},
								});
							}}
							isShownByDefault={false}
						>
							<ContextAuthorControls { ...props } />
						</ToolsPanelItem>



						</ToolsPanel>
{/* 
					<PanelBody
						title={ __(
							'Contextual Settings',
							'contextual-query-loop'
						) }
					>
						<ContextExcludeControls { ...props } />
						<ContextDateQueryControls { ...props } />
						<ContextTaxQueryControls { ...props } />
						<ContextAuthorControls { ...props } />

						<PostOrderControls { ...props } />

						<CQLControls.Slot fillProps={ { ...props } } />
					</PanelBody>
*/}
				</InspectorControls>
				<BlockEdit { ...props } />
			</>
		);
	}
	// Add some controls if the inherit prop is true.
	return (
		<>
			<BlockEdit { ...props } />
			<InspectorControls>
				<PanelBody
					title={ __(
						'Contextual Settings',
						'contextual-query-loop'
					) }
				>
					<PostOrderControls { ...props } />
					<CQLControlsInheritedQuery.Slot
						fillProps={ { ...props } }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

addFilter( 'editor.BlockEdit', 'core/query', withContextualQueryControls, 20);
