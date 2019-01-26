define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    module.exports = AttributeHook;
    function AttributeHook(namespace, value) {
        if (!(this instanceof AttributeHook)) {
            return new AttributeHook(namespace, value);
        }
        this.namespace = namespace;
        this.value = value;
    }
    AttributeHook.prototype.hook = function (node, prop, prev) {
        if (prev && prev.type === 'AttributeHook' && prev.value === this.value && prev.namespace === this.namespace) {
            return;
        }
        node.setAttributeNS(this.namespace, prop, this.value);
    };
    AttributeHook.prototype.unhook = function (node, prop, next) {
        if (next && next.type === 'AttributeHook' && next.namespace === this.namespace) {
            return;
        }
        var colonPosition = prop.indexOf(':');
        var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
        node.removeAttributeNS(this.namespace, localName);
    };
    AttributeHook.prototype.type = 'AttributeHook';
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