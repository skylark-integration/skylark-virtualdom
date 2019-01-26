define([
    'skylark-langx/hoster',
    'skylark-langx/funcs'
], function (__module__0, __module__1) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var document = __module__0.document;
    var nextTick = __module__1.defer;
    module.exports = MutableFocusHook;
    function MutableFocusHook() {
        if (!(this instanceof MutableFocusHook)) {
            return new MutableFocusHook();
        }
    }
    MutableFocusHook.prototype.hook = function (node) {
        nextTick(function () {
            if (document.activeElement !== node) {
                node.focus();
            }
        });
    };
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