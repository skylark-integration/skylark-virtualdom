define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = SoftSetHook;
    function SoftSetHook(value) {
        if (!(this instanceof SoftSetHook)) {
            return new SoftSetHook(value);
        }
        this.value = value;
    }
    SoftSetHook.prototype.hook = function (node, propertyName) {
        if (node[propertyName] !== this.value) {
            node[propertyName] = this.value;
        }
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