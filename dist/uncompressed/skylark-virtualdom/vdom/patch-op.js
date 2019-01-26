define([
    './apply-properties',
    '../vnode/is-widget',
    '../vnode/vpatch',
    './update-widget'
], function (__module__0, __module__1, __module__2, __module__3) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var applyProperties = __module__0;
    var isWidget = __module__1;
    var VPatch = __module__2;
    var updateWidget = __module__3;
    module.exports = applyPatch;
    function applyPatch(vpatch, domNode, renderOptions) {
        var type = vpatch.type;
        var vNode = vpatch.vNode;
        var patch = vpatch.patch;
        switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode);
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions);
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions);
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions);
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions);
        case VPatch.ORDER:
            reorderChildren(domNode, patch);
            return domNode;
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties);
            return domNode;
        case VPatch.THUNK:
            return replaceRoot(domNode, renderOptions.patch(domNode, patch, renderOptions));
        default:
            return domNode;
        }
    }
    function removeNode(domNode, vNode) {
        var parentNode = domNode.parentNode;
        if (parentNode) {
            parentNode.removeChild(domNode);
        }
        destroyWidget(domNode, vNode);
        return null;
    }
    function insertNode(parentNode, vNode, renderOptions) {
        var newNode = renderOptions.render(vNode, renderOptions);
        if (parentNode) {
            parentNode.appendChild(newNode);
        }
        return parentNode;
    }
    function stringPatch(domNode, leftVNode, vText, renderOptions) {
        var newNode;
        if (domNode.nodeType === 3) {
            domNode.replaceData(0, domNode.length, vText.text);
            newNode = domNode;
        } else {
            var parentNode = domNode.parentNode;
            newNode = renderOptions.render(vText, renderOptions);
            if (parentNode && newNode !== domNode) {
                parentNode.replaceChild(newNode, domNode);
            }
        }
        return newNode;
    }
    function widgetPatch(domNode, leftVNode, widget, renderOptions) {
        var updating = updateWidget(leftVNode, widget);
        var newNode;
        if (updating) {
            newNode = widget.update(leftVNode, domNode) || domNode;
        } else {
            newNode = renderOptions.render(widget, renderOptions);
        }
        var parentNode = domNode.parentNode;
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        if (!updating) {
            destroyWidget(domNode, leftVNode);
        }
        return newNode;
    }
    function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
        var parentNode = domNode.parentNode;
        var newNode = renderOptions.render(vNode, renderOptions);
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function destroyWidget(domNode, w) {
        if (typeof w.destroy === 'function' && isWidget(w)) {
            w.destroy(domNode);
        }
    }
    function reorderChildren(domNode, moves) {
        var childNodes = domNode.childNodes;
        var keyMap = {};
        var node;
        var remove;
        var insert;
        for (var i = 0; i < moves.removes.length; i++) {
            remove = moves.removes[i];
            node = childNodes[remove.from];
            if (remove.key) {
                keyMap[remove.key] = node;
            }
            domNode.removeChild(node);
        }
        var length = childNodes.length;
        for (var j = 0; j < moves.inserts.length; j++) {
            insert = moves.inserts[j];
            node = keyMap[insert.key];
            domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
        }
    }
    function replaceRoot(oldRoot, newRoot) {
        if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
            oldRoot.parentNode.replaceChild(newRoot, oldRoot);
        }
        return newRoot;
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