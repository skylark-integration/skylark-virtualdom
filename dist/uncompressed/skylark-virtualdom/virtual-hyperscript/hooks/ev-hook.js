define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var hashKey = '__EV_STORE_KEY@001';
    function EvStore(elem) {
        var hash = elem[hashKey];
        if (!hash) {
            hash = elem[hashKey] = {};
        }
        return hash;
    }
    module.exports = EvHook;
    function EvHook(value) {
        if (!(this instanceof EvHook)) {
            return new EvHook(value);
        }
        this.value = value;
    }
    EvHook.prototype.hook = function (node, propertyName) {
        var es = EvStore(node);
        var propName = propertyName.substr(3);
        es[propName] = this.value;
    };
    EvHook.prototype.unhook = function (node, propertyName) {
        var es = EvStore(node);
        var propName = propertyName.substr(3);
        es[propName] = undefined;
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