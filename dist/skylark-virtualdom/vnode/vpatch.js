/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["./version"],function(t){"use strict";var r={},e={exports:{}},o=t;function n(t,r,e){this.type=Number(t),this.vNode=r,this.patch=e}function i(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var r;for(r in t)return!1;return!0}(t)}return n.NONE=0,n.VTEXT=1,n.VNODE=2,n.WIDGET=3,n.PROPS=4,n.ORDER=5,n.INSERT=6,n.REMOVE=7,n.THUNK=8,e.exports=n,n.prototype.version=o,n.prototype.type="VirtualPatch",i(e.exports)?e.exports:i(r)?r:void 0});
//# sourceMappingURL=../sourcemaps/vnode/vpatch.js.map
