/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define([],function(){"use strict";var t={},r={exports:{}},n="__EV_STORE_KEY@001";function o(t){var r=t[n];return r||(r=t[n]={}),r}function e(t){if(!(this instanceof e))return new e(t);this.value=t}function u(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var r;for(r in t)return!1;return!0}(t)}return r.exports=e,e.prototype.hook=function(t,r){o(t)[r.substr(3)]=this.value},e.prototype.unhook=function(t,r){o(t)[r.substr(3)]=void 0},u(r.exports)?r.exports:u(t)?t:void 0});
//# sourceMappingURL=../../sourcemaps/virtual-hyperscript/hooks/ev-hook.js.map
