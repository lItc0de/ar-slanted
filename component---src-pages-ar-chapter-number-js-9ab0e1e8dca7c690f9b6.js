(self.webpackChunk_litc0de_ar_slanted=self.webpackChunk_litc0de_ar_slanted||[]).push([[968],{7757:function(e,t,r){e.exports=r(5666)},5145:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(7294),o=r(5186),a=r(1196);r(5666);function i(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void r(l)}c.done?t(u):Promise.resolve(u).then(n,o)}var c=r(7757),u=r.n(c),l=function(e,t){return void 0===t&&(t=300),new Promise((function(r,n){var o=0;!function a(i){setTimeout((function(){return o+=i,void 0!==window[e]?r():o>=1e3*t?n({message:"Timeout"}):void a(2*i)}),i)}(30)}))},s=r(5012),f=r(7780),h=function(e){return n.createElement("a-nft",{id:e.markerName,type:"nft",marker:"markerName: "+e.markerName,url:"https://downloads.slanted.de/Slanted-Magazine/AI/"+e.markerName,smooth:"true",smoothcount:"10",smoothtolerance:".01",smooththreshold:"5"})},m=function(){var e=document.getElementById("arjs-video");document.getElementById("a-scene").after(e),console.log("moved video")},d=function(){var e,t=(e=u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("register marker components"),AFRAME.registerComponent("marker",{schema:{markerName:{type:"string",default:"the-fabricant-overlay"}},init:function(){var e=this.el,t=this.data.markerName;e.addEventListener("markerFound",(function(){console.log("Marker found",t),r(t)}))}}),t(!0);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,u,"next",e)}function u(e){i(a,n,o,c,u,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),p=function(e){var t=(0,n.useState)(!1),r=t[0],o=t[1],a=(0,n.useState)(!1),i=a[0],c=a[1];(0,n.useEffect)((function(){window.addEventListener("arjs-video-loaded",m),console.log("looooool"),l("AFRAME").then((function(){o(!0)}))}),[]),(0,n.useEffect)((function(){r&&d(c,u)}),[r]);var u=function(t){var r=e.markers.find((function(e){return e.markerName===t}));e.onMarkerChange(r)};return n.createElement(n.Fragment,null,n.createElement("div",{className:"arjs-loader"},n.createElement(s.Z,null,n.createElement(f.Z,null))),r&&n.createElement("a-scene",{id:"a-scene","vr-mode-ui":"enabled: false;",renderer:"logarithmicDepthBuffer: true;",embedded:!0,arjs:"trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"},i&&e.markers.map((function(e){var t=e.markerName;return n.createElement(h,{markerName:t,key:t})})),n.createElement("a-entity",{camera:!0})))};var v=function(){return n.createElement("header",{className:"header-module--header--_rwsu"},n.createElement("h4",null,"slanted 37 - A.I."))},y=r(7025);var g=function(){return n.createElement("div",{className:"focus-module--wrapper--6X1_n"},n.createElement("div",{className:"focus-module--topLeft--3y8a9"}),n.createElement("div",{className:"focus-module--topRight--1CGkd"}),n.createElement("div",{className:"focus-module--bottomLeft--2w-3S"}),n.createElement("div",{className:"focus-module--bottomRight--17ZmO"}))},w=function(e){var t=e.chapterNumber,r=(0,n.useState)(null),i=r[0],c=r[1],u=(0,n.useState)(null),l=u[0],f=u[1];(0,n.useEffect)((function(){f(a.find((function(e){return e.number===Number(t)}))),console.log({chapterNumber:t})}),[t]);return n.createElement(n.Fragment,null,n.createElement(o.q,null,n.createElement("title",null,"Ar Slanted"),n.createElement("script",{src:"https://aframe.io/releases/1.2.0/aframe.min.js"}),n.createElement("script",{src:"https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"})),n.createElement(v,null),l&&n.createElement(p,{onMarkerChange:function(e){i!==e&&c(e)},currentMarker:i,markers:l.markers}),n.createElement(s.Z,{grey:!!i},i&&n.createElement(y.Z,{videoName:i.videoName,handleVideoClose:function(){c(null)},description:i.videoDescription,author:i.author}),!i&&n.createElement(g,null)))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(F){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",m="executing",d="completed",p={};function v(){}function y(){}function g(){}var w={};w[a]=function(){return this};var E=Object.getPrototypeOf,k=E&&E(E(S([])));k&&k!==r&&n.call(k,a)&&(w=k);var b=g.prototype=v.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,i,c){var u=s(e[o],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},L(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(b),u(b,c,"Generator"),b[a]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-pages-ar-chapter-number-js-9ab0e1e8dca7c690f9b6.js.map