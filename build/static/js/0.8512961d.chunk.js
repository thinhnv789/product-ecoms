webpackJsonp([0],{284:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),a=n.n(s),c=n(36),u=n(37),f=n(112),p=n(297),l=n(319),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return i(t,e),d(t,[{key:"componentWillMount",value:function(){this.props.postActions.getPostList()}},{key:"render",value:function(){var e=this.props.posts;return a.a.createElement("div",{className:"post-page"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-8"},e&&e.map(function(e,t){return a.a.createElement(l.a,{key:t,item:e})})),a.a.createElement("div",{className:"col-md-4"},"Banner Post right")))}}]),t}(a.a.Component),h=function(e,t){return{posts:e.posts}},y=function(e){return{postActions:Object(u.b)(p.a,e)}};m=Object(f.b)(h,y)(m),t.default=Object(c.e)(m)},285:function(e,t,n){"use strict";function r(e){return"[object Array]"===x.call(e)}function o(e){return"[object ArrayBuffer]"===x.call(e)}function i(e){return"undefined"!==typeof FormData&&e instanceof FormData}function s(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"undefined"===typeof e}function f(e){return null!==e&&"object"===typeof e}function p(e){return"[object Date]"===x.call(e)}function l(e){return"[object File]"===x.call(e)}function d(e){return"[object Blob]"===x.call(e)}function m(e){return"[object Function]"===x.call(e)}function h(e){return f(e)&&m(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function w(e,t){if(null!==e&&"undefined"!==typeof e)if("object"===typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function A(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=A(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function b(e,t,n){return w(t,function(t,r){e[r]=n&&"function"===typeof t?C(t,n):t}),e}var C=n(287),E=n(301),x=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:E,isFormData:i,isArrayBufferView:s,isString:a,isNumber:c,isObject:f,isUndefined:u,isDate:p,isFile:l,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:w,merge:A,extend:b,trim:g}},286:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(285),i=n(303),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n(288):"undefined"!==typeof t&&(e=n(288)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,n(63))},287:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},288:function(e,t,n){"use strict";var r=n(285),o=n(304),i=n(306),s=n(307),a=n(308),c=n(289),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n(309);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,m="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var y=e.auth.username||"",g=e.auth.password||"";l.Authorization="Basic "+u(y+":"+g)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[m]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(310),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},289:function(e,t,n){"use strict";var r=n(305);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},290:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},291:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},292:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="http://cms.thinhnv.net/api/v1",o={}},297:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(113),o=n(298),i=n(292),s=n(318),a=function(){var e=s.a.GET_POST_LIST.url,t=Object.assign({},i.a);return Object(o.a)(e,t,r.a.GET_POST_LIST)},c={getPostList:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a()}}},298:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(299),o=n.n(r),i=function(e,t,n,r){return function(i){return o.a.get(e,t).then(function(t){var o=t.data;return console.log("result",o),i(o.code?{type:"ERROR",payload:"API "+e+" show message: code "+o.code+" - "+o.message}:{type:n,payload:o.data,options:r}),{code:o.code,message:o.message}}).catch(function(t){return i({type:"ERROR",payload:"Network error from API: "+e+" - "+t}),{code:504,message:"K\u1ebft n\u1ed1i m\u1ea1ng c\xf3 v\u1ea5n \u0111\u1ec1 vui l\xf2ng xem l\u1ea1i"}})}}},299:function(e,t,n){e.exports=n(300)},300:function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(285),i=n(287),s=n(302),a=n(286),c=r(a);c.Axios=s,c.create=function(e){return r(o.merge(a,e))},c.Cancel=n(291),c.CancelToken=n(316),c.isCancel=n(290),c.all=function(e){return Promise.all(e)},c.spread=n(317),e.exports=c,e.exports.default=c},301:function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},302:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(286),i=n(285),s=n(311),a=n(312),c=n(314),u=n(315);r.prototype.request=function(e){"string"===typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},303:function(e,t,n){"use strict";var r=n(285);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},304:function(e,t,n){"use strict";var r=n(289);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},305:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},306:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(285);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},307:function(e,t,n){"use strict";var r=n(285);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},308:function(e,t,n){"use strict";var r=n(285);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},309:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),s="",a=0,c=i;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&t>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;t=t<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},310:function(e,t,n){"use strict";var r=n(285);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},311:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(285);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},312:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(285),i=n(313),s=n(290),a=n(286);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},313:function(e,t,n){"use strict";var r=n(285);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},314:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},315:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},316:function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(291);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},317:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},318:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(292),o={GET_POST_LIST:{url:r.b+"/posts",method:"GET"}}},319:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(5),a=n.n(s),c=n(320),u=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.item;return a.a.createElement("div",{className:"post-item"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-5 col-lg-5 image-thumb"},a.a.createElement("a",{href:"/tin-tuc/"+e.alias},a.a.createElement("img",{className:"img img-responsive",alt:e.title,src:e.imageUrl}))),a.a.createElement("div",{className:"col-md-7 col-lg-7 short-content"},a.a.createElement("a",{href:"/tin-tuc/"+e.alias},a.a.createElement("h2",{className:"post-title"},e.title)),a.a.createElement("div",{className:"metadata"},a.a.createElement("span",{className:"author"},a.a.createElement("a",{href:"/author"},a.a.createElement("i",{className:"fa fa-user"})," Author")),a.a.createElement("span",{className:"devider"}),a.a.createElement("span",{className:"publish-time"},a.a.createElement("a",{href:"/"+e.publishTime},a.a.createElement("i",{className:"fa fa-calendar"})," 24/09/2017"))),a.a.createElement("p",{className:"description"},e.description))))}}]),t}(a.a.Component);t.a=f},320:function(e,t,n){var r=n(321);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(281)(r,o);r.locals&&(e.exports=r.locals)},321:function(e,t,n){t=e.exports=n(280)(!0),t.push([e.i,".post-item *{color:#333}.post-item .short-content .post-title{margin-top:5px;margin-bottom:5px;font-size:18px}.post-item .short-content .description{margin:0}.post-item .short-content .metadata .devider{border-right:1px solid #333;margin:0 5px}.post-item .short-content .metadata a:hover,.post-item .short-content .metadata a:hover i,.post-item .short-content .post-title:hover{color:#f60!important}.post-item .image-thumb img{width:100%}@media(min-width:768px){.post-item .image-thumb{width:36%}.post-item .short-content{width:64%}.post-item .short-content .post-title{margin-top:0}}","",{version:3,sources:["/var/www/react/product-ecoms/src/components/PostItem/post_item.css"],names:[],mappings:"AAAA,aACE,UAAY,CACb,AACD,sCACE,eAAgB,AAChB,kBAAmB,AACnB,cAAgB,CACjB,AACD,uCACE,QAAU,CACX,AACD,6CACE,4BAA6B,AAC7B,YAAc,CACf,AACD,sIAEE,oBAAuB,CACxB,AACD,4BACE,UAAY,CACb,AAED,wBACE,wBACE,SAAW,CACZ,AACD,0BACE,SAAW,CACZ,AACD,sCACE,YAAc,CACf,CACF",file:"post_item.css",sourcesContent:[".post-item *{\n  color: #333;\n}\n.post-item .short-content .post-title {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 18px;\n}\n.post-item .short-content .description {\n  margin: 0;\n}\n.post-item .short-content .metadata .devider{\n  border-right: 1px solid #333;\n  margin: 0 5px;\n}\n.post-item .short-content .post-title:hover, .post-item .short-content .metadata a:hover,\n.post-item .short-content .metadata a:hover i {\n  color: #f60 !important;\n}\n.post-item .image-thumb img {\n  width: 100%;\n}\n\n@media(min-width: 768px) {\n  .post-item .image-thumb {\n    width: 36%;\n  }\n  .post-item .short-content {\n    width: 64%;\n  }\n  .post-item .short-content .post-title {\n    margin-top: 0;\n  }\n}"],sourceRoot:""}])}});
//# sourceMappingURL=0.8512961d.chunk.js.map