define(['../vnode/is-widget'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isWidget = __module__0;
    module.exports = updateWidget;
    function updateWidget(a, b) {
        if (isWidget(a) && isWidget(b)) {
            if ('name' in a && 'name' in b) {
                return a.id === b.id;
            } else {
                return a.init === b.init;
            }
        }
        return false;
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