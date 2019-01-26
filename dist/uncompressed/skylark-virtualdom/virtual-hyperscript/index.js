define([
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