(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),use_filter_sidebar_visibility=__webpack_require__(253),components_VScrollButtonvue_type_script_lang_js_={name:"VScrollButton",setup:function setup(){var isFilterVisible=Object(use_filter_sidebar_visibility.a)().isVisible;return{hClass:Object(runtime.a)((function(){return isFilterVisible.value?"ltr:right-[21rem] rtl:left-[21rem]":"ltr:right-4 rtl:left-4"})),isFilterVisible:isFilterVisible}},methods:{scrollToTop:function scrollToTop(){this.$el.parentElement.scrollTo({top:0,left:0,behavior:"smooth"})}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VScrollButtonvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{staticClass:"scroll text-white bg-pink hover:bg-dark-pink transition-all duration-100 ease-linear fixed bottom-4 w-14 h-14 hover:shadow-md rounded-full text-center",class:_vm.hClass,attrs:{"aria-label":_vm.$t("browse-page.aria.scroll"),type:"button"},on:{click:_vm.scrollToTop,keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.scrollToTop.apply(null,arguments)}}},[_c("svg",{staticClass:"w-full h-full fill-curr",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"}},[_c("path",{attrs:{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}})])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VScrollButton",exportName:"default",description:"",tags:{}}}}]);