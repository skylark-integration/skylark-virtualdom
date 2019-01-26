/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/types","../vnode/is-vhook"],function(r,t){"use strict";var o={},e={exports:{}},n=r.isObject,i=t;function f(r){return Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__?r.__proto__:r.constructor?r.constructor.prototype:void 0}function s(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var t;for(t in r)return!1;return!0}(r)}return e.exports=function r(t,o){var e;for(var s in t){s in o||((e=e||{})[s]=void 0);var c=t[s],u=o[s];if(c!==u)if(n(c)&&n(u))if(f(u)!==f(c))(e=e||{})[s]=u;else if(i(u))(e=e||{})[s]=u;else{var p=r(c,u);p&&((e=e||{})[s]=p)}else(e=e||{})[s]=u}for(var v in o)v in t||((e=e||{})[v]=o[v]);return e},s(e.exports)?e.exports:s(o)?o:void 0});
//# sourceMappingURL=../sourcemaps/vtree/diff-props.js.map
