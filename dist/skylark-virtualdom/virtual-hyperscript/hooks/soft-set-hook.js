/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define([],function(){"use strict";var t={},r={exports:{}};function e(t){if(!(this instanceof e))return new e(t);this.value=t}function n(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var r;for(r in t)return!1;return!0}(t)}return r.exports=e,e.prototype.hook=function(t,r){t[r]!==this.value&&(t[r]=this.value)},n(r.exports)?r.exports:n(t)?t:void 0});
//# sourceMappingURL=../../sourcemaps/virtual-hyperscript/hooks/soft-set-hook.js.map
