define([
    'skylark-langx/types',
    '../vnode/is-vhook'
], function (__module__0, __module__1) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isObject = __module__0.isObject;
    var isHook = __module__1;
    module.exports = diffProps;
    function diffProps(a, b) {
        var diff;
        for (var aKey in a) {
            if (!(aKey in b)) {
                diff = diff || {};
                diff[aKey] = undefined;
            }
            var aValue = a[aKey];
            var bValue = b[aKey];
            if (aValue === bValue) {
                continue;
            } else if (isObject(aValue) && isObject(bValue)) {
                if (getPrototype(bValue) !== getPrototype(aValue)) {
                    diff = diff || {};
                    diff[aKey] = bValue;
                } else if (isHook(bValue)) {
                    diff = diff || {};
                    diff[aKey] = bValue;
                } else {
                    var objectDiff = diffProps(aValue, bValue);
                    if (objectDiff) {
                        diff = diff || {};
                        diff[aKey] = objectDiff;
                    }
                }
            } else {
                diff = diff || {};
                diff[aKey] = bValue;
            }
        }
        for (var bKey in b) {
            if (!(bKey in a)) {
                diff = diff || {};
                diff[bKey] = b[bKey];
            }
        }
        return diff;
    }
    function getPrototype(value) {
        if (Object.getPrototypeOf) {
            return Object.getPrototypeOf(value);
        } else if (value.__proto__) {
            return value.__proto__;
        } else if (value.constructor) {
            return value.constructor.prototype;
        }
    }
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