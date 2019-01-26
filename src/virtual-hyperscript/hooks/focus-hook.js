'use strict';

var document = require("skylark-langx/hoster").document;
var nextTick = require("skylark-langx/funcs").defer;

module.exports = MutableFocusHook;

function MutableFocusHook() {
    if (!(this instanceof MutableFocusHook)) {
        return new MutableFocusHook();
    }
}

MutableFocusHook.prototype.hook = function (node) {
    nextTick(function () {
        if (document.activeElement !== node) {
            node.focus();
        }
    });
};
