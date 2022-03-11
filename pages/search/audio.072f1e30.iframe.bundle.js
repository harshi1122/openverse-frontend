(window.webpackJsonp=window.webpackJsonp||[]).push([[197,16,200],{1321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),VButton=__webpack_require__(46),components_VLoadMorevue_type_script_lang_js_=Object(runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},props:{isFetching:{type:Boolean,default:!0}},setup:function setup(props,_ref){var emit=_ref.emit,i18n=Object(runtime.p)().i18n;return{buttonLabel:Object(runtime.a)((function(){return i18n.t("browse-page.load")})),onLoadMore:function onLoadMore(){emit("onLoadMore")}}}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{attrs:{size:"large",variant:"full",type:"button",disabled:this.isFetching},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__(46).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{},props:[{name:"isFetching",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]}},1370:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={mediaResults:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}},1376:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));__webpack_require__(12),__webpack_require__(8),__webpack_require__(150),__webpack_require__(15);var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(33),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(75),__webpack_require__(6),__webpack_require__(2)),_constants_action_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(49),_constants_store_modules__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(94),useLoadMore=function useLoadMore(props){var store=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_7__.p)().store,searchParams=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_7__.a)((function(){var pages={};return Object.keys(props.mediaResults).forEach((function(key){var _props$mediaResults$k,mediaPage=(null===(_props$mediaResults$k=props.mediaResults[key])||void 0===_props$mediaResults$k?void 0:_props$mediaResults$k.page)||0;pages[key]=mediaPage?mediaPage+1:void 0})),{page:pages,shouldPersistMedia:!0}})),canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_7__.a)((function(){return""!==props.searchTerm.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!canLoadMore.value){_context.next=3;break}return _context.next=3,store.dispatch("".concat(_constants_store_modules__WEBPACK_IMPORTED_MODULE_9__.a,"/").concat(_constants_action_types__WEBPACK_IMPORTED_MODULE_8__.c),searchParams.value);case 3:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},1711:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(149);var runtime=__webpack_require__(2),use_load_more=__webpack_require__(1376),use_media_query=__webpack_require__(133),use_browser_detection=__webpack_require__(360),VAudioTrack=__webpack_require__(188),VLoadMore=__webpack_require__(1321),VGridSkeleton=__webpack_require__(211),search_page_types=__webpack_require__(1370),search_audiovue_type_script_lang_js_=Object(runtime.b)({name:"AudioSearch",components:{VAudioTrack:VAudioTrack.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:search_page_types.propTypes,setup:function setup(props){var i18n=Object(runtime.p)().i18n;Object(runtime.r)({title:"".concat(props.searchTerm," | Openverse")});var results=Object(runtime.a)((function(){var _props$mediaResults$a,_props$mediaResults,_props$mediaResults$a2;return Object.values(null!==(_props$mediaResults$a=null===(_props$mediaResults=props.mediaResults)||void 0===_props$mediaResults||null===(_props$mediaResults$a2=_props$mediaResults.audio)||void 0===_props$mediaResults$a2?void 0:_props$mediaResults$a2.items)&&void 0!==_props$mediaResults$a?_props$mediaResults$a:[])})),isMinScreenMd=Object(use_media_query.a)("md",{shouldPassInSSR:!1}),isMobile=Object(use_browser_detection.b)(),audioTrackSize=Object(runtime.a)((function(){return!isMinScreenMd.value&&isMobile?"s":props.isFilterVisible?"l":"m"})),isError=Object(runtime.a)((function(){return!!props.fetchState.fetchingError})),errorHeader=Object(runtime.a)((function(){var type=i18n.t("browse-page.search-form.audio");return i18n.t("browse-page.fetching-error",{type:type})})),_useLoadMore=Object(use_load_more.a)(props);return{results:results,audioTrackSize:audioTrackSize,isError:isError,errorHeader:errorHeader,canLoadMore:_useLoadMore.canLoadMore,onLoadMore:_useLoadMore.onLoadMore}},head:{}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[0!==_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}),_vm._v(" "),_vm._l(_vm.results,(function(audio){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-8 md:mb-10",attrs:{audio:audio,size:_vm.audioTrackSize,layout:"row"}})})),_vm._v(" "),_vm.canLoadMore&&!_vm.fetchState.isFinished?_c("VLoadMore",{attrs:{"is-fetching":_vm.fetchState.isFetching,"data-testid":"load-more"},on:{onLoadMore:_vm.onLoadMore}}):_vm._e()],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__(211).default,VAudioTrack:__webpack_require__(188).default,VLoadMore:__webpack_require__(1321).default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{}}}}]);