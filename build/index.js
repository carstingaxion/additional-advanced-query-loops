/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/context-author-controls.js"
/*!***************************************************!*\
  !*** ./src/components/context-author-controls.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextAuthorControls: () => (/* binding */ ContextAuthorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */


/**
 * WordPress dependencies
 */

// import { useMemo } from '@wordpress/element';


/**
 * ContextControls component
 *
 * @param {*} param0
 * @return {Element} ContextAuthorControls
 */
const ContextAuthorControls = ({
  attributes,
  setAttributes,
  context
}) => {
  const {
    query
  } = attributes;
  const {
    query: {
      postType,
      querycontext
    } = {}
  } = attributes;
  const onContextualAuthorChange = value => {
    const currentQueryContext = attributes.query?.querycontext || {};
    const newQueryContext = {
      ...currentQueryContext
    };
    if (newQueryContext.author && value === 1) {
      delete newQueryContext.author;
    } else {
      newQueryContext.author = value;
      delete newQueryContext.user;
    }
    setAttributes({
      query: {
        ...attributes.query,
        querycontext: newQueryContext
      }
    });
  };
  const onContextualUserChange = () => {
    const currentQueryContext = attributes.query?.querycontext || {};
    const newQueryContext = {
      ...currentQueryContext
    };
    if (newQueryContext.user) {
      delete newQueryContext.user;
    } else {
      delete newQueryContext.author;
      newQueryContext.user = 1;
    }
    setAttributes({
      query: {
        ...attributes.query,
        querycontext: newQueryContext
      }
    });
  };
  const postTypeSupportsAuthor = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => postType ? !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getPostType(postType)?.supports.author : false);

  // The queried post type has no support for the author.
  // Bail out early.
  if (!postTypeSupportsAuthor) {
    return;
  }

  // console.log(querycontext);
  // if ( ! querycontext ) {
  // 	return <div>{ __( 'Loading…undefined', 'contextual-query-loop' ) }</div>;
  // }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contextual Author', 'contextual-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contextual Author', 'contextual-query-loop'),
    help: "Include posts by the same author as the context post.",
    checked: !!querycontext?.author,
    onChange: () => onContextualAuthorChange(1),
    disabled: !!querycontext?.user
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclude contextual Author', 'contextual-query-loop'),
    help: "Include posts by different authors as author of the context post.",
    checked: querycontext?.author === -1,
    onChange: () => onContextualAuthorChange(-1),
    disabled: !!querycontext?.user
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contextual User', 'contextual-query-loop'),
    help: "Include posts by the currently logged-in user.",
    checked: !!querycontext?.user,
    onChange: onContextualUserChange
  }));
};

/***/ },

/***/ "./src/components/context-date-query-controls.js"
/*!*******************************************************!*\
  !*** ./src/components/context-date-query-controls.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextDateQueryControls: () => (/* binding */ ContextDateQueryControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



const ContextDateQueryControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      querycontext: {
        date_query: {
          relation: relationFromQuery = '',
          date_primary: datePrimary = '',
          date_primary_selected: selectedPrimary = null,
          modifier_primary: modifierPrimary = '',
          date_secondary: dateSecondary = new Date(),
          inclusive: isInclusive = false
        } = {}
      } = {}
    } = {}
  } = attributes;
  if (!attributes.query || !attributes.query?.querycontext) {
    return;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Context Date Query', 'contextual-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date Relationship', 'contextual-query-loop'),
    value: relationFromQuery,
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Exact',
      value: 'exact'
    }, {
      label: 'Before',
      value: 'before'
    }, {
      label: 'After',
      value: 'after'
    }
    // { label: 'Between', value: 'between' }, // Temp. disabled.
    ],
    onChange: relation => {
      if ('' === relation) {
        delete attributes.query.querycontext.date_query;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: {
              ...attributes.query.querycontext
            }
          }
        });
        return;
      }
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              relation
            }
          }
        }
      });
    }
  }), relationFromQuery !== '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start date', 'contextual-query-loop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Every date relates to its contextual post. Except "today", which relates to context of the viewer (human or cache-engine ;).', 'contextual-query-loop'),
    selected: datePrimary,
    options: [{
      label: 'today',
      value: 'today'
    }, {
      label: 'published day',
      value: 'post_day'
    }, {
      label: 'published date',
      value: 'post_date'
    }, {
      label: 'published month',
      value: 'post_month'
    }, {
      label: 'published year',
      value: 'post_year'
    }, {
      label: 'last modified date',
      value: 'modified_date'
    }, {
      label: 'last modified month',
      value: 'modified_month'
    }, {
      label: 'last modified year',
      value: 'modified_year'
    }, {
      label: 'select a Date',
      value: 'selected_date'
    }],
    onChange: newDate => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              date_primary: newDate
            }
          }
        }
      });
    }
  }), datePrimary === 'selected_date' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
    currentDate: selectedPrimary,
    startOfWeek: 1,
    onChange: newDate => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              date_primary_selected: newDate
            }
          }
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    isResetValueOnUnitChange: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Date modifier', 'contextual-query-loop'),
    labelPosition: "side" // The position of the label (top, side, bottom, or edge).
    ,
    help: "Modify the date to be earlier (-) or later (+) to the contextualised date selected above.",
    onChange: newModifier => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              modifier_primary: newModifier
            }
          }
        }
      });
    }
    //   onDrag={function noRefCheck(){}}
    //   onDragEnd={function noRefCheck(){}}
    //   onDragStart={function noRefCheck(){}}
    //   onUnitChange={function noRefCheck(){}}
    //   onValidate={function noRefCheck(){}}
    //   size="small" // Adjusts the size of the input. Sizes include: default, small
    ,
    units: [{
      default: -1,
      label: 'Day',
      value: 'day'
    }, {
      default: -1,
      label: 'Week',
      value: 'week'
    }, {
      default: -1,
      label: 'Month',
      value: 'month'
    }, {
      default: -1,
      label: 'Year',
      value: 'year'
    }],
    value: modifierPrimary
  }), relationFromQuery === 'between' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End date', 'contextual-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
    currentDate: dateSecondary,
    onChange: newDate => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              date_secondary: newDate
            }
          }
        }
      });
    }
  })), relationFromQuery === 'between' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
    // 'Include selected date(s)',
    'Include selected date(s)', 'contextual-query-loop'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(
    // 'Should the selected date(s) be included in your query?',
    'Should the selected date(s) be included in your query?', 'contextual-query-loop'),
    checked: isInclusive,
    onChange: newIsInclusive => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            date_query: {
              ...attributes.query.querycontext.date_query,
              inclusive: newIsInclusive
            }
          }
        }
      });
    }
  }))));
};

/***/ },

/***/ "./src/components/context-exclude-controls.js"
/*!****************************************************!*\
  !*** ./src/components/context-exclude-controls.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextExcludeControls: () => (/* binding */ ContextExcludeControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



/**
 * A component that lets you choose if the currently viewed (contextualised) post should be be excluded from the query.
 *
 * @return {Element} ContextExcludeControls
 */
const ContextExcludeControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      querycontext: {
        exclude_current: excludeCurrent
      } = {}
    } = {}
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclude Post', 'contextual-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Exclude Contextual Post', 'contextual-query-loop'),
    checked: !!excludeCurrent,
    onChange: () => {
      if (attributes.query.querycontext && attributes.query.querycontext.exclude_current) {
        delete attributes.query.querycontext.exclude_current;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: {
              ...attributes.query.querycontext
            }
          }
        });
        return;
      }
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            exclude_current: 1
          }
        }
      });
    }
  }));
};

/***/ },

