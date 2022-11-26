/*! For license information please see has-admin.js.LICENSE.txt */
(()=>{"use strict";var t,e,i={},s={};function n(t){var e=s[t];if(void 0!==e)return e.exports;var a=s[t]={exports:{}};return i[t](a,a.exports,n),a.exports}function a(t,e,i){const s=document.createElement(e||"div");return t&&(s.className=t),i&&i.appendChild(s),s}function o(t,e,i){t.style.width="number"==typeof e?e+"px":e,t.style.height="number"==typeof i?i+"px":i}n.m=i,n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,i)=>(n.f[i](t,e),e)),[])),n.u=t=>t+".js",n.miniCssF=t=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="highlight-and-share:",n.l=(i,s,a,o)=>{if(t[i])t[i].push(s);else{var r,l;if(void 0!==a)for(var h=document.getElementsByTagName("script"),p=0;p<h.length;p++){var d=h[p];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){r=d;break}}r||(l=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+a),r.src=i),t[i]=[s];var c=(e,s)=>{r.onerror=r.onload=null,clearTimeout(u);var n=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((t=>t(s))),e)return e(s)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=c.bind(null,r.onerror),r.onload=c.bind(null,r.onload),l&&document.head.appendChild(r)}},n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={790:0};n.f.j=(e,i)=>{var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var a=new Promise(((i,n)=>s=t[e]=[i,n]));i.push(s[2]=a);var o=n.p+n.u(e),r=new Error;n.l(o,(i=>{if(n.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,s[1](r)}}),"chunk-"+e,e)}};var e=(e,i)=>{var s,a,[o,r,l]=i,h=0;if(o.some((e=>0!==t[e]))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);l&&l(n)}for(e&&e(i);h<o.length;h++)a=o[h],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0},i=self.webpackChunkhighlight_and_share=self.webpackChunkhighlight_and_share||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();const r="loading",l="loaded",h="error";function p(t,e,i=document){let s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{const n="string"==typeof t?t:e;n&&(s=Array.from(i.querySelectorAll(n)))}return s}function d(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}class c{constructor(t,e){this.type=t,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class u{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,e,i=100){this._filters[t]||(this._filters[t]=[]),this._filters[t].push({fn:e,priority:i}),this._filters[t].sort(((t,e)=>t.priority-e.priority)),this.pswp&&this.pswp.addFilter(t,e,i)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter((t=>t.fn!==e))),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){return this._filters[t]&&this._filters[t].forEach((t=>{e[0]=t.fn.apply(this,e)})),e[0]}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this.pswp&&this.pswp.on(t,e)}off(t,e){this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter((t=>e!==t))),this.pswp&&this.pswp.off(t,e)}dispatch(t,e){if(this.pswp)return this.pswp.dispatch(t,e);const i=new c(t,e);return this._listeners?(this._listeners[t]&&this._listeners[t].forEach((t=>{t.call(this,i)})),i):i}}class m{constructor(t,e){this.element=a("pswp__img pswp__img--placeholder",t?"img":"",e),t&&(this.element.decoding="async",this.element.alt="",this.element.src=t,this.element.setAttribute("role","presentation")),this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,e){this.element&&("IMG"===this.element.tagName?(o(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=function(t,e,i){let s="translate3d(0px,0px,0)";return void 0!==i&&(s+=" scale3d("+i+","+i+",1)"),s}(0,0,t/250)):o(this.element,t,e))}destroy(){this.element.parentNode&&this.element.remove(),this.element=null}}class y{constructor(t,e,i){this.instance=e,this.data=t,this.index=i,this.element=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.state="idle",this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout((()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=null)}),1e3)}load(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){const t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{const t=this.instance.applyFilters("placeholderSrc",!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new m(t,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=a("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=a("pswp__content"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){const e=this.element;this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented||(this.updateSrcsetSizes(),this.data.srcset&&(e.srcset=this.data.srcset),e.src=this.data.src,e.alt=this.data.alt||"",this.state=r,e.complete?this.onLoaded():(e.onload=()=>{this.onLoaded()},e.onerror=()=>{this.onError()}))}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=l,this.slide&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),this.state!==l&&this.state!==h||this.removePlaceholder())}onError(){this.state=h,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===r,this)}isError(){return this.state===h}isImageContent(){return"image"===this.type}setDisplayedSize(t,e){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(o(this.element,t,e),this.isImageContent()&&!this.isError()))){const i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==h,this)}updateSrcsetSizes(){if(this.data.srcset){const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=null,this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented||(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=null),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=null))}displayError(){if(this.slide){let t=a("pswp__error-msg");t.innerText=this.instance.options.errorMsg,t=this.instance.applyFilters("contentErrorElement",t,this),this.element=a("pswp__content pswp__error-msg-container"),this.element.appendChild(t),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached)return;if(this.isAttached=!0,this.state===h)return void this.displayError();if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||d())?(this.isDecoding=!0,this.element.decode().catch((()=>{})).finally((()=>{this.isDecoding=!1,this.appendImage()}))):this.appendImage():this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||this.slide&&(this.isImageContent()&&this.isDecoding&&!d()?this.appendImage():this.isError()&&this.load(!1,!0))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this})}remove(){this.isAttached=!1,this.instance.dispatch("contentRemove",{content:this}).defaultPrevented||(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),this.state!==l&&this.state!==h||this.removePlaceholder()))}}function f(t,e,i,s,n){let a;if(e.paddingFn)a=e.paddingFn(i,s,n)[t];else if(e.padding)a=e.padding[t];else{const i="padding"+t[0].toUpperCase()+t.slice(1);e[i]&&(a=e[i])}return a||0}class g{constructor(t,e,i,s){this.pswp=s,this.options=t,this.itemData=e,this.index=i}update(t,e,i){this.elementSize={x:t,y:e},this.panAreaSize=i;const s=this.panAreaSize.x/this.elementSize.x,n=this.panAreaSize.y/this.elementSize.y;this.fit=Math.min(1,s<n?s:n),this.fill=Math.min(1,s>n?s:n),this.vFill=Math.min(1,n),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const e=t+"ZoomLevel",i=this.options[e];if(i)return"function"==typeof i?i(this):"fill"===i?this.fill:"fit"===i?this.fit:Number(i)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}}function v(t,e,i){const s=e.createContentFromData(t,i);if(!s||!s.lazyLoad)return;const{options:n}=e,a=e.viewportSize||function(t,e){if(t.getViewportSizeFn){const i=t.getViewportSizeFn(t,e);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}(n,e),o=function(t,e,i,s){return{x:e.x-f("left",t,e,i,s)-f("right",t,e,i,s),y:e.y-f("top",t,e,i,s)-f("bottom",t,e,i,s)}}(n,a,t,i),r=new g(n,t,-1);return r.update(s.width,s.height,o),s.lazyLoad(),s.setDisplayedSize(Math.ceil(s.width*r.initial),Math.ceil(s.height*r.initial)),s}class w extends u{getNumItems(){let t;const{dataSource:e}=this.options;e?"length"in e?t=e.length:"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(t=e.items.length)):t=0;const i=this.dispatch("numItems",{dataSource:e,numItems:t});return this.applyFilters("numItems",i.numItems,e)}createContentFromData(t,e){return new y(t,this,e)}getItemData(t){const{dataSource:e}=this.options;let i;Array.isArray(e)?i=e[t]:e&&e.gallery&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),i=e.items[t]);let s=i;s instanceof Element&&(s=this._domElementToItemData(s));const n=this.dispatch("itemData",{itemData:s||{},index:t});return this.applyFilters("itemData",n.itemData,t)}_getGalleryDOMElements(t){return this.options.children||this.options.childSelector?p(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const e={element:t},i="A"===t.tagName?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=parseInt(i.dataset.pswpWidth,10),e.height=parseInt(i.dataset.pswpHeight,10),e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);const s=t.querySelector("img");s&&(e.msrc=s.currentSrc||s.src,e.alt=s.getAttribute("alt")),(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return v(t,this,e)}}function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function S(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(Object(i),!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var z={captionContent:".pswp-caption-content",type:"auto",horizontalEdgeThreshold:20,mobileCaptionOverlapRatio:.3,mobileLayoutBreakpoint:600},A=function(){function t(e,i){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=S(S({},z),i),this.lightbox=e,this.lightbox.on("init",(function(){s.initPlugin()}))}var e,i;return e=t,(i=[{key:"initPlugin",value:function(){var t=this;this.pswp=this.lightbox.pswp,this.isCaptionHidden=!1,this.tempCaption=!1,this.captionElement=!1,this.pswp.on("uiRegister",(function(){t.pswp.ui.registerElement({name:"dynamic-caption",order:9,isButton:!1,appendTo:"root",html:"",onInit:function(e){t.captionElement=e,t.initCaption()}})}))}},{key:"initCaption",value:function(){var t=this,e=this.pswp;e.on("change",(function(){t.updateCaptionHTML(),t.updateCurrentCaptionPosition(),t.showCaption()})),e.on("calcSlideSize",(function(e){return t.onCalcSlideSize(e)})),e.on("moveMainScroll",(function(){t.useMobileLayout()||(t.pswp.mainScroll.isShifted()?t.hideCaption():t.showCaption())})),e.on("zoomPanUpdate",(function(){e.currSlide.currZoomLevel>e.currSlide.zoomLevels.initial?t.hideCaption():t.showCaption()})),e.on("beforeZoomTo",(function(t){var i=e.currSlide;i.__dcAdjustedPanAreaSize&&(t.destZoomLevel>i.zoomLevels.initial?(i.panAreaSize.x=i.__dcOriginalPanAreaSize.x,i.panAreaSize.y=i.__dcOriginalPanAreaSize.y):(i.panAreaSize.x=i.__dcAdjustedPanAreaSize.x,i.panAreaSize.y=i.__dcAdjustedPanAreaSize.y))}))}},{key:"useMobileLayout",value:function(){var t=this.options.mobileLayoutBreakpoint;return"function"==typeof t?t.call(this):"number"==typeof t&&window.innerWidth<t}},{key:"hideCaption",value:function(){var t=this;this.isCaptionHidden||(this.isCaptionHidden=!0,this.captionElement.classList.add("pswp__dynamic-caption--faded"),this.captionFadeTimeout&&clearTimeout(this.captionFadeTimeout),this.captionFadeTimeout=setTimeout((function(){t.captionElement.style.visibility="hidden",t.captionFadeTimeout=null}),400))}},{key:"showCaption",value:function(){var t=this;this.isCaptionHidden&&(this.isCaptionHidden=!1,this.captionElement.style.visibility="visible",clearTimeout(this.captionFadeTimeout),this.captionFadeTimeout=setTimeout((function(){t.captionElement.classList.remove("pswp__dynamic-caption--faded"),t.captionFadeTimeout=null}),50))}},{key:"setCaptionPosition",value:function(t,e){var i=t<=this.options.horizontalEdgeThreshold;this.captionElement.classList[i?"add":"remove"]("pswp__dynamic-caption--on-hor-edge"),this.captionElement.style.left=t+"px",this.captionElement.style.top=e+"px"}},{key:"setCaptionWidth",value:function(t,e){e?t.style.width=e+"px":t.style.removeProperty("width")}},{key:"setCaptionType",value:function(t,e){var i=t.dataset.pswpCaptionType;e!==i&&(t.classList.add("pswp__dynamic-caption--"+e),t.classList.remove("pswp__dynamic-caption--"+i),t.dataset.pswpCaptionType=e)}},{key:"updateCurrentCaptionPosition",value:function(){var t=this.pswp.currSlide;if(t.dynamicCaptionType){if("mobile"===t.dynamicCaptionType)return this.setCaptionType(this.captionElement,t.dynamicCaptionType),this.captionElement.style.removeProperty("left"),this.captionElement.style.removeProperty("top"),void this.setCaptionWidth(this.captionElement,!1);var e=t.zoomLevels.initial,i=Math.ceil(t.width*e),s=Math.ceil(t.height*e);this.setCaptionType(this.captionElement,t.dynamicCaptionType),"aside"===t.dynamicCaptionType?(this.setCaptionPosition(this.pswp.currSlide.bounds.center.x+i,this.pswp.currSlide.bounds.center.y),this.setCaptionWidth(this.captionElement,!1)):"below"===t.dynamicCaptionType&&(this.setCaptionPosition(this.pswp.currSlide.bounds.center.x,this.pswp.currSlide.bounds.center.y+s),this.setCaptionWidth(this.captionElement,i))}}},{key:"createTemporaryCaption",value:function(){this.tempCaption=document.createElement("div"),this.tempCaption.className="pswp__dynamic-caption pswp__dynamic-caption--temp",this.tempCaption.style.visibility="hidden",this.tempCaption.setAttribute("aria-hidden","true"),this.pswp.bg.after(this.captionElement),this.captionElement.after(this.tempCaption)}},{key:"onCalcSlideSize",value:function(t){var e=t.slide,i=!1;if(this.getCaptionHTML(t.slide)){this.storeOriginalPanAreaSize(e),e.bounds.update(e.zoomLevels.initial),this.useMobileLayout()?(e.dynamicCaptionType="mobile",i=!0):"auto"===this.options.type?e.bounds.center.x>e.bounds.center.y?e.dynamicCaptionType="aside":e.dynamicCaptionType="below":e.dynamicCaptionType=this.options.type;var s=Math.ceil(e.width*e.zoomLevels.initial),n=Math.ceil(e.height*e.zoomLevels.initial);if(this.tempCaption||this.createTemporaryCaption(),this.setCaptionType(this.tempCaption,e.dynamicCaptionType),"aside"===e.dynamicCaptionType){this.tempCaption.innerHTML=this.getCaptionHTML(t.slide),this.setCaptionWidth(this.tempCaption,!1);var a=this.measureCaptionSize(this.tempCaption,t.slide).x,o=s+e.bounds.center.x;e.panAreaSize.x-o<=a&&(e.panAreaSize.x-=a,this.recalculateZoomLevelAndBounds(e))}else if("below"===e.dynamicCaptionType||i){this.setCaptionWidth(this.tempCaption,i?this.pswp.viewportSize.x:s),this.tempCaption.innerHTML=this.getCaptionHTML(t.slide);var r=this.measureCaptionSize(this.tempCaption,t.slide).y,l=n+e.bounds.center.y,h=e.panAreaSize.y-l,p=e.panAreaSize.y;if(h<=r){e.panAreaSize.y-=Math.min(2*(r-h),r),this.recalculateZoomLevelAndBounds(e);var d=e.panAreaSize.x*this.options.mobileCaptionOverlapRatio/2;i&&e.bounds.center.x>d&&(e.panAreaSize.y=p,this.recalculateZoomLevelAndBounds(e))}}this.storeAdjustedPanAreaSize(e),e===this.pswp.currSlide&&this.updateCurrentCaptionPosition()}else e.dynamicCaptionType=!1}},{key:"measureCaptionSize",value:function(t,e){var i=t.getBoundingClientRect();return this.pswp.dispatch("dynamicCaptionMeasureSize",{captionEl:t,slide:e,captionSize:{x:i.width,y:i.height}}).captionSize}},{key:"recalculateZoomLevelAndBounds",value:function(t){t.zoomLevels.update(t.width,t.height,t.panAreaSize),t.bounds.update(t.zoomLevels.initial)}},{key:"storeAdjustedPanAreaSize",value:function(t){t.__dcAdjustedPanAreaSize||(t.__dcAdjustedPanAreaSize={}),t.__dcAdjustedPanAreaSize.x=t.panAreaSize.x,t.__dcAdjustedPanAreaSize.y=t.panAreaSize.y}},{key:"storeOriginalPanAreaSize",value:function(t){t.__dcOriginalPanAreaSize||(t.__dcOriginalPanAreaSize={}),t.__dcOriginalPanAreaSize.x=t.panAreaSize.x,t.__dcOriginalPanAreaSize.y=t.panAreaSize.y}},{key:"getCaptionHTML",value:function(t){if("function"==typeof this.options.captionContent)return this.options.captionContent.call(this,t);var e=t.data.element,i="";if(e){var s=e.querySelector(this.options.captionContent);if(s)i=s.innerHTML;else{var n=e.querySelector("img");n&&(i=n.getAttribute("alt"))}}return i}},{key:"updateCaptionHTML",value:function(){var t=this.getCaptionHTML(pswp.currSlide);this.captionElement.style.visibility=t?"visible":"hidden",this.captionElement.innerHTML=t||"",this.pswp.dispatch("dynamicCaptionUpdateHTML",{captionElement:this.captionElement})}}])&&_(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();const P=A;var T=new class extends w{constructor(t){super(),this.options=t||{},this._uid=0}init(){this.onThumbnailsClick=this.onThumbnailsClick.bind(this),p(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.addEventListener("click",this.onThumbnailsClick,!1)}))}onThumbnailsClick(t){if(function(t){if(2===t.which||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)return!0}(t)||window.pswp||!1===window.navigator.onLine)return;let e={x:t.clientX,y:t.clientY};e.x||e.y||(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);const s={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,s,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,i=p(this.options.children,this.options.childSelector,t.currentTarget).findIndex((t=>t===e||t.contains(e)));return-1!==i?i:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){return!window.pswp&&(this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0)}preload(t,e){const{options:i}=this;e&&(i.dataSource=e);const s=[],n=typeof i.pswpModule;if("function"==typeof(a=i.pswpModule)&&a.prototype&&a.prototype.goTo)s.push(Promise.resolve(i.pswpModule));else{if("string"===n)throw new Error("pswpModule as string is no longer supported");if("function"!==n)throw new Error("pswpModule is not valid");s.push(i.pswpModule())}var a;"function"==typeof i.openPromise&&s.push(i.openPromise()),!1!==i.preloadFirstSlide&&t>=0&&(this._preloadedContent=function(t,e){const i=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:i}).defaultPrevented)return v(i,e,t)}(t,this));const o=++this._uid;Promise.all(s).then((t=>{if(this.shouldOpen){const e=t[0];this._openPhotoswipe(e,o)}}))}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen)return;if(this.shouldOpen=!1,window.pswp)return;const i="object"==typeof t?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach((t=>{this._listeners[t].forEach((e=>{i.on(t,e)}))})),Object.keys(this._filters).forEach((t=>{this._filters[t].forEach((e=>{i.addFilter(t,e.fn,e.priority)}))})),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=null),i.on("destroy",(()=>{this.pswp=null,window.pswp=null})),i.init()}destroy(){this.pswp&&this.pswp.destroy(),this.shouldOpen=!1,this._listeners=null,p(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)}))}}({gallery:".has-admin-preview",children:"li",showHideAnimationType:"zoom",showAnimationDuration:750,hideAnimationDuration:750,imageClickAction:"next",tapAction:"next",pswpModule:function(){return n.e(826).then(n.bind(n,15826))}});new P(T,{type:"below",paddingFn:function(t){return t.x<700?smallScreenPadding:largeScreenPadding}}),T.init()})();
//# sourceMappingURL=has-admin.js.map