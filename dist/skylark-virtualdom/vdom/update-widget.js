/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["../vnode/is-widget"],function(r){"use strict";var n={},t={exports:{}},i=r;function e(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var n;for(n in r)return!1;return!0}(r)}return t.exports=function(r,n){if(i(r)&&i(n))return"name"in r&&"name"in n?r.id===n.id:r.init===n.init;return!1},e(t.exports)?t.exports:e(n)?n:void 0});
//# sourceMappingURL=../sourcemaps/vdom/update-widget.js.map
