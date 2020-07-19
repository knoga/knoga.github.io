/*! For license information please see vendors~maps-control.js.LICENSE.txt?ver=23a5faf0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{19:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var n=s(57),i=s(7);const o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},r);function l(e,t,s,n){!function(e,t,s){const n=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let o=0;o<i.length;o++){let r=i[o];if(!(r in s))if(n)t[r]=e[r];else{let s=Object.getOwnPropertyDescriptor(e,r);s&&(s.configurable=!0,Object.defineProperty(t,r,s))}}}(t,e,n);for(let e in o)t[e]&&(s[e]=s[e]||[],s[e].push(t[e]))}function c(e,t){for(const s in t){const n=e[s],i=t[s];e[s]=!("value"in i)&&n&&"value"in n?Object.assign({value:n.value},i):i}}const d=Object(n.a)(HTMLElement);function h(e,t,s){let n;const o={};class d extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)c(t,n[e].properties);return c(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,s=0;s<n.length;s++)e=n[s],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=o.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=d.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),i.e&&h(e);const t=Object.getPrototypeOf(this);let s=o.beforeRegister;if(s)for(let e=0;e<s.length;e++)s[e].call(t);if(s=o.registered,s)for(let e=0;e<s.length;e++)s[e].call(t)}}_applyListeners(){super._applyListeners();const e=o.listeners;if(e)for(let t=0;t<e.length;t++){const s=e[t];if(s)for(let e in s)this._addMethodEventListenerToNode(this,e,s[e])}}_ensureAttributes(){const e=o.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const s=e[t];for(let e in s)this._ensureAttribute(e,s[e])}super._ensureAttributes()}ready(){super.ready();let e=o.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=o.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=o.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,s){super.attributeChanged();let n=o.attributeChanged;if(n)for(let i=0;i<n.length;i++)n[i].call(this,e,t,s)}}if(s){Array.isArray(s)||(s=[s]);let e=t.prototype.behaviors;n=function e(t,s,n){s=s||[];for(let i=t.length-1;i>=0;i--){let o=t[i];o?Array.isArray(o)?e(o,s):s.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&s.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return s}(s,null,e),d.prototype.behaviors=e?e.concat(s):n}const h=t=>{n&&function(e,t,s){for(let n=0;n<t.length;n++)l(e,t[n],s,a)}(t,n,o),l(t,e,o,r)};return i.e||h(d.prototype),d.generatedFrom=e,d}s(1);const u=function(e){let t;return t="function"==typeof e?e:u.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};u.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let s=t?t(d):d;return s=h(e,s,e.behaviors),s.is=s.prototype.is=e.is,s}},23:function(e,t,s){"use strict";s.d(t,"a",(function(){return k}));var n=s(57),i=(s(19),s(37));s(1);var o=s(45),r=s(38),a=s(33),l=s(7),c=s(5);let d=!1;function h(){if(l.e&&!l.r){if(!d){d=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const u=Object(a.a)(Object(r.b)(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends u{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.m)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,s,n){this.mutableData=!0}connectedCallback(){h()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var p=s(9),m=s(11),_=s(13),f=s(32),v=s(10);const b=Object(r.b)(p.a);class y extends b{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!l.o,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),h()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=Object(c.a)(Object(c.a)(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let s={};s[this.as]=!0,s[this.indexAs]=!0,s[this.itemsIndexAs]=!0,this.__ctor=Object(i.c)(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:s,forwardHostProp:function(e,t){let s=this.__instances;for(let n,i=0;i<s.length&&(n=s[i]);i++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,s){if(Object(f.e)(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=s);let i=Object(f.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(i,s)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,s=this.__getMethodHost();return function(){return s[t].apply(s,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let s=0;s<t.length;s++)0===e.indexOf(t[s])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=m.a.debounce(this.__renderDebouncer,t>0?v.c.after(t):v.b,e.bind(this)),Object(_.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(_.b)()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),s=this.__calculateLimit(t.length);this.__updateInstances(e,s,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),l.o&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let s=0;s<e.length;s++)t[s]=s;return this.__filterFn&&(t=t.filter((t,s,n)=>this.__filterFn(e[t],s,n))),this.__sortFn&&t.sort((t,s)=>this.__sortFn(e[t],e[s])),t}__calculateLimit(e){let t=e;const s=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-s,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-s,0),this.__chunkCount),t=Math.min(s+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,s){const n=this.__itemsIdxToInstIdx={};let i;for(i=0;i<t;i++){let t=this.__instances[i],o=s[i],r=e[o];n[o]=i,t?(t._setPendingProperty(this.as,r),t._setPendingProperty(this.indexAs,i),t._setPendingProperty(this.itemsIndexAs,o),t._flushProperties()):this.__insertInstance(r,i,o)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const s=Object(c.a)(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];s.appendChild(n)}return t}__attachInstance(e,t){let s=this.__instances[e];t.insertBefore(s.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,s){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=s,new this.__ctor(n)}__insertInstance(e,t,s){const n=this.__stampInstance(e,t,s);let i=this.__instances[t+1],o=i?i.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let s=e.slice(6),n=s.indexOf("."),i=n<0?s:s.substring(0,n);if(i==parseInt(i,10)){let e=n<0?"":s.substring(n+1);this.__handleObservedPaths(e);let o=this.__itemsIdxToInstIdx[i],r=this.__instances[o];if(r){let s=this.as+(e?"."+e:"");r._setPendingPropertyOrPath(s,t,!1,!0),r._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(i.a)(this.template,e)}}customElements.define(y.is,y);class g extends p.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=m.a.debounce(this.__renderDebouncer,v.b,()=>this.__render()),Object(_.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=Object(c.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),h()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:Object(c.a)(e).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=Object(c.a)(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(Object(c.a)(this).previousSibling!==t[t.length-1])for(let s,n=0;n<t.length&&(s=t[n]);n++)Object(c.a)(e).insertBefore(s,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){Object(_.b)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),l.o&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const x=l.c?class extends g{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(l.m&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const s=t._bindTemplate(this.__template,!0);s.runEffects=(e,t,s)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(n.changedProps,t)),e(t,s);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:e,changedProps:{}}),s)for(const e in t){const t=Object(f.g)(e);n.changedProps[t]=this.__dataHost[t]}else Object.assign(n.changedProps,t)},this.__instance=t._stampTemplate(this.__template,s),Object(c.a)(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Object(i.b)(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends g{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Object(i.c)(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(f.g)(e)]=!0))}})),this.__instance=new this.__ctor,Object(c.a)(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=Object(c.a)(e[0]).parentNode;if(t){t=Object(c.a)(t);for(let s,n=0;n<e.length&&(s=e[n]);n++)t.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(x.is,x);var w=s(4),C=s(55),A=s(24);let O=Object(w.a)(e=>{let t=Object(A.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let s=t.path;if(s==JSCompiler_renameProperty("items",this)){let s=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=Object(C.a)(s,n);this.__applySplices(e)}this.__lastItems=s,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=s.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let s=0;s<e.length;s++){let n=e[s];t.forEach((e,s)=>{e<n.index||(e>=n.index+n.removed.length?t.set(s,e+n.addedCount-n.removed.length):t.set(s,-1))});for(let e=0;e<n.addedCount;e++){let s=n.index+e;t.has(this.items[s])&&t.set(this.items[s],s)}}this.__updateLinks();let s=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null,t.delete(n)):s++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((s,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let s;this.__selectedMap.delete(e),this.multi&&(s=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),s,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(p.a);class E extends O{static get is(){return"array-selector"}static get template(){return null}}customElements.define(E.is,E);s(14);let S;S=r.a._mutablePropertyChange;Boolean;s(2);const k=Object(n.a)(HTMLElement).prototype},36:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));s(1);var n=s(55),i=s(10),o=s(5);function r(e){return"slot"===e.localName}let a=class{static getFlattenedNodes(e){const t=Object(o.a)(e);return r(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>r(e)?(e=e,Object(o.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){r(this._target)?this._listenSlots([this._target]):Object(o.a)(this._target).children&&(this._listenSlots(Object(o.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){r(this._target)?this._unlistenSlots([this._target]):Object(o.a)(this._target).children&&(this._unlistenSlots(Object(o.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.b.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=Object(n.a)(t,this._effectiveNodes);for(let t,n=0;n<s.length&&(t=s[n]);n++)for(let s,n=0;n<t.removed.length&&(s=t.removed[n]);n++)e.removedNodes.push(s);for(let n,i=0;i<s.length&&(n=s[i]);i++)for(let s=n.index;s<n.index+n.addedCount;s++)e.addedNodes.push(t[s]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];r(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];r(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}}},37:function(e,t,s){"use strict";s.d(t,"b",(function(){return u})),s.d(t,"c",(function(){return g})),s.d(t,"a",(function(){return x}));s(1);var n=s(45),i=s(38),o=s(7),r=s(5);let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(n.a)(l),d=Object(i.a)(c);const h=Object(n.a)(class{});function u(e,t){for(let s=0;s<t.length;s++){let n=t[s];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(r.a)(Object(r.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&Object(r.a)(Object(r.a)(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class p extends h{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(e&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,s(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,s)}}_showHideChildren(e){u(e,this.children)}_setUnmanagedPropertyToNode(e,t,s){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(e,t,s)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const m=Object(i.a)(p);function _(e){let t=e.__dataHost;return t&&t._methodHost||t}function f(e,t,s){let n=s.mutableData?m:p;g.mixin&&(n=g.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=s,i.prototype._bindTemplate(e),function(e,t,s,n){let i=s.hostProps||{};for(let t in n.instanceProps){delete i[t];let s=n.notifyInstanceProp;s&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:y(t,s)})}if(n.forwardHostProp&&t.__dataHost)for(let t in i)s.hasHostProps||(s.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,s){e.__dataHost._setPendingPropertyOrPath("_host_"+t,s[t],!0,!0)}})}(i,e,t,s),i}function v(e,t,s,n){let i=s.forwardHostProp;if(i&&t.hasHostProps){const h="template"==e.localName;let u=t.templatizeTemplateClass;if(!u){if(h){let e=s.mutableData?d:c;class n extends e{}u=t.templatizeTemplateClass=n}else{const s=e.constructor;class n extends s{}u=t.templatizeTemplateClass=n}let r=t.hostProps;for(let e in r)u.prototype._addPropertyEffect("_host_"+e,u.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:b(e,i)}),u.prototype._createNotifyingProperty("_host_"+e);o.g&&n&&function(e,t,s){const n=s.constructor._properties,{propertyEffects:i}=e,{instanceProps:o}=t;for(let e in i)if(!(n[e]||o&&o[e])){const t=i[e];for(let s=0;s<t.length;s++){const{part:n}=t[s].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,s,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),h)l=u,a=r=e,Object.setPrototypeOf(r,l.prototype),new l,a=null,e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,u.prototype);const s=t.hostProps;for(let t in s)if(t="_host_"+t,t in e){const s=e[t];delete e[t],e.__data[t]=s}}}var r,l}function b(e,t){return function(e,s,n){t.call(e.__templatizeOwner,s.substring("_host_".length),n[s])}}function y(e,t){return function(e,s,n){t.call(e.__templatizeOwner,e,s,n[s])}}function g(e,t,s){if(o.m&&!_(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(s=s||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:p)._parseTemplate(e),i=n.templatizeInstanceClass;i||(i=f(e,n,s),n.templatizeInstanceClass=i);const r=_(e);v(e,n,s,r);let a=class extends i{};return a.prototype._methodHost=r,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a=a,a}function x(e,t){let s;for(;t;)if(s=t.__dataHost?t:t.__templatizeInstance){if(s.__dataHost==e)return s;t=s.__dataHost}else t=Object(r.a)(t).parentNode;return null}},38:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return r}));var n=s(4);function i(e,t,s,n,i){let o;i&&(o="object"==typeof s&&null!==s,o&&(n=e.__dataTemp[t]));let r=n!==s&&(n==n||s==s);return o&&r&&(e.__dataTemp[t]=s),r}const o=Object(n.a)(e=>class extends e{_shouldPropertyChange(e,t,s){return i(this,e,t,s,!0)}}),r=Object(n.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,s){return i(this,e,t,s,this.mutableData)}});o._mutablePropertyChange=i},44:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return u}));s(1);var n=s(5),i=(s(7),s(36));s(13),s(11);const o=Element.prototype,r=o.matches||o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,a=function(e,t){return r.call(e,t)};class l{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new i.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(n.a)(this.node).contains(e))return!0;let t=e,s=e.ownerDocument;for(;t&&t!==s&&t!==this.node;)t=Object(n.a)(t).parentNode||Object(n.a)(t).host;return t===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=Object(n.a)(this.node).assignedSlot;for(;t;)e.push(t),t=Object(n.a)(t).assignedSlot;return e}importNode(e,t){let s=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(s).importNode(e,t)}getEffectiveChildNodes(){return i.a.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),s=[];for(let n,i=0,o=t.length;i<o&&(n=t[i]);i++)n.nodeType===Node.ELEMENT_NODE&&a(n,e)&&s.push(n);return s}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function c(e,t){for(let s=0;s<t.length;s++){let n=t[s];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class d{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let h=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),c(e.prototype,["classList"]),h=e,Object.defineProperties(d.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&u(e).getOwnerRoot(),s=this.path;for(let e=0;e<s.length;e++){const n=s[e];if(u(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let s=0;s<t.length;s++){let n=t[s];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let s=0;s<t.length;s++){let n=t[s];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(l.prototype,["textContent","innerHTML","className"]);const u=function(e){if((e=e||document)instanceof h)return e;if(e instanceof d)return e;let t=e.__domApi;return t||(t=e instanceof Event?new d(e):new h(e),e.__domApi=t),t}},54:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));s(1);let n=!1,i=[],o=[];function r(){n=!0,requestAnimationFrame((function(){n=!1,a(i),setTimeout((function(){!function(e){for(let t=0,s=e.length;t<s;t++)l(e.shift())}(o)}))}))}function a(e){for(;e.length;)l(e.shift())}function l(e){const t=e[0],s=e[1],n=e[2];try{s.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function c(e,t,s){n||r(),o.push([e,t,s])}},55:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));s(1);function n(e,t,s){return{index:e,removed:t,addedCount:s}}function i(e,t,s,i,o,a){let l,c=0,d=0,h=Math.min(s-t,a-o);if(0==t&&0==o&&(c=function(e,t,s){for(let n=0;n<s;n++)if(!r(e[n],t[n]))return n;return s}(e,i,h)),s==e.length&&a==i.length&&(d=function(e,t,s){let n=e.length,i=t.length,o=0;for(;o<s&&r(e[--n],t[--i]);)o++;return o}(e,i,h-c)),o+=c,a-=d,(s-=d)-(t+=c)==0&&a-o==0)return[];if(t==s){for(l=n(t,[],0);o<a;)l.removed.push(i[o++]);return[l]}if(o==a)return[n(t,[],s-t)];let u=function(e){let t=e.length-1,s=e[0].length-1,n=e[t][s],i=[];for(;t>0||s>0;){if(0==t){i.push(2),s--;continue}if(0==s){i.push(3),t--;continue}let o,r=e[t-1][s-1],a=e[t-1][s],l=e[t][s-1];o=a<l?a<r?a:r:l<r?l:r,o==r?(r==n?i.push(0):(i.push(1),n=r),t--,s--):o==a?(i.push(3),t--,n=a):(i.push(2),s--,n=l)}return i.reverse(),i}(function(e,t,s,n,i,o){let a=o-i+1,l=s-t+1,c=new Array(a);for(let e=0;e<a;e++)c[e]=new Array(l),c[e][0]=e;for(let e=0;e<l;e++)c[0][e]=e;for(let s=1;s<a;s++)for(let o=1;o<l;o++)if(r(e[t+o-1],n[i+s-1]))c[s][o]=c[s-1][o-1];else{let e=c[s-1][o]+1,t=c[s][o-1]+1;c[s][o]=e<t?e:t}return c}(e,t,s,i,o,a));l=void 0;let p=[],m=t,_=o;for(let e=0;e<u.length;e++)switch(u[e]){case 0:l&&(p.push(l),l=void 0),m++,_++;break;case 1:l||(l=n(m,[],0)),l.addedCount++,m++,l.removed.push(i[_]),_++;break;case 2:l||(l=n(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=n(m,[],0)),l.removed.push(i[_]),_++}return l&&p.push(l),p}function o(e,t){return i(e,0,e.length,t,0,t.length)}function r(e,t){return e===t}},56:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));s(23);var n=s(19);class i{constructor(e){i[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return i.types[e]&&i.types[e][t]}set value(e){var t=this.type,s=this.key;t&&s&&(t=i.types[t]=i.types[t]||{},null==e?delete t[s]:t[s]=e)}get list(){if(this.type){var e=i.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}i[" "]=function(){},i.types={};var o=i.types;Object(n.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,s){var n=new i({type:e,key:t});return void 0!==s&&s!==n.value?n.value=s:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new i({type:this.type,key:e}).value}})},57:function(e,t,s){"use strict";s.d(t,"a",(function(){return ve}));var n=s(42);class i{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function o(e){return function e(t,s){let n=s.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;n=s.substring(e,t.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(d.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let i=t.parsedSelector=t.selector=n.trim();t.atRule=0===i.indexOf(p),t.atRule?0===i.indexOf(u)?t.type=a.MEDIA_RULE:i.match(d.keyframesRule)&&(t.type=a.KEYFRAMES_RULE,t.keyframesName=t.selector.split(d.multipleSpaces).pop()):0===i.indexOf(h)?t.type=a.MIXIN_RULE:t.type=a.STYLE_RULE}let i=t.rules;if(i)for(let t,n=0,o=i.length;n<o&&(t=i[n]);n++)e(t,s);return t}(function(e){let t=new i;t.start=0,t.end=e.length;let s=t;for(let n=0,o=e.length;n<o;n++)if(e[n]===l){s.rules||(s.rules=[]);let e=s,t=e.rules[e.rules.length-1]||null;s=new i,s.start=n+1,s.parent=e,s.previous=t,e.rules.push(s)}else e[n]===c&&(s.end=n+1,s=s.parent||t);return t}(e=e.replace(d.comments,"").replace(d.port,"")),e)}function r(e,t,s=""){let n="";if(e.cssText||e.rules){let s=e.rules;if(s&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(h)}(s))for(let e,i=0,o=s.length;i<o&&(e=s[i]);i++)n=r(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(d.mixinApply,"").replace(d.varApply,"")}(e=function(e){return e.replace(d.customProp,"").replace(d.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(s+=e.selector+" "+l+"\n"),s+=n,e.selector&&(s+=c+"\n\n")),s}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},h="--",u="@media",p="@";var m=s(41);const _=new Set;function f(e){const t=e.textContent;if(!_.has(t)){_.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function v(e){return e.hasAttribute("shady-unscoped")}function b(e,t){return e?("string"==typeof e&&(e=o(e)),t&&g(e,t),r(e,n.c)):""}function y(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=o(e.textContent)),e.__cssRules||null}function g(e,t,s,n){if(!e)return;let i=!1,o=e.type;if(n&&o===a.MEDIA_RULE){let t=e.selector.match(m.a);t&&(window.matchMedia(t[1]).matches||(i=!0))}o===a.STYLE_RULE?t(e):s&&o===a.KEYFRAMES_RULE?s(e):o===a.MIXIN_RULE&&(i=!0);let r=e.rules;if(r&&!i)for(let e,i=0,o=r.length;i<o&&(e=r[i]);i++)g(e,t,s,n)}function x(e,t){let s=0;for(let n=t,i=e.length;n<i;n++)if("("===e[n])s++;else if(")"===e[n]&&0==--s)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function w(e){if(void 0!==n.a)return n.a;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function C(e){return""!==w(e)}var A=s(40);const O=/;\s*/m,E=/^\s*(initial)|(inherit)\s*$/,S=/\s*!important/;class k{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let M=null;class L{constructor(){this._currentElement=null,this._measureElement=null,this._map=new k}detectMixin(e){return Object(A.a)(e)}gatherStyles(e){const t=function(e){const t=[],s=e.querySelectorAll("style");for(let e=0;e<s.length;e++){const i=s[e];v(i)?n.d||(f(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}(e.content);if(t){const s=document.createElement("style");return s.textContent=t,e.content.insertBefore(s,e.content.firstChild),s}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const s=e._gatheredStyle;return s?this.transformStyle(s,t):null}transformStyle(e,t=""){let s=y(e);return this.transformRules(s,t),e.textContent=b(s),s}transformCustomStyle(e){let t=y(e);return g(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=b(t),t}transformRules(e,t){this._currentElement=t,g(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(m.c,(e,s,n,i)=>this._produceCssProperties(e,s,n,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const s={};let n=!1;return g(t,t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(s,this._cssTextToMap(t.parsedCssText))}),s}_consumeCssProperties(e,t){let s=null;for(;s=m.b.exec(e);){let n=s[0],i=s[1],o=s.index,r=o+n.indexOf("@apply"),a=o+n.length,l=e.slice(0,r),c=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(i,d);e=`${l}${h}${c}`,m.b.lastIndex=o+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(O,"");let s=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let i,o,r;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(i in a)r=t&&t[i],o=[i,": var(",e,"_-_",i],r&&o.push(",",r.replace(S,"")),o.push(")"),S.test(a[i])&&o.push(" !important"),s.push(o.join(""))}return s.join("; ")}_replaceInitialOrInherit(e,t){let s=E.exec(t);return s&&(t=s[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let s,n,i=e.split(";"),o={};for(let e,r,a=0;a<i.length;a++)e=i[a],e&&(r=e.split(":"),r.length>1&&(s=r[0].trim(),n=r.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(s,n)),o[s]=n));return o}_invalidateMixinEntry(e){if(M)for(let t in e.dependants)t!==this._currentElement&&M(t)}_produceCssProperties(e,t,s,n,i){if(s&&function e(t,s){let n=t.indexOf("var(");if(-1===n)return s(t,"","","");let i=x(t,n+3),o=t.substring(n+4,i),r=t.substring(0,n),a=e(t.substring(i+1),s),l=o.indexOf(",");return-1===l?s(r,o.trim(),"",a):s(r,o.substring(0,l).trim(),o.substring(l+1).trim(),a)}(s,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let o=this._consumeCssProperties(""+n,i),r=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(o,!0),l=a,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let h,u,p=[],m=!1;for(h in l)u=a[h],void 0===u&&(u="initial"),d&&!(h in d)&&(m=!0),p.push(`${t}_-_${h}: ${u}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),s&&(r=`${e};${r}`),`${r}${p.join("; ")};`}}L.prototype.detectMixin=L.prototype.detectMixin,L.prototype.transformStyle=L.prototype.transformStyle,L.prototype.transformCustomStyle=L.prototype.transformCustomStyle,L.prototype.transformRules=L.prototype.transformRules,L.prototype.transformRule=L.prototype.transformRule,L.prototype.transformTemplate=L.prototype.transformTemplate,L.prototype._separator="_-_",Object.defineProperty(L.prototype,"invalidCallback",{get:()=>M,set(e){M=e}});var z=L;var T={};const I="_applyShimCurrentVersion",P="_applyShimNextVersion",j=Promise.resolve();function N(e){let t=T[e];t&&function(e){e[I]=e[I]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[P]=(e[P]||0)+1}(t)}function H(e){return e[I]===e[P]}function R(e){return!H(e)&&e._applyShimValidatingVersion===e[P]}function D(e){e._applyShimValidatingVersion=e[P],e._validating||(e._validating=!0,j.then((function(){e[I]=e[P],e._validating=!1})))}s(60);const V=new z;class F{constructor(){this.customStyleInterface=null,V.invalidCallback=N}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{V.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),C(e))return;T[t]=e;let s=V.transformTemplate(e,t);e._styleAst=s}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let s=e[t],n=this.customStyleInterface.getStyleForCustomStyle(s);n&&V.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Object(A.c)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,s="",n="";return t?t.indexOf("-")>-1?s=t:(n=t,s=e.getAttribute&&e.getAttribute("is")||""):(s=e.is,n=e.extends),{is:s,typeExtension:n}}(e),s=T[t];if((!s||!C(s))&&s&&!H(s)){R(s)||(this.prepareTemplate(s,t),D(s));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=s._styleAst,e.textContent=b(s._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new F;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,s,n){e.flushCustomStyles(),e.prepareTemplate(t,s)},prepareTemplateStyles(e,t,s){window.ShadyCSS.prepareTemplate(e,t,s)},prepareTemplateDom(e,t){},styleSubtree(t,s){e.flushCustomStyles(),e.styleSubtree(t,s)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Object(A.b)(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=V;var B=s(24),q=s(33),U=s(49),G=s(4);const Y=/:host\(:dir\((ltr|rtl)\)\)/g,J=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,W=/:dir\((?:ltr|rtl)\)/,K=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),X=[];let Q=null,Z="";function $(){Z=document.documentElement.getAttribute("dir")}function ee(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Z)}}function te(){$(),Z=document.documentElement.getAttribute("dir");for(let e=0;e<X.length;e++)ee(X[e])}const se=Object(G.a)(e=>{K||Q||($(),Q=new MutationObserver(te),Q.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Object(U.a)(e);class s extends t{static _processStyleText(e,s){return e=t._processStyleText.call(this,e,s),!K&&W.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Y,':host([dir="$1"])'),t=t.replace(J,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Q&&Q.takeRecords().length&&te(),X.push(this),ee(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=X.indexOf(this);e>-1&&X.splice(e,1)}}}return s.__activateDir=!1,s});s(54);function ne(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?ne():window.addEventListener("DOMContentLoaded",ne);var ie=s(44),oe=s(22),re=s(11),ae=s(10),le=s(32),ce=s(5);s(1);const de=window.ShadyDOM,he=window.ShadyCSS;function ue(e,t){return Object(ce.a)(e).getRootNode()===t}var pe=s(7);const me=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};Object(G.a)(e=>{const t=Object(B.a)(e);let s=me(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return s.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,s,n){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==s&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ce.a)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,s,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});var _e=s(51);let fe=window.ShadyCSS;const ve=Object(G.a)(e=>{const t=Object(q.a)(Object(B.a)(e)),s=B.b?t:se(t),n=me(s),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends s{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,s){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,s,null)}setAttribute(e,t){if(pe.d&&!this._legacyForceObservedAttributes){const s=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,s,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(pe.d&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return pe.d&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Object(_e.b)(this.prototype)),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,s,n){t!==s&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==s&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ce.a)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,s,n),this.attributeChanged(e,t,s)))}attributeChanged(e,t,s){}_initializeProperties(){if(pe.e&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),pe.d&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,s=e.length;t<s;t++){const s=e[t];this.__attributeReaction(s.name,null,s.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,s){this._propertyToAttribute(e,t,s)}serializeValueToAttribute(e,t,s){this._valueToNodeAttribute(s||this,e,t)}extend(e,t){if(!e||!t)return e||t;let s=Object.getOwnPropertyNames(t);for(let n,i=0;i<s.length&&(n=s[i]);i++){let s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(e,n,s)}return e}mixin(e,t){for(let s in t)e[s]=t[s];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,s){s=s||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=t;let i=s.node||this;return Object(ce.a)(i).dispatchEvent(n),n}listen(e,t,s){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),i=n.get(e);i||(i={},n.set(e,i));let o=t+s;i[o]||(i[o]=this._addMethodEventListenerToNode(e,t,s,this))}unlisten(e,t,s){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),i=t+s,o=n&&n[i];o&&(this._removeEventListenerFromNode(e,t,o),n[i]=null)}setScrollDirection(e,t){Object(oe.f)(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=Object(ce.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=Object(ie.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ie.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(ie.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let s,n=0;s=e[n];n++)s.nodeType!==Node.COMMENT_NODE&&t.push(s.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?Object(ie.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object(ce.a)(this).contains(e)&&Object(ce.a)(this).getRootNode()===Object(ce.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(ce.a)(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!de||!he)return null;if(!de.handlesDynamicScoping)return null;const s=he.ScopingShim;if(!s)return null;const n=s.scopeForNode(e),i=Object(ce.a)(e).getRootNode(),o=e=>{if(!ue(e,i))return;const t=Array.from(de.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const o=t[e];if(!ue(o,i))continue;const r=s.currentScopeForNode(o);r!==n&&(""!==r&&s.unscopeNode(o,r),s.scopeNode(o,n))}};if(o(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const s=e[t];for(let e=0;e<s.addedNodes.length;e++){const t=s.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&o(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return fe.getComputedStyleValue(this,e)}debounce(e,t,s){return this._debouncers=this._debouncers||{},this._debouncers[e]=re.a.debounce(this._debouncers[e],s>0?ae.c.after(s):ae.b,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?ae.c.run(e.bind(this),t):~ae.b.run(e.bind(this))}cancelAsync(e){e<0?ae.b.cancel(~e):ae.c.cancel(e)}create(e,t){let s=document.createElement(e);if(t)if(s.setProperties)s.setProperties(t);else for(let e in t)s[e]=t[e];return s}elementMatches(e,t){return Object(ie.b)(t||this,e)}toggleAttribute(e,t){let s=this;return 3===arguments.length&&(s=arguments[2]),1==arguments.length&&(t=!s.hasAttribute(e)),t?(Object(ce.a)(s).setAttribute(e,""),!0):(Object(ce.a)(s).removeAttribute(e),!1)}toggleClass(e,t,s){s=s||this,1==arguments.length&&(t=!s.classList.contains(e)),t?s.classList.add(e):s.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,s,n){n=n||this,this.transform("translate3d("+e+","+t+","+s+")",n)}arrayDelete(e,t){let s;if(Array.isArray(e)){if(s=e.indexOf(t),s>=0)return e.splice(s,1)}else{if(s=Object(le.a)(this,e).indexOf(t),s>=0)return this.splice(e,s,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o})},59:function(e,t,s){"use strict";var n=s(23),i=s(2);const o=i.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r);s(56);var a=s(19),l=s(44);Object(a.a)({_template:i.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:n.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},61:function(e,t,s){"use strict";s(17),s(18),s(29),s(31);const n=document.createElement("template");n.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content);const i=document.createElement("template");i.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content);s(14),s(15);const o=document.createElement("template");o.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(o.content);s(43);var r=s(2);const a=r.a`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"])[part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }

      :host([dir="rtl"].vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-border-radius) / 4);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host {
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }

      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
      }

      :host(:not([dir="rtl"]).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        content: var(--lumo-icons-angle-left);
        margin-left: calc(var(--lumo-space-m) * -1);
        padding-right: var(--lumo-space-m);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);const l=r.a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);var c=s(9),d=s(34),h=s(35);const u=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}};class p extends(u(Object(d.a)(Object(h.a)(c.a)))){static get template(){return r.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.2.0"}constructor(){super(),this.value}}customElements.define(p.is,p);const m=r.a`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(m.content);var _=s(36),f=s(53),v=s(11),b=s(10);const y=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new _.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,s,n){if(!n&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(s);const n=e[s];e.forEach(e=>e.selected=e===n),n&&!n.disabled&&this._scrollToItem(s)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let s;t&&!t.disabled&&(s=this.items.indexOf(t))>=0&&(this.selected=s)}_searchKey(e,t){this._searchReset=v.a.debounce(this._searchReset,b.c.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const s=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(s,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),s=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(s,t);return void(e>=0&&this._focus(e))}let n,i;const o=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(i=-o,n=s-o):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(i=o,n=s+o):"Home"===t?(i=1,n=0):"End"===t&&(i=-1,n=this.items.length-1),n=this._getAvailableIndex(n,i,e=>!(e.disabled||this._isItemHidden(e))),n>=0&&(this._focus(n),e.preventDefault())}_getAvailableIndex(e,t,s){const n=this.items.length;for(let i=0;"number"==typeof e&&i<n;i++,e+=t||1){e<0?e=n-1:e>=n&&(e=0);if(s(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),i=(this.items[e+1]||t).getBoundingClientRect(),o=(this.items[e-1]||t).getBoundingClientRect();let r=0;!this._isRTL&&i[s[1]]>=n[s[1]]||this._isRTL&&i[s[1]]<=n[s[1]]?r=i[s[1]]-n[s[1]]:(!this._isRTL&&o[s[0]]<=n[s[0]]||this._isRTL&&o[s[0]]>=n[s[0]])&&(r=o[s[0]]-n[s[0]]),this._scroll(r)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=f.a.detectScrollType(),s=f.a.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;f.a.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,s)}}},g=e=>class extends(y(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,s,n){if(!e||!t)return;if(n){const t=n.map(t=>e[t]);e.forEach(e=>e.selected=-1!==t.indexOf(e))}const i=this.selectedValues.slice(-1)[0];i&&!i.disabled&&this._scrollToItem(i)}_onMultipleClick(e){const t=this._filterItems(e.composedPath())[0],s=t&&!t.disabled?this.items.indexOf(t):-1;s<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(s)?this.selectedValues=this.selectedValues.filter(e=>e!==s):this.selectedValues=this.selectedValues.concat(s))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}};var x=s(46);class w extends(Object(x.a)(g(Object(d.a)(c.a)))){static get template(){return r.a`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.3.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof c.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(w.is,w);var C=s(33),A=s(22);Object(A.d)({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};const t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{const s=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,s.clientX,s.clientY)),Object(A.c)("tap"))},500)},touchmove:function(e){const t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),Object(A.c)("tap"))},fire:function(e,t,s){const n=this.info.sourceEvent,i=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});i.detail={x:t,y:s,sourceEvent:n},e.dispatchEvent(i),i.defaultPrevented&&n&&n.preventDefault&&n.preventDefault()}});s(23);var O=s(19);Object(O.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});class E extends class extends c.a{}{static get template(){return r.a`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(E.is,E);var S=s(13);class k extends p{static get is(){return"vaadin-context-menu-item"}}class M extends w{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(k.is,k),customElements.define(M.is,M);const L=e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return"rtl"===this.getAttribute("dir")}__forwardFocus(){const e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;const s=t.getBoundingClientRect(),n=e.$.overlay.$.content,i=getComputedStyle(n),o=this.$.overlay,r=o.hasAttribute("bottom-aligned")?s.bottom+parseFloat(i.paddingBottom):s.top-parseFloat(i.paddingTop);let a;e.$.overlay._setParentOverlay(o),o.theme?e.setAttribute("theme",o.theme):e.removeAttribute("theme"),n.style.minWidth="",document.documentElement.clientWidth-s.right>s.width?a=s.right:(a=s.left-s.width,n.style.minWidth=o.$.content.clientWidth+"px"),a=Math.max(a,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:a,y:r,children:t._item.children}}))}__itemsRenderer(e,t,s){this.__initMenu(e,t);e.querySelector(this.constructor.is).closeOn=t.closeOn;const n=e.querySelector("vaadin-context-menu-list-box");n.innerHTML="";Array.from(s.detail.children||t.items).forEach(e=>{let t;t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"),t instanceof p?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),n.appendChild(t)})}__toggleMenuComponentAttribute(e,t,s){s?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){const t=e.querySelector("vaadin-context-menu-list-box");this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}else{const s=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${s} hidden></${s}>\n      `,Object(S.b)();const n=e.querySelector("vaadin-context-menu-list-box");this.theme&&n.setAttribute("theme",this.theme),n.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>n.setAttribute("role","menu"));const i=e.querySelector(s);i.$.overlay.modeless=!0,i.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&i.close()),i.addEventListener("opened-changed",e=>{if(!e.detail.value){const e=n.querySelector("[expanded]");e&&(e.setAttribute("aria-expanded","false"),e.removeAttribute("expanded"))}}),n.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){const s=e.target.items[e.detail.value]._item;if(!s.children){const e={value:s};t.dispatchEvent(new CustomEvent("item-selected",{detail:e}))}n.selected=null}}),i.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),i.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{const s=this.__isRTL;!s&&37===e.keyCode||s&&39===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);const o=(e,s=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>o(e,s));else if(s){if(i.items!==s._item.children&&i.close(),!t.opened)return;s._item.children&&s._item.children.length?(s.setAttribute("aria-expanded","true"),s.setAttribute("expanded",""),this.__openSubMenu(i,s)):i.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",o),t.$.overlay.addEventListener("keydown",e=>{const t=this.__isRTL;(!t&&39===e.keyCode||t&&37===e.keyCode||13===e.keyCode||32===e.keyCode)&&o(e)})}}};var z=s(52),T=(s(16),s(37)),I=s(54);const P=Element.prototype,j=P.matches||P.matchesSelector||P.mozMatchesSelector||P.msMatchesSelector||P.oMatchesSelector||P.webkitMatchesSelector;let N=0;const H={},R=e=>{N++;const t="vaadin-overlay-content-"+N,s=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,s.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(s,t);const i=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(s.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(i.is,i),H[e]=t,t};class D extends(Object(d.a)(Object(h.a)(c.a))){static get template(){return r.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new _.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,s=document.documentElement.clientHeight;t&&s>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",s-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(I.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const s=`__${e}Handler`,n=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",n),delete this[s])};this[s]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");const e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");const e=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof D&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===D.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),D.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=D.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(T.c)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const s=e._templateRoot||(e._templateRoot=e.getRootNode());if(s!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(s.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(s.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"),t)if(e){const e=(e=>{const t=H[e]||R(e);return document.createElement(t)})(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,s,n){e!==t?this.template=void 0:s!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,s,n,i,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const r=this._oldOwner!==s||this._oldModel!==n;this._oldModel=n,this._oldOwner=s;const a=this._oldInstanceProps!==i||this._oldTemplate!==e;this._oldInstanceProps=i,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const c=this._oldOpened!==o;if(this._oldOpened=o,e&&a)this._stampOverlayTemplate(e,i);else if(t&&(l||c||r)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);o&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const s=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(s)),(t+=e)>=s.length?t=0:t<0&&(t=s.length-1),s[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return j.call(e,"input, select, textarea, button, object")?j.call(e,":not([disabled])"):j.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&j.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const s=e,n=this._normalizedTabIndex(s);let i,o=n>0;if(n>=0&&t.push(s),i="slot"===s.localName?s.assignedNodes({flatten:!0}):(s.shadowRoot||s).children,i)for(let e=0;e<i.length;e++)o=this._collectTabbableNodes(i[e],t)||o;return o}static _isVisible(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&(t=window.getComputedStyle(e),"hidden"!==t.visibility&&"none"!==t.display)}static _sortByTabIndex(e){const t=e.length;if(t<2)return e;const s=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,s)),i=this._sortByTabIndex(e.slice(s));return this._mergeSortByTabIndex(n,i)}static _mergeSortByTabIndex(e,t){const s=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?s.push(t.shift()):s.push(e.shift());return s.concat(e,t)}static _hasLowerTabOrder(e,t){const s=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===s||0===n?n>s:s>n}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const s=e.ownerDocument;for(;t&&t!==s&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=D.__attachedInstances.filter(e=>e!==this).pop();if(t){e=t.__zIndex+1}this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(D.is,D);const V=document.createElement("template");V.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]),\n      :host([end-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(V.content);class F extends D{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let s=e.bottom-t.height;const n=this.parentOverlay;if(n&&n.hasAttribute("bottom-aligned")){const e=getComputedStyle(n);s=s-parseFloat(e.bottom)-parseFloat(e.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:s,left:e.left,right:e.right,top:e.top,width:t.width}}}customElements.define(F.is,F);class B extends(Object(x.a)(Object(z.a)(L(Object(C.a)(c.a))))){static get template(){return r.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.4.0"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new _.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,s,n){e!==t?this._contentTemplate=void 0:s!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,s,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,n){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&s&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const s=this.$.overlay.style;s[e]=(parseInt(s[e])||0)+t+"px"}__alignOverlayPosition(){const e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","end-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));const{xMax:s,xMin:n,yMax:i,left:o,right:r,top:a,width:l}=e.getBoundaries();let c=this.__x||(this.__isRTL?r:o);const d=this.__y||a,h=document.documentElement.clientWidth,u=document.documentElement.clientHeight,p=e.parentOverlay;let m,_=!1;if(p)if(m=p.$.overlay.getBoundingClientRect(),p.hasAttribute("right-aligned")||p.hasAttribute("end-aligned")){const s=getComputedStyle(p),n=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),i=parseFloat(s[this.__isRTL?"left":"right"])+m.width;h-(i-(n(p,"Left")+n(e,"Right")))>l&&(this._setEndAligned(e),t[this.__isRTL?"left":"right"]=i+"px",_=!0)}else c<m.x&&(c-=l-m.width);_||(this.__isRTL?(c>h/2||c>n)&&!p?t.right=Math.max(0,h-c)+"px":p&&m.left>=m.width?t.right=h-m.right+m.width+"px":p?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left-e.getBoundingClientRect().width,m.right)+"px",this._setEndAligned(e)):(t.left=c+"px",this._setEndAligned(e)):(c<h/2||c<s)&&!p?t.left=c+"px":p&&h-m.width-m.left>=m.width?t.left=m.left+m.width+"px":p?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,m.left-e.getBoundingClientRect().width)+"px",this._setEndAligned(e)):(t.right=Math.max(0,h-c)+"px",this._setEndAligned(e))),d<u/2||d<i?t.top=d+"px":(t.bottom=Math.max(0,u-d)+"px",e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){const s="client"+t.toUpperCase(),n=e.changedTouches?e.changedTouches[0][s]:e[s];if(0===n){const s=e.target.getBoundingClientRect();return"x"===t?s.left:s.top+s.height}return n}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,s){A.b[t]?Object(A.a)(e,t,s):e.addEventListener(t,s)}_unlisten(e,t,s){A.b[t]?Object(A.e)(e,t,s):e.removeEventListener(t,s)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(B.is,B)},62:function(e,t,s){"use strict";s.d(t,"b",(function(){return z})),s.d(t,"a",(function(){return S}));var n=s(3);let i,o=0;function r(e){i=e}function a(){i=null,o=0}const l=Symbol("haunted.phase"),c=Symbol("haunted.hook"),d=Symbol("haunted.update"),h=Symbol("haunted.commit"),u=Symbol("haunted.effects"),p=Symbol("haunted.layoutEffects");class m{constructor(e,t){this.update=e,this.host=t,this[c]=new Map,this[u]=[],this[p]=[]}run(e){r(this);let t=e();return a(),t}_runEffects(e){let t=this[e];r(this);for(let e of t)e.call(this);a()}runEffects(){this._runEffects(u)}runLayoutEffects(){this._runEffects(p)}teardown(){this[c].forEach(e=>{"function"==typeof e.teardown&&e.teardown()})}}const _=Promise.resolve().then.bind(Promise.resolve());function f(){let e,t=[];function s(){e=null;let s=t;t=[];for(var n=0,i=s.length;n<i;n++)s[n]()}return function(n){t.push(n),null==e&&(e=_(s))}}const v=f(),b=f();class y{constructor(e,t){this.renderer=e,this.host=t,this.state=new m(this.update.bind(this),t),this[l]=null,this._updateQueued=!1}update(){this._updateQueued||(v(()=>{let e=this.handlePhase(d);b(()=>{this.handlePhase(h,e),b(()=>{this.handlePhase(u)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,t){switch(this[l]=e,e){case h:return this.commit(t),void this.runEffects(p);case d:return this.render();case u:return this.runEffects(u)}this[l]=null}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}function g(e){class t extends y{constructor(e,t,s){super(e,s||t),this.frag=t}commit(t){e(t,this.frag)}}return function(e,s,n){const i=(n||s||{}).baseElement||HTMLElement,{observedAttributes:o=[],useShadowDOM:r=!0,shadowRootInit:a={}}=n||s||{};class l extends i{constructor(){super(),!1===r?this._scheduler=new t(e,this):(this.attachShadow({mode:"open",...a}),this._scheduler=new t(e,this.shadowRoot,this))}static get observedAttributes(){return e.observedAttributes||o||[]}connectedCallback(){this._scheduler.update()}disconnectedCallback(){this._scheduler.teardown()}attributeChangedCallback(e,t,s){if(t===s)return;let n=""===s||s;Reflect.set(this,((e="")=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():""))(e),n)}}const c=new Proxy(i.prototype,{getPrototypeOf:e=>e,set(e,t,s,n){let i;if(t in e){if(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set)return i.set.call(n,s),!0;Reflect.set(e,t,s)}return i="symbol"==typeof t||"_"===t[0]?{enumerable:!0,configurable:!0,writable:!0,value:s}:function(e){let t=e;return Object.freeze({enumerable:!0,configurable:!0,get:()=>t,set(e){t=e,this._scheduler.update()}})}(s),Object.defineProperty(n,t,i),i.set&&i.set.call(n,s),!0}});return Object.setPrototypeOf(l.prototype,c),l}}class x{constructor(e,t){this.id=e,this.state=t}}function w(e,...t){let s=o++,n=i[c],r=n.get(s);return r||(r=new e(s,i,...t),n.set(s,r)),r.update(...t)}function C(e){return w.bind(null,e)}function A(e){return C(class extends x{constructor(t,s,n,i){super(t,s),e(s,this)}update(e,t){this.callback=e,this.lastValues=this.values,this.values=t}call(){this.values&&!this.hasChanged()||this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){"function"==typeof this._teardown&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function O(e,t){e[u].push(t)}A(O);const E=C(class extends x{constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,O(t,this)}update(e){if(this.state.virtual)throw new Error("can't be used with virtual components");return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};this.state.host.dispatchEvent(new CustomEvent("haunted.context",{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:s,value:n}=t;this.value=s?n:e.defaultValue,this._unsubscribe=s}teardown(){this._unsubscribe&&this._unsubscribe()}});C(class extends x{constructor(e,t,s,n){super(e,t),this.value=s(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}});A((function(e,t){e[p].push(t)}));const S=C(class extends x{constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),"function"==typeof s&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){if("function"==typeof e){const t=e,[s]=this.args;e=t(s)}this.makeArgs(e),this.state.update()}makeArgs(e){this.args=Object.freeze([e,this.updater])}});C(class extends x{constructor(e,t,s,n,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=void 0!==i?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const k=Array.prototype.includes;const{component:M,createContext:L}=function({render:e}){const t=g(e),s=function(e){return t=>{const s={Provider:class extends HTMLElement{constructor(){super(),this.listeners=new Set,this.addEventListener("haunted.context",this)}disconnectedCallback(){this.removeEventListener("haunted.context",this)}handleEvent(e){const{detail:t}=e;t.Context===s&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e((function({render:e}){return e(E(s))})),defaultValue:t};return s}}(t);return{component:t,createContext:s}}({render:n.c}),z=function(){const e=new WeakMap,t=new WeakMap;class s extends y{constructor(e,t){super(e,t),this.state.virtual=!0}render(){return this.state.run(()=>this.renderer.apply(this.host,this.args))}commit(e){this.host.setValue(e),this.host.commit()}teardown(){super.teardown();let s=t.get(this);e.delete(s)}}return function(i){return Object(n.a)((function(...n){return o=>{let r=e.get(o);r||(r=new s(i,o),e.set(o,r),t.set(r,o),function e(t,s,n=s.startNode){let i=n.parentNode,o=new MutationObserver(i=>{for(let r of i){if(k.call(r.removedNodes,n)){o.disconnect(),n.parentNode instanceof ShadowRoot?e(t,s):t.teardown();break}if(k.call(r.addedNodes,n.nextSibling)){o.disconnect(),e(t,s,n.nextSibling||void 0);break}}});o.observe(i,{childList:!0})}(r,o)),r.args=n,r.update()}}))}}()},63:function(e,t,s){"use strict";s(59),s(23);var n=s(56),i=s(19),o=s(44);Object(i.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new n.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var s=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(s){var n=Object(o.a)(e.root||e);return n.insertBefore(s,n.childNodes[0]),e._svgIcon=s}return null},removeIcon:function(e){e._svgIcon&&(Object(o.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(o.a)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,s){if(e){var n=e.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=n.getAttribute("viewBox")||"0 0 "+t+" "+t,r="pointer-events: none; display: block; width: 100%; height: 100%;";return s&&n.hasAttribute("mirror-in-rtl")&&(r+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",o),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=r,i.appendChild(n).removeAttribute("id"),i}return null}});const r=s(2).a`<iron-iconset-svg name="maps" size="24">
<svg><defs>
<g id="add-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z"></path></g>
<g id="beenhere"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></g>
<g id="directions"><path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path></g>
<g id="directions-bike"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path></g>
<g id="directions-boat"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"></path></g>
<g id="directions-bus"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></g>
<g id="directions-car"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="directions-railway"><path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"></path></g>
<g id="directions-run"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"></path></g>
<g id="directions-subway"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-transit"><path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"></path></g>
<g id="directions-walk"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path></g>
<g id="edit-location"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.56 10H9v-1.44l3.35-3.34 1.43 1.43L10.44 12zm4.45-4.45l-.7.7-1.44-1.44.7-.7c.15-.15.39-.15.54 0l.9.9c.15.15.15.39 0 .54z"></path></g>
<g id="ev-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 6v5h2l-4 7z"></path></g>
<g id="flight"><path d="M10.18 9"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="layers"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"></path></g>
<g id="layers-clear"><path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"></path></g>
<g id="local-activity"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-airport"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></g>
<g id="local-atm"><path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"></path></g>
<g id="local-bar"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"></path></g>
<g id="local-cafe"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"></path></g>
<g id="local-car-wash"><path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zm-5 0c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5zM7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5zm11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 13l1.5-4.5h11L19 13H5z"></path></g>
<g id="local-convenience-store"><path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"></path></g>
<g id="local-dining"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="local-drink"><path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"></path></g>
<g id="local-florist"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"></path></g>
<g id="local-gas-station"><path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="local-grocery-store"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="local-hospital"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"></path></g>
<g id="local-hotel"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"></path></g>
<g id="local-laundry-service"><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></g>
<g id="local-library"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></g>
<g id="local-mall"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path></g>
<g id="local-movies"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="local-offer"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></g>
<g id="local-parking"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></g>
<g id="local-pharmacy"><path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"></path></g>
<g id="local-phone"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></g>
<g id="local-pizza"><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="local-play"><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"></path></g>
<g id="local-post-office"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="local-printshop"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="local-see"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
<g id="local-shipping"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="local-taxi"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></g>
<g id="map"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path></g>
<g id="my-location"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="navigation"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path></g>
<g id="near-me"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></g>
<g id="person-pin"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"></path></g>
<g id="person-pin-circle"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z"></path></g>
<g id="pin-drop"><path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"></path></g>
<g id="place"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rate-review"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path></g>
<g id="restaurant"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"></path></g>
<g id="restaurant-menu"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path></g>
<g id="satellite"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"></path></g>
<g id="store-mall-directory"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="streetview"><path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z"></path><circle cx="18" cy="6" r="5"></circle><path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z"></path></g>
<g id="subway"><circle cx="15.5" cy="16" r="1"></circle><circle cx="8.5" cy="16" r="1"></circle><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3v6.88z"></path></g>
<g id="terrain"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"></path></g>
<g id="traffic"><path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"></path></g>
<g id="train"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="tram"><path d="M19 16.94V8.5c0-2.79-2.61-3.4-6.01-3.49l.76-1.51H17V2H7v1.5h4.75l-.76 1.52C7.86 5.11 5 5.73 5 8.5v8.44c0 1.45 1.19 2.66 2.59 2.97L6 21.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 20h-.08c1.69 0 2.58-1.37 2.58-3.06zm-7 1.56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-4.5H7V9h10v5z"></path></g>
<g id="transfer-within-a-station"><path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5zm3.02 4.25H14v1.5h5.51V23L22 20.5 19.51 18zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75"></path></g>
<g id="zoom-out-map"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(r.content)}}]);