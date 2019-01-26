define([
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