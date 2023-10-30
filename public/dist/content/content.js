(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=browser;var n=e.n(t);const r={async emitContent(e){const t=await n().tabs.query({active:!0,currentWindow:!0});t&&t.length>0&&await n().tabs.sendMessage(t[0].id,e)},emitBackground:e=>chrome.extension.getBackgroundPage().onMessage(e),async emit(e){await n().runtime.sendMessage(e)},on(e){n().runtime.onMessage.addListener(e)}},o={get:async e=>(await n().storage.local.get()||{})[e],async set(e){await n().storage.local.set(e)}};function s(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function i(e){let t=e.offsetLeft,n=e.offsetTop,r=e.offsetParent;for(;r;)t+=r.offsetLeft,n+=r.offsetTop,r=r.offsetParent;return{left:t-e.scrollLeft,top:n-e.scrollTop}}const a="tabChange",c="setCurrentContentHost",l="getDesignerPages",u="setDesignerPages";function f(e,t){return function(){return e.apply(t,arguments)}}const{toString:d}=Object.prototype,{getPrototypeOf:p}=Object,h=(m=Object.create(null),e=>{const t=d.call(e);return m[t]||(m[t]=t.slice(8,-1).toLowerCase())});var m;const g=e=>(e=e.toLowerCase(),t=>h(t)===e),y=e=>t=>typeof t===e,{isArray:b}=Array,w=y("undefined");const E=g("ArrayBuffer");const O=y("string"),S=y("function"),R=y("number"),A=e=>null!==e&&"object"==typeof e,T=e=>{if("object"!==h(e))return!1;const t=p(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},v=g("Date"),C=g("File"),j=g("Blob"),P=g("FileList"),x=g("URLSearchParams");function N(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),b(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function L(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,D=e=>!w(e)&&e!==_;const U=(B="undefined"!=typeof Uint8Array&&p(Uint8Array),e=>B&&e instanceof B);var B;const F=g("HTMLFormElement"),k=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=g("RegExp"),I=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};N(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},M="abcdefghijklmnopqrstuvwxyz",H="0123456789",z={DIGIT:H,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+H};const J=g("AsyncFunction"),W={isArray:b,isArrayBuffer:E,isBuffer:function(e){return null!==e&&!w(e)&&null!==e.constructor&&!w(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||S(e.append)&&("formdata"===(t=h(e))||"object"===t&&S(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&E(e.buffer),t},isString:O,isNumber:R,isBoolean:e=>!0===e||!1===e,isObject:A,isPlainObject:T,isUndefined:w,isDate:v,isFile:C,isBlob:j,isRegExp:q,isFunction:S,isStream:e=>A(e)&&S(e.pipe),isURLSearchParams:x,isTypedArray:U,isFileList:P,forEach:N,merge:function e(){const{caseless:t}=D(this)&&this||{},n={},r=(r,o)=>{const s=t&&L(n,o)||o;T(n[s])&&T(r)?n[s]=e(n[s],r):T(r)?n[s]=e({},r):b(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&N(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(N(t,((t,r)=>{n&&S(t)?e[r]=f(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,i;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],r&&!r(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&p(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:h,kindOfTest:g,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(b(e))return e;let t=e.length;if(!R(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:F,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:I,freezeMethods:e=>{I(e,((t,n)=>{if(S(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];S(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return b(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:L,global:_,isContextDefined:D,ALPHABET:z,generateString:(e=16,t=z.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&S(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(A(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=b(e)?[]:{};return N(e,((e,t)=>{const s=n(e,r+1);!w(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:J,isThenable:e=>e&&(A(e)||S(e))&&S(e.then)&&S(e.catch)};function K(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}W.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=K.prototype,$={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{$[e]={value:e}})),Object.defineProperties(K,$),Object.defineProperty(V,"isAxiosError",{value:!0}),K.from=(e,t,n,r,o,s)=>{const i=Object.create(V);return W.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),K.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const G=K;function X(e){return W.isPlainObject(e)||W.isArray(e)}function Q(e){return W.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,n){return e?e.concat(t).map((function(e,t){return e=Q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Y=W.toFlatObject(W,{},null,(function(e){return/^is[A-Z]/.test(e)}));const ee=function(e,t,n){if(!W.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=W.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!W.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&W.isSpecCompliantForm(t);if(!W.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(W.isDate(e))return e.toISOString();if(!a&&W.isBlob(e))throw new G("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(e)||W.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(W.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(W.isArray(e)&&function(e){return W.isArray(e)&&!e.some(X)}(e)||(W.isFileList(e)||W.endsWith(n,"[]"))&&(a=W.toArray(e)))return n=Q(n),a.forEach((function(e,r){!W.isUndefined(e)&&null!==e&&t.append(!0===i?Z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!X(e)||(t.append(Z(o,n,s),c(e)),!1)}const u=[],f=Object.assign(Y,{defaultVisitor:l,convertValue:c,isVisitable:X});if(!W.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!W.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),W.forEach(n,(function(n,s){!0===(!(W.isUndefined(n)||null===n)&&o.call(t,n,W.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ne(e,t){this._pairs=[],e&&ee(e,this,t)}const re=ne.prototype;re.append=function(e,t){this._pairs.push([e,t])},re.toString=function(e){const t=e?function(t){return e.call(this,t,te)}:te;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const oe=ne;function se(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ie(e,t,n){if(!t)return e;const r=n&&n.encode||se,o=n&&n.serialize;let s;if(s=o?o(t,n):W.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const ae=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:oe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};const ue=function(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&W.isArray(r)?r.length:s,a)return W.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&W.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&W.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(W.isFormData(e)&&W.isFunction(e.entries)){const n={};return W.forEachEntry(e,((e,r)=>{t(function(e){return W.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const fe={transitional:ce,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=W.isObject(e);o&&W.isHTMLForm(e)&&(e=new FormData(e));if(W.isFormData(e))return r&&r?JSON.stringify(ue(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ee(e,new le.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return le.isNode&&W.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=W.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ee(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(W.isString(e))try{return(t||JSON.parse)(e),W.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||fe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&W.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw G.from(e,G.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:le.classes.FormData,Blob:le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],(e=>{fe.headers[e]={}}));const de=fe,pe=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),he=Symbol("internals");function me(e){return e&&String(e).trim().toLowerCase()}function ge(e){return!1===e||null==e?e:W.isArray(e)?e.map(ge):String(e)}function ye(e,t,n,r,o){return W.isFunction(r)?r.call(this,t,n):(o&&(t=n),W.isString(t)?W.isString(r)?-1!==t.indexOf(r):W.isRegExp(r)?r.test(t):void 0:void 0)}class be{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=me(t);if(!o)throw new Error("header name must be a non-empty string");const s=W.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ge(e))}const s=(e,t)=>W.forEach(e,((e,n)=>o(e,n,t)));return W.isPlainObject(e)||e instanceof this.constructor?s(e,t):W.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&pe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=me(e)){const n=W.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(W.isFunction(t))return t.call(this,e,n);if(W.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=me(e)){const n=W.findKey(this,e);return!(!n||void 0===this[n]||t&&!ye(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=me(e)){const o=W.findKey(n,e);!o||t&&!ye(0,n[o],o,t)||(delete n[o],r=!0)}}return W.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ye(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return W.forEach(this,((r,o)=>{const s=W.findKey(n,o);if(s)return t[s]=ge(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ge(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&W.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[he]=this[he]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=me(e);t[r]||(!function(e,t){const n=W.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return W.isArray(e)?e.forEach(r):r(e),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),W.reduceDescriptors(be.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),W.freezeMethods(be);const we=be;function Ee(e,t){const n=this||de,r=t||n,o=we.from(r.headers);let s=r.data;return W.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Oe(e){return!(!e||!e.__CANCEL__)}function Se(e,t,n){G.call(this,null==e?"canceled":e,G.ERR_CANCELED,t,n),this.name="CanceledError"}W.inherits(Se,G,{__CANCEL__:!0});const Re=Se;const Ae=le.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),W.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),W.isString(r)&&i.push("path="+r),W.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Te(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ve=le.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=W.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};const Ce=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}};function je(e,t){let n=0;const r=Ce(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Pe="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=we.from(e.headers).normalize(),s=e.responseType;let i,a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}W.isFormData(r)&&(le.isStandardBrowserEnv||le.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?W.isString(a=o.getContentType())&&o.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=Te(e.baseURL,e.url);function f(){if(!l)return;const r=we.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),c()}),(function(e){n(e),c()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ie(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(f)},l.onabort=function(){l&&(n(new G("Request aborted",G.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new G("Network Error",G.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ce;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new G(t,r.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,l)),l=null},le.isStandardBrowserEnv){const t=ve(u)&&e.xsrfCookieName&&Ae.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&W.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),W.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",je(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",je(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{l&&(n(!t||t.type?new Re(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===le.protocols.indexOf(d)?n(new G("Unsupported protocol "+d+":",G.ERR_BAD_REQUEST,e)):l.send(r||null)}))},xe={http:null,xhr:Pe};W.forEach(xe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ne=e=>`- ${e}`,Le=e=>W.isFunction(e)||null===e||!1===e,_e=e=>{e=W.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Le(n)&&(r=xe[(t=String(n)).toLowerCase()],void 0===r))throw new G(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Ne).join("\n"):" "+Ne(e[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Re(null,e)}function Ue(e){De(e),e.headers=we.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return _e(e.adapter||de.adapter)(e).then((function(t){return De(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=we.from(t.headers),t}),(function(t){return Oe(t)||(De(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=we.from(t.response.headers))),Promise.reject(t)}))}const Be=e=>e instanceof we?e.toJSON():e;function Fe(e,t){t=t||{};const n={};function r(e,t,n){return W.isPlainObject(e)&&W.isPlainObject(t)?W.merge.call({caseless:n},e,t):W.isPlainObject(t)?W.merge({},t):W.isArray(t)?t.slice():t}function o(e,t,n){return W.isUndefined(t)?W.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!W.isUndefined(t))return r(void 0,t)}function i(e,t){return W.isUndefined(t)?W.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Be(e),Be(t),!0)};return W.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);W.isUndefined(i)&&s!==a||(n[r]=i)})),n}const ke="1.6.0",qe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{qe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ie={};qe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new G(r(o," has been removed"+(t?" in "+t:"")),G.ERR_DEPRECATED);return t&&!Ie[o]&&(Ie[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};const Me={assertOptions:function(e,t,n){if("object"!=typeof e)throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new G("option "+s+" must be "+n,G.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new G("Unknown option "+s,G.ERR_BAD_OPTION)}},validators:qe},He=Me.validators;class ze{constructor(e){this.defaults=e,this.interceptors={request:new ae,response:new ae}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Fe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Me.assertOptions(n,{silentJSONParsing:He.transitional(He.boolean),forcedJSONParsing:He.transitional(He.boolean),clarifyTimeoutError:He.transitional(He.boolean)},!1),null!=r&&(W.isFunction(r)?t.paramsSerializer={serialize:r}:Me.assertOptions(r,{encode:He.function,serialize:He.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&W.merge(o.common,o[t.method]);o&&W.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=we.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[Ue.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=Ue.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ie(Te((e=Fe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}W.forEach(["delete","get","head","options"],(function(e){ze.prototype[e]=function(t,n){return this.request(Fe(n||{},{method:e,url:t,data:(n||{}).data}))}})),W.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Fe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ze.prototype[e]=t(),ze.prototype[e+"Form"]=t(!0)}));const Je=ze;class We{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Re(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new We((function(t){e=t})),cancel:e}}}const Ke=We;const Ve={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ve).forEach((([e,t])=>{Ve[t]=e}));const $e=Ve;const Ge=function e(t){const n=new Je(t),r=f(Je.prototype.request,n);return W.extend(r,Je.prototype,n,{allOwnKeys:!0}),W.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Fe(t,n))},r}(de);Ge.Axios=Je,Ge.CanceledError=Re,Ge.CancelToken=Ke,Ge.isCancel=Oe,Ge.VERSION=ke,Ge.toFormData=ee,Ge.AxiosError=G,Ge.Cancel=Ge.CanceledError,Ge.all=function(e){return Promise.all(e)},Ge.spread=function(e){return function(t){return e.apply(null,t)}},Ge.isAxiosError=function(e){return W.isObject(e)&&!0===e.isAxiosError},Ge.mergeConfig=Fe,Ge.AxiosHeaders=we,Ge.formToJSON=e=>ue(W.isHTMLForm(e)?new FormData(e):e),Ge.getAdapter=_e,Ge.HttpStatusCode=$e,Ge.default=Ge;const Xe=Ge;console.log("content.js");var Qe=Math.random().toString(36).slice(2);let Ze=`${window.location.hostname}-value`;const Ye={showDataId:async function(){console.log("showDataId");const e=await o.get(Ze)||"data-id";console.log(e);for(let t of[...document.querySelectorAll(`[${e}]`)]){console.log(t.offsetTop,t.offsetLeft);let n=t.getAttribute(e),r=(i(t),document.createElement("div"));r.style.position="relative";let o=document.createElement("div");o.setAttribute("data-xid",Qe),o.innerHTML=e+": "+n,o.style.top=0,o.style.left=0,o.style.padding="0 10px",o.style.fontSize="14px",o.style.lineHeight="1.5",o.style.position="absolute",o.style.backgroundColor="#1e80ff",o.style.color="#fff",o.style.opacity="0.6",o.style.textWrap="nowrap",o.addEventListener("click",(function(t){t.preventDefault(),s(n),o.innerHTML=e+": "+n+" copyed!"})),r.appendChild(o),t.insertBefore(r,t.firstChild)}},hideDataId:function(){for(let e of[...document.querySelectorAll(`[data-xid='${Qe}']`)])e.remove()}};r.on((e=>{console.log("message22",e);const{action:t,data:n}=e;t==a?r.emit({action:c,data:{currentContentHost:window.location.hostname}}):t==l&&(console.log("开始获取"),Xe.post("/iuap-yonbuilder-designer/hpaapp/queryGroupPages",{appId:"1846952202132258822"},{headers:{"content-type":"application/x-www-form-urlencoded"}}).then((e=>{console.log("成功",e.data?.data?.appPages),r.emit({action:u,data:{pages:(e.data?.data?.appPages||[]).map((e=>({...e,host:location.host})))}})})).catch((e=>{console.log("获得页面失败",e)}))),Ye[t](n)})),r.emit({action:c,data:{currentContentHost:window.location.hostname}})})();