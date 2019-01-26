define([
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