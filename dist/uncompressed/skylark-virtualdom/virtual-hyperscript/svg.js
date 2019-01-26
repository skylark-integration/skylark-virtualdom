define([
    'skylark-langx/arrays',
    './index',
    './svg-attribute-namespace',
    './hooks/attribute-hook'
], function (__module__0, __module__1, __module__2, __module__3) {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    var isArray = __module__0.isArray;
    var h = __module__1;
    var SVGAttributeNamespace = __module__2;
    var attributeHook = __module__3;
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    module.exports = svg;
    function svg(tagName, properties, children) {
        if (!children && isChildren(properties)) {
            children = properties;
            properties = {};
        }
        properties = properties || {};
        properties.namespace = SVG_NAMESPACE;
        var attributes = properties.attributes || (properties.attributes = {});
        for (var key in properties) {
            if (!properties.hasOwnProperty(key)) {
                continue;
            }
            var namespace = SVGAttributeNamespace(key);
            if (namespace === undefined) {
                continue;
            }
            var value = properties[key];
            if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
                continue;
            }
            if (namespace !== null) {
                properties[key] = attributeHook(namespace, value);
                continue;
            }
            attributes[key] = value;
            properties[key] = undefined;
        }
        return h(tagName, properties, children);
    }
    function isChildren(x) {
        return typeof x === 'string' || isArray(x);
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