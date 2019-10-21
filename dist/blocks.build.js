!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=(n.n(r),n(2));n.n(a),n(3)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(4),__=wp.i18n.__,a=wp.blocks.registerBlockType;wp.element.Component;a("has/click-to-share",{title:__("Click to Share"),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),wp.element.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"})),category:"common",edit:r.a,save:function(){return null}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(5),o=n.n(l),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=wp.element,u=s.Component,c=s.Fragment,__=wp.i18n.__,p=(wp.htmlEntities.decodeEntities,wp),g=(p.apiFetch,wp.data.registerStore,wp.components),m=g.PanelBody,d=(g.Placeholder,g.QueryControls,g.RangeControl),f=g.SelectControl,b=(g.Spinner,g.TextControl),w=(g.ToggleControl,g.Toolbar,g.withAPIData,wp.editor),v=w.InspectorControls,C=w.RichText,x=w.PanelColorSettings,y=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onChangeValue=function(t){e.setState({shareText:t})},e.borderRoundedChange=function(t){e.setState({borderRadius:t})},e.state={shareText:__("Click to Share","highlight-and-share"),borderRadius:e.props.attributes.borderRadius},e}return i(t,e),h(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=n.shareText,a=n.backgroundColor,i=n.textColor,l=n.fontSize,h=n.clickText,s=n.padding,u=n.border,p=n.borderRadius,g=n.borderColor,w=n.fontWeight,y=n.clickShareFontSize,E=n.maxWidth,S=n.alignment,k=n.marginTop,A=n.marginRight,T=n.marginBottom,O=n.marginLeft,R=(t.attributes,t.isSelected,t.editable,t.className,t.setAttributes),_=function(e){return R({backgroundColor:e})},B=function(e){return R({textColor:e})},P=function(e){return R({borderColor:e})},z={fontSize:l+"px",padding:s+"px",border:u+"px solid "+g,borderRadius:p+"px",backgroundColor:a,color:i,maxWidth:E+"%",marginLeft:O+"px",marginRight:A+"px",marginBottom:T+"px",marginTop:k+"px"};"center"==S&&(z.margin="0 auto"),"left"==S&&(z.float="left"),"right"==S&&(z.float="right");var j=Array();j.push({label:__("Normal","highlight-and-share"),value:100}),j.push({label:__("Bold","highlight-and-share"),value:400}),j.push({label:__("Bolder","highlight-and-share"),value:700});var M=Array();return M.push({label:__("Left","highlight-and-share"),value:"left"}),M.push({label:__("center","highlight-and-share"),value:"center"}),M.push({label:__("right","highlight-and-share"),value:"right"}),wp.element.createElement(c,null,wp.element.createElement(v,null,wp.element.createElement(m,{title:__("Highlight and Share Settings","highlight-and-share")},wp.element.createElement(x,{title:__("Background Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:a,onChange:_,label:__("Background Color","highlight-and-share")}]}),wp.element.createElement(x,{title:__("Text Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:i,onChange:B,label:__("Text Color","highlight-and-share")}]}),wp.element.createElement(f,{label:__("Font Weight","highlight-and-share"),value:w,options:j,onChange:function(e){R({fontWeight:e})}}),wp.element.createElement(b,{label:__("Click to Share Text","highlight-and-share"),value:h,onChange:function(t){e.props.setAttributes({clickText:t})}})),wp.element.createElement(m,{title:__("Spacing and Font Settings","highlight-and-share"),initialOpen:!1},wp.element.createElement(d,{label:__("Font Size","highlight-and-share"),value:l,onChange:function(t){return e.props.setAttributes({fontSize:t})},min:10,max:40,step:1}),wp.element.createElement(d,{label:__("Click to Share Font Size","highlight-and-share"),value:y,onChange:function(t){return e.props.setAttributes({clickShareFontSize:t})},min:10,max:40,step:1}),wp.element.createElement(d,{label:__("Padding","highlight-and-share"),value:s,onChange:function(t){return e.props.setAttributes({padding:t})},min:0,max:60,step:1}),wp.element.createElement(d,{label:__("Border","highlight-and-share"),value:u,onChange:function(t){return e.props.setAttributes({border:t})},min:0,max:10,step:1}),wp.element.createElement(d,{label:__("Border Rounded","highlight-and-share"),value:this.state.borderRadius,onChange:function(t){e.borderRoundedChange(t),e.props.setAttributes({borderRadius:t})},min:0,max:30,step:1}),wp.element.createElement(x,{title:__("Border Color","highlight-and-share"),initialOpen:!1,colorSettings:[{value:g,onChange:P,label:__("Border Color","highlight-and-share")}]})),wp.element.createElement(m,{title:__("Alignment, Width, and Margins","highlight-and-share")},wp.element.createElement(d,{label:__("Max Width","highlight-and-share"),value:E,onChange:function(t){return e.props.setAttributes({maxWidth:t})},min:0,max:100,step:5}),wp.element.createElement(f,{label:__("Alignment","highlight-and-share"),value:S,options:M,onChange:function(e){R({alignment:e})}}),wp.element.createElement(d,{label:__("Margin Left","highlight-and-share"),value:O,onChange:function(t){return e.props.setAttributes({marginLeft:t})},min:0,max:20,step:1}),wp.element.createElement(d,{label:__("Margin Right","highlight-and-share"),value:A,onChange:function(t){return e.props.setAttributes({marginRight:t})},min:0,max:20,step:1}),wp.element.createElement(d,{label:__("Margin Top","highlight-and-share"),value:k,onChange:function(t){return e.props.setAttributes({marginTop:t})},min:0,max:20,step:1}),wp.element.createElement(d,{label:__("Margin Bottom","highlight-and-share"),value:T,onChange:function(t){return e.props.setAttributes({marginBottom:t})},min:0,max:20,step:1}))),wp.element.createElement(c,null,wp.element.createElement("div",{className:o()("has-click-to-share"),style:z},wp.element.createElement("div",{className:"has-click-to-share-wrapper"},wp.element.createElement(C,{tagName:"div",placeholder:__("Add share text","highlight-and-share"),value:r,className:"has-click-to-share-text",style:{color:i,fontSize:l+"px",fontWeight:w},formattingControls:[],onChange:function(t){e.onChangeValue(t),R({shareText:t})}}),wp.element.createElement("div",{className:"has-click-to-share-cta",style:{fontSize:y}},h," ",wp.element.createElement("i",{class:"material-icons",style:{fontSize:y}},"share"))))))}}]),t}(u);t.a=y},function(e,t,n){var r,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===a)for(var o in r)i.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()}]);