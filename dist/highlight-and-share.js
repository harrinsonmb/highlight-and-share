(()=>{function t(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}!function(){"use strict";var e=highlight_and_share,l=e.prefix,i=e.suffix,n=null,a=document.querySelector("#has-highlight-and-share");if(null!==a){var o=a.querySelector(".highlight-and-share-wrapper").getBoundingClientRect(),s=o.width,r=(o.height,function(t){var e=window.getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility&&"0"!==e.opacity}),h=function(){var t=document.querySelectorAll(".highlight-and-share-wrapper");null!==t&&t.forEach((function(t){null===t.closest("#has-highlight-and-share")&&t.remove()}))},d=function(t,n,a,o,s){var r=t.querySelectorAll(".has_whatsapp, .has_facebook, .has_twitter, .has_copy, .has_email, .has_reddit, .has_telegram, .has_linkedin, .has_xing, .has_signal, .has_vk");if(null===r)return t;r.forEach((function(t){var r=t.querySelector("a"),h=r.getAttribute("href");h=(h=(h=(h=(h=(h=(h=h.replace("%url%",encodeURIComponent(n))).replace("%username%",encodeURIComponent(e.twitter_username))).replace("%title%",encodeURIComponent(a))).replace("%text%",encodeURIComponent(o))).replace("%hashtags%",encodeURIComponent(s))).replace("%prefix%",encodeURIComponent(l))).replace("%suffix%",encodeURIComponent(i)),r.setAttribute("href",h);var d=t.getAttribute("data-title");null!==d&&(d=d.replace("%title%",encodeURIComponent(a)),t.setAttribute("data-title",d));var c=t.getAttribute("data-url");null!==c&&(c=c.replace("%url%",encodeURIComponent(n)),t.setAttribute("data-url",c))}))},c=function(e,l,i,n,o){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if(!1!==highlight_and_share.show_twitter||!1!==highlight_and_share.show_facebook||!1!==highlight_and_share.show_linkedin||!1!==highlight_and_share.show_ok||!1!==highlight_and_share.show_vk||!1!==highlight_and_share.show_pinterest||!1!==highlight_and_share.show_email){h();var c=a.querySelector(".highlight-and-share-wrapper").cloneNode(!0);switch(c.style.display="block",c.style.position="absolute",c.style.width="auto",c.style.height="auto",c.style["z-index"]=1e4,c.classList.contains("orientation-vertical")&&(c.style.display="inline-flex"),d(c,i,l,e,n),document.body.appendChild(c),o){case"selection":u(c);break;case"inline":g(c,s);break;case"cta":p(c,s)}var w=document.querySelector("body").querySelectorAll(".has_whatsapp, .has_facebook, .has_twitter, .has_telegram, .has_linkedin, .has_xing, .has_reddit");null!==w&&w.forEach((function(t){r(t)&&t.querySelector("a").addEventListener("click",(function(n){n.preventDefault();var a=t.querySelector("a").getAttribute("href");"undefined"!=typeof dataLayer&&dataLayer.push({event:"highlight-and-share",hasShareText:e,hasSharePostUrl:i,hasSharePostTitle:l,hasShareType:o,hasSocialNetwork:t.getAttribute("data-type")}),window.open(a,"Highlight and Share","width=575,height=430,toolbar=false,menubar=false,location=false,status=false")}))}));var f=document.querySelectorAll(".has_copy");null!==f&&f.forEach((function(n){r(n)&&n.addEventListener("click",(function(n){n.preventDefault();var a=new Blob([e],{type:"text/plain"}),s=[new ClipboardItem(t({},a.type,a))];navigator.clipboard.write(s),"undefined"!=typeof dataLayer&&dataLayer.push({event:"highlight-and-share",hasShareText:e,hasSharePostUrl:i,hasSharePostTitle:l,hasShareType:o,hasSocialNetwork:"copy"})}))}))}},u=function(t){var e=window.innerWidth,l=window.innerHeight,i=window.getSelection().getRangeAt(0).getBoundingClientRect(),n=i.top,a=i.left,o=i.width,r=i.height;t.offsetWidth>e&&(t.style.maxWidth=e-20+"px",t.classList.add("has-no-margin-bottom"));var h=t.getBoundingClientRect(),d=h.width,c=h.height;if(t.classList.contains("orientation-vertical")){var u=a+window.scrollX-(d+15),g=n+window.scrollY-c/2+r/2;if(t.classList.add("has-no-margin-bottom"),n+window.scrollY-c/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var p=t.getBoundingClientRect();t.style.top=n+window.scrollY-p.height/2+r/2+"px",t.style.left=a+window.scrollX-p.width-15+"px"}else if(n+window.scrollY+c/2>l){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var w=t.getBoundingClientRect();t.style.top=n+window.scrollY-w.height/2+r/2+"px",t.style.left=a+window.scrollX-w.width-15+"px"}else t.style.left=u+"px",t.style.top=g+"px",t.classList.remove("has-no-margin-bottom")}else{var f=a+window.scrollX+o/2-d/2,y=n+window.scrollY-c-15;t.classList.add("has-no-margin-bottom"),f<0?t.style.left="15px":f+s>e?t.style.right="15px":(t.style.left=f+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=y+"px"}},g=function(t,e){var l=window.innerWidth,i=window.innerHeight,n=e.getBoundingClientRect(),a=n.top,o=n.left,r=n.width,h=n.height,d=t.getBoundingClientRect(),c=d.width,u=d.height;if(t.classList.contains("orientation-vertical")){var g=o+window.scrollX-(c+15),p=a+window.scrollY-u/2+h/2;if(t.classList.add("has-no-margin-bottom"),a+window.scrollY-u/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var w=t.getBoundingClientRect();t.style.top=a+window.scrollY-w.height/2+h/2+"px";var f=o+window.scrollX-w.width-15;t.style.left=f<0?"15px":f+"px"}else if(a+window.scrollY+u/2>i){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var y=t.getBoundingClientRect();t.style.top=a+window.scrollY-y.height/2+h/2+"px";var m=o+window.scrollX-y.width-15;t.style.left=m<0?"15px":m+"px"}else t.style.left=g+"px",t.style.top=p+"px",t.classList.remove("has-no-margin-bottom")}else{var v=o+window.scrollX+r/2-c/2,x=a+window.scrollY-u-15;t.classList.add("has-no-margin-bottom"),v<0?t.style.left="15px":v+s>l?t.style.right="15px":(t.style.left=v+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=x+"px"}},p=function(t,e){var l=window.innerWidth,i=window.innerHeight,n=e.getBoundingClientRect(),a=n.top,o=n.left,r=n.width,h=n.height;t.getBoundingClientRect().width>l&&(t.style.maxWidth=l-20+"px",t.classList.add("has-no-margin-bottom"));var d=t.getBoundingClientRect(),c=d.width,u=d.height;if(t.classList.contains("orientation-vertical")){var g=o+window.scrollX-(c+15),p=a+window.scrollY-u/2+h/2;if(t.classList.add("has-no-margin-bottom"),a+window.scrollY-u/2<0){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var w=t.getBoundingClientRect();t.style.top=a+window.scrollY-w.height/2+h/2+"px";var f=o+window.scrollX-w.width-15;t.style.left=f<0?"15px":f+"px"}else if(a+window.scrollY+u/2>i){t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr";var y=t.getBoundingClientRect();t.style.top=a+window.scrollY-y.height/2+h/2+"px";var m=o+window.scrollX-y.width-15;t.style.left=m<0?"15px":m+"px"}else t.style.left=g+"px",t.style.top=p+"px",t.classList.remove("has-no-margin-bottom")}else{var v=o+window.scrollX+r/2-c/2,x=a+window.scrollY-u-15;t.classList.add("has-no-margin-bottom"),v<0?t.style.left="15px":v+s>l?t.style.right="15px":(t.style.left=v+"px",t.classList.remove("has-no-margin-bottom")),t.style.top=x+"px"}},w=e.content;if(""!==w){var f=document.querySelectorAll(w);null!==f&&f.forEach((function(t){t.addEventListener("mouseup",(function(t){!function(t){var e,l,i;h();var a=document.defaultView.getSelection(),o=a.toString().trim();if(""!==o)if(a!==n){n=a;var s=t.target.closest(".has-content-area"),r=null!==(e=s.dataset.url)&&void 0!==e?e:window.location.href,d=null!==(l=s.dataset.title)&&void 0!==l?l:document.title,u=null!==(i=s.dataset.hashtags)&&void 0!==i?i:"";c(o,d,r,u,"selection")}else n=null}(t)}))}));var y=document.querySelectorAll(".has-inline-text");null!==y&&y.forEach((function(t){t.addEventListener("click",(function(e){!function(t,e){var l,i,a;if(h(),e!==n){n=e;var o=e.innerText.trim();if(""!==o){var s=t.target.closest(".has-content-area"),r=null!==(l=s.dataset.url)&&void 0!==l?l:window.location.href,d=null!==(i=s.dataset.title)&&void 0!==i?i:document.title,u=null!==(a=s.dataset.hashtags)&&void 0!==a?a:"";c(o,d,r,u,"inline",e)}}else n=null}(e,t)}))}));var m=document.querySelectorAll(".has-click-prompt");null!==m&&m.forEach((function(t){t.addEventListener("click",(function(e){var l,i,a;if(e.preventDefault(),h(),t!==n){n=t;var o=t.parentNode.querySelector(".has-click-to-share-text").getAttribute("data-text-full"),s=t.closest(".has-content-area"),r=null!==(l=s.dataset.url)&&void 0!==l?l:window.location.href,d=null!==(i=s.dataset.title)&&void 0!==i?i:document.title,u=null!==(a=s.dataset.hashtags)&&void 0!==a?a:"";c(o,d,r,u,"cta",t.closest(".has-click-to-share-wrapper"))}else n=null}))}))}}}()})();
//# sourceMappingURL=highlight-and-share.js.map