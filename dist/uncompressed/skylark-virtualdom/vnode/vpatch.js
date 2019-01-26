define(['./version'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    VirtualPatch.NONE = 0;
    VirtualPatch.VTEXT = 1;
    VirtualPatch.VNODE = 2;
    VirtualPatch.WIDGET = 3;
    VirtualPatch.PROPS = 4;
    VirtualPatch.ORDER = 5;
    VirtualPatch.INSERT = 6;
    VirtualPatch.REMOVE = 7;
    VirtualPatch.THUNK = 8;
    module.exports = VirtualPatch;
    function VirtualPatch(type, vNode, patch) {
        this.type = Number(type);
        this.vNode = vNode;
        this.patch = patch;
    }
    VirtualPatch.prototype.version = version;
    VirtualPatch.prototype.type = 'VirtualPatch';
    function __isEmptyObject(obj) {
        var attr;
        for (attr in obj)
            return !1;
        return !0;
    }
    function __isValidToReturn(obj) {
        return typeof obj != 'object' || Array.isArray(obj) || !__isEmptyObject(obj);
    }
    if (__isValidToReturn(module.exports))
        return module.exports;
    else if (__isValidToReturn(exports))
        return exports;
});