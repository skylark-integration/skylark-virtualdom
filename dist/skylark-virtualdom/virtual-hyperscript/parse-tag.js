/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define([],function(){"use strict";var r={},t={exports:{}},e=function(r,t){return r.split(t)},n=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,s=/^\.|#/;function u(r){return"object"!=typeof r||Array.isArray(r)||!function(r){var t;for(t in r)return!1;return!0}(r)}return t.exports=function(r,t){if(!r)return"DIV";var u,a,i,o,c=!t.hasOwnProperty("id"),p=e(r,n),f=null;s.test(p[1])&&(f="DIV");for(o=0;o<p.length;o++)(a=p[o])&&(i=a.charAt(0),f?"."===i?(u=u||[]).push(a.substring(1,a.length)):"#"===i&&c&&(t.id=a.substring(1,a.length)):f=a);u&&(t.className&&u.push(t.className),t.className=u.join(" "));return t.namespace?f:f.toUpperCase()},u(t.exports)?t.exports:u(r)?r:void 0});
//# sourceMappingURL=../sourcemaps/virtual-hyperscript/parse-tag.js.map
