/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["./is-vnode","./is-vtext","./is-widget","./is-thunk"],function(r,n,t,e){"use strict";var o={},i={exports:{}},u=r,d=n,s=t,v=e;function a(r,n){var t=r.vnode;if(t||(t=r.vnode=r.render(n)),!(u(t)||d(t)||s(t)))throw new Error("thunk did not return a valid node");return t}function f(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var n;for(n in r)return!1;return!0}(r)}return i.exports=function(r,n){var t=r,e=n;v(n)&&(e=a(n,r));v(r)&&(t=a(r,null));return{a:t,b:e}},f(i.exports)?i.exports:f(o)?o:void 0});
//# sourceMappingURL=../sourcemaps/vnode/handle-thunk.js.map
