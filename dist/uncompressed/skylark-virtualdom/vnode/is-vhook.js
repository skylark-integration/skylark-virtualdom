define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = isHook;
    function isHook(hook) {
        return hook && (typeof hook.hook === 'function' && !hook.hasOwnProperty('hook') || typeof hook.unhook === 'function' && !hook.hasOwnProperty('unhook'));
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