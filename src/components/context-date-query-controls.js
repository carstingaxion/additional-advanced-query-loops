/**
 * WordPress dependencies
 */
import {
	DatePicker,
	SelectControl,
	CheckboxControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	RadioControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

export const ContextDateQueryControls = ( { attributes, setAttributes } ) => {
	const {
		query: {
			querycontext: {
				date_query: {
					relation: relationFromQuery = '',
					date_primary: datePrimary = '',
					date_primary_selected: selectedPrimary = null,
					modifier_primary: modifierPrimary = '',
					date_secondary: dateSecondary = new Date(),
					inclusive: isInclusive = false,
				} = {},
			} = {},
		} = {},
	} = attributes;

	if ( ! attributes.query || ! attributes.query?.querycontext ) {
		return;
	}

	return (
		<>
			<h2>{ __( 'Context Date Query', 'contextual-query-loop' ) }</h2>
			<SelectControl
				label={ __( 'Date Relationship', 'contextual-query-loop' ) }
				value={ relationFromQuery }
				options={ [
					{ label: 'None', value: '' },
					{ label: 'Exact', value: 'exact' },
					{ label: 'Before', value: 'before' },
					{ label: 'After', value: 'after' },
					// { label: 'Between', value: 'between' }, // Temp. disabled.
				] }
				onChange={ ( relation ) => {
					if ( '' === relation ) {
						delete attributes.query.querycontext.date_query;

						setAttributes( {
							query: {
								...attributes.query,
								querycontext: {
									...attributes.query.querycontext,
								},
							},
						} );
						return;
					}

					setAttributes( {
						query: {
							...attributes.query,
							querycontext: {
								...attributes.query.querycontext,
								date_query: {
									...attributes.query.querycontext.date_query,
									relation,
								},
							},
						},
					} );
				} }
			/>

			{ relationFromQuery !== '' && (
				<>
					{ /* { relationFromQuery === 'between' && (
						<h4>{ __( 'Start date', 'contextual-query-loop' ) }</h4>
					) } */ }

					{ /* @see https://wordpress.github.io/gutenberg/?path=/docs/components-radiocontrol--docs */ }
					<RadioControl
						label={ __( 'Start date', 'contextual-query-loop' ) }
						help={ __(
							'Every date relates to its contextual post. Except "today", which relates to context of the viewer (human or cache-engine ;).',
							'contextual-query-loop'
						) }
						selected={ datePrimary }
						options={ [
							{ label: 'today', value: 'today' },
							{ label: 'published day', value: 'post_day' },
							{ label: 'published date', value: 'post_date' },
							{ label: 'published month', value: 'post_month' },
							{ label: 'published year', value: 'post_year' },
							{
								label: 'last modified date',
								value: 'modified_date',
							},
							{
								label: 'last modified month',
								value: 'modified_month',
							},
							{
								label: 'last modified year',
								value: 'modified_year',
							},
							{ label: 'select a Date', value: 'selected_date' },
						] }
						onChange={ ( newDate ) => {
							setAttributes( {
								query: {
									...attributes.query,
									querycontext: {
										...attributes.query.querycontext,
										date_query: {
											...attributes.query.querycontext
												.date_query,
											date_primary: newDate,
										},
									},
								},
							} );
						} }
					/>
					{ datePrimary === 'selected_date' && (
						<div>
							<DatePicker
								currentDate={ selectedPrimary }
								startOfWeek={ 1 }
								onChange={ ( newDate ) => {
									setAttributes( {
										query: {
											...attributes.query,
											querycontext: {
												...attributes.query
													.querycontext,
												date_query: {
													...attributes.query
														.querycontext
														.date_query,
													date_primary_selected:
														newDate,
												},
											},
										},
									} );
								} }
							/>
						</div>
					) }
					{ /* 
					<RadioControl
						label={ __( 'Start date modifier', 'contextual-query-loop' ) }
						//   help=""
						selected={ modifierPrimary }
						options={ [
							{ label: 'No modifier', value: '' },
							{ label: '- 1 day', value: '- 1 day' },
							{ label: '- 1 week', value: '- 1 week' },
							{ label: '- 1 month', value: '- 1 month' },
							{ label: '- 1 year', value: '- 1 year' },
						] }
						onChange={ ( newModifier ) => {
							setAttributes( {
								query: {
									...attributes.query,
									querycontext: {
										...attributes.query.querycontext,
										date_query: {
											...attributes.query.querycontext.date_query,
											modifier_primary: newModifier,
										}
									}
								}
							} );
						} }
					/> */ }

					{ /* 
						https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/unit-control
					*/ }
					<UnitControl
						isResetValueOnUnitChange
						label={ __( 'Date modifier', 'contextual-query-loop' ) }
						labelPosition="side" // The position of the label (top, side, bottom, or edge).
						help="Modify the date to be earlier (-) or later (+) to the contextualised date selected above."
						onChange={ ( newModifier ) => {
							setAttributes( {
								query: {
									...attributes.query,
									querycontext: {
										...attributes.query.querycontext,
										date_query: {
											...attributes.query.querycontext
												.date_query,
											modifier_primary: newModifier,
										},
									},
								},
							} );
						} }
						//   onDrag={function noRefCheck(){}}
						//   onDragEnd={function noRefCheck(){}}
						//   onDragStart={function noRefCheck(){}}
						//   onUnitChange={function noRefCheck(){}}
						//   onValidate={function noRefCheck(){}}
						//   size="small" // Adjusts the size of the input. Sizes include: default, small
						units={ [
							{
								default: -1,
								label: 'Day',
								value: 'day',
							},
							{
								default: -1,
								label: 'Week',
								value: 'week',
							},
							{
								default: -1,
								label: 'Month',
								value: 'month',
							},
							{
								default: -1,
								label: 'Year',
								value: 'year',
							},
						] }
						value={ modifierPrimary }
					/>
					{ /* 
					<DatePicker
						currentDate={ datePrimary }
						onChange={ ( newDate ) => {
							setAttributes( {
								query: {
									...attributes.query,
									querycontext: {
										...attributes.query.querycontext,
										date_query: {
											...attributes.query.querycontext.date_query,
											date_primary: newDate,
										}
									}
								}
							} );
							// setAttributes( {
							// 	query: {
							// 		...attributes.query,
							// 		date_query: {
							// 			...attributes.query.date_query,
							// 			date_primary: newDate,
							// 		},
							// 	},
							// } );
						} }
					/> */ }

					{ relationFromQuery === 'between' && (
						<>
							<h4>
								{ __( 'End date', 'contextual-query-loop' ) }
							</h4>
							<DatePicker
								currentDate={ dateSecondary }
								onChange={ ( newDate ) => {
									setAttributes( {
										query: {
											...attributes.query,
											querycontext: {
												...attributes.query
													.querycontext,
												date_query: {
													...attributes.query
														.querycontext
														.date_query,
													date_secondary: newDate,
												},
											},
										},
									} );
								} }
							/>
						</>
					) }

					{ /* { ( relationFromQuery === 'between' || relationFromQuery === 'before' || relationFromQuery === 'after' )&& ( */ }
					{ relationFromQuery === 'between' && (
						<>
							<br />
							<CheckboxControl
								label={ __(
									// 'Include selected date(s)',
									'Include selected date(s)',
									'contextual-query-loop'
								) }
								help={ __(
									// 'Should the selected date(s) be included in your query?',
									'Should the selected date(s) be included in your query?',
									'contextual-query-loop'
								) }
								checked={ isInclusive }
								onChange={ ( newIsInclusive ) => {
									setAttributes( {
										query: {
											...attributes.query,
											querycontext: {
												...attributes.query
													.querycontext,
												date_query: {
													...attributes.query
														.querycontext
														.date_query,
													inclusive: newIsInclusive,
												},
											},
										},
									} );
								} }
							/>
						</>
					) }
				</>
			) }
		</>
	);
};
