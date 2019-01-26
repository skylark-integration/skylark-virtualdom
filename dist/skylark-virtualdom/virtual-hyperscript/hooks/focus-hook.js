/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/hoster","skylark-langx/funcs"],function(n,r){"use strict";var t={},e={exports:{}},o=n.document,i=r.defer;function u(){if(!(this instanceof u))return new u}function f(n){return"object"!=typeof n||Array.isArray(n)||!function(n){var r;for(r in n)return!1;return!0}(n)}return e.exports=u,u.prototype.hook=function(n){i(function(){o.activeElement!==n&&n.focus()})},f(e.exports)?e.exports:f(t)?t:void 0});
//# sourceMappingURL=../../sourcemaps/virtual-hyperscript/hooks/focus-hook.js.map
