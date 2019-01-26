define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var noChild = {};
    module.exports = domIndex;
    function domIndex(rootNode, tree, indices, nodes) {
        if (!indices || indices.length === 0) {
            return {};
        } else {
            indices.sort(ascending);
            return recurse(rootNode, tree, indices, nodes, 0);
        }
    }
    function recurse(rootNode, tree, indices, nodes, rootIndex) {
        nodes = nodes || {};
        if (rootNode) {
            if (indexInRange(indices, rootIndex, rootIndex)) {
                nodes[rootIndex] = rootNode;
            }
            var vChildren = tree.children;
            if (vChildren) {
                var childNodes = rootNode.childNodes;
                for (var i = 0; i < tree.children.length; i++) {
                    rootIndex += 1;
                    var vChild = vChildren[i] || noChild;
                    var nextIndex = rootIndex + (vChild.count || 0);
                    if (indexInRange(indices, rootIndex, nextIndex)) {
                        recurse(childNodes[i], vChild, indices, nodes, rootIndex);
                    }
                    rootIndex = nextIndex;
                }
            }
        }
        return nodes;
    }
    function indexInRange(indices, left, right) {
        if (indices.length === 0) {
            return false;
        }
        var minIndex = 0;
        var maxIndex = indices.length - 1;
        var currentIndex;
        var currentItem;
        while (minIndex <= maxIndex) {
            currentIndex = (maxIndex + minIndex) / 2 >> 0;
            currentItem = indices[currentIndex];
            if (minIndex === maxIndex) {
                return currentItem >= left && currentItem <= right;
            } else if (currentItem < left) {
                minIndex = currentIndex + 1;
            } else if (currentItem > right) {
                maxIndex = currentIndex - 1;
            } else {
                return true;
            }
        }
        return false;
    }
    function ascending(a, b) {
        return a > b ? 1 : -1;
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