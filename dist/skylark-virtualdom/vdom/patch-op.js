/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["./apply-properties","../vnode/is-widget","../vnode/vpatch","./update-widget"],function(e,r,t,n){"use strict";var o={},a={exports:{}},u=e,i=r,c=t,d=n;function p(e,r){"function"==typeof r.destroy&&i(r)&&r.destroy(e)}function s(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var r;for(r in e)return!1;return!0}(e)}return a.exports=function(e,r,t){var n=e.type,o=e.vNode,a=e.patch;switch(n){case c.REMOVE:return function(e,r){var t=e.parentNode;t&&t.removeChild(e);return p(e,r),null}(r,o);case c.INSERT:return function(e,r,t){var n=t.render(r,t);e&&e.appendChild(n);return e}(r,a,t);case c.VTEXT:return function(e,r,t,n){var o;if(3===e.nodeType)e.replaceData(0,e.length,t.text),o=e;else{var a=e.parentNode;o=n.render(t,n),a&&o!==e&&a.replaceChild(o,e)}return o}(r,0,a,t);case c.WIDGET:return function(e,r,t,n){var o,a=d(r,t);o=a?t.update(r,e)||e:n.render(t,n);var u=e.parentNode;u&&o!==e&&u.replaceChild(o,e);a||p(e,r);return o}(r,o,a,t);case c.VNODE:return function(e,r,t,n){var o=e.parentNode,a=n.render(t,n);o&&a!==e&&o.replaceChild(a,e);return a}(r,0,a,t);case c.ORDER:return function(e,r){for(var t,n,o,a=e.childNodes,u={},i=0;i<r.removes.length;i++)n=r.removes[i],t=a[n.from],n.key&&(u[n.key]=t),e.removeChild(t);for(var c=a.length,d=0;d<r.inserts.length;d++)o=r.inserts[d],t=u[o.key],e.insertBefore(t,o.to>=c++?null:a[o.to])}(r,a),r;case c.PROPS:return u(r,a,o.properties),r;case c.THUNK:return function(e,r){e&&r&&e!==r&&e.parentNode&&e.parentNode.replaceChild(r,e);return r}(r,t.patch(r,a,t));default:return r}},s(a.exports)?a.exports:s(o)?o:void 0});
//# sourceMappingURL=../sourcemaps/vdom/patch-op.js.map
