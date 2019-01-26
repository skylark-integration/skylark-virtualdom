define([
    'skylark-langx/hoster',
    './apply-properties',
    '../vnode/is-vnode',
    '../vnode/is-vtext',
    '../vnode/is-widget',
    '../vnode/handle-thunk'
], function (__module__0, __module__1, __module__2, __module__3, __module__4, __module__5) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var document = __module__0.document;
    var applyProperties = __module__1;
    var isVNode = __module__2;
    var isVText = __module__3;
    var isWidget = __module__4;
    var handleThunk = __module__5;
    module.exports = createElement;
    function createElement(vnode, opts) {
        var doc = opts ? opts.document || document : document;
        var warn = opts ? opts.warn : null;
        vnode = handleThunk(vnode).a;
        if (isWidget(vnode)) {
            return vnode.init();
        } else if (isVText(vnode)) {
            return doc.createTextNode(vnode.text);
        } else if (!isVNode(vnode)) {
            if (warn) {
                warn('Item is not a valid virtual dom node', vnode);
            }
            return null;
        }
        var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName);
        var props = vnode.properties;
        applyProperties(node, props);
        var children = vnode.children;
        for (var i = 0; i < children.length; i++) {
            var childNode = createElement(children[i], opts);
            if (childNode) {
                node.appendChild(childNode);
            }
        }
        return node;
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