/***/ "./src/components/context-tax-control.js"
/*!***********************************************!*\
  !*** ./src/components/context-tax-control.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextTaxControl: () => (/* binding */ ContextTaxControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */



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
const compareTaxOptions = ['IN', 'NOT IN', 'AND', 'EXISTS', 'NOT EXISTS'];
const ContextTaxControl = ({
  registeredTaxKeys,
  id,
  queries,
  attributes,
  setAttributes
}) => {
  const activeQuery = queries.find(query => query.id === id);

  /**
   * Update a query param.
   *
   * @param {*} queries
   * @param {*} queryId
   * @param {*} item
   * @param {*} value
   * @returns
   */
  const updateQueryParam = (queries, queryId, item, value) => {
    return queries.map(query => {
      if (query.id === queryId) {
        return {
          ...query,
          [item]: value
        };
      }
      return query;
    });
  };

  // Get taxonomy slug by human-readable name of the taxonomy.
  const getSlugByName = newTaxName => {
    return Object.keys(registeredTaxKeys).find(key => registeredTaxKeys[key] === newTaxName);
  };
  // Get list of human-readable names of all taxonomies.
  const registeredTaxNames = Object.values(registeredTaxKeys);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start typing to search for a taxonomy.', 'contextual-query-loop')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax Key', 'contextual-query-loop'),
    value: activeQuery?.tax_key?.length ? [activeQuery.tax_key] : [],
    __experimentalShowHowTo: false,
    suggestions: registeredTaxNames,
    maxLength: 1,
    onChange: newTax => {
      var tax_slug = getSlugByName(newTax[0]);
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            tax_query: {
              ...attributes.query.querycontext.tax_query,
              queries: updateQueryParam(queries, id, 'tax_key', tax_slug)
            }
          }
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tax Operator', 'contextual-query-loop'),
    value: activeQuery.tax_compare,
    options: [...compareTaxOptions.map(operator => {
      return {
        label: operator,
        value: operator
      };
    })],
    onChange: newCompare => {
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            tax_query: {
              ...attributes.query.querycontext.tax_query,
              queries: updateQueryParam(queries, id, 'tax_compare', newCompare)
            }
          }
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSmall: true,
    variant: "secondary",
    isDestructive: true,
    onClick: () => {
      const updatedQueries = queries.filter(query => query.id !== id);
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            tax_query: {
              ...attributes.query.querycontext.tax_query,
              queries: updatedQueries
            }
          }
        }
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove contextual tax query', 'contextual-query-loop')));
};

/***/ },

/***/ "./src/components/context-tax-query-controls.js"
/*!******************************************************!*\
  !*** ./src/components/context-tax-query-controls.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextTaxQueryControls: () => (/* binding */ ContextTaxQueryControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_tax_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-tax-control */ "./src/components/context-tax-control.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/components/utils.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Converts the tax keys from the all sources into a single array.
 *
 * @param {Array} postType
 * @return {Array} tax keys
 */
const combineTaxKeys = postType => {
  // DEMO
  const taxonomies = {
    post_tag: 'Post tags',
    category: 'Cats'
  };
  // console.log('var 1',taxonomies);

  // Get registered taxonmies of queried post_type.
  const taxObjs = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useTaxonomies)(postType);
  // console.log('taxObjs', taxObjs);
  // const taxList = taxObjs.map

  let taxonomies2 = {};
  if (taxObjs && taxObjs.length > 0) {
    // // taxObjs.keys().forEach( taxonomy => {
    // [...taxObjs.keys()].forEach( taxonomy => {

    // 	console.log('each tax: ', taxonomy );

    // 	var key = taxonomy.slug;
    // 	taxonomies2[key] = taxonomy.name;
    // });
    taxonomies2 = taxObjs.reduce((taxonomy, {
      name,
      slug
    }) => {
      taxonomy[slug] = name;
      return taxonomy;
    }, {});

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
    ...taxonomies2
  };
};

