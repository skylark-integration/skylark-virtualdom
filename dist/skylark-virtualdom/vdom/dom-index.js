/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define([],function(){"use strict";var r={},n={exports:{}},t={};function e(r,n,t){if(0===r.length)return!1;for(var e,i,o=0,u=r.length-1;o<=u;){if(i=r[e=(u+o)/2>>0],o===u)return i>=n&&i<=t;if(i<n)o=e+1;else{if(!(i>t))return!0;u=e-1}}return!1}function i(r,n){return r>n?1:-1}function o(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var n;for(n in r)return!1;return!0}(r)}return n.exports=function(r,n,o,u){return o&&0!==o.length?(o.sort(i),function r(n,i,o,u,f){u=u||{};if(n){e(o,f,f)&&(u[f]=n);var c=i.children;if(c)for(var s=n.childNodes,a=0;a<i.children.length;a++){f+=1;var l=c[a]||t,h=f+(l.count||0);e(o,f,h)&&r(s[a],l,o,u,f),f=h}}return u}(r,n,o,u,0)):{}},o(n.exports)?n.exports:o(r)?r:void 0});
//# sourceMappingURL=../sourcemaps/vdom/dom-index.js.map
