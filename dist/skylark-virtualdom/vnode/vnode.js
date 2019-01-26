/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
define(["./version","./is-vnode","./is-widget","./is-thunk","./is-vhook"],function(t,o,s,r,e){"use strict";var n={},i={exports:{}},h=t,a=o,u=s,p=r,d=e;i.exports=f;var v={},c=[];function f(t,o,s,r,e){this.tagName=t,this.properties=o||v,this.children=s||c,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof e?e:null;var n,i=s&&s.length||0,h=0,f=!1,y=!1,k=!1;for(var g in o)if(o.hasOwnProperty(g)){var l=o[g];d(l)&&l.unhook&&(n||(n={}),n[g]=l)}for(var x=0;x<i;x++){var m=s[x];a(m)?(h+=m.count||0,!f&&m.hasWidgets&&(f=!0),!y&&m.hasThunks&&(y=!0),k||!m.hooks&&!m.descendantHooks||(k=!0)):!f&&u(m)?"function"==typeof m.destroy&&(f=!0):!y&&p(m)&&(y=!0)}this.count=i+h,this.hasWidgets=f,this.hasThunks=y,this.hooks=n,this.descendantHooks=k}function y(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var o;for(o in t)return!1;return!0}(t)}return f.prototype.version=h,f.prototype.type="VirtualNode",y(i.exports)?i.exports:y(n)?n:void 0});
//# sourceMappingURL=../sourcemaps/vnode/vnode.js.map
