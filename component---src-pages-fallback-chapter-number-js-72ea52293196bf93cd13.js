(self.webpackChunk_litc0de_ar_slanted=self.webpackChunk_litc0de_ar_slanted||[]).push([[365],{5562:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294);var a=n(8568),l=n.n(a),u=n(5444),i=function(e){var t=(0,r.useState)(""),n=t[0],a=t[1];return(0,r.useEffect)((function(){e.location&&a(e.location.pathname)}),[e.location]),r.createElement("div",{className:"footer-module--footer--3L5Rb"},"/"!==n&&r.createElement(u.Link,{to:"/"},"Home"),"/imprint"!==n&&r.createElement(u.Link,{to:"/imprint"},r.createElement(l(),{className:"footer-module--svg--1MqhR"})))},c=function(e){var t=e.children;return r.createElement("main",{className:"layout-module--layout--Ws604"},r.createElement("div",{className:"layout-module--content--bviAP"},t),r.createElement(i,null))}},9198:function(e,t,n){"use strict";n.d(t,{d:function(){return a},e:function(){return l}});var r=n(7294);var a=function(e){var t=e.children;return r.createElement("ul",{className:"number-list-module--list--3kdwQ"},t)},l=function(e){var t=e.children,n=e.number,a=e.onClick;return r.createElement("li",{className:"number-list-module--listItem--E0M_N",onClick:a},r.createElement("span",{className:"number-list-module--listNumber--3VPs0"},n),t)}},4716:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(8564),l=n(7025),u=n(5562),i=n(9198),c=n(1196);t.default=function(e){var t=e.chapterNumber,n=(0,r.useState)(null),o=n[0],m=n[1],s=(0,r.useState)(null),d=s[0],f=s[1];(0,r.useEffect)((function(){m(c.find((function(e){return e.number===Number(t)})))}),[t]);return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("h3",null,"ai — choose video"),r.createElement(i.d,null,o&&o.markers.sort((function(e,t){return e.page-t.page})).map((function(e,t){return r.createElement(i.e,{key:e.videoName+"-"+t,number:e.page,onClick:function(){return f(e)}},e.author+" - "+e.videoDescription)})))),d&&r.createElement(a.Z,{grey:!0},r.createElement(l.Z,{videoName:d.videoName,handleVideoClose:function(){f(null)},description:d.videoDescription,author:d.author})))}},8568:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{fill:"#000000",d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}))}a.defaultProps={version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-fallback-chapter-number-js-72ea52293196bf93cd13.js.map