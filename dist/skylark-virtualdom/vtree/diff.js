/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["skylark-langx/arrays","../vnode/vpatch","../vnode/is-vnode","../vnode/is-vtext","../vnode/is-widget","../vnode/is-thunk","../vnode/handle-thunk","./diff-props"],function(e,n,r,t,o,u,s,l){"use strict";var i={},h={exports:{}},f=e.isArray,a=n,v=r,c=t,y=o,k=u,p=s,d=l;function g(e,n){var r={a:e};return w(e,n,r,0),r}function w(e,n,r,t){if(e!==n){var o=r[t],u=!1;if(k(e)||k(n))E(e,n,r,t);else if(null==n)y(e)||(m(e,r,t),o=r[t]),o=x(o,new a(a.REMOVE,e,n));else if(v(n))if(v(e))if(e.tagName===n.tagName&&e.namespace===n.namespace&&e.key===n.key){var s=d(e.properties,n.properties);s&&(o=x(o,new a(a.PROPS,e,s))),o=function(e,n,r,t,o){for(var u=e.children,s=function(e,n){var r=T(n),t=r.keys,o=r.free;if(o.length===n.length)return{children:n,moves:null};var u=T(e),s=u.keys;if(u.free.length===e.length)return{children:n,moves:null};for(var l=[],i=0,h=o.length,f=0,a=0;a<e.length;a++){var v,c=e[a];c.key?t.hasOwnProperty(c.key)?(v=t[c.key],l.push(n[v])):(v=a-f++,l.push(null)):i<h?(v=o[i++],l.push(n[v])):(v=a-f++,l.push(null))}for(var y=i>=o.length?n.length:o[i],k=0;k<n.length;k++){var p=n[k];p.key?s.hasOwnProperty(p.key)||l.push(p):k>=y&&l.push(p)}for(var d,g=l.slice(),w=0,m=[],E=[],x=0;x<n.length;){var R=n[x];for(d=g[w];null===d&&g.length;)m.push(O(g,w,null)),d=g[w];d&&d.key===R.key?(w++,x++):R.key?(d&&d.key&&t[d.key]!==x+1?(m.push(O(g,w,d.key)),(d=g[w])&&d.key===R.key?w++:E.push({key:R.key,to:x})):E.push({key:R.key,to:x}),x++):d&&d.key&&m.push(O(g,w,d.key))}for(;w<g.length;)d=g[w],m.push(O(g,w,d&&d.key));if(m.length===f&&!E.length)return{children:l,moves:null};return{children:l,moves:{removes:m,inserts:E}}}(u,n.children),l=s.children,i=u.length,h=l.length,f=i>h?i:h,c=0;c<f;c++){var y=u[c],k=l[c];o+=1,y?w(y,k,r,o):k&&(t=x(t,new a(a.INSERT,null,k))),v(y)&&y.count&&(o+=y.count)}s.moves&&(t=x(t,new a(a.ORDER,e,s.moves)));return t}(e,n,r,o,t)}else o=x(o,new a(a.VNODE,e,n)),u=!0;else o=x(o,new a(a.VNODE,e,n)),u=!0;else c(n)?c(e)?e.text!==n.text&&(o=x(o,new a(a.VTEXT,e,n))):(o=x(o,new a(a.VTEXT,e,n)),u=!0):y(n)&&(y(e)||(u=!0),o=x(o,new a(a.WIDGET,e,n)));o&&(r[t]=o),u&&m(e,r,t)}}function m(e,n,r){!function e(n,r,t){if(v(n)){if(n.hooks&&(r[t]=x(r[t],new a(a.PROPS,n,function(e){var n={};for(var r in e)n[r]=void 0;return n}(n.hooks)))),n.descendantHooks||n.hasThunks)for(var o=n.children,u=o.length,s=0;s<u;s++){var l=o[s];e(l,r,t+=1),v(l)&&l.count&&(t+=l.count)}}else k(n)&&E(n,null,r,t)}(e,n,r),function e(n,r,t){if(y(n))"function"==typeof n.destroy&&(r[t]=x(r[t],new a(a.REMOVE,n,null)));else if(v(n)&&(n.hasWidgets||n.hasThunks))for(var o=n.children,u=o.length,s=0;s<u;s++){var l=o[s];e(l,r,t+=1),v(l)&&l.count&&(t+=l.count)}else k(n)&&E(n,null,r,t)}(e,n,r)}function E(e,n,r,t){var o=p(e,n),u=g(o.a,o.b);(function(e){for(var n in e)if("a"!==n)return!0;return!1})(u)&&(r[t]=new a(a.THUNK,null,u))}function O(e,n,r){return e.splice(n,1),{from:n,key:r}}function T(e){for(var n={},r=[],t=e.length,o=0;o<t;o++){var u=e[o];u.key?n[u.key]=o:r.push(o)}return{keys:n,free:r}}function x(e,n){return e?(f(e)?e.push(n):e=[e,n],e):n}function R(e){return"object"!=typeof e||Array.isArray(e)||!function(e){var n;for(n in e)return!1;return!0}(e)}return h.exports=g,R(h.exports)?h.exports:R(i)?i:void 0});
//# sourceMappingURL=../sourcemaps/vtree/diff.js.map