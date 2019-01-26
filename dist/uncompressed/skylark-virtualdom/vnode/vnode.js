define([
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