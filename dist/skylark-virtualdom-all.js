/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
!function(r,e){var t=e.define,n=e.require,o="function"==typeof t&&t.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!t){var u={};t=e.define=function(r,e,t){"function"==typeof t?(u[r]={factory:t,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var t=e.split("/"),n=r.split("/");t.pop();for(var o=0;o<n.length;o++)"."!=n[o]&&(".."==n[o]?t.pop():t.push(n[o]));return t.join("/")}(e,r)}),exports:null},n(r)):u[r]=t},n=e.require=function(r){if(!u.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var t=u[r];if(!t.exports){var o=[];t.deps.forEach(function(r){o.push(n(r))}),t.exports=t.factory.apply(e,o)}return t.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-langx/skylark",[],function(){return{}}),r("skylark-langx/types",[],function(){var r,e={}.toString,t=(r={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(e){r["[object "+e+"]"]=e.toLowerCase()}),function(t){return null==t?String(t):r[e.call(t)]||"object"});function n(r){var e;for(e in r)if(null!==r[e])return!1;return!0}function o(r){return"function"==t(r)}function i(r){return r&&r instanceof Node}function u(r){return"object"==t(r)}function s(r){return"string"==typeof r}function a(r){return r&&r==r.window}return{isArray:function(r){return r&&r.constructor===Array},isArrayLike:function(r){return!s(r)&&!i(r)&&"number"==typeof r.length&&!o(r)},isBoolean:function(r){return"boolean"==typeof r},isDefined:function(r){return void 0!==r},isDocument:function(r){return null!=r&&r.nodeType==r.DOCUMENT_NODE},isEmpty:n,isEmptyObject:n,isFunction:o,isHtmlNode:i,isNull:function(r){return"null"===t(r)},isNumber:function(r){return"number"==typeof r},isObject:u,isPlainObject:function(r){return u(r)&&!a(r)&&Object.getPrototypeOf(r)==Object.prototype},isString:s,isSameOrigin:function(r){if(r){var e=location.protocol+"//"+location.hostname;return location.port&&(e+=":"+location.port),r.startsWith(e)}},isSymbol:function(r){return"symbol"==typeof r||isObjectLike(r)&&objectToString.call(r)==symbolTag},isUndefined:function(r){return void 0===r},isWindow:a,type:t}}),r("skylark-langx/arrays",["./types"],function(r,e){var t=Array.prototype.filter,n=r.isArrayLike;function o(r,e,t,n){for(var o=r.length,i=t+(n?1:-1);n?i--:++i<o;)if(e(r[i],i,r))return i;return-1}function i(r){return r!=r}function u(r){if(n(r)){for(var e=[],t=0;t<r.length;t++){var o=r[t];if(n(o))for(var i=0;i<o.length;i++)e.push(o[i]);else e.push(o)}return e}return r}return{baseFindIndex:o,baseIndexOf:function(r,e,t){if(e!=e)return o(r,i,t);var n=t-1,u=r.length;for(;++n<u;)if(r[n]===e)return n;return-1},compact:function(r){return t.call(r,function(r){return null!=r})},first:function(r,e){return e?r.slice(0,e):r[0]},flatten:u,inArray:function(r,e){if(!e)return-1;var t;if(e.indexOf)return e.indexOf(r);t=e.length;for(;t--;)if(e[t]===r)return t;return-1},makeArray:function(r,e,t){if(n(r))return(t||[]).concat(Array.prototype.slice.call(r,e||0));return[r]},map:function(r,e){var t,o,i,s=[];if(n(r))for(o=0;o<r.length;o++)null!=(t=e.call(r[o],r[o],o))&&s.push(t);else for(i in r)null!=(t=e.call(r[i],r[i],i))&&s.push(t);return u(s)},uniq:function(r){return t.call(r,function(e,t){return r.indexOf(e)==t})}}}),r("skylark-virtualdom/vnode/version",[],function(){"use strict";var r={},e={exports:{}};function t(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports="2",t(e.exports)?e.exports:t(r)?r:void 0}),r("skylark-virtualdom/vnode/vpatch",["./version"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r,e,t){this.type=Number(r),this.vNode=e,this.patch=t}function i(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return o.NONE=0,o.VTEXT=1,o.VNODE=2,o.WIDGET=3,o.PROPS=4,o.ORDER=5,o.INSERT=6,o.REMOVE=7,o.THUNK=8,t.exports=o,o.prototype.version=n,o.prototype.type="VirtualPatch",i(t.exports)?t.exports:i(e)?e:void 0}),r("skylark-virtualdom/vnode/is-vnode",["./version"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=function(r){return r&&"VirtualNode"===r.type&&r.version===n},o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/vnode/is-vtext",["./version"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=function(r){return r&&"VirtualText"===r.type&&r.version===n},o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/vnode/is-widget",[],function(){"use strict";var r={},e={exports:{}};function t(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=function(r){return r&&"Widget"===r.type},t(e.exports)?e.exports:t(r)?r:void 0}),r("skylark-virtualdom/vnode/is-thunk",[],function(){"use strict";var r={},e={exports:{}};function t(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=function(r){return r&&"Thunk"===r.type},t(e.exports)?e.exports:t(r)?r:void 0}),r("skylark-virtualdom/vnode/handle-thunk",["./is-vnode","./is-vtext","./is-widget","./is-thunk"],function(r,e,t,n){"use strict";var o={},i={exports:{}},u=r,s=e,a=t,f=n;function c(r,e){var t=r.vnode;if(t||(t=r.vnode=r.render(e)),!(u(t)||s(t)||a(t)))throw new Error("thunk did not return a valid node");return t}function p(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return i.exports=function(r,e){var t=r,n=e;f(e)&&(n=c(e,r));f(r)&&(t=c(r,null));return{a:t,b:n}},p(i.exports)?i.exports:p(o)?o:void 0}),r("skylark-virtualdom/vnode/is-vhook",[],function(){"use strict";var r={},e={exports:{}};function t(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=function(r){return r&&("function"==typeof r.hook&&!r.hasOwnProperty("hook")||"function"==typeof r.unhook&&!r.hasOwnProperty("unhook"))},t(e.exports)?e.exports:t(r)?r:void 0}),r("skylark-virtualdom/vtree/diff-props",["skylark-langx/types","../vnode/is-vhook"],function(r,e){"use strict";var t={},n={exports:{}},o=r.isObject,i=e;function u(r){return Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__?r.__proto__:r.constructor?r.constructor.prototype:void 0}function s(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return n.exports=function r(e,t){var n;for(var s in e){s in t||((n=n||{})[s]=void 0);var a=e[s],f=t[s];if(a!==f)if(o(a)&&o(f))if(u(f)!==u(a))(n=n||{})[s]=f;else if(i(f))(n=n||{})[s]=f;else{var c=r(a,f);c&&((n=n||{})[s]=c)}else(n=n||{})[s]=f}for(var p in t)p in e||((n=n||{})[p]=t[p]);return n},s(n.exports)?n.exports:s(t)?t:void 0}),r("skylark-virtualdom/vtree/diff",["skylark-langx/arrays","../vnode/vpatch","../vnode/is-vnode","../vnode/is-vtext","../vnode/is-widget","../vnode/is-thunk","../vnode/handle-thunk","./diff-props"],function(r,e,t,n,o,i,u,s){"use strict";var a={},f={exports:{}},c=r.isArray,p=e,l=t,v=n,d=o,y=i,h=u,k=s;function x(r,e){var t={a:r};return m(r,e,t,0),t}function m(r,e,t,n){if(r!==e){var o=t[n],i=!1;if(y(r)||y(e))b(r,e,t,n);else if(null==e)d(r)||(g(r,t,n),o=t[n]),o=O(o,new p(p.REMOVE,r,e));else if(l(e))if(l(r))if(r.tagName===e.tagName&&r.namespace===e.namespace&&r.key===e.key){var u=k(r.properties,e.properties);u&&(o=O(o,new p(p.PROPS,r,u))),o=function(r,e,t,n,o){for(var i=r.children,u=function(r,e){var t=w(e),n=t.keys,o=t.free;if(o.length===e.length)return{children:e,moves:null};var i=w(r),u=i.keys;if(i.free.length===r.length)return{children:e,moves:null};for(var s=[],a=0,f=o.length,c=0,p=0;p<r.length;p++){var l,v=r[p];v.key?n.hasOwnProperty(v.key)?(l=n[v.key],s.push(e[l])):(l=p-c++,s.push(null)):a<f?(l=o[a++],s.push(e[l])):(l=p-c++,s.push(null))}for(var d=a>=o.length?e.length:o[a],y=0;y<e.length;y++){var h=e[y];h.key?u.hasOwnProperty(h.key)||s.push(h):y>=d&&s.push(h)}for(var k,x=s.slice(),m=0,g=[],b=[],O=0;O<e.length;){var j=e[O];for(k=x[m];null===k&&x.length;)g.push(A(x,m,null)),k=x[m];k&&k.key===j.key?(m++,O++):j.key?(k&&k.key&&n[k.key]!==O+1?(g.push(A(x,m,k.key)),(k=x[m])&&k.key===j.key?m++:b.push({key:j.key,to:O})):b.push({key:j.key,to:O}),O++):k&&k.key&&g.push(A(x,m,k.key))}for(;m<x.length;)k=x[m],g.push(A(x,m,k&&k.key));if(g.length===c&&!b.length)return{children:s,moves:null};return{children:s,moves:{removes:g,inserts:b}}}(i,e.children),s=u.children,a=i.length,f=s.length,c=a>f?a:f,v=0;v<c;v++){var d=i[v],y=s[v];o+=1,d?m(d,y,t,o):y&&(n=O(n,new p(p.INSERT,null,y))),l(d)&&d.count&&(o+=d.count)}u.moves&&(n=O(n,new p(p.ORDER,r,u.moves)));return n}(r,e,t,o,n)}else o=O(o,new p(p.VNODE,r,e)),i=!0;else o=O(o,new p(p.VNODE,r,e)),i=!0;else v(e)?v(r)?r.text!==e.text&&(o=O(o,new p(p.VTEXT,r,e))):(o=O(o,new p(p.VTEXT,r,e)),i=!0):d(e)&&(d(r)||(i=!0),o=O(o,new p(p.WIDGET,r,e)));o&&(t[n]=o),i&&g(r,t,n)}}function g(r,e,t){!function r(e,t,n){if(l(e)){if(e.hooks&&(t[n]=O(t[n],new p(p.PROPS,e,function(r){var e={};for(var t in r)e[t]=void 0;return e}(e.hooks)))),e.descendantHooks||e.hasThunks)for(var o=e.children,i=o.length,u=0;u<i;u++){var s=o[u];r(s,t,n+=1),l(s)&&s.count&&(n+=s.count)}}else y(e)&&b(e,null,t,n)}(r,e,t),function r(e,t,n){if(d(e))"function"==typeof e.destroy&&(t[n]=O(t[n],new p(p.REMOVE,e,null)));else if(l(e)&&(e.hasWidgets||e.hasThunks))for(var o=e.children,i=o.length,u=0;u<i;u++){var s=o[u];r(s,t,n+=1),l(s)&&s.count&&(n+=s.count)}else y(e)&&b(e,null,t,n)}(r,e,t)}function b(r,e,t,n){var o=h(r,e),i=x(o.a,o.b);(function(r){for(var e in r)if("a"!==e)return!0;return!1})(i)&&(t[n]=new p(p.THUNK,null,i))}function A(r,e,t){return r.splice(e,1),{from:e,key:t}}function w(r){for(var e={},t=[],n=r.length,o=0;o<n;o++){var i=r[o];i.key?e[i.key]=o:t.push(o)}return{keys:e,free:t}}function O(r,e){return r?(c(r)?r.push(e):r=[r,e],r):e}function j(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return f.exports=x,j(f.exports)?f.exports:j(a)?a:void 0}),r("skylark-virtualdom/diff",["./vtree/diff"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=n,o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-langx/hoster",[],function(){var r={isBrowser:!0,isNode:null,global:this,browser:null,node:null};"object"==typeof process&&process.versions&&process.versions.node&&process.versions.v8&&(r.isNode=!0,r.isBrowser=!1),r.global=function(){return"undefined"!=typeof global&&"function"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:this}();var t=null;return Object.defineProperty(r,"document",function(){if(!t){var r="undefined"==typeof window?e("html-element"):window;t=r.document}return t}),r}),r("skylark-virtualdom/vdom/apply-properties",["skylark-langx/types","../vnode/is-vhook"],function(r,e){"use strict";var t={},n={exports:{}},o=r.isObject,i=e;function u(r,e,t,n){if(n){var o=n[e];if(i(o))o.unhook&&o.unhook(r,e,t);else if("attributes"===e)for(var u in o)r.removeAttribute(u);else if("style"===e)for(var s in o)r.style[s]="";else r[e]="string"==typeof o?"":null}}function s(r,e,t,n,i){var u=t?t[n]:void 0;if("attributes"!==n)if(u&&o(u)&&a(u)!==a(i))r[n]=i;else{o(r[n])||(r[n]={});var s="style"===n?"":void 0;for(var f in i){var c=i[f];r[n][f]=void 0===c?s:c}}else for(var p in i){var l=i[p];void 0===l?r.removeAttribute(p):r.setAttribute(p,l)}}function a(r){return Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__?r.__proto__:r.constructor?r.constructor.prototype:void 0}function f(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return n.exports=function(r,e,t){for(var n in e){var a=e[n];void 0===a?u(r,n,a,t):i(a)?(u(r,n,a,t),a.hook&&a.hook(r,n,t?t[n]:void 0)):o(a)?s(r,e,t,n,a):r[n]=a}},f(n.exports)?n.exports:f(t)?t:void 0}),r("skylark-virtualdom/vdom/create-element",["skylark-langx/hoster","./apply-properties","../vnode/is-vnode","../vnode/is-vtext","../vnode/is-widget","../vnode/handle-thunk"],function(r,e,t,n,o,i){"use strict";var u={},s={exports:{}},a=r.document,f=e,c=t,p=n,l=o,v=i;function d(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return s.exports=function r(e,t){var n=t&&t.document||a;var o=t?t.warn:null;e=v(e).a;if(l(e))return e.init();if(p(e))return n.createTextNode(e.text);if(!c(e))return o&&o("Item is not a valid virtual dom node",e),null;var i=null===e.namespace?n.createElement(e.tagName):n.createElementNS(e.namespace,e.tagName);var u=e.properties;f(i,u);var s=e.children;for(var d=0;d<s.length;d++){var y=r(s[d],t);y&&i.appendChild(y)}return i},d(s.exports)?s.exports:d(u)?u:void 0}),r("skylark-virtualdom/vdom/dom-index",[],function(){"use strict";var r={},e={exports:{}},t={};function n(r,e,t){if(0===r.length)return!1;for(var n,o,i=0,u=r.length-1;i<=u;){if(o=r[n=(u+i)/2>>0],i===u)return o>=e&&o<=t;if(o<e)i=n+1;else{if(!(o>t))return!0;u=n-1}}return!1}function o(r,e){return r>e?1:-1}function i(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=function(r,e,i,u){return i&&0!==i.length?(i.sort(o),function r(e,o,i,u,s){u=u||{};if(e){n(i,s,s)&&(u[s]=e);var a=o.children;if(a)for(var f=e.childNodes,c=0;c<o.children.length;c++){s+=1;var p=a[c]||t,l=s+(p.count||0);n(i,s,l)&&r(f[c],p,i,u,s),s=l}}return u}(r,e,i,u,0)):{}},i(e.exports)?e.exports:i(r)?r:void 0}),r("skylark-virtualdom/vdom/update-widget",["../vnode/is-widget"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=function(r,e){if(n(r)&&n(e))return"name"in r&&"name"in e?r.id===e.id:r.init===e.init;return!1},o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/vdom/patch-op",["./apply-properties","../vnode/is-widget","../vnode/vpatch","./update-widget"],function(r,e,t,n){"use strict";var o={},i={exports:{}},u=r,s=e,a=t,f=n;function c(r,e){"function"==typeof e.destroy&&s(e)&&e.destroy(r)}function p(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return i.exports=function(r,e,t){var n=r.type,o=r.vNode,i=r.patch;switch(n){case a.REMOVE:return function(r,e){var t=r.parentNode;t&&t.removeChild(r);return c(r,e),null}(e,o);case a.INSERT:return function(r,e,t){var n=t.render(e,t);r&&r.appendChild(n);return r}(e,i,t);case a.VTEXT:return function(r,e,t,n){var o;if(3===r.nodeType)r.replaceData(0,r.length,t.text),o=r;else{var i=r.parentNode;o=n.render(t,n),i&&o!==r&&i.replaceChild(o,r)}return o}(e,0,i,t);case a.WIDGET:return function(r,e,t,n){var o,i=f(e,t);o=i?t.update(e,r)||r:n.render(t,n);var u=r.parentNode;u&&o!==r&&u.replaceChild(o,r);i||c(r,e);return o}(e,o,i,t);case a.VNODE:return function(r,e,t,n){var o=r.parentNode,i=n.render(t,n);o&&i!==r&&o.replaceChild(i,r);return i}(e,0,i,t);case a.ORDER:return function(r,e){for(var t,n,o,i=r.childNodes,u={},s=0;s<e.removes.length;s++)n=e.removes[s],t=i[n.from],n.key&&(u[n.key]=t),r.removeChild(t);for(var a=i.length,f=0;f<e.inserts.length;f++)o=e.inserts[f],t=u[o.key],r.insertBefore(t,o.to>=a++?null:i[o.to])}(e,i),e;case a.PROPS:return u(e,i,o.properties),e;case a.THUNK:return function(r,e){r&&e&&r!==e&&r.parentNode&&r.parentNode.replaceChild(e,r);return e}(e,t.patch(e,i,t));default:return e}},p(i.exports)?i.exports:p(o)?o:void 0}),r("skylark-virtualdom/vdom/patch",["skylark-langx/hoster","skylark-langx/arrays","./create-element","./dom-index","./patch-op"],function(r,e,t,n,o){"use strict";var i={},u={exports:{}},s=r.document,a=e.isArray,f=t,c=n,p=o;function l(r,e,t){var n=function(r){var e=[];for(var t in r)"a"!==t&&e.push(Number(t));return e}(e);if(0===n.length)return r;var o=c(r,e.a,n),i=r.ownerDocument;t.document||i===s||(t.document=i);for(var u=0;u<n.length;u++){var a=n[u];r=v(r,o[a],e[a],t)}return r}function v(r,e,t,n){if(!e)return r;var o;if(a(t))for(var i=0;i<t.length;i++)o=p(t[i],e,n),e===r&&(r=o);else o=p(t,e,n),e===r&&(r=o);return r}function d(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return u.exports=function r(e,t,n){n=n||{};n.patch=n.patch&&n.patch!==r?n.patch:l;n.render=n.render||f;return n.patch(e,t,n)},d(u.exports)?u.exports:d(i)?i:void 0}),r("skylark-virtualdom/patch",["./vdom/patch"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=n,o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/vnode/vnode",["./version","./is-vnode","./is-widget","./is-thunk","./is-vhook"],function(r,e,t,n,o){"use strict";var i={},u={exports:{}},s=r,a=e,f=t,c=n,p=o;u.exports=d;var l={},v=[];function d(r,e,t,n,o){this.tagName=r,this.properties=e||l,this.children=t||v,this.key=null!=n?String(n):void 0,this.namespace="string"==typeof o?o:null;var i,u=t&&t.length||0,s=0,d=!1,y=!1,h=!1;for(var k in e)if(e.hasOwnProperty(k)){var x=e[k];p(x)&&x.unhook&&(i||(i={}),i[k]=x)}for(var m=0;m<u;m++){var g=t[m];a(g)?(s+=g.count||0,!d&&g.hasWidgets&&(d=!0),!y&&g.hasThunks&&(y=!0),h||!g.hooks&&!g.descendantHooks||(h=!0)):!d&&f(g)?"function"==typeof g.destroy&&(d=!0):!y&&c(g)&&(y=!0)}this.count=u+s,this.hasWidgets=d,this.hasThunks=y,this.hooks=i,this.descendantHooks=h}function y(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return d.prototype.version=s,d.prototype.type="VirtualNode",y(u.exports)?u.exports:y(i)?i:void 0}),r("skylark-virtualdom/vnode/vtext",["./version"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){this.text=String(r)}function i(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=o,o.prototype.version=n,o.prototype.type="VirtualText",i(t.exports)?t.exports:i(e)?e:void 0}),r("skylark-virtualdom/virtual-hyperscript/parse-tag",[],function(){"use strict";var r={},e={exports:{}},t=function(r,e){return r.split(e)},n=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,o=/^\.|#/;function i(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=function(r,e){if(!r)return"DIV";var i,u,s,a,f=!e.hasOwnProperty("id"),c=t(r,n),p=null;o.test(c[1])&&(p="DIV");for(a=0;a<c.length;a++)(u=c[a])&&(s=u.charAt(0),p?"."===s?(i=i||[]).push(u.substring(1,u.length)):"#"===s&&f&&(e.id=u.substring(1,u.length)):p=u);i&&(e.className&&i.push(e.className),e.className=i.join(" "));return e.namespace?p:p.toUpperCase()},i(e.exports)?e.exports:i(r)?r:void 0}),r("skylark-virtualdom/virtual-hyperscript/hooks/soft-set-hook",[],function(){"use strict";var r={},e={exports:{}};function t(r){if(!(this instanceof t))return new t(r);this.value=r}function n(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=t,t.prototype.hook=function(r,e){r[e]!==this.value&&(r[e]=this.value)},n(e.exports)?e.exports:n(r)?r:void 0}),r("skylark-virtualdom/virtual-hyperscript/hooks/ev-hook",[],function(){"use strict";var r={},e={exports:{}},t="__EV_STORE_KEY@001";function n(r){var e=r[t];return e||(e=r[t]={}),e}function o(r){if(!(this instanceof o))return new o(r);this.value=r}function i(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return e.exports=o,o.prototype.hook=function(r,e){var t=n(r),o=e.substr(3);t[o]=this.value},o.prototype.unhook=function(r,e){var t=n(r),o=e.substr(3);t[o]=void 0},i(e.exports)?e.exports:i(r)?r:void 0}),r("skylark-virtualdom/virtual-hyperscript/index",["skylark-langx/arrays","../vnode/vnode","../vnode/vtext","../vnode/is-vnode","../vnode/is-vtext","../vnode/is-widget","../vnode/is-vhook","../vnode/is-thunk","./parse-tag","./hooks/soft-set-hook","./hooks/ev-hook"],function(r,e,t,n,o,i,u,s,a,f,c){"use strict";var p={},l={exports:{}},v=r.isArray,d=e,y=t,h=n,k=o,x=i,m=u,g=s,b=a,A=f,w=c;function O(r){return h(r)||k(r)||x(r)||g(r)}function j(r){try{return JSON.stringify(r,null,"    ")}catch(e){return String(r)}}function N(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return l.exports=function(r,e,t){var n,o,i,u,s=[];!t&&(a=e,"string"==typeof a||v(a)||O(a))&&(t=e,o={});var a;n=b(r,o=o||e||{}),o.hasOwnProperty("key")&&(i=o.key,o.key=void 0);o.hasOwnProperty("namespace")&&(u=o.namespace,o.namespace=void 0);if("INPUT"===n&&!u&&o.hasOwnProperty("value")&&void 0!==o.value&&!m(o.value)){if(null!==o.value&&"string"!=typeof o.value)throw f={expected:"String",received:typeof o.value,Vnode:{tagName:n,properties:o}},(c=new Error).type="virtual-hyperscript.unsupported.value-type",c.message="Unexpected value type for input passed to h().\nExpected a "+j(f.expected)+" but got:\n"+j(f.received)+".\nThe vnode is:\n"+j(f.Vnode),c.Vnode=f.Vnode,c;o.value=A(o.value)}var f,c;(function(r){for(var e in r)if(r.hasOwnProperty(e)){var t=r[e];if(m(t))continue;"ev-"===e.substr(0,3)&&(r[e]=w(t))}})(o),void 0!==t&&null!==t&&function r(e,t,n,o){if("string"==typeof e)t.push(new y(e));else if("number"==typeof e)t.push(new y(String(e)));else if(O(e))t.push(e);else{if(!v(e)){if(null===e||void 0===e)return;throw u={foreignObject:e,parentVnode:{tagName:n,properties:o}},(s=new Error).type="virtual-hyperscript.unexpected.virtual-element",s.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+j(u.foreignObject)+".\nThe parent vnode is:\n"+j(u.parentVnode),s.foreignObject=u.foreignObject,s.parentVnode=u.parentVnode,s}for(var i=0;i<e.length;i++)r(e[i],t,n,o)}var u,s}(t,s,n,o);return new d(n,o,s,i,u)},N(l.exports)?l.exports:N(p)?p:void 0}),r("skylark-virtualdom/h",["./virtual-hyperscript/index"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=n,o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/create-element",["./vdom/create-element"],function(r){"use strict";var e={},t={exports:{}},n=r;function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return t.exports=n,o(t.exports)?t.exports:o(e)?e:void 0}),r("skylark-virtualdom/virtualdom",["skylark-langx/skylark","./diff","./patch","./h","./create-element","./vnode/vnode","./vnode/vtext"],function(r,e,t,n,o,i,u){return r.virtualdom={diff:e,patch:t,h:n,create:o,VNode:i,VText:u}}),r("skylark-virtualdom/main",["./virtualdom"],function(r){return r}),r("skylark-virtualdom",["skylark-virtualdom/main"],function(r){return r})}(t,n),!o){var s=n("skylark-langx/skylark");i?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-virtualdom-all.js.map