// A component to render a select control for the post tax query.
const ContextTaxQueryControls = ({
  attributes,
  setAttributes
}) => {
  const {
    query: {
      postType,
      querycontext: {
        tax_query: {
          relation: relationFromQuery = '',
          queries = []
        } = {}
      } = {}
    } = {}
  } = attributes;

  // const { records } = useEntityRecords( 'postType', postType, {
  // 	per_page: 1,
  // } );

  const [selectedPostType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(postType);

  // TODO // Duplicate func. for tax-terms
  // const [ selectedPostType ] = useState( postType );

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // If the post type changes, reset the tax query.
    if (postType !== selectedPostType) {
      // setAttributes( {
      // 	query: {
      // 		...attributes.query,
      // 		include_posts: [],
      // 		tax_query: {},
      // 	},
      // } );
      setAttributes({
        query: {
          ...attributes.query,
          // include_posts: [],
          querycontext: {
            ...attributes.query.querycontext,
            tax_query: {}
          }
        }
      });
    }
  }, [postType]);

  // Get (key => value) pairs of taxonomy-slugs and their human-readable names.
  const registeredTax = combineTaxKeys(postType);
  // console.log('registeredTax',registeredTax);
  // console.log('registeredTax',Object.keys(registeredTax).length);

  // No taxonomies, no tax-queries.
  // Bail out early.
  if (Object.keys(registeredTax).length < 1) {
    return;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Context Tax Query', 'contextual-query-loop')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, queries.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Query Relationship', 'contextual-query-loop'),
    value: relationFromQuery,
    options: [{
      label: 'Choose relationship',
      value: ''
    }, {
      label: 'AND',
      value: 'AND'
    }, {
      label: 'OR',
      value: 'OR'
    }],
    onChange: relation => setAttributes({
      query: {
        ...attributes.query,
        querycontext: {
          ...attributes.query.querycontext,
          tax_query: {
            ...attributes.query.querycontext.tax_query,
            relation
          }
        }
      }
    })
  }), queries.length < 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add a tax query to select post tax to query', 'contextual-query-loop')), queries.map(({
    id,
    tax_key: taxKey,
    // tax_value: taxValue,
    compare
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      key: id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_tax_control__WEBPACK_IMPORTED_MODULE_5__.ContextTaxControl, {
      id: id,
      taxKey: taxKey
      // taxValue={ taxValue }
      ,
      taxCompare: compare
      // registeredTaxKeys={ Object.keys(
      // 	registeredTax
      // ) }
      ,
      registeredTaxKeys: registeredTax,
      queries: queries,
      attributes: attributes,
      setAttributes: setAttributes
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isSmall: true,
    variant: "primary",
    onClick: () => {
      const newQueries = [...queries, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        tax_key: '',
        // tax_value: '',
        tax_compare: ''
      }];
      // setAttributes( {
      // 	query: {
      // 		...attributes.query,
      // 		tax_query: {
      // 			...attributes.query.tax_query,
      // 			queries: newQueries,
      // 		},
      // 	},
      // } );
      setAttributes({
        query: {
          ...attributes.query,
          querycontext: {
            ...attributes.query.querycontext,
            tax_query: {
              ...attributes.query.querycontext.tax_query,
              queries: newQueries
            }
          }
        }
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add contextual tax query', 'contextual-query-loop'))));
};

/***/ },

/***/ "./src/components/utils.js"
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTaxonomies: () => (/* binding */ useTaxonomies)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




/**
 * Hook that returns the taxonomies associated with a specific post type.
 * 
 * @source https://github.com/WordPress/gutenberg/blob/6108134aae75d1bd4826256490c609cb29044cd8/packages/block-library/src/query/utils.js#L129C1-L152C3
 *
 * @param {string} postType The post type from which to retrieve the associated taxonomies.
 * @return {Object[]} An array of the associated taxonomies.
 */
const useTaxonomies = postType => {
  const taxonomies = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getTaxonomies
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    return getTaxonomies({
      type: postType,
      per_page: -1
    });
  }, [postType]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return taxonomies?.filter(({
      visibility
    }) => !!visibility?.publicly_queryable);
  }, [taxonomies]);
};

/***/ },

/***/ "./src/slots/cql-controls-inherited-query.js"
/*!***************************************************!*\
  !*** ./src/slots/cql-controls-inherited-query.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Create our Slot and Fill components
 */
const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('CQLControlsInheritedQuery');
const CQLControlsInheritedQuery = ({
  children
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, children);
CQLControlsInheritedQuery.Slot = Slot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CQLControlsInheritedQuery);

/***/ },

/***/ "./src/slots/cql-controls.js"
/*!***********************************!*\
  !*** ./src/slots/cql-controls.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Create our Slot and Fill components
 */
