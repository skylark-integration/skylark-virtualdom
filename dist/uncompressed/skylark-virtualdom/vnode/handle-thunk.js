define([
    './is-vnode',
    './is-vtext',
    './is-widget',
    './is-thunk'
], function (__module__0, __module__1, __module__2, __module__3) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isVNode = __module__0;
    var isVText = __module__1;
    var isWidget = __module__2;
    var isThunk = __module__3;
    module.exports = handleThunk;
    function handleThunk(a, b) {
        var renderedA = a;
        var renderedB = b;
        if (isThunk(b)) {
            renderedB = renderThunk(b, a);
        }
        if (isThunk(a)) {
            renderedA = renderThunk(a, null);
        }
        return {
            a: renderedA,
            b: renderedB
        };
    }
    function renderThunk(thunk, previous) {
        var renderedThunk = thunk.vnode;
        if (!renderedThunk) {
            renderedThunk = thunk.vnode = thunk.render(previous);
        }
        if (!(isVNode(renderedThunk) || isVText(renderedThunk) || isWidget(renderedThunk))) {
            throw new Error('thunk did not return a valid node');
        }
        return renderedThunk;
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