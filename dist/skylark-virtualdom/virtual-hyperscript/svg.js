/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/arrays","./index","./svg-attribute-namespace","./hooks/attribute-hook"],function(r,t,e,o){"use strict";var n={},a={exports:{}},i=r.isArray,s=t,u=e,f=o,p="http://www.w3.org/2000/svg";function v(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var t;for(t in r)return!1;return!0}(r)}return a.exports=function(r,t,e){!e&&(o=t,"string"==typeof o||i(o))&&(e=t,t={});var o;(t=t||{}).namespace=p;var n=t.attributes||(t.attributes={});for(var a in t)if(t.hasOwnProperty(a)){var v=u(a);if(void 0!==v){var y=t[a];"string"!=typeof y&&"number"!=typeof y&&"boolean"!=typeof y||(null===v?(n[a]=y,t[a]=void 0):t[a]=f(v,y))}}return s(r,t,e)},v(a.exports)?a.exports:v(n)?n:void 0});
//# sourceMappingURL=../sourcemaps/virtual-hyperscript/svg.js.map
