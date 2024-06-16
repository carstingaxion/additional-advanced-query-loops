var gpql;(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{GPQL:()=>w,GPQLControls:()=>c,GPQLControlsInheritedQuery:()=>d});const r=window.wp.blocks,o=window.wp.i18n,n=window.React,a=window.wp.hooks,s=window.wp.blockEditor,l=window.wp.components,{Fill:u,Slot:i}=(0,l.createSlotFill)("GPQLControls"),p=({children:e})=>(0,n.createElement)(u,null,e);p.Slot=({fillProps:e})=>(0,n.createElement)(i,{fillProps:e},(e=>e.length?e:null));const c=p,{Fill:g,Slot:y}=(0,l.createSlotFill)("GPQLControlsInheritedQuery"),m=({children:e})=>(0,n.createElement)(g,null,e);m.Slot=y;const d=m,h=({attributes:e,setAttributes:t})=>{const{query:{perPage:r,offset:a=0}={}}=e;return(0,n.createElement)(l.RangeControl,{label:(0,o.__)("Events Per Page","gatherpress-query-loop"),min:1,max:50,onChange:r=>{t({query:{...e.query,perPage:r,offset:a}})},value:r})},_=window.wp.data,q=({attributes:e,setAttributes:t})=>{const{query:{exclude_current:r}={}}=e,a=(0,_.useSelect)((e=>e("core/editor").getCurrentPost()),[]);return a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.ToggleControl,{label:(0,o.__)("Exclude Current Event","gatherpress-query-loop"),checked:!!r,onChange:r=>{t({query:{...e.query,exclude_current:r?a.id:0}})}})):(0,n.createElement)("div",null,(0,o.__)("Loading…","gatherpress-query-loop"))},E=({attributes:e,setAttributes:t})=>{const{query:{gatherpress_events_query:r="upcoming"}={}}=e;return(0,_.useSelect)((e=>e("core/editor").getCurrentPost()),[])?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.ToggleControl,{label:(0,o.__)("Upcoming or past events.","gatherpress-query-loop"),help:(0,o.sprintf)(/* translators: %s: 'upcoming' or 'past' */ /* translators: %s: 'upcoming' or 'past' */
(0,o._x)("Currently shows %s events.","'upcoming' or 'past'","gatherpress-query-loop"),r),checked:"past"===r,onChange:r=>{t({query:{...e.query,gatherpress_events_query:r?"past":"upcoming"}})}})):(0,n.createElement)("div",null,(0,o.__)("Loading…","gatherpress-query-loop"))},v=({attributes:e,setAttributes:t})=>{const{query:{offset:r=0}={}}=e;return(0,n.createElement)(l.RangeControl,{label:(0,o.__)("Event Offset","gatherpress-query-loop"),min:0,max:50,value:r,onChange:r=>{t({query:{...e.query,offset:r}})}})},b=({attributes:e,setAttributes:t})=>{const{query:{order:r,orderBy:a}={}}=e,s="asc"===r?(0,o.__)("Ascending Order","gatherpress-query-loop"):(0,o.__)("Descending Order","gatherpress-query-loop");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.SelectControl,{label:(0,o.__)("Order Events By","gatherpress-query-loop"),value:a,help:"meta_value"===a||"meta_value_num"===a?(0,o.__)("Meta Value and Meta Value Num require that Meta Key is set in the Meta Query section.","gatherpress-query-loop"):"",options:[{label:(0,o.__)("Event Date","gatherpress-query-loop"),value:"datetime"},{label:(0,o.__)("Last Modified Date","gatherpress-query-loop"),value:"modified"},{label:(0,o.__)("Title","gatherpress-query-loop"),value:"title"},{label:(0,o.__)("Random","gatherpress-query-loop"),value:"rand"},{label:(0,o.__)("Post ID","gatherpress-query-loop"),value:"id"}],onChange:r=>{t({query:{...e.query,orderBy:r}})}}),(0,n.createElement)(l.ToggleControl,{label:s,checked:"asc"===r,onChange:()=>{t({query:{...e.query,order:"asc"===r?"desc":"asc"}})}}))};(0,a.addFilter)("editor.BlockEdit","core/query",(e=>t=>{if(!(e=>{const{attributes:{namespace:t}}=e;return t&&t===w})(t))return(0,n.createElement)(e,{...t});const r=function(e=null){return"gatherpress_event"===(e||(0,_.select)("core/editor").getCurrentPostType())}(),{attributes:a}=t;return!1===a.query.inherit?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,{...t}),(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:(0,o.__)("Event Query Settings","gatherpress-query-loop")},(0,n.createElement)(E,{...t}),r&&(0,n.createElement)(q,{...t}),(0,n.createElement)(h,{...t}),(0,n.createElement)(v,{...t}),(0,n.createElement)(b,{...t}),(0,n.createElement)(c.Slot,{fillProps:{...t}})))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(e,{...t}),(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:(0,o.__)("GatherPress Query Settings","gatherpress-query-loop")},(0,n.createElement)(b,{...t}),(0,n.createElement)(d.Slot,{fillProps:{...t}}))))}));const f={name:"core/group",attributes:{className:"gp-venue-v3",layout:{type:"flex",orientation:"nonsense"}},innerBlocks:[["core/pattern",{slug:"gatherpress/venue-details"}]]},w="gatherpress-query-loop",C={namespace:w,query:{perPage:3,pages:0,offset:0,postType:"gatherpress_event",gatherpress_events_query:"upcoming",order:"asc",orderBy:"date",inherit:!1}},P={category:"gatherpress",keywords:[(0,o.__)("Events","gatherpress"),(0,o.__)("Dates","gatherpress")],icon:function(e){const t="string"==typeof e?20:24,r=(0,o.sprintf)("-$%dpx",t/4);return(0,n.createElement)(l.__experimentalZStack,{offset:15,isLayered:!0},(0,n.createElement)((()=>(0,n.createElement)(l.Icon,{icon:e})),null),(0,n.createElement)("div",{style:{color:"var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9))",marginTop:r,marginRight:r}},(0,n.createElement)((()=>(0,n.createElement)(l.Icon,{icon:"nametag",size:12})),null)))}("list-view"),isActive:["namespace","scope"],attributes:{...C},allowedControls:["inherit","taxQuery"],scope:["block"]};(0,r.registerBlockVariation)("core/query",{...P,name:w,title:(0,o.__)("GatherPress Query Loop","gatherpress-query-loop"),description:(0,o.__)("Create event queries","gatherpress-query-loop"),scope:["inserter","transform"],example:{attributes:{...C},innerBlocks:[{name:"core/post-template",attributes:{},innerBlocks:[{name:"gatherpress/event-date"},{name:"core/post-title"},{...f}]}]}}),(0,r.registerBlockVariation)("core/query",{...P,name:"gatherpress-query-loop-map-date",title:(0,o.__)("Map & Event-Date","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Map & Date","gatherpress-query-loop"),innerBlocks:[["core/post-template",{},[["gatherpress/venue"],["gatherpress/event-date"]]],["core/query-pagination"],["core/query-no-results"]]}),(0,r.registerBlockVariation)("core/query",{...P,name:"gatherpress-query-loop-date-title",title:(0,o.__)("Event-Date, Title & Venue details","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Event-Date & Title","gatherpress-query-loop"),innerBlocks:[["core/post-template",{},[{name:"gatherpress/event-date"},{name:"core/post-title"},{...f}]],["core/query-pagination"],["core/query-no-results"]]}),(0,r.registerBlockVariation)("core/query",{...P,name:"gatherpress-query-loop-date-address",title:(0,o.__)("Event-Date & Venue Details","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Event-Date & Venue Details","gatherpress-query-loop"),innerBlocks:[["core/post-template",{},[{name:"gatherpress/event-date"},{...f}]],["core/query-pagination"],["core/query-no-results"]]}),gpql=t})();