define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = isThunk;
    function isThunk(t) {
        return t && t.type === 'Thunk';
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