const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('CQLControls');
const CQLControls = ({
  children
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, children);
CQLControls.Slot = ({
  fillProps
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
  fillProps: fillProps
}, fills => {
  return fills.length ? fills : null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CQLControls);

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/native.js"
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/regex.js"
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/rng.js"
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js"
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/v4.js"
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ },

/***/ "./node_modules/uuid/dist/esm-browser/validate.js"
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/core-data"
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["coreData"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slots_cql_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slots/cql-controls */ "./src/slots/cql-controls.js");
/* harmony import */ var _slots_cql_controls_inherited_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slots/cql-controls-inherited-query */ "./src/slots/cql-controls-inherited-query.js");
/* harmony import */ var _components_context_author_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/context-author-controls */ "./src/components/context-author-controls.js");
/* harmony import */ var _components_context_date_query_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/context-date-query-controls */ "./src/components/context-date-query-controls.js");
/* harmony import */ var _components_context_exclude_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/context-exclude-controls */ "./src/components/context-exclude-controls.js");
/* harmony import */ var _components_context_tax_query_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/context-tax-query-controls */ "./src/components/context-tax-query-controls.js");

/**
 * WordPress dependencies
 */




/**
 *  Internal dependencies
 */
// import { CQL } from '.';



// import { PostOrderControls } from './components/post-order-controls';






/**
 * Custom controls
 *
 * @param {*} BlockEdit
 * @return {Element} BlockEdit instance
 */
const withContextualQueryControls = BlockEdit => props => {
  // Only apply to Query Loop blocks
  if (props.name !== 'core/query') {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    });
  }
  const {
    attributes,
    setAttributes
  } = props;
  const resetAll = () => {
    // delete attributes.query.querycontext;
    setAttributes({
      query: {
        ...attributes.query,
        querycontext: {} // always defined
      }
    });
  };

  // If the inherit prop is false, add all the controls.
  if (attributes.query?.inherit === false) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanel
    // { ...props }
    , {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Contextual Filters', 'default'),
      resetAll: resetAll
      // `key` property here is used as a hack to force `ToolsPanel` to re-render
      // See https://github.com/WordPress/gutenberg/pull/38262/files#r793422991
      // key="true"
      // key={
      // 	isFirstToolsPanelItemShownByDefault
      // 		? 'true'
      // 		: 'false'
      // }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!attributes.query.querycontext?.exclude_current,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Exclude current post', 'default'),
      onDeselect: () => {
        const newQueryContext = {
          ...attributes.query.querycontext
        };
        delete newQueryContext.exclude_current;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: newQueryContext
          }
        });
      },
      isShownByDefault: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_context_exclude_controls__WEBPACK_IMPORTED_MODULE_9__.ContextExcludeControls, {
      ...props
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!attributes.query.querycontext?.date_query,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Dates', 'default'),
      onDeselect: () => {
        const newQueryContext = {
          ...attributes.query.querycontext
        };
        delete newQueryContext.date_query;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: newQueryContext
          }
        });
      },
      isShownByDefault: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_context_date_query_controls__WEBPACK_IMPORTED_MODULE_8__.ContextDateQueryControls, {
      ...props
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!attributes.query.querycontext?.tax_query,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Taxonomies', 'default'),
      onDeselect: () => {
        const newQueryContext = {
          ...attributes.query.querycontext
        };
        delete newQueryContext.tax_query;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: newQueryContext
          }
        });
      },
      isShownByDefault: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_context_tax_query_controls__WEBPACK_IMPORTED_MODULE_10__.ContextTaxQueryControls, {
      ...props
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!attributes.query.querycontext?.author || !!attributes.query.querycontext?.user,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Authors', 'default'),
      onDeselect: () => {
        const newQueryContext = {
          ...attributes.query.querycontext
        };
        delete newQueryContext.author;
        delete newQueryContext.user;
        setAttributes({
          query: {
            ...attributes.query,
            querycontext: newQueryContext
          }
        });
      },
      isShownByDefault: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_context_author_controls__WEBPACK_IMPORTED_MODULE_7__.ContextAuthorControls, {
      ...props
    })))));
  }
  // Add no controls if the inherit prop is true.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
    ...props
  });
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/query', withContextualQueryControls, 20);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map