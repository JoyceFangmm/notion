!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},d=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(n){p=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new T(r||[]);return i(a,"_invoke",{value:S(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var L={};p(L,d,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(F([])));_&&_!==o&&a.call(_,d)&&(L=_);var k=x.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,n){function r(o,i,c,d){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==t(p)&&a.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,d)}),(function(t){r("throw",t,c,d)})):n.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,d)}))}d(u.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,r){var o=h;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var d=P(c,r);if(d){if(d===g)continue;return d}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=f(t,e,r);if("normal"===u.type){if(o=r.done?v:y,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function P(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[d];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},j(O.prototype),p(O.prototype,u,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(k),p(k,l,"Generator"),p(k,d,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var d=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(d&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(d){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,a,i){try{var c=t[a](i),d=c.value}catch(u){return void n(u)}c.done?e(d):Promise.resolve(d).then(r,o)}System.register(["./index-legacy-827fdc72.js"],(function(t,r){"use strict";var o,a,i,c,d,u,l,p,s,f,h,y;return{setters:[function(t){o=t.d,a=t.u,i=t.o,c=t.c,d=t.a,u=t.w,l=t.E,p=t.b,s=t.p,f=t.e,h=t.f,y=t._}],execute:function(){var r=document.createElement("style");r.textContent="@media only screen and (max-width:767px){.hidden-xs-only{display:none!important}}@media only screen and (min-width:768px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:768px) and (max-width:991px){.hidden-sm-only{display:none!important}}@media only screen and (max-width:991px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:992px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:992px) and (max-width:1199px){.hidden-md-only{display:none!important}}@media only screen and (max-width:1199px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:1200px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1200px) and (max-width:1919px){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1919px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1920px){.hidden-xl-only{display:none!important}}.el-row[data-v-ddfbda9e]{margin-bottom:20px}.el-row[data-v-ddfbda9e]:last-child{margin-bottom:0}.el-col[data-v-ddfbda9e]{border-radius:4px}.grid-content[data-v-ddfbda9e]{border-radius:4px;min-height:76px;font-size:20px}[data-v-ddfbda9e]:root{--ep-c-bg-row: #f9fafc;--ep-c-bg-purple: #d3dce6;--ep-c-bg-purple-dark: #99a9bf;--ep-c-bg-purple-light: #e5e9f2}.dark[data-v-ddfbda9e]{--ep-c-bg-row: #18191a;--ep-c-bg-purple: #46494d;--ep-c-bg-purple-dark: #242526;--ep-c-bg-purple-light: #667180}.row-bg[data-v-ddfbda9e]{padding:10px 0;background-color:var(--ep-c-bg-row)}.ep-bg-purple-dark[data-v-ddfbda9e]{background:var(--ep-c-bg-purple-dark)}.ep-bg-purple[data-v-ddfbda9e]{background:var(--ep-c-bg-purple)}.ep-bg-purple-light[data-v-ddfbda9e]{background:var(--ep-c-bg-purple-light)}\n",document.head.appendChild(r);var m=function(t){return s("data-v-ddfbda9e"),t=t(),f(),t},v={class:"dark"},g=m((function(){return h("div",{class:"grid-content ep-bg-purple"},[h("div",null,"2024-04-12 09:28")],-1)})),b=m((function(){return h("div",{class:"grid-content ep-bg-purple"},null,-1)})),w="markdown/Export-51317f2f-8a40-4ba9-b7eb-d0704b8181e0/Life ffa2022abf62464dbd187b46e72c263a/Life2-About，H难过。 4b73f874ee4d433dac44b2800e0f6d71.md",x=o({__name:"Home",setup:function(t){a(),console.log("path--\x3e",w);var r=function(){var t,r=(t=e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(w);case 3:return n=t.sent,t.next=6,n.text();case 6:r=t.sent,console.log("text--\x3e",r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,d,"next",t)}function d(t){n(i,o,a,c,d,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return r(),function(t,e){var n=l,r=p;return i(),c("div",v,[d(r,{justify:"center"},{default:u((function(){return[d(n,{xs:24,sm:24,md:{span:16,offset:2},lg:{span:16,offset:2}},{default:u((function(){return[g]})),_:1}),d(n,{xs:24,sm:24,md:6,lg:6,class:"hidden-sm-and-down"},{default:u((function(){return[b]})),_:1})]})),_:1})])}}});t("default",y(x,[["__scopeId","data-v-ddfbda9e"]]))}}}))}();