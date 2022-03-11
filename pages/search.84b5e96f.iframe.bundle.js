(window.webpackJsonp=window.webpackJsonp||[]).push([[195,19,22,23,24,26],{1327:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(14),__webpack_require__(40);var media=__webpack_require__(26),VMetaSearch_VMetaSearchFormvue_type_script_lang_js_={name:"VMetaSearchForm",components:{VMetaSourceList:__webpack_require__(314).default},props:{query:{type:Object,required:!0},type:{type:String,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,required:!0}},computed:{unsupportedByUsefilter:function unsupportedByUsefilter(){return this.type===media.b?"CC Mixter":this.type===media.d?"Wikimedia Commons or Youtube":this.type===media.c?"Google Images":""},metaQuery:function metaQuery(){return{q:this.query.q,filters:{commercial:!!this.query.license_type&&this.query.license_type.includes("commercial"),modify:!!this.query.license_type&&this.query.license_type.includes("modification")}}}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VMetaSearch_VMetaSearchFormvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{key:_vm.type,staticClass:"p-6 meta-search text-center mt-12",attrs:{"data-testid":"meta-search-form"}},[_c("header",{staticClass:"mb-10"},[_vm.hasNoResults?_c("i18n",{staticClass:"b-header mb-2",attrs:{path:"meta-search.form.no-results-title",tag:"h4"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"query",fn:function(){return[_vm._v(_vm._s(_vm.query.q))]},proxy:!0}])}):_c("i18n",{staticClass:"b-header mb-2",attrs:{path:_vm.isSupported?"meta-search.form.supported-title":"meta-search.form.unsupported-title",tag:"h4"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"type",fn:function(){return[_vm._v("\n        "+_vm._s(_vm.type)+"\n      ")]},proxy:!0}],null,!1,196258084)}),_vm._v(" "),_c("i18n",{attrs:{path:"meta-search.form.caption",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"break",fn:function(){return[_c("br")]},proxy:!0},{key:"filter",fn:function(){return[_vm._v(_vm._s(_vm.unsupportedByUsefilter))]},proxy:!0}])})],1),_vm._v(" "),_c("VMetaSourceList",{staticClass:"md:justify-center mt-6 mb-10",attrs:{type:_vm.type,query:_vm.metaQuery}}),_vm._v(" "),_c("p",{staticClass:"caption font-semibold max-w-3xl my-0 mx-auto"},[_vm._v("\n    "+_vm._s(_vm.$t("meta-search.caption",{openverse:"Openverse"}))+"\n  ")])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMetaSourceList:__webpack_require__(314).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMetaSearchForm",exportName:"default",description:"",tags:{},props:[{name:"query",type:{name:"object"},required:!0},{name:"type",type:{name:"string"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},required:!0}]}},1328:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(14),__webpack_require__(40),__webpack_require__(149);var runtime=__webpack_require__(2),sizes={DEFAULT:"default",LARGE:"large"},components_VSearchResultsTitlevue_type_script_lang_js_=Object(runtime.b)({name:"VSearchResultsTitle",props:{size:{required:!1,default:sizes.DEFAULT,validator:function validator(value){return Object.values(sizes).includes(value)}}}}),componentNormalizer=(__webpack_require__(1374),__webpack_require__(7));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VSearchResultsTitlevue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("h1",{staticClass:"leading-tight sr-only md:not-sr-only",class:["large"===this.size?"text-[90px]":"text-6xl"]},[this._t("default",null,{default:""})],2)}),[],!1,null,"fcb8929e",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VSearchResultsTitle",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"undefined"},required:!1,defaultValue:{func:!1,value:"sizes.DEFAULT"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},1338:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(85),__webpack_require__(14),__webpack_require__(40);var runtime=__webpack_require__(2),media=__webpack_require__(26),errors=__webpack_require__(181),VMetaSearchForm=__webpack_require__(1327),VErrorSection=__webpack_require__(200),VErrorImage=__webpack_require__(315),VNoResults=__webpack_require__(417),VSearchResultsTitle=__webpack_require__(1328),components_VSearchGridvue_type_script_lang_js_={name:"VSearchGrid",components:{VErrorSection:VErrorSection.default,VMetaSearchForm:VMetaSearchForm.default,VErrorImage:VErrorImage.default,VNoResults:VNoResults.default,VSearchResultsTitle:VSearchResultsTitle.default},props:{supported:{type:Boolean,required:!0},query:{type:Object,required:!0},searchType:{type:String,required:!0},fetchState:{required:!0},resultsCount:{type:Number,required:!0}},setup:function setup(props){return{hasNoResults:Object(runtime.a)((function(){return!!props.supported&&(""!==props.query.q&&0===props.resultsCount)})),isSupported:Object(runtime.a)((function(){return media.g.includes(props.searchType)})),metaSearchFormType:Object(runtime.a)((function(){return props.searchType===media.a?media.c:props.searchType})),isAllView:Object(runtime.a)((function(){return props.searchType===media.a})),NO_RESULT:errors.a}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VSearchGridvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.resultsCount?_c("section",[_vm.query.q&&_vm.isSupported?_c("header",{staticClass:"mt-4",class:_vm.isAllView?"mb-10":"mb-8"},[_c("VSearchResultsTitle",{staticClass:"leading-10",attrs:{size:_vm.isAllView?"large":"default"}},[_vm._v("\n      "+_vm._s(_vm.query.q)+"\n    ")])],1):_vm._e(),_vm._v(" "),_vm._t("media"),_vm._v(" "),_vm.fetchState.isFetching?_vm._e():_c("VMetaSearchForm",{attrs:{type:_vm.metaSearchFormType,"has-no-results":_vm.hasNoResults,query:_vm.query,"is-supported":_vm.isSupported}})],2):_vm.fetchState.isFetching?_vm._e():_c("VErrorSection",{staticClass:"w-full py-10",scopedSlots:_vm._u([{key:"image",fn:function(){return[_c("VErrorImage",{attrs:{"error-code":_vm.NO_RESULT}})]},proxy:!0}])},[_vm._v(" "),_c("VNoResults",{attrs:{type:_vm.metaSearchFormType,query:_vm.query}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchResultsTitle:__webpack_require__(1328).default,VMetaSearchForm:__webpack_require__(1327).default,VErrorImage:__webpack_require__(315).default,VNoResults:__webpack_require__(417).default,VErrorSection:__webpack_require__(200).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchGrid",exportName:"default",description:"",tags:{},props:[{name:"supported",type:{name:"boolean"},required:!0},{name:"query",type:{name:"object"},required:!0},{name:"searchType",type:{name:"string"},required:!0},{name:"fetchState",required:!0},{name:"resultsCount",type:{name:"number"},required:!0}],slots:[{name:"media"}]}},1339:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),es_tabbable=__webpack_require__(357),ensureFocus=__webpack_require__(146),VTeleport=__webpack_require__(132),VButton=__webpack_require__(46),components_VSkipToContentContainervue_type_script_lang_js_=Object(runtime.b)({name:"VSkipToContentContainer",components:{VTeleport:VTeleport.default,VButton:VButton.default},props:{initialFocusNode:{type:HTMLElement,required:!1}},setup:function setup(props){var containerNode=Object(runtime.l)();return{containerNode:containerNode,skipToContent:function skipToContent(){if(containerNode.value||props.initialFocusNode){var tabbable=props.initialFocusNode||Object(es_tabbable.a)(containerNode.value,!0);Object(ensureFocus.a)(tabbable)}}}}}),VSkipToContentContainervue_type_style_index_0_module_true_lang_css_=__webpack_require__(1393),componentNormalizer=__webpack_require__(7);var component=Object(componentNormalizer.a)(components_VSkipToContentContainervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{ref:"containerNode"},[this._t("default"),this._v(" "),_c("VTeleport",{attrs:{to:"skip-to-content"}},[_c("VButton",{staticClass:"focus:fixed focus:absolute ms-2 mt-2 z-50",class:this.$style.skipButton,on:{click:this.skipToContent}},[this._v(this._s(this.$t("skip-to-content")))])],1)],2)}),[],!1,(function injectStyles(context){this.$style=VSkipToContentContainervue_type_style_index_0_module_true_lang_css_.default.locals||VSkipToContentContainervue_type_style_index_0_module_true_lang_css_.default}),null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__(46).default,VTeleport:__webpack_require__(132).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSkipToContentContainer",description:'Demarcates the section that the "skip to content"\nkeyboard accessibility button should skip to.\n\nIt also enables the button to appear on the page. If\nthis component isn\'t rendered on the page then the\nbutton will not render.',tags:{},exportName:"default",props:[{name:"initialFocusNode",type:{name:"process.server ? Object : HTMLElement"},required:!1}],slots:[{name:"default"}]}},1340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),use_filter_sidebar_visibility=__webpack_require__(253),components_VScrollButtonvue_type_script_lang_js_={name:"VScrollButton",setup:function setup(){var isFilterVisible=Object(use_filter_sidebar_visibility.a)().isVisible;return{hClass:Object(runtime.a)((function(){return isFilterVisible.value?"ltr:right-[21rem] rtl:left-[21rem]":"ltr:right-4 rtl:left-4"})),isFilterVisible:isFilterVisible}},methods:{scrollToTop:function scrollToTop(){this.$el.parentElement.scrollTo({top:0,left:0,behavior:"smooth"})}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VScrollButtonvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{staticClass:"scroll text-white bg-pink hover:bg-dark-pink transition-all duration-100 ease-linear fixed bottom-4 w-14 h-14 hover:shadow-md rounded-full text-center",class:_vm.hClass,attrs:{"aria-label":_vm.$t("browse-page.aria.scroll"),type:"button"},on:{click:_vm.scrollToTop,keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.scrollToTop.apply(null,arguments)}}},[_c("svg",{staticClass:"w-full h-full fill-curr",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"}},[_c("path",{attrs:{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}})])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VScrollButton",exportName:"default",description:"",tags:{}}},1364:function(module,exports,__webpack_require__){var content=__webpack_require__(1394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("546c25bd",content,!0,{sourceMap:!1})},1365:function(module,exports,__webpack_require__){var content=__webpack_require__(1375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("f8ba4ba2",content,!0,{sourceMap:!1})},1374:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1365)},1375:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,"h1[data-v-fcb8929e]:first-letter{text-transform:uppercase}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1393:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_pnpm_vue_docgen_loader_1_5_0_ec12517740c24d9025ea2a4db2ea211a_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_13_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_559ffc97fd41de05d12663d7fb949156_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_postcss_8_4_5_node_modules_postcss_loader_dist_cjs_js_ref_13_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_pnpm_vue_loader_15_9_8_css_loader_6_5_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1364),_node_modules_pnpm_vue_docgen_loader_1_5_0_ec12517740c24d9025ea2a4db2ea211a_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_13_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_559ffc97fd41de05d12663d7fb949156_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_postcss_8_4_5_node_modules_postcss_loader_dist_cjs_js_ref_13_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_pnpm_vue_loader_15_9_8_css_loader_6_5_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_vue_docgen_loader_1_5_0_ec12517740c24d9025ea2a4db2ea211a_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_13_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_559ffc97fd41de05d12663d7fb949156_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_postcss_8_4_5_node_modules_postcss_loader_dist_cjs_js_ref_13_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_pnpm_vue_loader_15_9_8_css_loader_6_5_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);__webpack_require__.d(__webpack_exports__,"default",(function(){return _node_modules_pnpm_vue_docgen_loader_1_5_0_ec12517740c24d9025ea2a4db2ea211a_node_modules_vue_docgen_loader_lib_index_js_ref_9_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_13_oneOf_0_0_node_modules_pnpm_css_loader_5_2_7_node_modules_css_loader_dist_cjs_js_ref_13_oneOf_0_1_node_modules_pnpm_vue_loader_15_9_8_559ffc97fd41de05d12663d7fb949156_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_4_3_0_postcss_8_4_5_node_modules_postcss_loader_dist_cjs_js_ref_13_oneOf_0_2_node_modules_pnpm_nuxt_components_2_2_1_node_modules_nuxt_components_dist_loader_js_ref_10_0_node_modules_pnpm_vue_loader_15_9_8_css_loader_6_5_1_node_modules_vue_loader_lib_index_js_vue_loader_options_VSkipToContentContainer_vue_vue_type_style_index_0_module_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a}))},1394:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".skipButton_FKScN:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}",""]),___CSS_LOADER_EXPORT___.locals={skipButton:"skipButton_FKScN"},module.exports=___CSS_LOADER_EXPORT___},1704:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(13),__webpack_require__(25),__webpack_require__(12),__webpack_require__(27),__webpack_require__(150),__webpack_require__(15),__webpack_require__(14),__webpack_require__(40),__webpack_require__(6);var defineProperty=__webpack_require__(9),asyncToGenerator=__webpack_require__(33),vuex_esm=(__webpack_require__(75),__webpack_require__(209));function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}var dist_runtime=__webpack_require__(2),action_types=__webpack_require__(49),media=__webpack_require__(26),store_modules=__webpack_require__(94),use_media_query=__webpack_require__(133),use_filter_sidebar_visibility=__webpack_require__(253),VSearchGrid=__webpack_require__(1338),VSkipToContentContainer=__webpack_require__(1339);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var pages_searchvue_type_script_lang_js_={name:"browse-page",components:{VScrollButton:__webpack_require__(1340).default,VSearchGrid:VSearchGrid.default,VSkipToContentContainer:VSkipToContentContainer.default},setup:function setup(){return{isMinScreenMd:Object(use_media_query.a)("md"),isVisible:Object(use_filter_sidebar_visibility.a)().isVisible,showScrollButton:Object(dist_runtime.d)("showScrollButton")}},scrollToTop:!1,fetch:function fetch(){var _this=this;return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!_this.supported||_this.resultCount||""===_this.query.q.trim()){_context.next=3;break}return _context.next=3,_this.fetchMedia({});case 3:case"end":return _context.stop()}}),_callee)})))()},asyncData:function asyncData(_ref){return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:_ref.route,_ref.store,_context2.next=4;break;case 4:case"end":return _context2.stop()}}),_callee2)})))()},computed:_objectSpread(_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.c,["query","searchType"])),Object(vuex_esm.c)(store_modules.c,["searchQueryParams"])),Object(vuex_esm.c)(store_modules.a,["results","resultCount","fetchState"])),{},{resultsCount:function resultsCount(){return this.supported?this.resultCount:(0,0)},supported:function supported(){return media.g.includes(this.searchType)}}),methods:_objectSpread(_objectSpread(_objectSpread({},Object(vuex_esm.b)(store_modules.a,{fetchMedia:action_types.c})),Object(vuex_esm.b)(store_modules.c,{setSearchStateFromUrl:action_types.j,updateQuery:action_types.l})),{},{onSearchFormSubmit:function onSearchFormSubmit(_ref2){var q=_ref2.q;this.updateQuery({q:q})}}),watch:{$route:function $route(newRoute,oldRoute){var _this2=this;return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee3(){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(newRoute.path===oldRoute.path&&isShallowEqualObjects(newRoute.query,oldRoute.query)){_context3.next=4;break}return _context3.next=3,_this2.setSearchStateFromUrl(newRoute);case 3:_this2.fetchMedia(_this2.searchQueryParams);case 4:case"end":return _context3.stop()}}),_callee3)})))()}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(pages_searchvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VSkipToContentContainer",{staticClass:"browse-page flex flex-col w-full px-4 md:px-10"},[_c("VSearchGrid",{attrs:{"fetch-state":_vm.fetchState,query:_vm.query,supported:_vm.supported,"search-type":_vm.searchType,"results-count":_vm.resultsCount,"data-testid":"search-grid"},scopedSlots:_vm._u([{key:"media",fn:function(){return[_c("NuxtChild",{key:_vm.$route.path,attrs:{"media-results":_vm.results,"fetch-state":_vm.fetchState,"is-filter-visible":_vm.isVisible,"search-term":_vm.query.q,supported:_vm.supported,"data-testid":"search-results"}})]},proxy:!0}])}),_vm._v(" "),_c("VScrollButton",{directives:[{name:"show",rawName:"v-show",value:_vm.showScrollButton,expression:"showScrollButton"}],attrs:{"data-testid":"scroll-button"}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchGrid:__webpack_require__(1338).default,VScrollButton:__webpack_require__(1340).default,VSkipToContentContainer:__webpack_require__(1339).default}),__vuedocgen_export_0.__docgenInfo={displayName:"browse-page",exportName:"default",description:"",tags:{}}}}]);