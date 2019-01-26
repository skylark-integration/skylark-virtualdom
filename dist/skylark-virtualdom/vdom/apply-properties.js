/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/types","../vnode/is-vhook"],function(t,r){"use strict";var o={},e={exports:{}},i=t.isObject,n=r;function s(t,r,o,e){if(e){var i=e[r];if(n(i))i.unhook&&i.unhook(t,r,o);else if("attributes"===r)for(var s in i)t.removeAttribute(s);else if("style"===r)for(var v in i)t.style[v]="";else t[r]="string"==typeof i?"":null}}function v(t,r,o,e,n){var s=o?o[e]:void 0;if("attributes"!==e)if(s&&i(s)&&f(s)!==f(n))t[e]=n;else{i(t[e])||(t[e]={});var v="style"===e?"":void 0;for(var u in n){var a=n[u];t[e][u]=void 0===a?v:a}}else for(var c in n){var p=n[c];void 0===p?t.removeAttribute(c):t.setAttribute(c,p)}}function f(t){return Object.getPrototypeOf?Object.getPrototypeOf(t):t.__proto__?t.__proto__:t.constructor?t.constructor.prototype:void 0}function u(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var r;for(r in t)return!1;return!0}(t)}return e.exports=function(t,r,o){for(var e in r){var f=r[e];void 0===f?s(t,e,f,o):n(f)?(s(t,e,f,o),f.hook&&f.hook(t,e,o?o[e]:void 0)):i(f)?v(t,r,o,e,f):t[e]=f}},u(e.exports)?e.exports:u(o)?o:void 0});
//# sourceMappingURL=../sourcemaps/vdom/apply-properties.js.map
