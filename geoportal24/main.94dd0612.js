!function(e){function t(t){for(var n,r,i=t[0],u=t[1],c=0,s=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);s.length;)s.shift()()}var n={},o={1:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+({0:"app-view",2:"vendors~app-view"}[e]||e)+"."+{0:"f59663bd",2:"3609eddf",3:"a3328342"}[e]+".js"}(e);var a=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var a=u;r(r.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((o=o.apply(e,t||[])).next())}))};class r{onModuleLoad(){return o(this,void 0,void 0,(function*(){this.registerSW(),yield this.loadConfig(),yield this.initApp(),this.removeUnresolved()}))}loadConfig(){return o(this,void 0,void 0,(function*(){}))}initApp(){return o(this,void 0,void 0,(function*(){yield Promise.all([n.e(2),n.e(0)]).then(n.bind(null,3));const e=document.querySelector("#main"),t=document.createElement("app-view");e.appendChild(t)}))}registerSW(){return o(this,void 0,void 0,(function*(){if("serviceWorker"in navigator)try{const e=yield navigator.serviceWorker.register("./sw.js");console.log("Service worker registration succeeded:",e)}catch(e){console.log("ServiceWorker registration failed. Sorry about that.",e)}else console.log("Your browser does not support ServiceWorker.")}))}removeUnresolved(){document.querySelector("#main").removeAttribute("unresolved")}}const i=window.customElements.define;window.customElements.define=(e,t,n)=>{customElements.get(e)?console.warn(e+" has been defined twice"):i.call(window.customElements,e,t,n)},window.addEventListener("load",()=>{(new r).onModuleLoad()})}]);