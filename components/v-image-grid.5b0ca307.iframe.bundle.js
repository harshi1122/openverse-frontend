(window.webpackJsonp=window.webpackJsonp||[]).push([[15,12,16],{1321:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),VButton=__webpack_require__(46),components_VLoadMorevue_type_script_lang_js_=Object(runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},props:{isFetching:{type:Boolean,default:!0}},setup:function setup(props,_ref){var emit=_ref.emit,i18n=Object(runtime.p)().i18n;return{buttonLabel:Object(runtime.a)((function(){return i18n.t("browse-page.load")})),onLoadMore:function onLoadMore(){emit("onLoadMore")}}}}),componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{attrs:{size:"large",variant:"full",type:"button",disabled:this.isFetching},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__(46).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{},props:[{name:"isFetching",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}]}},1322:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(15);var VLicense=__webpack_require__(101),VLink=__webpack_require__(57),errorImage=__webpack_require__(1360),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_js_={name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:["image"],data:function data(){return{widthBasis:253.125,imgHeight:this.image.height||100,imgWidth:this.image.width||100}},computed:{imageAspect:function imageAspect(){return this.imgWidth/this.imgHeight},containerAspect:function containerAspect(){return this.imageAspect>maxAspect?maxAspect:this.imageAspect<.75?.75:this.imageAspect},iPadding:function iPadding(){return this.imageAspect<.75?1/.75*100:this.imageAspect>maxAspect?56.25:1/this.imageAspect*100},imageWidth:function imageWidth(){return this.imageAspect<maxAspect?100:this.imageAspect/maxAspect*100},imageTop:function imageTop(){return this.imageAspect>.75?0:(.75-this.imageAspect)/(.75*this.imageAspect*.75)*-50},imageLeft:function imageLeft(){return this.imageAspect<maxAspect?0:(this.imageAspect-maxAspect)/maxAspect*-50}},methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return this.imageAspect,toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onGotoDetailPage:function onGotoDetailPage(event,image){if(!event.metaKey&&!event.ctrlKey){event.preventDefault();var detailRoute=this.localeRoute({name:"PhotoDetailPage",params:{id:image.id,location:window.scrollY}});this.$router.push(detailRoute)}},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},getImgDimension:function getImgDimension(e){this.imgHeight=e.target.naturalHeight,this.imgWidth=e.target.naturalWidth}}},componentNormalizer=__webpack_require__(7),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"w-full block group relative overflow-hidden rounded-sm focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none bg-dark-charcoal-10 text-dark-charcoal-10",style:"width: "+_vm.containerAspect*_vm.widthBasis+"px;flex-grow: "+_vm.containerAspect*_vm.widthBasis,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},on:{click:function($event){return _vm.onGotoDetailPage($event,_vm.image)}}},[_c("figure",{staticClass:"absolute w-full",style:"width: "+_vm.imageWidth+"%; top: "+_vm.imageTop+"%; left:"+_vm.imageLeft+"%;"},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:"+_vm.iPadding+"%",attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__(101).default,VLink:__webpack_require__(57).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}]}},1323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var VLoadMore=__webpack_require__(1321),VImageCell=__webpack_require__(1322),VImageGrid_VImageGridvue_type_script_lang_js_={name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{default:function _default(){return[]}},canLoadMore:{type:Boolean,default:!0},fetchState:{required:!0}},computed:{isError:function isError(){return!!this.fetchState.fetchingError},fetchingErrorHeading:function fetchingErrorHeading(){var type=this.$t("browse-page.search-form.image");return this.$t("browse-page.fetching-error",{type:type})}},methods:{onLoadMore:function onLoadMore(){this.$emit("load-more")}}},componentNormalizer=(__webpack_require__(1367),__webpack_require__(7)),component=Object(componentNormalizer.a)(VImageGrid_VImageGridvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image,index){return _c("VImageCell",{key:index,attrs:{image:image}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_c("footer",{staticClass:"pt-4"},[_vm.canLoadMore&&!_vm.fetchState.isFinished?_c("VLoadMore",{attrs:{"is-fetching":_vm.fetchState.isFetching,"data-testid":"load-more"},on:{onLoadMore:_vm.onLoadMore}}):_vm._e()],1)])}),[],!1,null,"5499727e",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__(1322).default,VLoadMore:__webpack_require__(1321).default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"func"},defaultValue:{func:!0,value:"() => []"}},{name:"canLoadMore",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fetchState",required:!0}],events:[{name:"load-more"}]}},1360:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.8bfa6bb.png"},1362:function(module,exports,__webpack_require__){var content=__webpack_require__(1368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(60).default)("6de239ee",content,!0,{sourceMap:!1})},1367:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1362)},1368:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(59)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width: 768px){.image-grid[data-v-5499727e]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);