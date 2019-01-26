/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/hoster","./apply-properties","../vnode/is-vnode","../vnode/is-vtext","../vnode/is-widget","../vnode/handle-thunk"],function(e,r,t,n,a,o){"use strict";var i={},u={exports:{}},d=e.document,v=r,l=t,s=n,p=a,c=o;function f(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var r;for(r in e)return!1;return!0}(e)}return u.exports=function e(r,t){var n=t&&t.document||d;var a=t?t.warn:null;r=c(r).a;if(p(r))return r.init();if(s(r))return n.createTextNode(r.text);if(!l(r))return a&&a("Item is not a valid virtual dom node",r),null;var o=null===r.namespace?n.createElement(r.tagName):n.createElementNS(r.namespace,r.tagName);var i=r.properties;v(o,i);var u=r.children;for(var f=0;f<u.length;f++){var m=e(u[f],t);m&&o.appendChild(m)}return o},f(u.exports)?u.exports:f(i)?i:void 0});
//# sourceMappingURL=../sourcemaps/vdom/create-element.js.map
