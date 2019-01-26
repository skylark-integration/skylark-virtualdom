/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/hoster","skylark-langx/arrays","./create-element","./dom-index","./patch-op"],function(r,e,n,t,a){"use strict";var o={},u={exports:{}},c=r.document,i=e.isArray,f=n,s=t,p=a;function h(r,e,n){var t=function(r){var e=[];for(var n in r)"a"!==n&&e.push(Number(n));return e}(e);if(0===t.length)return r;var a=s(r,e.a,t),o=r.ownerDocument;n.document||o===c||(n.document=o);for(var u=0;u<t.length;u++){var i=t[u];r=v(r,a[i],e[i],n)}return r}function v(r,e,n,t){if(!e)return r;var a;if(i(n))for(var o=0;o<n.length;o++)a=p(n[o],e,t),e===r&&(r=a);else a=p(n,e,t),e===r&&(r=a);return r}function d(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var e;for(e in r)return!1;return!0}(r)}return u.exports=function r(e,n,t){t=t||{};t.patch=t.patch&&t.patch!==r?t.patch:h;t.render=t.render||f;return t.patch(e,n,t)},d(u.exports)?u.exports:d(o)?o:void 0});
//# sourceMappingURL=../sourcemaps/vdom/patch.js.map
