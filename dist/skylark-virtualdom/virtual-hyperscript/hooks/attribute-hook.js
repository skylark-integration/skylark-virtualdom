/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define([],function(){"use strict";var t={},e={exports:{}};function r(t,e){if(!(this instanceof r))return new r(t,e);this.namespace=t,this.value=e}function o(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var e;for(e in t)return!1;return!0}(t)}return e.exports=r,r.prototype.hook=function(t,e,r){r&&"AttributeHook"===r.type&&r.value===this.value&&r.namespace===this.namespace||t.setAttributeNS(this.namespace,e,this.value)},r.prototype.unhook=function(t,e,r){if(!r||"AttributeHook"!==r.type||r.namespace!==this.namespace){var o=e.indexOf(":"),n=o>-1?e.substr(o+1):e;t.removeAttributeNS(this.namespace,n)}},r.prototype.type="AttributeHook",o(e.exports)?e.exports:o(t)?t:void 0});
//# sourceMappingURL=../../sourcemaps/virtual-hyperscript/hooks/attribute-hook.js.map
