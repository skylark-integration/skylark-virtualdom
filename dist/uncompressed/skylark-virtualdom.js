/**
 * skylark-virtualdom - A version of virtual-dom that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-virtualdom/
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                exports: null
            };
            require(id);
        } else {
            map[id] = factory;
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.exports) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args);
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx/skylark");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-virtualdom/vnode/version',[], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = '2';
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
define('skylark-virtualdom/vnode/vpatch',['./version'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    VirtualPatch.NONE = 0;
    VirtualPatch.VTEXT = 1;
    VirtualPatch.VNODE = 2;
    VirtualPatch.WIDGET = 3;
    VirtualPatch.PROPS = 4;
    VirtualPatch.ORDER = 5;
    VirtualPatch.INSERT = 6;
    VirtualPatch.REMOVE = 7;
    VirtualPatch.THUNK = 8;
    module.exports = VirtualPatch;
    function VirtualPatch(type, vNode, patch) {
        this.type = Number(type);
        this.vNode = vNode;
        this.patch = patch;
    }
    VirtualPatch.prototype.version = version;
    VirtualPatch.prototype.type = 'VirtualPatch';
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
define('skylark-virtualdom/vnode/is-vnode',['./version'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    module.exports = isVirtualNode;
    function isVirtualNode(x) {
        return x && x.type === 'VirtualNode' && x.version === version;
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
define('skylark-virtualdom/vnode/is-vtext',['./version'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    module.exports = isVirtualText;
    function isVirtualText(x) {
        return x && x.type === 'VirtualText' && x.version === version;
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
define('skylark-virtualdom/vnode/is-widget',[], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = isWidget;
    function isWidget(w) {
        return w && w.type === 'Widget';
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
define('skylark-virtualdom/vnode/is-thunk',[], function () {
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
define('skylark-virtualdom/vnode/handle-thunk',[
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
define('skylark-virtualdom/vnode/is-vhook',[], function () {
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
define('skylark-virtualdom/vtree/diff-props',[
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
define('skylark-virtualdom/vtree/diff',[
    'skylark-langx/arrays',
    '../vnode/vpatch',
    '../vnode/is-vnode',
    '../vnode/is-vtext',
    '../vnode/is-widget',
    '../vnode/is-thunk',
    '../vnode/handle-thunk',
    './diff-props'
], function (__module__0, __module__1, __module__2, __module__3, __module__4, __module__5, __module__6, __module__7) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isArray = __module__0.isArray;
    var VPatch = __module__1;
    var isVNode = __module__2;
    var isVText = __module__3;
    var isWidget = __module__4;
    var isThunk = __module__5;
    var handleThunk = __module__6;
    var diffProps = __module__7;
    module.exports = diff;
    function diff(a, b) {
        var patch = { a: a };
        walk(a, b, patch, 0);
        return patch;
    }
    function walk(a, b, patch, index) {
        if (a === b) {
            return;
        }
        var apply = patch[index];
        var applyClear = false;
        if (isThunk(a) || isThunk(b)) {
            thunks(a, b, patch, index);
        } else if (b == null) {
            if (!isWidget(a)) {
                clearState(a, patch, index);
                apply = patch[index];
            }
            apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b));
        } else if (isVNode(b)) {
            if (isVNode(a)) {
                if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
                    var propsPatch = diffProps(a.properties, b.properties);
                    if (propsPatch) {
                        apply = appendPatch(apply, new VPatch(VPatch.PROPS, a, propsPatch));
                    }
                    apply = diffChildren(a, b, patch, apply, index);
                } else {
                    apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
                    applyClear = true;
                }
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
                applyClear = true;
            }
        } else if (isVText(b)) {
            if (!isVText(a)) {
                apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
                applyClear = true;
            } else if (a.text !== b.text) {
                apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
            }
        } else if (isWidget(b)) {
            if (!isWidget(a)) {
                applyClear = true;
            }
            apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b));
        }
        if (apply) {
            patch[index] = apply;
        }
        if (applyClear) {
            clearState(a, patch, index);
        }
    }
    function diffChildren(a, b, patch, apply, index) {
        var aChildren = a.children;
        var orderedSet = reorder(aChildren, b.children);
        var bChildren = orderedSet.children;
        var aLen = aChildren.length;
        var bLen = bChildren.length;
        var len = aLen > bLen ? aLen : bLen;
        for (var i = 0; i < len; i++) {
            var leftNode = aChildren[i];
            var rightNode = bChildren[i];
            index += 1;
            if (!leftNode) {
                if (rightNode) {
                    apply = appendPatch(apply, new VPatch(VPatch.INSERT, null, rightNode));
                }
            } else {
                walk(leftNode, rightNode, patch, index);
            }
            if (isVNode(leftNode) && leftNode.count) {
                index += leftNode.count;
            }
        }
        if (orderedSet.moves) {
            apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, orderedSet.moves));
        }
        return apply;
    }
    function clearState(vNode, patch, index) {
        unhook(vNode, patch, index);
        destroyWidgets(vNode, patch, index);
    }
    function destroyWidgets(vNode, patch, index) {
        if (isWidget(vNode)) {
            if (typeof vNode.destroy === 'function') {
                patch[index] = appendPatch(patch[index], new VPatch(VPatch.REMOVE, vNode, null));
            }
        } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
            var children = vNode.children;
            var len = children.length;
            for (var i = 0; i < len; i++) {
                var child = children[i];
                index += 1;
                destroyWidgets(child, patch, index);
                if (isVNode(child) && child.count) {
                    index += child.count;
                }
            }
        } else if (isThunk(vNode)) {
            thunks(vNode, null, patch, index);
        }
    }
    function thunks(a, b, patch, index) {
        var nodes = handleThunk(a, b);
        var thunkPatch = diff(nodes.a, nodes.b);
        if (hasPatches(thunkPatch)) {
            patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch);
        }
    }
    function hasPatches(patch) {
        for (var index in patch) {
            if (index !== 'a') {
                return true;
            }
        }
        return false;
    }
    function unhook(vNode, patch, index) {
        if (isVNode(vNode)) {
            if (vNode.hooks) {
                patch[index] = appendPatch(patch[index], new VPatch(VPatch.PROPS, vNode, undefinedKeys(vNode.hooks)));
            }
            if (vNode.descendantHooks || vNode.hasThunks) {
                var children = vNode.children;
                var len = children.length;
                for (var i = 0; i < len; i++) {
                    var child = children[i];
                    index += 1;
                    unhook(child, patch, index);
                    if (isVNode(child) && child.count) {
                        index += child.count;
                    }
                }
            }
        } else if (isThunk(vNode)) {
            thunks(vNode, null, patch, index);
        }
    }
    function undefinedKeys(obj) {
        var result = {};
        for (var key in obj) {
            result[key] = undefined;
        }
        return result;
    }
    function reorder(aChildren, bChildren) {
        var bChildIndex = keyIndex(bChildren);
        var bKeys = bChildIndex.keys;
        var bFree = bChildIndex.free;
        if (bFree.length === bChildren.length) {
            return {
                children: bChildren,
                moves: null
            };
        }
        var aChildIndex = keyIndex(aChildren);
        var aKeys = aChildIndex.keys;
        var aFree = aChildIndex.free;
        if (aFree.length === aChildren.length) {
            return {
                children: bChildren,
                moves: null
            };
        }
        var newChildren = [];
        var freeIndex = 0;
        var freeCount = bFree.length;
        var deletedItems = 0;
        for (var i = 0; i < aChildren.length; i++) {
            var aItem = aChildren[i];
            var itemIndex;
            if (aItem.key) {
                if (bKeys.hasOwnProperty(aItem.key)) {
                    itemIndex = bKeys[aItem.key];
                    newChildren.push(bChildren[itemIndex]);
                } else {
                    itemIndex = i - deletedItems++;
                    newChildren.push(null);
                }
            } else {
                if (freeIndex < freeCount) {
                    itemIndex = bFree[freeIndex++];
                    newChildren.push(bChildren[itemIndex]);
                } else {
                    itemIndex = i - deletedItems++;
                    newChildren.push(null);
                }
            }
        }
        var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];
        for (var j = 0; j < bChildren.length; j++) {
            var newItem = bChildren[j];
            if (newItem.key) {
                if (!aKeys.hasOwnProperty(newItem.key)) {
                    newChildren.push(newItem);
                }
            } else if (j >= lastFreeIndex) {
                newChildren.push(newItem);
            }
        }
        var simulate = newChildren.slice();
        var simulateIndex = 0;
        var removes = [];
        var inserts = [];
        var simulateItem;
        for (var k = 0; k < bChildren.length;) {
            var wantedItem = bChildren[k];
            simulateItem = simulate[simulateIndex];
            while (simulateItem === null && simulate.length) {
                removes.push(remove(simulate, simulateIndex, null));
                simulateItem = simulate[simulateIndex];
            }
            if (!simulateItem || simulateItem.key !== wantedItem.key) {
                if (wantedItem.key) {
                    if (simulateItem && simulateItem.key) {
                        if (bKeys[simulateItem.key] !== k + 1) {
                            removes.push(remove(simulate, simulateIndex, simulateItem.key));
                            simulateItem = simulate[simulateIndex];
                            if (!simulateItem || simulateItem.key !== wantedItem.key) {
                                inserts.push({
                                    key: wantedItem.key,
                                    to: k
                                });
                            } else {
                                simulateIndex++;
                            }
                        } else {
                            inserts.push({
                                key: wantedItem.key,
                                to: k
                            });
                        }
                    } else {
                        inserts.push({
                            key: wantedItem.key,
                            to: k
                        });
                    }
                    k++;
                } else if (simulateItem && simulateItem.key) {
                    removes.push(remove(simulate, simulateIndex, simulateItem.key));
                }
            } else {
                simulateIndex++;
                k++;
            }
        }
        while (simulateIndex < simulate.length) {
            simulateItem = simulate[simulateIndex];
            removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key));
        }
        if (removes.length === deletedItems && !inserts.length) {
            return {
                children: newChildren,
                moves: null
            };
        }
        return {
            children: newChildren,
            moves: {
                removes: removes,
                inserts: inserts
            }
        };
    }
    function remove(arr, index, key) {
        arr.splice(index, 1);
        return {
            from: index,
            key: key
        };
    }
    function keyIndex(children) {
        var keys = {};
        var free = [];
        var length = children.length;
        for (var i = 0; i < length; i++) {
            var child = children[i];
            if (child.key) {
                keys[child.key] = i;
            } else {
                free.push(i);
            }
        }
        return {
            keys: keys,
            free: free
        };
    }
    function appendPatch(apply, patch) {
        if (apply) {
            if (isArray(apply)) {
                apply.push(patch);
            } else {
                apply = [
                    apply,
                    patch
                ];
            }
            return apply;
        } else {
            return patch;
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
define('skylark-virtualdom/diff',['./vtree/diff'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var diff = __module__0;
    module.exports = diff;
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
define('skylark-virtualdom/vdom/apply-properties',[
    'skylark-langx/types',
    '../vnode/is-vhook'
], function (__module__0, __module__1) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isObject = __module__0.isObject;
    var isHook = __module__1;
    module.exports = applyProperties;
    function applyProperties(node, props, previous) {
        for (var propName in props) {
            var propValue = props[propName];
            if (propValue === undefined) {
                removeProperty(node, propName, propValue, previous);
            } else if (isHook(propValue)) {
                removeProperty(node, propName, propValue, previous);
                if (propValue.hook) {
                    propValue.hook(node, propName, previous ? previous[propName] : undefined);
                }
            } else {
                if (isObject(propValue)) {
                    patchObject(node, props, previous, propName, propValue);
                } else {
                    node[propName] = propValue;
                }
            }
        }
    }
    function removeProperty(node, propName, propValue, previous) {
        if (previous) {
            var previousValue = previous[propName];
            if (!isHook(previousValue)) {
                if (propName === 'attributes') {
                    for (var attrName in previousValue) {
                        node.removeAttribute(attrName);
                    }
                } else if (propName === 'style') {
                    for (var i in previousValue) {
                        node.style[i] = '';
                    }
                } else if (typeof previousValue === 'string') {
                    node[propName] = '';
                } else {
                    node[propName] = null;
                }
            } else if (previousValue.unhook) {
                previousValue.unhook(node, propName, propValue);
            }
        }
    }
    function patchObject(node, props, previous, propName, propValue) {
        var previousValue = previous ? previous[propName] : undefined;
        if (propName === 'attributes') {
            for (var attrName in propValue) {
                var attrValue = propValue[attrName];
                if (attrValue === undefined) {
                    node.removeAttribute(attrName);
                } else {
                    node.setAttribute(attrName, attrValue);
                }
            }
            return;
        }
        if (previousValue && isObject(previousValue) && getPrototype(previousValue) !== getPrototype(propValue)) {
            node[propName] = propValue;
            return;
        }
        if (!isObject(node[propName])) {
            node[propName] = {};
        }
        var replacer = propName === 'style' ? '' : undefined;
        for (var k in propValue) {
            var value = propValue[k];
            node[propName][k] = value === undefined ? replacer : value;
        }
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
define('skylark-virtualdom/vdom/create-element',[
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
define('skylark-virtualdom/vdom/dom-index',[], function () {
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
define('skylark-virtualdom/vdom/update-widget',['../vnode/is-widget'], function (__module__0) {
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
define('skylark-virtualdom/vdom/patch-op',[
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
define('skylark-virtualdom/vdom/patch',[
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
define('skylark-virtualdom/patch',['./vdom/patch'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var patch = __module__0;
    module.exports = patch;
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
define('skylark-virtualdom/vnode/vnode',[
    './version',
    './is-vnode',
    './is-widget',
    './is-thunk',
    './is-vhook'
], function (__module__0, __module__1, __module__2, __module__3, __module__4) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    var isVNode = __module__1;
    var isWidget = __module__2;
    var isThunk = __module__3;
    var isVHook = __module__4;
    module.exports = VirtualNode;
    var noProperties = {};
    var noChildren = [];
    function VirtualNode(tagName, properties, children, key, namespace) {
        this.tagName = tagName;
        this.properties = properties || noProperties;
        this.children = children || noChildren;
        this.key = key != null ? String(key) : undefined;
        this.namespace = typeof namespace === 'string' ? namespace : null;
        var count = children && children.length || 0;
        var descendants = 0;
        var hasWidgets = false;
        var hasThunks = false;
        var descendantHooks = false;
        var hooks;
        for (var propName in properties) {
            if (properties.hasOwnProperty(propName)) {
                var property = properties[propName];
                if (isVHook(property) && property.unhook) {
                    if (!hooks) {
                        hooks = {};
                    }
                    hooks[propName] = property;
                }
            }
        }
        for (var i = 0; i < count; i++) {
            var child = children[i];
            if (isVNode(child)) {
                descendants += child.count || 0;
                if (!hasWidgets && child.hasWidgets) {
                    hasWidgets = true;
                }
                if (!hasThunks && child.hasThunks) {
                    hasThunks = true;
                }
                if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                    descendantHooks = true;
                }
            } else if (!hasWidgets && isWidget(child)) {
                if (typeof child.destroy === 'function') {
                    hasWidgets = true;
                }
            } else if (!hasThunks && isThunk(child)) {
                hasThunks = true;
            }
        }
        this.count = count + descendants;
        this.hasWidgets = hasWidgets;
        this.hasThunks = hasThunks;
        this.hooks = hooks;
        this.descendantHooks = descendantHooks;
    }
    VirtualNode.prototype.version = version;
    VirtualNode.prototype.type = 'VirtualNode';
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
define('skylark-virtualdom/vnode/vtext',['./version'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var version = __module__0;
    module.exports = VirtualText;
    function VirtualText(text) {
        this.text = String(text);
    }
    VirtualText.prototype.version = version;
    VirtualText.prototype.type = 'VirtualText';
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
define('skylark-virtualdom/virtual-hyperscript/parse-tag',[], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var split = function (s, arg) {
        return s.split(arg);
    };
    var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
    var notClassId = /^\.|#/;
    module.exports = parseTag;
    function parseTag(tag, props) {
        if (!tag) {
            return 'DIV';
        }
        var noId = !props.hasOwnProperty('id');
        var tagParts = split(tag, classIdSplit);
        var tagName = null;
        if (notClassId.test(tagParts[1])) {
            tagName = 'DIV';
        }
        var classes, part, type, i;
        for (i = 0; i < tagParts.length; i++) {
            part = tagParts[i];
            if (!part) {
                continue;
            }
            type = part.charAt(0);
            if (!tagName) {
                tagName = part;
            } else if (type === '.') {
                classes = classes || [];
                classes.push(part.substring(1, part.length));
            } else if (type === '#' && noId) {
                props.id = part.substring(1, part.length);
            }
        }
        if (classes) {
            if (props.className) {
                classes.push(props.className);
            }
            props.className = classes.join(' ');
        }
        return props.namespace ? tagName : tagName.toUpperCase();
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
define('skylark-virtualdom/virtual-hyperscript/hooks/soft-set-hook',[], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = SoftSetHook;
    function SoftSetHook(value) {
        if (!(this instanceof SoftSetHook)) {
            return new SoftSetHook(value);
        }
        this.value = value;
    }
    SoftSetHook.prototype.hook = function (node, propertyName) {
        if (node[propertyName] !== this.value) {
            node[propertyName] = this.value;
        }
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
define('skylark-virtualdom/virtual-hyperscript/hooks/ev-hook',[], function () {
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
define('skylark-virtualdom/virtual-hyperscript/index',[
    'skylark-langx/arrays',
    '../vnode/vnode',
    '../vnode/vtext',
    '../vnode/is-vnode',
    '../vnode/is-vtext',
    '../vnode/is-widget',
    '../vnode/is-vhook',
    '../vnode/is-thunk',
    './parse-tag',
    './hooks/soft-set-hook',
    './hooks/ev-hook'
], function (__module__0, __module__1, __module__2, __module__3, __module__4, __module__5, __module__6, __module__7, __module__8, __module__9, __module__10) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isArray = __module__0.isArray;
    var VNode = __module__1;
    var VText = __module__2;
    var isVNode = __module__3;
    var isVText = __module__4;
    var isWidget = __module__5;
    var isHook = __module__6;
    var isVThunk = __module__7;
    var parseTag = __module__8;
    var softSetHook = __module__9;
    var evHook = __module__10;
    module.exports = h;
    function h(tagName, properties, children) {
        var childNodes = [];
        var tag, props, key, namespace;
        if (!children && isChildren(properties)) {
            children = properties;
            props = {};
        }
        props = props || properties || {};
        tag = parseTag(tagName, props);
        if (props.hasOwnProperty('key')) {
            key = props.key;
            props.key = undefined;
        }
        if (props.hasOwnProperty('namespace')) {
            namespace = props.namespace;
            props.namespace = undefined;
        }
        if (tag === 'INPUT' && !namespace && props.hasOwnProperty('value') && props.value !== undefined && !isHook(props.value)) {
            if (props.value !== null && typeof props.value !== 'string') {
                throw UnsupportedValueType({
                    expected: 'String',
                    received: typeof props.value,
                    Vnode: {
                        tagName: tag,
                        properties: props
                    }
                });
            }
            props.value = softSetHook(props.value);
        }
        transformProperties(props);
        if (children !== undefined && children !== null) {
            addChild(children, childNodes, tag, props);
        }
        return new VNode(tag, props, childNodes, key, namespace);
    }
    function addChild(c, childNodes, tag, props) {
        if (typeof c === 'string') {
            childNodes.push(new VText(c));
        } else if (typeof c === 'number') {
            childNodes.push(new VText(String(c)));
        } else if (isChild(c)) {
            childNodes.push(c);
        } else if (isArray(c)) {
            for (var i = 0; i < c.length; i++) {
                addChild(c[i], childNodes, tag, props);
            }
        } else if (c === null || c === undefined) {
            return;
        } else {
            throw UnexpectedVirtualElement({
                foreignObject: c,
                parentVnode: {
                    tagName: tag,
                    properties: props
                }
            });
        }
    }
    function transformProperties(props) {
        for (var propName in props) {
            if (props.hasOwnProperty(propName)) {
                var value = props[propName];
                if (isHook(value)) {
                    continue;
                }
                if (propName.substr(0, 3) === 'ev-') {
                    props[propName] = evHook(value);
                }
            }
        }
    }
    function isChild(x) {
        return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
    }
    function isChildren(x) {
        return typeof x === 'string' || isArray(x) || isChild(x);
    }
    function UnexpectedVirtualElement(data) {
        var err = new Error();
        err.type = 'virtual-hyperscript.unexpected.virtual-element';
        err.message = 'Unexpected virtual child passed to h().\n' + 'Expected a VNode / Vthunk / VWidget / string but:\n' + 'got:\n' + errorString(data.foreignObject) + '.\n' + 'The parent vnode is:\n' + errorString(data.parentVnode);
        '\n' + 'Suggested fix: change your `h(..., [ ... ])` callsite.';
        err.foreignObject = data.foreignObject;
        err.parentVnode = data.parentVnode;
        return err;
    }
    function UnsupportedValueType(data) {
        var err = new Error();
        err.type = 'virtual-hyperscript.unsupported.value-type';
        err.message = 'Unexpected value type for input passed to h().\n' + 'Expected a ' + errorString(data.expected) + ' but got:\n' + errorString(data.received) + '.\n' + 'The vnode is:\n' + errorString(data.Vnode);
        '\n' + 'Suggested fix: Cast the value passed to h() to a string using String(value).';
        err.Vnode = data.Vnode;
        return err;
    }
    function errorString(obj) {
        try {
            return JSON.stringify(obj, null, '    ');
        } catch (e) {
            return String(obj);
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
define('skylark-virtualdom/h',['./virtual-hyperscript/index'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var h = __module__0;
    module.exports = h;
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
define('skylark-virtualdom/create-element',['./vdom/create-element'], function (__module__0) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var createElement = __module__0;
    module.exports = createElement;
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
define('skylark-virtualdom/virtualdom',[
	"skylark-langx/skylark",
	"./diff",
	"./patch",
	"./h",
	"./create-element",
	"./vnode/vnode",
	"./vnode/vtext"
],function(skylark, diff, patch, h, create, VNode, VText){
	return skylark.virtualdom = {
	    diff: diff,
	    patch: patch,
	    h: h,
	    create: create,
	    VNode: VNode,
	    VText: VText		
	};
});
define('skylark-virtualdom/main',[
	"./virtualdom"
],function(virtualdom){

	return virtualdom;
});
define('skylark-virtualdom', ['skylark-virtualdom/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-virtualdom.js.map
