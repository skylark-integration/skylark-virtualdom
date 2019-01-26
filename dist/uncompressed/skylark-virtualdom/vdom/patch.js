define([
    'skylark-langx/hoster',
    'skylark-langx/arrays',
    './create-element',
    './dom-index',
    './patch-op'
], function (__module__0, __module__1, __module__2, __module__3, __module__4) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var document = __module__0.document;
    var isArray = __module__1.isArray;
    var render = __module__2;
    var domIndex = __module__3;
    var patchOp = __module__4;
    module.exports = patch;
    function patch(rootNode, patches, renderOptions) {
        renderOptions = renderOptions || {};
        renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : patchRecursive;
        renderOptions.render = renderOptions.render || render;
        return renderOptions.patch(rootNode, patches, renderOptions);
    }
    function patchRecursive(rootNode, patches, renderOptions) {
        var indices = patchIndices(patches);
        if (indices.length === 0) {
            return rootNode;
        }
        var index = domIndex(rootNode, patches.a, indices);
        var ownerDocument = rootNode.ownerDocument;
        if (!renderOptions.document && ownerDocument !== document) {
            renderOptions.document = ownerDocument;
        }
        for (var i = 0; i < indices.length; i++) {
            var nodeIndex = indices[i];
            rootNode = applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions);
        }
        return rootNode;
    }
    function applyPatch(rootNode, domNode, patchList, renderOptions) {
        if (!domNode) {
            return rootNode;
        }
        var newNode;
        if (isArray(patchList)) {
            for (var i = 0; i < patchList.length; i++) {
                newNode = patchOp(patchList[i], domNode, renderOptions);
                if (domNode === rootNode) {
                    rootNode = newNode;
                }
            }
        } else {
            newNode = patchOp(patchList, domNode, renderOptions);
            if (domNode === rootNode) {
                rootNode = newNode;
            }
        }
        return rootNode;
    }
    function patchIndices(patches) {
        var indices = [];
        for (var key in patches) {
            if (key !== 'a') {
                indices.push(Number(key));
            }
        }
        return indices;
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