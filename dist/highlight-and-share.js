(()=>{function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}!function(){"use strict";var e=highlight_and_share,i=e.prefix,l=e.suffix,n=e.content_legacy_mode,a=null,o=document.querySelector("#has-highlight-and-share");if(null!==o){var r=o.querySelector(".highlight-and-share-wrapper").getBoundingClientRect(),s=r.width,h=(r.height,function(t){var e=window.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility&&"0"!==e.opacity}),c=function(){var t=document.querySelectorAll(".highlight-and-share-wrapper");null!==t&&t.forEach((function(t){null===t.closest("#has-highlight-and-share")&&t.remove()}))},d=function(t,n,a,o,r,s){var h=t.querySelectorAll(".has_whatsapp, .has_facebook, .has_twitter, .has_copy, .has_reddit, .has_telegram, .has_linkedin, .has_xing, .has_signal, .has_vk, .has_tumblr, .has_email_mailto, .has_email_form");if(null===h)return t;var c="";"inline"===s?c="highlight":"selection"===s?c="selection":"cta"===s&&(c="quote"),h.forEach((function(t){var s=t.querySelector("a"),h=s.getAttribute("href");h=(h=(h=(h=(h=(h=(h=(h=h.replace("%url%",encodeURIComponent(n))).replace("%username%",encodeURIComponent(e.twitter_username))).replace("%title%",encodeURIComponent(a))).replace("%text%",encodeURIComponent(o))).replace("%hashtags%",encodeURIComponent(r))).replace("%type%",encodeURIComponent(c))).replace("%prefix%",encodeURIComponent(i))).replace("%suffix%",encodeURIComponent(l)),s.setAttribute("href",h);var d=t.getAttribute("data-title");null!==d&&(d=d.replace("%title%",encodeURIComponent(a)),t.setAttribute("data-title",d));var u=t.getAttribute("data-url");null!==u&&(u=u.replace("%url%",encodeURIComponent(n)),t.setAttribute("data-url",u))}))},u=function(e,i,l,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(!1!==highlight_and_share.show_twitter||!1!==highlight_and_share.show_facebook||!1!==highlight_and_share.show_linkedin||!1!==highlight_and_share.show_ok||!1!==highlight_and_share.show_vk||!1!==highlight_and_share.show_pinterest||!1!==highlight_and_share.show_email||!1!==highlight_and_share.show_webshare){c();var s=o.querySelector(".highlight-and-share-wrapper").cloneNode(!0);if(s.style.display="block",s.style.position="absolute",s.style.width="auto",s.style.height="auto",s.style["z-index"]=1e4,s.classList.contains("orientation-vertical")&&(s.style.display="inline-flex"),d(s,l,i,e,n,a),void 0!==navigator.share){var u=s.querySelector(".has_webshare");null!==u&&(u.style.display="inline-block")}switch(document.body.appendChild(s),a){case"selection":g(s);break;case"inline":p(s,r);break;case"cta":f(s,r)}var w=document.querySelector("body").querySelectorAll(".has_whatsapp, .has_facebook, .has_twitter, .has_telegram, .has_linkedin, .has_xing, .has_reddit, .has_tumblr");null!==w&&w.forEach((function(t){h(t)&&t.querySelector("a").addEventListener("click",(function(n){n.preventDefault();var o=t.querySelector("a").getAttribute("href");"undefined"!=typeof dataLayer&&dataLayer.push({event:"highlight-and-share",hasShareText:e,hasSharePostUrl:l,hasSharePostTitle:i,hasShareType:a,hasSocialNetwork:t.getAttribute("data-type")}),window.open(o,"Highlight and Share","width=575,height=430,toolbar=false,menubar=false,location=false,status=false")}))}));var y=document.querySelectorAll(".has_copy");null!==y&&y.forEach((function(n){h(n)&&("undefined"==typeof ClipboardItem?n.remove():n.addEventListener("click",(function(o){o.preventDefault();try{var r=new Blob([e],{type:"text/plain"}),s=[new ClipboardItem(t({},r.type,r))];navigator.clipboard.write(s)}catch(t){}n.setAttribute("data-tooltip","Copied!"),"undefined"!=typeof dataLayer&&dataLayer.push({event:"highlight-and-share",hasShareText:e,hasSharePostUrl:l,hasSharePostTitle:i,hasShareType:a,hasSocialNetwork:"copy"})})))}));var m=document.querySelectorAll(".has_email_form");null!==m&&m.forEach((function(t){h(t)&&t.addEventListener("click",(function(t){t.preventDefault();var e=t.target.closest("a").getAttribute("href");"undefined"!=typeof Fancybox&&(c(),window.highlightShareFancy=new Fancybox([{src:e,type:"iframe",preload:!0}],{Toolbar:{autoEnable:!1}}))}))}));var v=document.querySelectorAll(".has_webshare");null!==v&&v.forEach((function(t){h(t)&&t.addEventListener("click",(function(t){t.preventDefault();var l=t.target.closest("a").getAttribute("href");navigator.share({title:i,text:e,url:l})}))}))}},g=function(t){var e=window.innerWidth,i=window.innerHeight,l=window.getSelection().getRangeAt(0).getBoundingClientRect(),n=l.top,a=l.left,o=l.width,r=l.height;t.offsetWidth>e&&(t.style.maxWidth=e-20+"px",t.classList.add("has-no-margin-bottom"));var h=t.getBoundingClientRect(),c=h.width,d=h.height;if(t.classList.contains("orientation-vertical")){var u=a+window.scrollX-(c+15),g=n+window.scrollY-d/2+r/2;if(t.classList.add("has-no-margin-bottom"),n+window.scrollY-d/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var p=t.getBoundingClientRect();t.style.top=n+window.scrollY-p.height/2+r/2+"px",t.style.left=a+window.scrollX-p.width-15+"px"}else if(n+d>i){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var f=t.getBoundingClientRect();t.style.top=n+window.scrollY-f.height/2+r/2+"px",t.style.left=a+window.scrollX-f.width-15+"px"}else t.style.left=u+"px",t.style.top=g+"px",t.classList.remove("has-no-margin-bottom")}else{var w=a+window.scrollX+o/2-c/2,y=n+window.scrollY-d-15;t.classList.add("has-no-margin-bottom"),w<0?t.style.left="15px":w+s>e?t.style.right="15px":(t.style.left=w+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=y+"px"}},p=function(t,e){var i=window.innerWidth,l=window.innerHeight,n=e.getBoundingClientRect(),a=n.top,o=n.left,r=n.width,h=n.height,c=t.getBoundingClientRect(),d=c.width,u=c.height;if(t.classList.contains("orientation-vertical")){var g=o+window.scrollX-(d+15),p=a+window.scrollY-u/2+h/2;if(t.classList.add("has-no-margin-bottom"),a+window.scrollY-u/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var f=t.getBoundingClientRect();t.style.top=a+window.scrollY-f.height/2+h/2+"px";var w=o+window.scrollX-f.width-15;t.style.left=w<0?"15px":w+"px"}else if(a+u>l){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var y=t.getBoundingClientRect();t.style.top=a+window.scrollY-y.height/2+h/2+"px";var m=o+window.scrollX-y.width-15;t.style.left=m<0?"15px":m+"px"}else t.style.left=g+"px",t.style.top=p+"px",t.classList.remove("has-no-margin-bottom")}else{var v=o+window.scrollX+r/2-d/2,_=a+window.scrollY-u-15;t.classList.add("has-no-margin-bottom"),v<0?t.style.left="15px":v+s>i?t.style.right="15px":(t.style.left=v+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=_+"px"}},f=function(t,e){var i=window.innerWidth,l=window.innerHeight,n=e.getBoundingClientRect(),a=n.top,o=n.left,r=n.width,h=n.height;t.getBoundingClientRect().width>i&&(t.style.maxWidth=i-20+"px",t.classList.add("has-no-margin-bottom"));var c=t.getBoundingClientRect(),d=c.width,u=c.height;if(t.classList.contains("orientation-vertical")){window.scrollX;var g=a+window.scrollY-u/2+h/2;if(t.classList.add("has-no-margin-bottom"),a+window.scrollY-u/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var p=t.getBoundingClientRect();t.style.top=a+window.scrollY-p.height/2+h/2+"px";var f=o+window.scrollX-p.width-15;t.style.left=f<0?"15px":f+"px"}else if(a+u>l){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var w=t.getBoundingClientRect();t.style.top=a+window.scrollY-w.height/2+h/2+"px";var y=o+window.scrollX-w.width-15;t.style.left=y<0?"15px":y+"px"}else{var m=t.getBoundingClientRect();t.style.left=o+window.scrollX-m.width-15+"px",t.style.top=g+"px",t.classList.remove("has-no-margin-bottom")}}else{var v=o+window.scrollX+r/2-d/2,_=a+window.scrollY-u-15;t.classList.add("has-no-margin-bottom"),v<0?t.style.left="15px":v+s>i?t.style.right="15px":(t.style.left=v+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=_+"px"}},w=function(t){var e=null!==t?t.dataset.url:window.location.href,i=null!==t?t.dataset.title:document.title,l=null!==t?t.dataset.hashtags:"",n={};return n.href=e,n.title=i,n.hashtags=l,n},y=e.content;if(""!==y){var m=document.querySelectorAll(y);if(null!==m){var v=function(t,e){c();var i=document.defaultView.getSelection().toString().trim();if(""!==i){var l=e.querySelector(".has-social-placeholder"),n=w(l),a=n.href,o=n.title,r=n.hashtags;u(i,o,a,r,"selection")}};m.forEach((function(t){!t.classList.contains("has-content-area")||n?t.addEventListener("mouseup",(function(e){v(0,t)})):t.parentElement.addEventListener("mouseup",(function(e){v(0,t.parentElement)}))}))}var _=document.querySelectorAll(".has-inline-text");null!==_&&_.forEach((function(t){highlight_and_share.inline_highlight_tooltips_enabled&&""!==highlight_and_share.inline_highlight_tooltips_text&&t.setAttribute("data-tooltip",highlight_and_share.inline_highlight_tooltips_text),t.addEventListener("click",(function(i){!function(t,i){if(c(),i!==a){a=i;var l=i.innerText.trim();if(""!==l){var n=t.target.closest(".has-social-placeholder"),o=w(n),r=o.href,s=o.title,h=o.hashtags;e.enable_webshare_inline_highlight&&"function"==typeof navigator.share?navigator.share({title:s,url:r,text:l}):u(l,s,r,h,"inline",i)}}else a=null}(i,t);var l=document.querySelectorAll(".has-inline-text-tooltip");null!==l&&l.forEach((function(t){t.remove()}))})),t.addEventListener("mouseover",(function(e){if(t.hasAttribute("data-tooltip")){var i=e.target.getBoundingClientRect().top,l=window.scrollX,n=window.scrollY,a=e.clientX-60+l,o=i-30+n-10,r=document.createElement("div");r.classList.add("has-inline-text-tooltip"),r.style.position="absolute",r.style.left=a+"px",r.style.top=o+"px",r.innerText=t.getAttribute("data-tooltip"),document.body.appendChild(r);var s=r.getBoundingClientRect();s.right>window.innerWidth?r.style.left=a-(s.right-window.innerWidth)+"px":s.left<0&&(r.style.left=a-s.left+"px"),s.bottom>window.innerHeight?r.style.top=o-(s.bottom-window.innerHeight)+"px":s.top<0&&(r.style.top=o-s.top+"px")}})),t.addEventListener("mouseout",(function(){var t=document.querySelectorAll(".has-inline-text-tooltip");null!==t&&t.forEach((function(t){t.classList.add("has-fade-out"),setTimeout((function(){t.remove()}),900)}))}))}));var x=document.querySelectorAll(".has-click-prompt");null!==x&&x.forEach((function(t){t.addEventListener("click",(function(i){if(i.preventDefault(),c(),t!==a){a=t;var l=t.parentNode.querySelector(".has-click-to-share-text").getAttribute("data-text-full"),n=t.closest(".has-social-placeholder"),o=w(n),r=o.href,s=o.title,h=o.hashtags;e.enable_webshare_click_to_share&&"function"==typeof navigator.share?navigator.share({title:s,url:r,text:l}):u(l,s,r,h,"cta",t.closest(".has-click-to-share"))}else a=null}))}))}}}()})();