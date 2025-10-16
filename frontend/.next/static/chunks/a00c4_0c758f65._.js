(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/property-expr/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */ function Cache(maxSize) {
    this._maxSize = maxSize;
    this.clear();
}
Cache.prototype.clear = function() {
    this._size = 0;
    this._values = Object.create(null);
};
Cache.prototype.get = function(key) {
    return this._values[key];
};
Cache.prototype.set = function(key, value) {
    this._size >= this._maxSize && this.clear();
    if (!(key in this._values)) this._size++;
    return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var config;
module.exports = {
    Cache: Cache,
    split: split,
    normalizePath: normalizePath,
    setter: function(path) {
        var parts = normalizePath(path);
        return setCache.get(path) || setCache.set(path, function setter(obj, value) {
            var index = 0;
            var len = parts.length;
            var data = obj;
            while(index < len - 1){
                var part = parts[index];
                if (part === '__proto__' || part === 'constructor' || part === 'prototype') {
                    return obj;
                }
                data = data[parts[index++]];
            }
            data[parts[index]] = value;
        });
    },
    getter: function(path, safe) {
        var parts = normalizePath(path);
        return getCache.get(path) || getCache.set(path, function getter(data) {
            var index = 0, len = parts.length;
            while(index < len){
                if (data != null || !safe) data = data[parts[index++]];
                else return;
            }
            return data;
        });
    },
    join: function(segments) {
        return segments.reduce(function(path, part) {
            return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? '[' + part + ']' : (path ? '.' : '') + part);
        }, '');
    },
    forEach: function(path, cb, thisArg) {
        forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
    }
};
function normalizePath(path) {
    return pathCache.get(path) || pathCache.set(path, split(path).map(function(part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2');
    }));
}
function split(path) {
    return path.match(SPLIT_REGEX) || [
        ''
    ];
}
function forEach(parts, iter, thisArg) {
    var len = parts.length, part, idx, isArray, isBracket;
    for(idx = 0; idx < len; idx++){
        part = parts[idx];
        if (part) {
            if (shouldBeQuoted(part)) {
                part = '"' + part + '"';
            }
            isBracket = isQuoted(part);
            isArray = !isBracket && /^\d+$/.test(part);
            iter.call(thisArg, part, isBracket, isArray, idx, parts);
        }
    }
}
function isQuoted(str) {
    return typeof str === 'string' && str && [
        "'",
        '"'
    ].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
    return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
    return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
    return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/tiny-case/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
const words = (str)=>str.match(reWords) || [];
const upperFirst = (str)=>str[0].toUpperCase() + str.slice(1);
const join = (str, d)=>words(str).join(d).toLowerCase();
const camelCase = (str)=>words(str).reduce((acc, next)=>"".concat(acc).concat(!acc ? next.toLowerCase() : next[0].toUpperCase() + next.slice(1).toLowerCase()), '');
const pascalCase = (str)=>upperFirst(camelCase(str));
const snakeCase = (str)=>join(str, '_');
const kebabCase = (str)=>join(str, '-');
const sentenceCase = (str)=>upperFirst(join(str, ' '));
const titleCase = (str)=>words(str).map(upperFirst).join(' ');
module.exports = {
    words,
    upperFirst,
    camelCase,
    pascalCase,
    snakeCase,
    kebabCase,
    sentenceCase,
    titleCase
};
}),
"[project]/Desktop/school-AI/school-ai/node_modules/toposort/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */ module.exports = function(edges) {
    return toposort(uniqueNodes(edges), edges);
};
module.exports.array = toposort;
function toposort(nodes, edges) {
    var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
    // check for unknown nodes
    edges.forEach(function(edge) {
        if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
            throw new Error('Unknown node. There is an unknown node in the supplied edges.');
        }
    });
    while(i--){
        if (!visited[i]) visit(nodes[i], i, new Set());
    }
    return sorted;
    //TURBOPACK unreachable
    ;
    function visit(node, i, predecessors) {
        if (predecessors.has(node)) {
            var nodeRep;
            try {
                nodeRep = ", node was:" + JSON.stringify(node);
            } catch (e) {
                nodeRep = "";
            }
            throw new Error('Cyclic dependency' + nodeRep);
        }
        if (!nodesHash.has(node)) {
            throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(node));
        }
        if (visited[i]) return;
        visited[i] = true;
        var outgoing = outgoingEdges.get(node) || new Set();
        outgoing = Array.from(outgoing);
        if (i = outgoing.length) {
            predecessors.add(node);
            do {
                var child = outgoing[--i];
                visit(child, nodesHash.get(child), predecessors);
            }while (i)
            predecessors.delete(node);
        }
        sorted[--cursor] = node;
    }
}
function uniqueNodes(arr) {
    var res = new Set();
    for(var i = 0, len = arr.length; i < len; i++){
        var edge = arr[i];
        res.add(edge[0]);
        res.add(edge[1]);
    }
    return Array.from(res);
}
function makeOutgoingEdges(arr) {
    var edges = new Map();
    for(var i = 0, len = arr.length; i < len; i++){
        var edge = arr[i];
        if (!edges.has(edge[0])) edges.set(edge[0], new Set());
        if (!edges.has(edge[1])) edges.set(edge[1], new Set());
        edges.get(edge[0]).add(edge[1]);
    }
    return edges;
}
function makeNodesHash(arr) {
    var res = new Map();
    for(var i = 0, len = arr.length; i < len; i++){
        res.set(arr[i], i);
    }
    return res;
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/yup/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArraySchema",
    ()=>ArraySchema,
    "BooleanSchema",
    ()=>BooleanSchema,
    "DateSchema",
    ()=>DateSchema,
    "LazySchema",
    ()=>Lazy,
    "MixedSchema",
    ()=>MixedSchema,
    "NumberSchema",
    ()=>NumberSchema,
    "ObjectSchema",
    ()=>ObjectSchema,
    "Schema",
    ()=>Schema,
    "StringSchema",
    ()=>StringSchema,
    "TupleSchema",
    ()=>TupleSchema,
    "ValidationError",
    ()=>ValidationError,
    "addMethod",
    ()=>addMethod,
    "array",
    ()=>create$2,
    "bool",
    ()=>create$7,
    "boolean",
    ()=>create$7,
    "date",
    ()=>create$4,
    "defaultLocale",
    ()=>locale,
    "getIn",
    ()=>getIn,
    "isSchema",
    ()=>isSchema,
    "lazy",
    ()=>create,
    "mixed",
    ()=>create$8,
    "number",
    ()=>create$5,
    "object",
    ()=>create$3,
    "printValue",
    ()=>printValue,
    "reach",
    ()=>reach,
    "ref",
    ()=>create$9,
    "setLocale",
    ()=>setLocale,
    "string",
    ()=>create$6,
    "tuple",
    ()=>create$1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/property-expr/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$case$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/tiny-case/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$toposort$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/toposort/index.js [app-client] (ecmascript)");
;
;
;
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : ()=>'';
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
    if (val != +val) return 'NaN';
    const isNegativeZero = val === 0 && 1 / val < 0;
    return isNegativeZero ? '-0' : '' + val;
}
function printSimpleValue(val) {
    let quoteStrings = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (val == null || val === true || val === false) return '' + val;
    const typeOf = typeof val;
    if (typeOf === 'number') return printNumber(val);
    if (typeOf === 'string') return quoteStrings ? '"'.concat(val, '"') : val;
    if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
    if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
    const tag = toString.call(val).slice(8, -1);
    if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
    if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
    if (tag === 'RegExp') return regExpToString.call(val);
    return null;
}
function printValue(value, quoteStrings) {
    let result = printSimpleValue(value, quoteStrings);
    if (result !== null) return result;
    return JSON.stringify(value, function(key, value) {
        let result = printSimpleValue(this[key], quoteStrings);
        if (result !== null) return result;
        return value;
    }, 2);
}
function toArray(value) {
    return value == null ? [] : [].concat(value);
}
let _Symbol$toStringTag, _Symbol$hasInstance, _Symbol$toStringTag2;
let strReg = /\$\{\s*(\w+)\s*\}/g;
_Symbol$toStringTag = Symbol.toStringTag;
class ValidationErrorNoStack {
    constructor(errorOrErrors, value, field, type){
        this.name = void 0;
        this.message = void 0;
        this.value = void 0;
        this.path = void 0;
        this.type = void 0;
        this.params = void 0;
        this.errors = void 0;
        this.inner = void 0;
        this[_Symbol$toStringTag] = 'Error';
        this.name = 'ValidationError';
        this.value = value;
        this.path = field;
        this.type = type;
        this.errors = [];
        this.inner = [];
        toArray(errorOrErrors).forEach((err)=>{
            if (ValidationError.isError(err)) {
                this.errors.push(...err.errors);
                const innerErrors = err.inner.length ? err.inner : [
                    err
                ];
                this.inner.push(...innerErrors);
            } else {
                this.errors.push(err);
            }
        });
        this.message = this.errors.length > 1 ? "".concat(this.errors.length, " errors occurred") : this.errors[0];
    }
}
_Symbol$hasInstance = Symbol.hasInstance;
_Symbol$toStringTag2 = Symbol.toStringTag;
class ValidationError extends Error {
    static formatError(message, params) {
        // Attempt to make the path more friendly for error message interpolation.
        const path = params.label || params.path || 'this';
        // Store the original path under `originalPath` so it isn't lost to custom
        // message functions; e.g., ones provided in `setLocale()` calls.
        params = Object.assign({}, params, {
            path,
            originalPath: params.path
        });
        if (typeof message === 'string') return message.replace(strReg, (_, key)=>printValue(params[key]));
        if (typeof message === 'function') return message(params);
        return message;
    }
    static isError(err) {
        return err && err.name === 'ValidationError';
    }
    static [_Symbol$hasInstance](inst) {
        return ValidationErrorNoStack[Symbol.hasInstance](inst) || super[Symbol.hasInstance](inst);
    }
    constructor(errorOrErrors, value, field, type, disableStack){
        const errorNoStack = new ValidationErrorNoStack(errorOrErrors, value, field, type);
        if (disableStack) {
            return errorNoStack;
        }
        super();
        this.value = void 0;
        this.path = void 0;
        this.type = void 0;
        this.params = void 0;
        this.errors = [];
        this.inner = [];
        this[_Symbol$toStringTag2] = 'Error';
        this.name = errorNoStack.name;
        this.message = errorNoStack.message;
        this.type = errorNoStack.type;
        this.value = errorNoStack.value;
        this.path = errorNoStack.path;
        this.errors = errorNoStack.errors;
        this.inner = errorNoStack.inner;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError);
        }
    }
}
let mixed = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    defined: '${path} must be defined',
    notNull: '${path} cannot be null',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: (param)=>{
        let { path, type, value, originalValue } = param;
        const castMsg = originalValue != null && originalValue !== value ? " (cast from the value `".concat(printValue(originalValue, true), "`).") : '.';
        return type !== 'mixed' ? "".concat(path, " must be a `").concat(type, "` type, ") + "but the final value was: `".concat(printValue(value, true), "`") + castMsg : "".concat(path, " must match the configured type. ") + "The validated value was: `".concat(printValue(value, true), "`") + castMsg;
    }
};
let string = {
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    uuid: '${path} must be a valid UUID',
    datetime: '${path} must be a valid ISO date-time',
    datetime_precision: '${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits',
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string'
};
let number = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer'
};
let date = {
    min: '${path} field must be later than ${min}',
    max: '${path} field must be at earlier than ${max}'
};
let boolean = {
    isValue: '${path} field must be ${value}'
};
let object = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
    exact: '${path} object contains unknown properties: ${properties}'
};
let array = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items'
};
let tuple = {
    notType: (params)=>{
        const { path, value, spec } = params;
        const typeLen = spec.types.length;
        if (Array.isArray(value)) {
            if (value.length < typeLen) return "".concat(path, " tuple value has too few items, expected a length of ").concat(typeLen, " but got ").concat(value.length, " for value: `").concat(printValue(value, true), "`");
            if (value.length > typeLen) return "".concat(path, " tuple value has too many items, expected a length of ").concat(typeLen, " but got ").concat(value.length, " for value: `").concat(printValue(value, true), "`");
        }
        return ValidationError.formatError(mixed.notType, params);
    }
};
var locale = Object.assign(Object.create(null), {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
    tuple
});
const isSchema = (obj)=>obj && obj.__isYupSchema__;
class Condition {
    static fromOptions(refs, config) {
        if (!config.then && !config.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
        let { is, then, otherwise } = config;
        let check = typeof is === 'function' ? is : function() {
            for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                values[_key] = arguments[_key];
            }
            return values.every((value)=>value === is);
        };
        return new Condition(refs, (values, schema)=>{
            var _branch;
            let branch = check(...values) ? then : otherwise;
            return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
        });
    }
    resolve(base, options) {
        let values = this.refs.map((ref)=>// TODO: ? operator here?
            ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
        let schema = this.fn(values, base, options);
        if (schema === undefined || // @ts-ignore this can be base
        schema === base) {
            return base;
        }
        if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
        return schema.resolve(options);
    }
    constructor(refs, builder){
        this.fn = void 0;
        this.refs = refs;
        this.refs = refs;
        this.fn = builder;
    }
}
const prefixes = {
    context: '$',
    value: '.'
};
function create$9(key, options) {
    return new Reference(key, options);
}
class Reference {
    getValue(value, parent, context) {
        let result = this.isContext ? context : this.isValue ? value : parent;
        if (this.getter) result = this.getter(result || {});
        if (this.map) result = this.map(result);
        return result;
    }
    /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */ cast(value, options) {
        return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
    }
    resolve() {
        return this;
    }
    describe() {
        return {
            type: 'ref',
            key: this.key
        };
    }
    toString() {
        return "Ref(".concat(this.key, ")");
    }
    static isRef(value) {
        return value && value.__isYupRef;
    }
    constructor(key, options = {}){
        this.key = void 0;
        this.isContext = void 0;
        this.isValue = void 0;
        this.isSibling = void 0;
        this.path = void 0;
        this.getter = void 0;
        this.map = void 0;
        if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
        this.key = key.trim();
        if (key === '') throw new TypeError('ref must be a non-empty string');
        this.isContext = this.key[0] === prefixes.context;
        this.isValue = this.key[0] === prefixes.value;
        this.isSibling = !this.isContext && !this.isValue;
        let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
        this.path = this.key.slice(prefix.length);
        this.getter = this.path && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getter"])(this.path, true);
        this.map = options.map;
    }
}
// @ts-ignore
Reference.prototype.__isYupRef = true;
const isAbsent = (value)=>value == null;
function createValidation(config) {
    function validate(param, panic, next) {
        let { value, path = '', options, originalValue, schema } = param;
        const { name, test, params, message, skipAbsent } = config;
        let { parent, context, abortEarly = schema.spec.abortEarly, disableStackTrace = schema.spec.disableStackTrace } = options;
        const resolveOptions = {
            value,
            parent,
            context
        };
        function createError() {
            let overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const nextParams = resolveParams(Object.assign({
                value,
                originalValue,
                label: schema.spec.label,
                path: overrides.path || path,
                spec: schema.spec,
                disableStackTrace: overrides.disableStackTrace || disableStackTrace
            }, params, overrides.params), resolveOptions);
            const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name, nextParams.disableStackTrace);
            error.params = nextParams;
            return error;
        }
        const invalid = abortEarly ? panic : next;
        let ctx = {
            path,
            parent,
            type: name,
            from: options.from,
            createError,
            resolve (item) {
                return resolveMaybeRef(item, resolveOptions);
            },
            options,
            originalValue,
            schema
        };
        const handleResult = (validOrError)=>{
            if (ValidationError.isError(validOrError)) invalid(validOrError);
            else if (!validOrError) invalid(createError());
            else next(null);
        };
        const handleError = (err)=>{
            if (ValidationError.isError(err)) invalid(err);
            else panic(err);
        };
        const shouldSkip = skipAbsent && isAbsent(value);
        if (shouldSkip) {
            return handleResult(true);
        }
        let result;
        try {
            var _result;
            result = test.call(ctx, value, ctx);
            if (typeof ((_result = result) == null ? void 0 : _result.then) === 'function') {
                if (options.sync) {
                    throw new Error('Validation test of type: "'.concat(ctx.type, '" returned a Promise during a synchronous validate. ') + "This test will finish after the validate call has returned");
                }
                return Promise.resolve(result).then(handleResult, handleError);
            }
        } catch (err) {
            handleError(err);
            return;
        }
        handleResult(result);
    }
    validate.OPTIONS = config;
    return validate;
}
// Warning: mutates the input
function resolveParams(params, options) {
    if (!params) return params;
    for (const key of Object.keys(params)){
        params[key] = resolveMaybeRef(params[key], options);
    }
    return params;
}
function resolveMaybeRef(item, options) {
    return Reference.isRef(item) ? item.getValue(options.value, options.parent, options.context) : item;
}
function getIn(schema, path, value) {
    let context = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : value;
    let parent, lastPart, lastPartDebug;
    // root path: ''
    if (!path) return {
        parent,
        parentPath: path,
        schema
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forEach"])(path, (_part, isBracket, isArray)=>{
        let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
        schema = schema.resolve({
            context,
            parent,
            value
        });
        let isTuple = schema.type === 'tuple';
        let idx = isArray ? parseInt(part, 10) : 0;
        if (schema.innerType || isTuple) {
            if (isTuple && !isArray) throw new Error('Yup.reach cannot implicitly index into a tuple type. the path part "'.concat(lastPartDebug, '" must contain an index to the tuple element, e.g. "').concat(lastPartDebug, '[0]"'));
            if (value && idx >= value.length) {
                throw new Error("Yup.reach cannot resolve an array item at index: ".concat(_part, ", in the path: ").concat(path, ". ") + "because there is no value at that index. ");
            }
            parent = value;
            value = value && value[idx];
            schema = isTuple ? schema.spec.types[idx] : schema.innerType;
        }
        // sometimes the array index part of a path doesn't exist: "nested.arr.child"
        // in these cases the current part is the next schema and should be processed
        // in this iteration. For cases where the index signature is included this
        // check will fail and we'll handle the `child` part on the next iteration like normal
        if (!isArray) {
            if (!schema.fields || !schema.fields[part]) throw new Error("The schema does not contain the path: ".concat(path, ". ") + "(failed at: ".concat(lastPartDebug, ' which is a type: "').concat(schema.type, '")'));
            parent = value;
            value = value && value[part];
            schema = schema.fields[part];
        }
        lastPart = part;
        lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
    });
    return {
        schema,
        parent,
        parentPath: lastPart
    };
}
function reach(obj, path, value, context) {
    return getIn(obj, path, value, context).schema;
}
class ReferenceSet extends Set {
    describe() {
        const description = [];
        for (const item of this.values()){
            description.push(Reference.isRef(item) ? item.describe() : item);
        }
        return description;
    }
    resolveAll(resolve) {
        let result = [];
        for (const item of this.values()){
            result.push(resolve(item));
        }
        return result;
    }
    clone() {
        return new ReferenceSet(this.values());
    }
    merge(newItems, removeItems) {
        const next = this.clone();
        newItems.forEach((value)=>next.add(value));
        removeItems.forEach((value)=>next.delete(value));
        return next;
    }
}
// tweaked from https://github.com/Kelin2025/nanoclone/blob/0abeb7635bda9b68ef2277093f76dbe3bf3948e1/src/index.js
function clone(src) {
    let seen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Map();
    if (isSchema(src) || !src || typeof src !== 'object') return src;
    if (seen.has(src)) return seen.get(src);
    let copy;
    if (src instanceof Date) {
        // Date
        copy = new Date(src.getTime());
        seen.set(src, copy);
    } else if (src instanceof RegExp) {
        // RegExp
        copy = new RegExp(src);
        seen.set(src, copy);
    } else if (Array.isArray(src)) {
        // Array
        copy = new Array(src.length);
        seen.set(src, copy);
        for(let i = 0; i < src.length; i++)copy[i] = clone(src[i], seen);
    } else if (src instanceof Map) {
        // Map
        copy = new Map();
        seen.set(src, copy);
        for (const [k, v] of src.entries())copy.set(k, clone(v, seen));
    } else if (src instanceof Set) {
        // Set
        copy = new Set();
        seen.set(src, copy);
        for (const v of src)copy.add(clone(v, seen));
    } else if (src instanceof Object) {
        // Object
        copy = {};
        seen.set(src, copy);
        for (const [k, v] of Object.entries(src))copy[k] = clone(v, seen);
    } else {
        throw Error("Unable to clone ".concat(src));
    }
    return copy;
}
/**
 * Copied from @standard-schema/spec to avoid having a dependency on it.
 * https://github.com/standard-schema/standard-schema/blob/main/packages/spec/src/index.ts
 */ function createStandardPath(path) {
    if (!(path != null && path.length)) {
        return undefined;
    }
    // Array to store the final path segments
    const segments = [];
    // Buffer for building the current segment
    let currentSegment = '';
    // Track if we're inside square brackets (array/property access)
    let inBrackets = false;
    // Track if we're inside quotes (for property names with special chars)
    let inQuotes = false;
    for(let i = 0; i < path.length; i++){
        const char = path[i];
        if (char === '[' && !inQuotes) {
            // When entering brackets, push any accumulated segment after splitting on dots
            if (currentSegment) {
                segments.push(...currentSegment.split('.').filter(Boolean));
                currentSegment = '';
            }
            inBrackets = true;
            continue;
        }
        if (char === ']' && !inQuotes) {
            if (currentSegment) {
                // Handle numeric indices (e.g. arr[0])
                if (/^\d+$/.test(currentSegment)) {
                    segments.push(currentSegment);
                } else {
                    // Handle quoted property names (e.g. obj["foo.bar"])
                    segments.push(currentSegment.replace(/^"|"$/g, ''));
                }
                currentSegment = '';
            }
            inBrackets = false;
            continue;
        }
        if (char === '"') {
            // Toggle quote state for handling quoted property names
            inQuotes = !inQuotes;
            continue;
        }
        if (char === '.' && !inBrackets && !inQuotes) {
            // On dots outside brackets/quotes, push current segment
            if (currentSegment) {
                segments.push(currentSegment);
                currentSegment = '';
            }
            continue;
        }
        currentSegment += char;
    }
    // Push any remaining segment after splitting on dots
    if (currentSegment) {
        segments.push(...currentSegment.split('.').filter(Boolean));
    }
    return segments;
}
function createStandardIssues(error, parentPath) {
    const path = parentPath ? "".concat(parentPath, ".").concat(error.path) : error.path;
    return error.errors.map((err)=>({
            message: err,
            path: createStandardPath(path)
        }));
}
function issuesFromValidationError(error, parentPath) {
    var _error$inner;
    if (!((_error$inner = error.inner) != null && _error$inner.length) && error.errors.length) {
        return createStandardIssues(error, parentPath);
    }
    const path = parentPath ? "".concat(parentPath, ".").concat(error.path) : error.path;
    return error.inner.flatMap((err)=>issuesFromValidationError(err, path));
}
// If `CustomSchemaMeta` isn't extended with any keys, we'll fall back to a
// loose Record definition allowing free form usage.
class Schema {
    // TODO: remove
    get _type() {
        return this.type;
    }
    clone(spec) {
        if (this._mutate) {
            if (spec) Object.assign(this.spec, spec);
            return this;
        }
        // if the nested value is a schema we can skip cloning, since
        // they are already immutable
        const next = Object.create(Object.getPrototypeOf(this));
        // @ts-expect-error this is readonly
        next.type = this.type;
        next._typeCheck = this._typeCheck;
        next._whitelist = this._whitelist.clone();
        next._blacklist = this._blacklist.clone();
        next.internalTests = Object.assign({}, this.internalTests);
        next.exclusiveTests = Object.assign({}, this.exclusiveTests);
        // @ts-expect-error this is readonly
        next.deps = [
            ...this.deps
        ];
        next.conditions = [
            ...this.conditions
        ];
        next.tests = [
            ...this.tests
        ];
        next.transforms = [
            ...this.transforms
        ];
        next.spec = clone(Object.assign({}, this.spec, spec));
        return next;
    }
    label(label) {
        let next = this.clone();
        next.spec.label = label;
        return next;
    }
    meta() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 0) return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
    }
    withMutation(fn) {
        let before = this._mutate;
        this._mutate = true;
        let result = fn(this);
        this._mutate = before;
        return result;
    }
    concat(schema) {
        if (!schema || schema === this) return this;
        if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError("You cannot `concat()` schema's of different types: ".concat(this.type, " and ").concat(schema.type));
        let base = this;
        let combined = schema.clone();
        const mergedSpec = Object.assign({}, base.spec, combined.spec);
        combined.spec = mergedSpec;
        combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);
        // manually merge the blacklist/whitelist (the other `schema` takes
        // precedence in case of conflicts)
        combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
        combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
        // start with the current tests
        combined.tests = base.tests;
        combined.exclusiveTests = base.exclusiveTests;
        // manually add the new tests to ensure
        // the deduping logic is consistent
        combined.withMutation((next)=>{
            schema.tests.forEach((fn)=>{
                next.test(fn.OPTIONS);
            });
        });
        combined.transforms = [
            ...base.transforms,
            ...combined.transforms
        ];
        return combined;
    }
    isType(v) {
        if (v == null) {
            if (this.spec.nullable && v === null) return true;
            if (this.spec.optional && v === undefined) return true;
            return false;
        }
        return this._typeCheck(v);
    }
    resolve(options) {
        let schema = this;
        if (schema.conditions.length) {
            let conditions = schema.conditions;
            schema = schema.clone();
            schema.conditions = [];
            schema = conditions.reduce((prevSchema, condition)=>condition.resolve(prevSchema, options), schema);
            schema = schema.resolve(options);
        }
        return schema;
    }
    resolveOptions(options) {
        var _options$strict, _options$abortEarly, _options$recursive, _options$disableStack;
        return Object.assign({}, options, {
            from: options.from || [],
            strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
            abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
            recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive,
            disableStackTrace: (_options$disableStack = options.disableStackTrace) != null ? _options$disableStack : this.spec.disableStackTrace
        });
    }
    /**
   * Run the configured transform pipeline over an input value.
   */ cast(value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let resolvedSchema = this.resolve(Object.assign({}, options, {
            value
        }));
        let allowOptionality = options.assert === 'ignore-optionality';
        let result = resolvedSchema._cast(value, options);
        if (options.assert !== false && !resolvedSchema.isType(result)) {
            if (allowOptionality && isAbsent(result)) {
                return result;
            }
            let formattedValue = printValue(value);
            let formattedResult = printValue(result);
            throw new TypeError("The value of ".concat(options.path || 'field', " could not be cast to a value ") + 'that satisfies the schema type: "'.concat(resolvedSchema.type, '". \n\n') + "attempted value: ".concat(formattedValue, " \n") + (formattedResult !== formattedValue ? "result of cast: ".concat(formattedResult) : ''));
        }
        return result;
    }
    _cast(rawValue, options) {
        let value = rawValue === undefined ? rawValue : this.transforms.reduce((prevValue, fn)=>fn.call(this, prevValue, rawValue, this, options), rawValue);
        if (value === undefined) {
            value = this.getDefault(options);
        }
        return value;
    }
    _validate(_value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, panic = arguments.length > 2 ? arguments[2] : void 0, next = arguments.length > 3 ? arguments[3] : void 0;
        let { path, originalValue = _value, strict = this.spec.strict } = options;
        let value = _value;
        if (!strict) {
            value = this._cast(value, Object.assign({
                assert: false
            }, options));
        }
        let initialTests = [];
        for (let test of Object.values(this.internalTests)){
            if (test) initialTests.push(test);
        }
        this.runTests({
            path,
            value,
            originalValue,
            options,
            tests: initialTests
        }, panic, (initialErrors)=>{
            // even if we aren't ending early we can't proceed further if the types aren't correct
            if (initialErrors.length) {
                return next(initialErrors, value);
            }
            this.runTests({
                path,
                value,
                originalValue,
                options,
                tests: this.tests
            }, panic, next);
        });
    }
    /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */ runTests(runOptions, panic, next) {
        let fired = false;
        let { tests, value, originalValue, path, options } = runOptions;
        let panicOnce = (arg)=>{
            if (fired) return;
            fired = true;
            panic(arg, value);
        };
        let nextOnce = (arg)=>{
            if (fired) return;
            fired = true;
            next(arg, value);
        };
        let count = tests.length;
        let nestedErrors = [];
        if (!count) return nextOnce([]);
        let args = {
            value,
            originalValue,
            path,
            options,
            schema: this
        };
        for(let i = 0; i < tests.length; i++){
            const test = tests[i];
            test(args, panicOnce, function finishTestRun(err) {
                if (err) {
                    Array.isArray(err) ? nestedErrors.push(...err) : nestedErrors.push(err);
                }
                if (--count <= 0) {
                    nextOnce(nestedErrors);
                }
            });
        }
    }
    asNestedTest(param) {
        let { key, index, parent, parentPath, originalParent, options } = param;
        const k = key != null ? key : index;
        if (k == null) {
            throw TypeError('Must include `key` or `index` for nested validations');
        }
        const isIndex = typeof k === 'number';
        let value = parent[k];
        const testOptions = Object.assign({}, options, {
            // Nested validations fields are always strict:
            //    1. parent isn't strict so the casting will also have cast inner values
            //    2. parent is strict in which case the nested values weren't cast either
            strict: true,
            parent,
            value,
            originalValue: originalParent[k],
            // FIXME: tests depend on `index` being passed around deeply,
            //   we should not let the options.key/index bleed through
            key: undefined,
            // index: undefined,
            [isIndex ? 'index' : 'key']: k,
            path: isIndex || k.includes('.') ? "".concat(parentPath || '', "[").concat(isIndex ? k : '"'.concat(k, '"'), "]") : (parentPath ? "".concat(parentPath, ".") : '') + key
        });
        return (_, panic, next)=>this.resolve(testOptions)._validate(value, testOptions, panic, next);
    }
    validate(value, options) {
        var _options$disableStack2;
        let schema = this.resolve(Object.assign({}, options, {
            value
        }));
        let disableStackTrace = (_options$disableStack2 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack2 : schema.spec.disableStackTrace;
        return new Promise((resolve, reject)=>schema._validate(value, options, (error, parsed)=>{
                if (ValidationError.isError(error)) error.value = parsed;
                reject(error);
            }, (errors, validated)=>{
                if (errors.length) reject(new ValidationError(errors, validated, undefined, undefined, disableStackTrace));
                else resolve(validated);
            }));
    }
    validateSync(value, options) {
        var _options$disableStack3;
        let schema = this.resolve(Object.assign({}, options, {
            value
        }));
        let result;
        let disableStackTrace = (_options$disableStack3 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack3 : schema.spec.disableStackTrace;
        schema._validate(value, Object.assign({}, options, {
            sync: true
        }), (error, parsed)=>{
            if (ValidationError.isError(error)) error.value = parsed;
            throw error;
        }, (errors, validated)=>{
            if (errors.length) throw new ValidationError(errors, value, undefined, undefined, disableStackTrace);
            result = validated;
        });
        return result;
    }
    isValid(value, options) {
        return this.validate(value, options).then(()=>true, (err)=>{
            if (ValidationError.isError(err)) return false;
            throw err;
        });
    }
    isValidSync(value, options) {
        try {
            this.validateSync(value, options);
            return true;
        } catch (err) {
            if (ValidationError.isError(err)) return false;
            throw err;
        }
    }
    _getDefault(options) {
        let defaultValue = this.spec.default;
        if (defaultValue == null) {
            return defaultValue;
        }
        return typeof defaultValue === 'function' ? defaultValue.call(this, options) : clone(defaultValue);
    }
    getDefault(options) {
        let schema = this.resolve(options || {});
        return schema._getDefault(options);
    }
    default(def) {
        if (arguments.length === 0) {
            return this._getDefault();
        }
        let next = this.clone({
            default: def
        });
        return next;
    }
    strict() {
        let isStrict = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        return this.clone({
            strict: isStrict
        });
    }
    nullability(nullable, message) {
        const next = this.clone({
            nullable
        });
        next.internalTests.nullable = createValidation({
            message,
            name: 'nullable',
            test (value) {
                return value === null ? this.schema.spec.nullable : true;
            }
        });
        return next;
    }
    optionality(optional, message) {
        const next = this.clone({
            optional
        });
        next.internalTests.optionality = createValidation({
            message,
            name: 'optionality',
            test (value) {
                return value === undefined ? this.schema.spec.optional : true;
            }
        });
        return next;
    }
    optional() {
        return this.optionality(true);
    }
    defined() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mixed.defined;
        return this.optionality(false, message);
    }
    nullable() {
        return this.nullability(true);
    }
    nonNullable() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mixed.notNull;
        return this.nullability(false, message);
    }
    required() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mixed.required;
        return this.clone().withMutation((next)=>next.nonNullable(message).defined(message));
    }
    notRequired() {
        return this.clone().withMutation((next)=>next.nullable().optional());
    }
    transform(fn) {
        let next = this.clone();
        next.transforms.push(fn);
        return next;
    }
    /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */ test() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        let opts;
        if (args.length === 1) {
            if (typeof args[0] === 'function') {
                opts = {
                    test: args[0]
                };
            } else {
                opts = args[0];
            }
        } else if (args.length === 2) {
            opts = {
                name: args[0],
                test: args[1]
            };
        } else {
            opts = {
                name: args[0],
                message: args[1],
                test: args[2]
            };
        }
        if (opts.message === undefined) opts.message = mixed.default;
        if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
        let next = this.clone();
        let validate = createValidation(opts);
        let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
        if (opts.exclusive) {
            if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
        }
        if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
        next.tests = next.tests.filter((fn)=>{
            if (fn.OPTIONS.name === opts.name) {
                if (isExclusive) return false;
                if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
            }
            return true;
        });
        next.tests.push(validate);
        return next;
    }
    when(keys, options) {
        if (!Array.isArray(keys) && typeof keys !== 'string') {
            options = keys;
            keys = '.';
        }
        let next = this.clone();
        let deps = toArray(keys).map((key)=>new Reference(key));
        deps.forEach((dep)=>{
            // @ts-ignore readonly array
            if (dep.isSibling) next.deps.push(dep.key);
        });
        next.conditions.push(typeof options === 'function' ? new Condition(deps, options) : Condition.fromOptions(deps, options));
        return next;
    }
    typeError(message) {
        let next = this.clone();
        next.internalTests.typeError = createValidation({
            message,
            name: 'typeError',
            skipAbsent: true,
            test (value) {
                if (!this.schema._typeCheck(value)) return this.createError({
                    params: {
                        type: this.schema.type
                    }
                });
                return true;
            }
        });
        return next;
    }
    oneOf(enums) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mixed.oneOf;
        let next = this.clone();
        enums.forEach((val)=>{
            next._whitelist.add(val);
            next._blacklist.delete(val);
        });
        next.internalTests.whiteList = createValidation({
            message,
            name: 'oneOf',
            skipAbsent: true,
            test (value) {
                let valids = this.schema._whitelist;
                let resolved = valids.resolveAll(this.resolve);
                return resolved.includes(value) ? true : this.createError({
                    params: {
                        values: Array.from(valids).join(', '),
                        resolved
                    }
                });
            }
        });
        return next;
    }
    notOneOf(enums) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mixed.notOneOf;
        let next = this.clone();
        enums.forEach((val)=>{
            next._blacklist.add(val);
            next._whitelist.delete(val);
        });
        next.internalTests.blacklist = createValidation({
            message,
            name: 'notOneOf',
            test (value) {
                let invalids = this.schema._blacklist;
                let resolved = invalids.resolveAll(this.resolve);
                if (resolved.includes(value)) return this.createError({
                    params: {
                        values: Array.from(invalids).join(', '),
                        resolved
                    }
                });
                return true;
            }
        });
        return next;
    }
    strip() {
        let strip = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        let next = this.clone();
        next.spec.strip = strip;
        return next;
    }
    /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */ describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const { label, meta, optional, nullable } = next.spec;
        const description = {
            meta,
            label,
            optional,
            nullable,
            default: next.getDefault(options),
            type: next.type,
            oneOf: next._whitelist.describe(),
            notOneOf: next._blacklist.describe(),
            tests: next.tests.filter((n, idx, list)=>list.findIndex((c)=>c.OPTIONS.name === n.OPTIONS.name) === idx).map((fn)=>{
                const params = fn.OPTIONS.params && options ? resolveParams(Object.assign({}, fn.OPTIONS.params), options) : fn.OPTIONS.params;
                return {
                    name: fn.OPTIONS.name,
                    params
                };
            })
        };
        return description;
    }
    get ['~standard']() {
        const schema = this;
        const standard = {
            version: 1,
            vendor: 'yup',
            async validate (value) {
                try {
                    const result = await schema.validate(value, {
                        abortEarly: false
                    });
                    return {
                        value: result
                    };
                } catch (err) {
                    if (err instanceof ValidationError) {
                        return {
                            issues: issuesFromValidationError(err)
                        };
                    }
                    throw err;
                }
            }
        };
        return standard;
    }
    constructor(options){
        this.type = void 0;
        this.deps = [];
        this.tests = void 0;
        this.transforms = void 0;
        this.conditions = [];
        this._mutate = void 0;
        this.internalTests = {};
        this._whitelist = new ReferenceSet();
        this._blacklist = new ReferenceSet();
        this.exclusiveTests = Object.create(null);
        this._typeCheck = void 0;
        this.spec = void 0;
        this.tests = [];
        this.transforms = [];
        this.withMutation(()=>{
            this.typeError(mixed.notType);
        });
        this.type = options.type;
        this._typeCheck = options.check;
        this.spec = Object.assign({
            strip: false,
            strict: false,
            abortEarly: true,
            recursive: true,
            disableStackTrace: false,
            nullable: false,
            optional: true,
            coerce: true
        }, options == null ? void 0 : options.spec);
        this.withMutation((s)=>{
            s.nonNullable();
        });
    }
}
// @ts-expect-error
Schema.prototype.__isYupSchema__ = true;
for (const method of [
    'validate',
    'validateSync'
])Schema.prototype["".concat(method, "At")] = function(path, value) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { parent, parentPath, schema } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], Object.assign({}, options, {
        parent,
        path
    }));
};
for (const alias of [
    'equals',
    'is'
])Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of [
    'not',
    'nope'
])Schema.prototype[alias] = Schema.prototype.notOneOf;
const returnsTrue = ()=>true;
function create$8(spec) {
    return new MixedSchema(spec);
}
class MixedSchema extends Schema {
    constructor(spec){
        super(typeof spec === 'function' ? {
            type: 'mixed',
            check: spec
        } : Object.assign({
            type: 'mixed',
            check: returnsTrue
        }, spec));
    }
}
create$8.prototype = MixedSchema.prototype;
function create$7() {
    return new BooleanSchema();
}
class BooleanSchema extends Schema {
    isTrue() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : boolean.isValue;
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: {
                value: 'true'
            },
            test (value) {
                return isAbsent(value) || value === true;
            }
        });
    }
    isFalse() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : boolean.isValue;
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: {
                value: 'false'
            },
            test (value) {
                return isAbsent(value) || value === false;
            }
        });
    }
    default(def) {
        return super.default(def);
    }
    defined(msg) {
        return super.defined(msg);
    }
    optional() {
        return super.optional();
    }
    required(msg) {
        return super.required(msg);
    }
    notRequired() {
        return super.notRequired();
    }
    nullable() {
        return super.nullable();
    }
    nonNullable(msg) {
        return super.nonNullable(msg);
    }
    strip(v) {
        return super.strip(v);
    }
    constructor(){
        super({
            type: 'boolean',
            check (v) {
                if (v instanceof Boolean) v = v.valueOf();
                return typeof v === 'boolean';
            }
        });
        this.withMutation(()=>{
            this.transform((value, _raw)=>{
                if (this.spec.coerce && !this.isType(value)) {
                    if (/^(true|1)$/i.test(String(value))) return true;
                    if (/^(false|0)$/i.test(String(value))) return false;
                }
                return value;
            });
        });
    }
}
create$7.prototype = BooleanSchema.prototype;
/**
 * This file is a modified version of the file from the following repository:
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */ // prettier-ignore
//                1 YYYY                2 MM        3 DD              4 HH     5 mm        6 ss           7 msec         8 Z 9 ±   10 tzHH    11 tzmm
const isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
    const struct = parseDateStruct(date);
    if (!struct) return Date.parse ? Date.parse(date) : Number.NaN;
    // timestamps without timezone identifiers should be considered local time
    if (struct.z === undefined && struct.plusMinus === undefined) {
        return new Date(struct.year, struct.month, struct.day, struct.hour, struct.minute, struct.second, struct.millisecond).valueOf();
    }
    let totalMinutesOffset = 0;
    if (struct.z !== 'Z' && struct.plusMinus !== undefined) {
        totalMinutesOffset = struct.hourOffset * 60 + struct.minuteOffset;
        if (struct.plusMinus === '+') totalMinutesOffset = 0 - totalMinutesOffset;
    }
    return Date.UTC(struct.year, struct.month, struct.day, struct.hour, struct.minute + totalMinutesOffset, struct.second, struct.millisecond);
}
function parseDateStruct(date) {
    var _regexResult$7$length, _regexResult$;
    const regexResult = isoReg.exec(date);
    if (!regexResult) return null;
    // use of toNumber() avoids NaN timestamps caused by “undefined”
    // values being passed to Date constructor
    return {
        year: toNumber(regexResult[1]),
        month: toNumber(regexResult[2], 1) - 1,
        day: toNumber(regexResult[3], 1),
        hour: toNumber(regexResult[4]),
        minute: toNumber(regexResult[5]),
        second: toNumber(regexResult[6]),
        millisecond: regexResult[7] ? // allow arbitrary sub-second precision beyond milliseconds
        toNumber(regexResult[7].substring(0, 3)) : 0,
        precision: (_regexResult$7$length = (_regexResult$ = regexResult[7]) == null ? void 0 : _regexResult$.length) != null ? _regexResult$7$length : undefined,
        z: regexResult[8] || undefined,
        plusMinus: regexResult[9] || undefined,
        hourOffset: toNumber(regexResult[10]),
        minuteOffset: toNumber(regexResult[11])
    };
}
function toNumber(str) {
    let defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Number(str) || defaultValue;
}
// Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
let rEmail = // eslint-disable-next-line
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let rUrl = // eslint-disable-next-line
/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
// eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let yearMonthDay = '^\\d{4}-\\d{2}-\\d{2}';
let hourMinuteSecond = '\\d{2}:\\d{2}:\\d{2}';
let zOrOffset = '(([+-]\\d{2}(:?\\d{2})?)|Z)';
let rIsoDateTime = new RegExp("".concat(yearMonthDay, "T").concat(hourMinuteSecond, "(\\.\\d+)?").concat(zOrOffset, "$"));
let isTrimmed = (value)=>isAbsent(value) || value === value.trim();
let objStringTag = ({}).toString();
function create$6() {
    return new StringSchema();
}
class StringSchema extends Schema {
    required(message) {
        return super.required(message).withMutation((schema)=>schema.test({
                message: message || mixed.required,
                name: 'required',
                skipAbsent: true,
                test: (value)=>!!value.length
            }));
    }
    notRequired() {
        return super.notRequired().withMutation((schema)=>{
            schema.tests = schema.tests.filter((t)=>t.OPTIONS.name !== 'required');
            return schema;
        });
    }
    length(length) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : string.length;
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: {
                length
            },
            skipAbsent: true,
            test (value) {
                return value.length === this.resolve(length);
            }
        });
    }
    min(min) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : string.min;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            skipAbsent: true,
            test (value) {
                return value.length >= this.resolve(min);
            }
        });
    }
    max(max) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : string.max;
        return this.test({
            name: 'max',
            exclusive: true,
            message,
            params: {
                max
            },
            skipAbsent: true,
            test (value) {
                return value.length <= this.resolve(max);
            }
        });
    }
    matches(regex, options) {
        let excludeEmptyString = false;
        let message;
        let name;
        if (options) {
            if (typeof options === 'object') {
                ({ excludeEmptyString = false, message, name } = options);
            } else {
                message = options;
            }
        }
        return this.test({
            name: name || 'matches',
            message: message || string.matches,
            params: {
                regex
            },
            skipAbsent: true,
            test: (value)=>value === '' && excludeEmptyString || value.search(regex) !== -1
        });
    }
    email() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.email;
        return this.matches(rEmail, {
            name: 'email',
            message,
            excludeEmptyString: true
        });
    }
    url() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.url;
        return this.matches(rUrl, {
            name: 'url',
            message,
            excludeEmptyString: true
        });
    }
    uuid() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.uuid;
        return this.matches(rUUID, {
            name: 'uuid',
            message,
            excludeEmptyString: false
        });
    }
    datetime(options) {
        let message = '';
        let allowOffset;
        let precision;
        if (options) {
            if (typeof options === 'object') {
                ({ message = '', allowOffset = false, precision = undefined } = options);
            } else {
                message = options;
            }
        }
        return this.matches(rIsoDateTime, {
            name: 'datetime',
            message: message || string.datetime,
            excludeEmptyString: true
        }).test({
            name: 'datetime_offset',
            message: message || string.datetime_offset,
            params: {
                allowOffset
            },
            skipAbsent: true,
            test: (value)=>{
                if (!value || allowOffset) return true;
                const struct = parseDateStruct(value);
                if (!struct) return false;
                return !!struct.z;
            }
        }).test({
            name: 'datetime_precision',
            message: message || string.datetime_precision,
            params: {
                precision
            },
            skipAbsent: true,
            test: (value)=>{
                if (!value || precision == undefined) return true;
                const struct = parseDateStruct(value);
                if (!struct) return false;
                return struct.precision === precision;
            }
        });
    }
    //-- transforms --
    ensure() {
        return this.default('').transform((val)=>val === null ? '' : val);
    }
    trim() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.trim;
        return this.transform((val)=>val != null ? val.trim() : val).test({
            message,
            name: 'trim',
            test: isTrimmed
        });
    }
    lowercase() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.lowercase;
        return this.transform((value)=>!isAbsent(value) ? value.toLowerCase() : value).test({
            message,
            name: 'string_case',
            exclusive: true,
            skipAbsent: true,
            test: (value)=>isAbsent(value) || value === value.toLowerCase()
        });
    }
    uppercase() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : string.uppercase;
        return this.transform((value)=>!isAbsent(value) ? value.toUpperCase() : value).test({
            message,
            name: 'string_case',
            exclusive: true,
            skipAbsent: true,
            test: (value)=>isAbsent(value) || value === value.toUpperCase()
        });
    }
    constructor(){
        super({
            type: 'string',
            check (value) {
                if (value instanceof String) value = value.valueOf();
                return typeof value === 'string';
            }
        });
        this.withMutation(()=>{
            this.transform((value, _raw)=>{
                if (!this.spec.coerce || this.isType(value)) return value;
                // don't ever convert arrays
                if (Array.isArray(value)) return value;
                const strValue = value != null && value.toString ? value.toString() : value;
                // no one wants plain objects converted to [Object object]
                if (strValue === objStringTag) return value;
                return strValue;
            });
        });
    }
}
create$6.prototype = StringSchema.prototype;
//
// String Interfaces
//
let isNaN$1 = (value)=>value != +value;
function create$5() {
    return new NumberSchema();
}
class NumberSchema extends Schema {
    min(min) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : number.min;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            skipAbsent: true,
            test (value) {
                return value >= this.resolve(min);
            }
        });
    }
    max(max) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : number.max;
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            skipAbsent: true,
            test (value) {
                return value <= this.resolve(max);
            }
        });
    }
    lessThan(less) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : number.lessThan;
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                less
            },
            skipAbsent: true,
            test (value) {
                return value < this.resolve(less);
            }
        });
    }
    moreThan(more) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : number.moreThan;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                more
            },
            skipAbsent: true,
            test (value) {
                return value > this.resolve(more);
            }
        });
    }
    positive() {
        let msg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : number.positive;
        return this.moreThan(0, msg);
    }
    negative() {
        let msg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : number.negative;
        return this.lessThan(0, msg);
    }
    integer() {
        let message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : number.integer;
        return this.test({
            name: 'integer',
            message,
            skipAbsent: true,
            test: (val)=>Number.isInteger(val)
        });
    }
    truncate() {
        return this.transform((value)=>!isAbsent(value) ? value | 0 : value);
    }
    round(method) {
        var _method;
        let avail = [
            'ceil',
            'floor',
            'round',
            'trunc'
        ];
        method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || 'round';
        // this exists for symemtry with the new Math.trunc
        if (method === 'trunc') return this.truncate();
        if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
        return this.transform((value)=>!isAbsent(value) ? Math[method](value) : value);
    }
    constructor(){
        super({
            type: 'number',
            check (value) {
                if (value instanceof Number) value = value.valueOf();
                return typeof value === 'number' && !isNaN$1(value);
            }
        });
        this.withMutation(()=>{
            this.transform((value, _raw)=>{
                if (!this.spec.coerce) return value;
                let parsed = value;
                if (typeof parsed === 'string') {
                    parsed = parsed.replace(/\s/g, '');
                    if (parsed === '') return NaN;
                    // don't use parseFloat to avoid positives on alpha-numeric strings
                    parsed = +parsed;
                }
                // null -> NaN isn't useful; treat all nulls as null and let it fail on
                // nullability check vs TypeErrors
                if (this.isType(parsed) || parsed === null) return parsed;
                return parseFloat(parsed);
            });
        });
    }
}
create$5.prototype = NumberSchema.prototype;
//
// Number Interfaces
//
let invalidDate = new Date('');
let isDate = (obj)=>Object.prototype.toString.call(obj) === '[object Date]';
function create$4() {
    return new DateSchema();
}
class DateSchema extends Schema {
    prepareParam(ref, name) {
        let param;
        if (!Reference.isRef(ref)) {
            let cast = this.cast(ref);
            if (!this._typeCheck(cast)) throw new TypeError("`".concat(name, "` must be a Date or a value that can be `cast()` to a Date"));
            param = cast;
        } else {
            param = ref;
        }
        return param;
    }
    min(min) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : date.min;
        let limit = this.prepareParam(min, 'min');
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            skipAbsent: true,
            test (value) {
                return value >= this.resolve(limit);
            }
        });
    }
    max(max) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : date.max;
        let limit = this.prepareParam(max, 'max');
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            skipAbsent: true,
            test (value) {
                return value <= this.resolve(limit);
            }
        });
    }
    constructor(){
        super({
            type: 'date',
            check (v) {
                return isDate(v) && !isNaN(v.getTime());
            }
        });
        this.withMutation(()=>{
            this.transform((value, _raw)=>{
                // null -> InvalidDate isn't useful; treat all nulls as null and let it fail on
                // nullability check vs TypeErrors
                if (!this.spec.coerce || this.isType(value) || value === null) return value;
                value = parseIsoDate(value);
                // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
                return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
            });
        });
    }
}
DateSchema.INVALID_DATE = invalidDate;
create$4.prototype = DateSchema.prototype;
create$4.INVALID_DATE = invalidDate;
// @ts-expect-error
function sortFields(fields) {
    let excludedEdges = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let edges = [];
    let nodes = new Set();
    let excludes = new Set(excludedEdges.map((param)=>{
        let [a, b] = param;
        return "".concat(a, "-").concat(b);
    }));
    function addNode(depPath, key) {
        let node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])(depPath)[0];
        nodes.add(node);
        if (!excludes.has("".concat(key, "-").concat(node))) edges.push([
            key,
            node
        ]);
    }
    for (const key of Object.keys(fields)){
        let value = fields[key];
        nodes.add(key);
        if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);
        else if (isSchema(value) && 'deps' in value) value.deps.forEach((path)=>addNode(path, key));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$toposort$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
    let idx = Infinity;
    arr.some((key, ii)=>{
        var _err$path;
        if ((_err$path = err.path) != null && _err$path.includes(key)) {
            idx = ii;
            return true;
        }
    });
    return idx;
}
function sortByKeyOrder(keys) {
    return (a, b)=>{
        return findIndex(keys, a) - findIndex(keys, b);
    };
}
const parseJson = (value, _, schema)=>{
    if (typeof value !== 'string') {
        return value;
    }
    let parsed = value;
    try {
        parsed = JSON.parse(value);
    } catch (err) {
    /* */ }
    return schema.isType(parsed) ? parsed : value;
};
// @ts-ignore
function deepPartial(schema) {
    if ('fields' in schema) {
        const partial = {};
        for (const [key, fieldSchema] of Object.entries(schema.fields)){
            partial[key] = deepPartial(fieldSchema);
        }
        return schema.setFields(partial);
    }
    if (schema.type === 'array') {
        const nextArray = schema.optional();
        if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
        return nextArray;
    }
    if (schema.type === 'tuple') {
        return schema.optional().clone({
            types: schema.spec.types.map(deepPartial)
        });
    }
    if ('optional' in schema) {
        return schema.optional();
    }
    return schema;
}
const deepHas = (obj, p)=>{
    const path = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizePath"])(p)
    ];
    if (path.length === 1) return path[0] in obj;
    let last = path.pop();
    let parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["join"])(path), true)(obj);
    return !!(parent && last in parent);
};
let isObject = (obj)=>Object.prototype.toString.call(obj) === '[object Object]';
function unknown(ctx, value) {
    let known = Object.keys(ctx.fields);
    return Object.keys(value).filter((key)=>known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
    return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
    _cast(_value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _options$stripUnknown;
        let value = super._cast(_value, options);
        //should ignore nulls here
        if (value === undefined) return this.getDefault(options);
        if (!this._typeCheck(value)) return value;
        let fields = this.fields;
        let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
        let props = [].concat(this._nodes, Object.keys(value).filter((v)=>!this._nodes.includes(v)));
        let intermediateValue = {}; // is filled during the transform below
        let innerOptions = Object.assign({}, options, {
            parent: intermediateValue,
            __validating: options.__validating || false
        });
        let isChanged = false;
        for (const prop of props){
            let field = fields[prop];
            let exists = prop in value;
            let inputValue = value[prop];
            if (field) {
                let fieldValue;
                // safe to mutate since this is fired in sequence
                innerOptions.path = (options.path ? "".concat(options.path, ".") : '') + prop;
                field = field.resolve({
                    value: inputValue,
                    context: options.context,
                    parent: intermediateValue
                });
                let fieldSpec = field instanceof Schema ? field.spec : undefined;
                let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
                if (fieldSpec != null && fieldSpec.strip) {
                    isChanged = isChanged || prop in value;
                    continue;
                }
                fieldValue = !options.__validating || !strict ? field.cast(inputValue, innerOptions) : inputValue;
                if (fieldValue !== undefined) {
                    intermediateValue[prop] = fieldValue;
                }
            } else if (exists && !strip) {
                intermediateValue[prop] = inputValue;
            }
            if (exists !== prop in intermediateValue || intermediateValue[prop] !== inputValue) {
                isChanged = true;
            }
        }
        return isChanged ? intermediateValue : value;
    }
    _validate(_value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, panic = arguments.length > 2 ? arguments[2] : void 0, next = arguments.length > 3 ? arguments[3] : void 0;
        let { from = [], originalValue = _value, recursive = this.spec.recursive } = options;
        options.from = [
            {
                schema: this,
                value: originalValue
            },
            ...from
        ];
        // this flag is needed for handling `strict` correctly in the context of
        // validation vs just casting. e.g strict() on a field is only used when validating
        options.__validating = true;
        options.originalValue = originalValue;
        super._validate(_value, options, panic, (objectErrors, value)=>{
            if (!recursive || !isObject(value)) {
                next(objectErrors, value);
                return;
            }
            originalValue = originalValue || value;
            let tests = [];
            for (let key of this._nodes){
                let field = this.fields[key];
                if (!field || Reference.isRef(field)) {
                    continue;
                }
                tests.push(field.asNestedTest({
                    options,
                    key,
                    parent: value,
                    parentPath: options.path,
                    originalParent: originalValue
                }));
            }
            this.runTests({
                tests,
                value,
                originalValue,
                options
            }, panic, (fieldErrors)=>{
                next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
            });
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        next.fields = Object.assign({}, this.fields);
        next._nodes = this._nodes;
        next._excludedEdges = this._excludedEdges;
        next._sortErrors = this._sortErrors;
        return next;
    }
    concat(schema) {
        let next = super.concat(schema);
        let nextFields = next.fields;
        for (let [field, schemaOrRef] of Object.entries(this.fields)){
            const target = nextFields[field];
            nextFields[field] = target === undefined ? schemaOrRef : target;
        }
        return next.withMutation((s)=>// XXX: excludes here is wrong
            s.setFields(nextFields, [
                ...this._excludedEdges,
                ...schema._excludedEdges
            ]));
    }
    _getDefault(options) {
        if ('default' in this.spec) {
            return super._getDefault(options);
        }
        // if there is no default set invent one
        if (!this._nodes.length) {
            return undefined;
        }
        let dft = {};
        this._nodes.forEach((key)=>{
            var _innerOptions;
            const field = this.fields[key];
            let innerOptions = options;
            if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
                innerOptions = Object.assign({}, innerOptions, {
                    parent: innerOptions.value,
                    value: innerOptions.value[key]
                });
            }
            dft[key] = field && 'getDefault' in field ? field.getDefault(innerOptions) : undefined;
        });
        return dft;
    }
    setFields(shape, excludedEdges) {
        let next = this.clone();
        next.fields = shape;
        next._nodes = sortFields(shape, excludedEdges);
        next._sortErrors = sortByKeyOrder(Object.keys(shape));
        // XXX: this carries over edges which may not be what you want
        if (excludedEdges) next._excludedEdges = excludedEdges;
        return next;
    }
    shape(additions) {
        let excludes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return this.clone().withMutation((next)=>{
            let edges = next._excludedEdges;
            if (excludes.length) {
                if (!Array.isArray(excludes[0])) excludes = [
                    excludes
                ];
                edges = [
                    ...next._excludedEdges,
                    ...excludes
                ];
            }
            // XXX: excludes here is wrong
            return next.setFields(Object.assign(next.fields, additions), edges);
        });
    }
    partial() {
        const partial = {};
        for (const [key, schema] of Object.entries(this.fields)){
            partial[key] = 'optional' in schema && schema.optional instanceof Function ? schema.optional() : schema;
        }
        return this.setFields(partial);
    }
    deepPartial() {
        const next = deepPartial(this);
        return next;
    }
    pick(keys) {
        const picked = {};
        for (const key of keys){
            if (this.fields[key]) picked[key] = this.fields[key];
        }
        return this.setFields(picked, this._excludedEdges.filter((param)=>{
            let [a, b] = param;
            return keys.includes(a) && keys.includes(b);
        }));
    }
    omit(keys) {
        const remaining = [];
        for (const key of Object.keys(this.fields)){
            if (keys.includes(key)) continue;
            remaining.push(key);
        }
        return this.pick(remaining);
    }
    from(from, to, alias) {
        let fromGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$property$2d$expr$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getter"])(from, true);
        return this.transform((obj)=>{
            if (!obj) return obj;
            let newObj = obj;
            if (deepHas(obj, from)) {
                newObj = Object.assign({}, obj);
                if (!alias) delete newObj[from];
                newObj[to] = fromGetter(obj);
            }
            return newObj;
        });
    }
    /** Parse an input JSON string to an object */ json() {
        return this.transform(parseJson);
    }
    /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */ exact(message) {
        return this.test({
            name: 'exact',
            exclusive: true,
            message: message || object.exact,
            test (value) {
                if (value == null) return true;
                const unknownKeys = unknown(this.schema, value);
                return unknownKeys.length === 0 || this.createError({
                    params: {
                        properties: unknownKeys.join(', ')
                    }
                });
            }
        });
    }
    stripUnknown() {
        return this.clone({
            noUnknown: true
        });
    }
    noUnknown() {
        let noAllow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : object.noUnknown;
        if (typeof noAllow !== 'boolean') {
            message = noAllow;
            noAllow = true;
        }
        let next = this.test({
            name: 'noUnknown',
            exclusive: true,
            message: message,
            test (value) {
                if (value == null) return true;
                const unknownKeys = unknown(this.schema, value);
                return !noAllow || unknownKeys.length === 0 || this.createError({
                    params: {
                        unknown: unknownKeys.join(', ')
                    }
                });
            }
        });
        next.spec.noUnknown = noAllow;
        return next;
    }
    unknown() {
        let allow = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : object.noUnknown;
        return this.noUnknown(!allow, message);
    }
    transformKeys(fn) {
        return this.transform((obj)=>{
            if (!obj) return obj;
            const result = {};
            for (const key of Object.keys(obj))result[fn(key)] = obj[key];
            return result;
        });
    }
    camelCase() {
        return this.transformKeys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$case$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelCase"]);
    }
    snakeCase() {
        return this.transformKeys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$case$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snakeCase"]);
    }
    constantCase() {
        return this.transformKeys((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$case$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snakeCase"])(key).toUpperCase());
    }
    describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        base.fields = {};
        for (const [key, value] of Object.entries(next.fields)){
            var _innerOptions2;
            let innerOptions = options;
            if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
                innerOptions = Object.assign({}, innerOptions, {
                    parent: innerOptions.value,
                    value: innerOptions.value[key]
                });
            }
            base.fields[key] = value.describe(innerOptions);
        }
        return base;
    }
    constructor(spec){
        super({
            type: 'object',
            check (value) {
                return isObject(value) || typeof value === 'function';
            }
        });
        this.fields = Object.create(null);
        this._sortErrors = defaultSort;
        this._nodes = [];
        this._excludedEdges = [];
        this.withMutation(()=>{
            if (spec) {
                this.shape(spec);
            }
        });
    }
}
create$3.prototype = ObjectSchema.prototype;
function create$2(type) {
    return new ArraySchema(type);
}
class ArraySchema extends Schema {
    _cast(_value, _opts) {
        const value = super._cast(_value, _opts);
        // should ignore nulls here
        if (!this._typeCheck(value) || !this.innerType) {
            return value;
        }
        let isChanged = false;
        const castArray = value.map((v, idx)=>{
            const castElement = this.innerType.cast(v, Object.assign({}, _opts, {
                path: "".concat(_opts.path || '', "[").concat(idx, "]"),
                parent: value,
                originalValue: v,
                value: v,
                index: idx
            }));
            if (castElement !== v) {
                isChanged = true;
            }
            return castElement;
        });
        return isChanged ? castArray : value;
    }
    _validate(_value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, panic = arguments.length > 2 ? arguments[2] : void 0, next = arguments.length > 3 ? arguments[3] : void 0;
        var _options$recursive;
        // let sync = options.sync;
        // let path = options.path;
        let innerType = this.innerType;
        // let endEarly = options.abortEarly ?? this.spec.abortEarly;
        let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
        options.originalValue != null ? options.originalValue : _value;
        super._validate(_value, options, panic, (arrayErrors, value)=>{
            var _options$originalValu2;
            if (!recursive || !innerType || !this._typeCheck(value)) {
                next(arrayErrors, value);
                return;
            }
            // #950 Ensure that sparse array empty slots are validated
            let tests = new Array(value.length);
            for(let index = 0; index < value.length; index++){
                var _options$originalValu;
                tests[index] = innerType.asNestedTest({
                    options,
                    index,
                    parent: value,
                    parentPath: options.path,
                    originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
                });
            }
            this.runTests({
                value,
                tests,
                originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
                options
            }, panic, (innerTypeErrors)=>next(innerTypeErrors.concat(arrayErrors), value));
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        // @ts-expect-error readonly
        next.innerType = this.innerType;
        return next;
    }
    /** Parse an input JSON string to an object */ json() {
        return this.transform(parseJson);
    }
    concat(schema) {
        let next = super.concat(schema);
        // @ts-expect-error readonly
        next.innerType = this.innerType;
        if (schema.innerType) // @ts-expect-error readonly
        next.innerType = next.innerType ? // @ts-expect-error Lazy doesn't have concat and will break
        next.innerType.concat(schema.innerType) : schema.innerType;
        return next;
    }
    of(schema) {
        // FIXME: this should return a new instance of array without the default to be
        let next = this.clone();
        if (!isSchema(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + printValue(schema));
        // @ts-expect-error readonly
        next.innerType = schema;
        next.spec = Object.assign({}, next.spec, {
            types: schema
        });
        return next;
    }
    length(length) {
        let message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : array.length;
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: {
                length
            },
            skipAbsent: true,
            test (value) {
                return value.length === this.resolve(length);
            }
        });
    }
    min(min, message) {
        message = message || array.min;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: {
                min
            },
            skipAbsent: true,
            // FIXME(ts): Array<typeof T>
            test (value) {
                return value.length >= this.resolve(min);
            }
        });
    }
    max(max, message) {
        message = message || array.max;
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: {
                max
            },
            skipAbsent: true,
            test (value) {
                return value.length <= this.resolve(max);
            }
        });
    }
    ensure() {
        return this.default(()=>[]).transform((val, original)=>{
            // We don't want to return `null` for nullable schema
            if (this._typeCheck(val)) return val;
            return original == null ? [] : [].concat(original);
        });
    }
    compact(rejector) {
        let reject = !rejector ? (v)=>!!v : (v, i, a)=>!rejector(v, i, a);
        return this.transform((values)=>values != null ? values.filter(reject) : values);
    }
    describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        if (next.innerType) {
            var _innerOptions;
            let innerOptions = options;
            if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
                innerOptions = Object.assign({}, innerOptions, {
                    parent: innerOptions.value,
                    value: innerOptions.value[0]
                });
            }
            base.innerType = next.innerType.describe(innerOptions);
        }
        return base;
    }
    constructor(type){
        super({
            type: 'array',
            spec: {
                types: type
            },
            check (v) {
                return Array.isArray(v);
            }
        });
        // `undefined` specifically means uninitialized, as opposed to "no subtype"
        this.innerType = void 0;
        this.innerType = type;
    }
}
create$2.prototype = ArraySchema.prototype;
// @ts-ignore
function create$1(schemas) {
    return new TupleSchema(schemas);
}
class TupleSchema extends Schema {
    _cast(inputValue, options) {
        const { types } = this.spec;
        const value = super._cast(inputValue, options);
        if (!this._typeCheck(value)) {
            return value;
        }
        let isChanged = false;
        const castArray = types.map((type, idx)=>{
            const castElement = type.cast(value[idx], Object.assign({}, options, {
                path: "".concat(options.path || '', "[").concat(idx, "]"),
                parent: value,
                originalValue: value[idx],
                value: value[idx],
                index: idx
            }));
            if (castElement !== value[idx]) isChanged = true;
            return castElement;
        });
        return isChanged ? castArray : value;
    }
    _validate(_value) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, panic = arguments.length > 2 ? arguments[2] : void 0, next = arguments.length > 3 ? arguments[3] : void 0;
        let itemTypes = this.spec.types;
        super._validate(_value, options, panic, (tupleErrors, value)=>{
            var _options$originalValu2;
            // intentionally not respecting recursive
            if (!this._typeCheck(value)) {
                next(tupleErrors, value);
                return;
            }
            let tests = [];
            for (let [index, itemSchema] of itemTypes.entries()){
                var _options$originalValu;
                tests[index] = itemSchema.asNestedTest({
                    options,
                    index,
                    parent: value,
                    parentPath: options.path,
                    originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
                });
            }
            this.runTests({
                value,
                tests,
                originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
                options
            }, panic, (innerTypeErrors)=>next(innerTypeErrors.concat(tupleErrors), value));
        });
    }
    describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const base = super.describe(options);
        base.innerType = next.spec.types.map((schema, index)=>{
            var _innerOptions;
            let innerOptions = options;
            if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
                innerOptions = Object.assign({}, innerOptions, {
                    parent: innerOptions.value,
                    value: innerOptions.value[index]
                });
            }
            return schema.describe(innerOptions);
        });
        return base;
    }
    constructor(schemas){
        super({
            type: 'tuple',
            spec: {
                types: schemas
            },
            check (v) {
                const types = this.spec.types;
                return Array.isArray(v) && v.length === types.length;
            }
        });
        this.withMutation(()=>{
            this.typeError(tuple.notType);
        });
    }
}
create$1.prototype = TupleSchema.prototype;
function create(builder) {
    return new Lazy(builder);
}
function catchValidationError(fn) {
    try {
        return fn();
    } catch (err) {
        if (ValidationError.isError(err)) return Promise.reject(err);
        throw err;
    }
}
class Lazy {
    clone(spec) {
        const next = new Lazy(this.builder);
        next.spec = Object.assign({}, this.spec, spec);
        return next;
    }
    optionality(optional) {
        const next = this.clone({
            optional
        });
        return next;
    }
    optional() {
        return this.optionality(true);
    }
    resolve(options) {
        return this._resolve(options.value, options);
    }
    cast(value, options) {
        return this._resolve(value, options).cast(value, options);
    }
    asNestedTest(config) {
        let { key, index, parent, options } = config;
        let value = parent[index != null ? index : key];
        return this._resolve(value, Object.assign({}, options, {
            value,
            parent
        })).asNestedTest(config);
    }
    validate(value, options) {
        return catchValidationError(()=>this._resolve(value, options).validate(value, options));
    }
    validateSync(value, options) {
        return this._resolve(value, options).validateSync(value, options);
    }
    validateAt(path, value, options) {
        return catchValidationError(()=>this._resolve(value, options).validateAt(path, value, options));
    }
    validateSyncAt(path, value, options) {
        return this._resolve(value, options).validateSyncAt(path, value, options);
    }
    isValid(value, options) {
        try {
            return this._resolve(value, options).isValid(value, options);
        } catch (err) {
            if (ValidationError.isError(err)) {
                return Promise.resolve(false);
            }
            throw err;
        }
    }
    isValidSync(value, options) {
        return this._resolve(value, options).isValidSync(value, options);
    }
    describe(options) {
        return options ? this.resolve(options).describe(options) : {
            type: 'lazy',
            meta: this.spec.meta,
            label: undefined
        };
    }
    meta() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 0) return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
    }
    get ['~standard']() {
        const schema = this;
        const standard = {
            version: 1,
            vendor: 'yup',
            async validate (value) {
                try {
                    const result = await schema.validate(value, {
                        abortEarly: false
                    });
                    return {
                        value: result
                    };
                } catch (err) {
                    if (ValidationError.isError(err)) {
                        return {
                            issues: issuesFromValidationError(err)
                        };
                    }
                    throw err;
                }
            }
        };
        return standard;
    }
    constructor(builder){
        var _this = this;
        this.type = 'lazy';
        this.__isYupSchema__ = true;
        this.spec = void 0;
        this._resolve = function(value) {
            let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            let schema = _this.builder(value, options);
            if (!isSchema(schema)) throw new TypeError('lazy() functions must return a valid schema');
            if (_this.spec.optional) schema = schema.optional();
            return schema.resolve(options);
        };
        this.builder = builder;
        this.spec = {
            meta: undefined,
            optional: false
        };
    }
}
function setLocale(custom) {
    Object.keys(custom).forEach((type)=>{
        // @ts-ignore
        Object.keys(custom[type]).forEach((method)=>{
            // @ts-ignore
            locale[type][method] = custom[type][method];
        });
    });
}
function addMethod(schemaType, name, fn) {
    if (!schemaType || !isSchema(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
    if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
    if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
    schemaType.prototype[name] = fn;
}
;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/deepmerge/dist/es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!options.isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        } else {
            destination[key] = deepmerge(target[key], source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
const __TURBOPACK__default__export__ = deepmerge_1;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Detect free variable `global` from Node.js. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
const __TURBOPACK__default__export__ = freeGlobal;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-client] (ecmascript)");
;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || freeSelf || Function('return this')();
const __TURBOPACK__default__export__ = root;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
/** Built-in value references. */ var Symbol = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Symbol;
const __TURBOPACK__default__export__ = Symbol;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getRawTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-client] (ecmascript)");
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = getRawTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_objectToString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used for built-in method references. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
const __TURBOPACK__default__export__ = objectToString;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getRawTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getRawTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_objectToString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_objectToString.js [app-client] (ecmascript)");
;
;
;
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getRawTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_objectToString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = baseGetTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
const __TURBOPACK__default__export__ = overArg;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-client] (ecmascript)");
;
/** Built-in value references. */ var getPrototype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.getPrototypeOf, Object);
const __TURBOPACK__default__export__ = getPrototype;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
const __TURBOPACK__default__export__ = isObjectLike;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isPlainObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
;
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) != objectTag) {
        return false;
    }
    var proto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
const __TURBOPACK__default__export__ = isPlainObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
const __TURBOPACK__default__export__ = listCacheClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function eq(value, other) {
    return value === other || value !== value && other !== other;
}
const __TURBOPACK__default__export__ = eq;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-client] (ecmascript)");
;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
const __TURBOPACK__default__export__ = assocIndexOf;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheDelete.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-client] (ecmascript)");
;
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
const __TURBOPACK__default__export__ = listCacheDelete;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheGet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-client] (ecmascript)");
;
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, key);
    return index < 0 ? undefined : data[index][1];
}
const __TURBOPACK__default__export__ = listCacheGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheHas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-client] (ecmascript)");
;
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.__data__, key) > -1;
}
const __TURBOPACK__default__export__ = listCacheHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-client] (ecmascript)");
;
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else {
        data[index][1] = value;
    }
    return this;
}
const __TURBOPACK__default__export__ = listCacheSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheDelete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheGet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheHas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheSet.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = ListCache;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-client] (ecmascript)");
;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    this.size = 0;
}
const __TURBOPACK__default__export__ = stackClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackDelete.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
const __TURBOPACK__default__export__ = stackDelete;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackGet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function stackGet(key) {
    return this.__data__.get(key);
}
const __TURBOPACK__default__export__ = stackGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackHas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function stackHas(key) {
    return this.__data__.has(key);
}
const __TURBOPACK__default__export__ = stackHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
const __TURBOPACK__default__export__ = isObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)");
;
;
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
const __TURBOPACK__default__export__ = isFunction;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_coreJsData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
/** Used to detect overreaching core-js shims. */ var coreJsData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['__core-js_shared__'];
const __TURBOPACK__default__export__ = coreJsData;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isMasked.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_coreJsData.js [app-client] (ecmascript)");
;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
const __TURBOPACK__default__export__ = isMasked;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used for built-in method references. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
const __TURBOPACK__default__export__ = toSource;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsNative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isMasked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isMasked.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isMasked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return false;
    }
    var pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value));
}
const __TURBOPACK__default__export__ = baseIsNative;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
const __TURBOPACK__default__export__ = getValue;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getValue.js [app-client] (ecmascript)");
;
;
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, key);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) ? value : undefined;
}
const __TURBOPACK__default__export__ = getNative;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'Map');
const __TURBOPACK__default__export__ = Map;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
;
/* Built-in method references that are verified to be native. */ var nativeCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object, 'create');
const __TURBOPACK__default__export__ = nativeCreate;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-client] (ecmascript)");
;
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null) : {};
    this.size = 0;
}
const __TURBOPACK__default__export__ = hashClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashDelete.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
const __TURBOPACK__default__export__ = hashDelete;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashGet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-client] (ecmascript)");
;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
const __TURBOPACK__default__export__ = hashGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashHas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-client] (ecmascript)");
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
const __TURBOPACK__default__export__ = hashHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-client] (ecmascript)");
;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
const __TURBOPACK__default__export__ = hashSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashDelete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashGet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashHas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashSet.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Hash.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Hash;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheClear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-client] (ecmascript)");
;
;
;
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        'map': new (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
        'string': new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    };
}
const __TURBOPACK__default__export__ = mapCacheClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isKeyable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
const __TURBOPACK__default__export__ = isKeyable;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isKeyable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isKeyable.js [app-client] (ecmascript)");
;
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isKeyable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
const __TURBOPACK__default__export__ = getMapData;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheDelete.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-client] (ecmascript)");
;
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
const __TURBOPACK__default__export__ = mapCacheDelete;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheGet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-client] (ecmascript)");
;
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, key).get(key);
}
const __TURBOPACK__default__export__ = mapCacheGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheHas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-client] (ecmascript)");
;
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, key).has(key);
}
const __TURBOPACK__default__export__ = mapCacheHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-client] (ecmascript)");
;
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
const __TURBOPACK__default__export__ = mapCacheSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheDelete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheGet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheHas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheSet.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = MapCache;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-client] (ecmascript)");
;
;
;
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        var pairs = data.__data__;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
const __TURBOPACK__default__export__ = stackSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Stack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackClear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackDelete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackGet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackHas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackSet.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackClear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Stack.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackDelete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackGet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackHas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Stack;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayEach.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
const __TURBOPACK__default__export__ = arrayEach;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_defineProperty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
;
var defineProperty = function() {
    try {
        var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
const __TURBOPACK__default__export__ = defineProperty;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_defineProperty.js [app-client] (ecmascript)");
;
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        });
    } else {
        object[key] = value;
    }
}
const __TURBOPACK__default__export__ = baseAssignValue;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-client] (ecmascript)");
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(objValue, value)) || value === undefined && !(key in object)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, key, value);
    }
}
const __TURBOPACK__default__export__ = assignValue;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-client] (ecmascript)");
;
;
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) {
            newValue = source[key];
        }
        if (isNew) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, key, newValue);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, key, newValue);
        }
    }
    return object;
}
const __TURBOPACK__default__export__ = copyObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseTimes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
const __TURBOPACK__default__export__ = baseTimes;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsArguments.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) == argsTag;
}
const __TURBOPACK__default__export__ = baseIsArguments;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArguments.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsArguments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
    return arguments;
}()) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : function(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
const __TURBOPACK__default__export__ = isArguments;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var isArray = Array.isArray;
const __TURBOPACK__default__export__ = isArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubFalse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function stubFalse() {
    return false;
}
const __TURBOPACK__default__export__ = stubFalse;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubFalse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubFalse.js [app-client] (ecmascript)");
;
;
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubFalse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isBuffer;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used as references for various `Number` constants. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
const __TURBOPACK__default__export__ = isIndex;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used as references for various `Number` constants. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
const __TURBOPACK__default__export__ = isLength;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsTypedArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value.length) && !!typedArrayTags[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)];
}
const __TURBOPACK__default__export__ = baseIsTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
const __TURBOPACK__default__export__ = baseUnary;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-client] (ecmascript)");
;
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
const __TURBOPACK__default__export__ = nodeUtil;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isTypedArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsTypedArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-client] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsTypedArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodeIsTypedArray) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseTimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseTimes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArguments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArguments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isIndex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isTypedArray.js [app-client] (ecmascript)");
;
;
;
;
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), isArg = !isArr && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArguments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), isBuff = !isArr && !isArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), isType = !isArr && !isArg && !isBuff && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseTimes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value.length, String) : [], length = result.length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = arrayLikeKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used for built-in method references. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
const __TURBOPACK__default__export__ = isPrototype;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-client] (ecmascript)");
;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.keys, Object);
const __TURBOPACK__default__export__ = nativeKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeys.js [app-client] (ecmascript)");
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = baseKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-client] (ecmascript)");
;
;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value.length) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = isArrayLike;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-client] (ecmascript)");
;
;
;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
}
const __TURBOPACK__default__export__ = keys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssign.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-client] (ecmascript)");
;
;
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = baseAssign;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeysIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
        for(var key in Object(object)){
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = nativeKeysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeysIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeysIn.js [app-client] (ecmascript)");
;
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
    }
    var isProto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object), result = [];
    for(var key in object){
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = baseKeysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeysIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-client] (ecmascript)");
;
;
;
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
}
const __TURBOPACK__default__export__ = keysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-client] (ecmascript)");
;
;
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = baseAssignIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
;
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
        return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
const __TURBOPACK__default__export__ = cloneBuffer;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length){
        array[index] = source[index];
    }
    return array;
}
const __TURBOPACK__default__export__ = copyArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayFilter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = arrayFilter;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function stubArray() {
    return [];
}
const __TURBOPACK__default__export__ = stubArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-client] (ecmascript)");
;
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : function(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
const __TURBOPACK__default__export__ = getSymbols;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbols.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-client] (ecmascript)");
;
;
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = copySymbols;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
const __TURBOPACK__default__export__ = arrayPush;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-client] (ecmascript)");
;
;
;
;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : function(object) {
    var result = [];
    while(object){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(result, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object));
        object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
    }
    return result;
};
const __TURBOPACK__default__export__ = getSymbolsIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbolsIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-client] (ecmascript)");
;
;
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = copySymbolsIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)");
;
;
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object) ? result : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(result, symbolsFunc(object));
}
const __TURBOPACK__default__export__ = baseGetAllKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeys.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-client] (ecmascript)");
;
;
;
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
const __TURBOPACK__default__export__ = getAllKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeysIn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-client] (ecmascript)");
;
;
;
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
const __TURBOPACK__default__export__ = getAllKeysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_DataView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var DataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'DataView');
const __TURBOPACK__default__export__ = DataView;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Promise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'Promise');
const __TURBOPACK__default__export__ = Promise;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Set.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'Set');
const __TURBOPACK__default__export__ = Set;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_WeakMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var WeakMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], 'WeakMap');
const __TURBOPACK__default__export__ = WeakMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_DataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Promise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_WeakMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), mapCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), promiseCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), setCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), weakMapCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](new ArrayBuffer(1))) != dataViewTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) != mapTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && getTag(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolve()) != promiseTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) != setTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) != weakMapTag) {
    getTag = function(value) {
        var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Ctor) : '';
        if (ctorString) {
            switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}
const __TURBOPACK__default__export__ = getTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used for built-in method references. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
const __TURBOPACK__default__export__ = initCloneArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Uint8Array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-client] (ecmascript)");
;
/** Built-in value references. */ var Uint8Array = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Uint8Array;
const __TURBOPACK__default__export__ = Uint8Array;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Uint8Array.js [app-client] (ecmascript)");
;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](result).set(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](arrayBuffer));
    return result;
}
const __TURBOPACK__default__export__ = cloneArrayBuffer;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneDataView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-client] (ecmascript)");
;
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
const __TURBOPACK__default__export__ = cloneDataView;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneRegExp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Used to match `RegExp` flags from their coerced string values. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
const __TURBOPACK__default__export__ = cloneRegExp;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneSymbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-client] (ecmascript)");
;
/** Used to convert symbols to primitives and strings. */ var symbolProto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
const __TURBOPACK__default__export__ = cloneSymbol;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneTypedArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-client] (ecmascript)");
;
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
const __TURBOPACK__default__export__ = cloneTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneByTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneDataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneRegExp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneSymbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneTypedArray.js [app-client] (ecmascript)");
;
;
;
;
;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneDataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneTypedArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneRegExp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object);
    }
}
const __TURBOPACK__default__export__ = initCloneByTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseCreate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)");
;
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(proto)) {
            return {};
        }
        if (objectCreate) {
            return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
const __TURBOPACK__default__export__ = baseCreate;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseCreate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-client] (ecmascript)");
;
;
;
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == 'function' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseCreate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(object)) : {};
}
const __TURBOPACK__default__export__ = initCloneObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
/** `Object#toString` result references. */ var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) == mapTag;
}
const __TURBOPACK__default__export__ = baseIsMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-client] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsMap = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodeIsMap) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
/** `Object#toString` result references. */ var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) == setTag;
}
const __TURBOPACK__default__export__ = baseIsSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsSet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-client] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsSet = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(nodeIsSet) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayEach.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssign.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbols.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbolsIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeysIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneByTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneByTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return value;
    }
    var isArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    if (isArr) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
        if (!isDeep) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, result);
        }
    } else {
        var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value), isFunc = tag == funcTag || tag == genTag;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
            if (!isDeep) {
                return isFlat ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbolsIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(result, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbols$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(result, value));
            }
        } else {
            if (!cloneableTags[tag]) {
                return object ? value : {};
            }
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneByTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        value.forEach(function(subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
    }
    var keysFunc = isFull ? isFlat ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : isFlat ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    var props = isArr ? undefined : keysFunc(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayEach$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
const __TURBOPACK__default__export__ = baseClone;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/cloneDeep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-client] (ecmascript)");
;
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const __TURBOPACK__default__export__ = cloneDeep;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/react-fast-compare/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';
function equal(a, b) {
    // fast-deep-equal index.js 2.0.1
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = isArray(a), arrB = isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (arrA != arrB) return false;
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();
        var keys = keyList(a);
        length = keys.length;
        if (length !== keyList(b).length) return false;
        for(i = length; i-- !== 0;)if (!hasProp.call(b, keys[i])) return false;
        // end fast-deep-equal
        // start react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element && b instanceof Element) return a === b;
        // custom handling for React
        for(i = length; i-- !== 0;){
            key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            } else {
                // all other properties should be traversed as usual
                if (!equal(a[key], b[key])) return false;
            }
        }
        // end react-fast-compare
        // fast-deep-equal index.js 2.0.1
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function exportedEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};
}),
"[project]/Desktop/school-AI/school-ai/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isProduction = ("TURBOPACK compile-time value", "development") === 'production';
function warning(condition, message) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (condition) {
            return;
        }
        var text = "Warning: " + message;
        if (typeof console !== 'undefined') {
            console.warn(text);
        }
        try {
            throw Error(text);
        } catch (x) {}
    }
}
const __TURBOPACK__default__export__ = warning;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/clone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-client] (ecmascript)");
;
/** Used to compose bitmasks for cloning. */ var CLONE_SYMBOLS_FLAG = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */ function clone(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, CLONE_SYMBOLS_FLAG);
}
const __TURBOPACK__default__export__ = clone;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
const __TURBOPACK__default__export__ = arrayMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-client] (ecmascript)");
;
;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) == symbolTag;
}
const __TURBOPACK__default__export__ = isSymbol;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/memoize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-client] (ecmascript)");
;
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = memoize;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_memoizeCapped.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/memoize.js [app-client] (ecmascript)");
;
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
        }
        return key;
    });
    var cache = result.cache;
    return result;
}
const __TURBOPACK__default__export__ = memoizeCapped;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stringToPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_memoizeCapped$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_memoizeCapped.js [app-client] (ecmascript)");
;
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_memoizeCapped$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) {
        result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
const __TURBOPACK__default__export__ = stringToPath;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-client] (ecmascript)");
;
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
const __TURBOPACK__default__export__ = toKey;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseToString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-client] (ecmascript)");
;
;
;
;
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, baseToString) + '';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
const __TURBOPACK__default__export__ = baseToString;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toString.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseToString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseToString.js [app-client] (ecmascript)");
;
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseToString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = toString;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stringToPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stringToPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toString.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */ function toPath(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value) ? [
        value
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stringToPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)));
}
const __TURBOPACK__default__export__ = toPath;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/react-is/index.js [app-client] (ecmascript)");
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for(var i = 0; i < keys.length; ++i){
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
module.exports = hoistNonReactStatics;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorMessage",
    ()=>ErrorMessage,
    "FastField",
    ()=>FastField,
    "Field",
    ()=>Field,
    "FieldArray",
    ()=>FieldArray,
    "Form",
    ()=>Form,
    "Formik",
    ()=>Formik,
    "FormikConsumer",
    ()=>FormikConsumer,
    "FormikContext",
    ()=>FormikContext,
    "FormikProvider",
    ()=>FormikProvider,
    "connect",
    ()=>connect,
    "getActiveElement",
    ()=>getActiveElement,
    "getIn",
    ()=>getIn,
    "insert",
    ()=>insert,
    "isEmptyArray",
    ()=>isEmptyArray,
    "isEmptyChildren",
    ()=>isEmptyChildren,
    "isFunction",
    ()=>isFunction,
    "isInputEvent",
    ()=>isInputEvent,
    "isInteger",
    ()=>isInteger,
    "isNaN",
    ()=>isNaN$1,
    "isObject",
    ()=>isObject,
    "isPromise",
    ()=>isPromise,
    "isString",
    ()=>isString,
    "move",
    ()=>move,
    "prepareDataForValidation",
    ()=>prepareDataForValidation,
    "replace",
    ()=>replace,
    "setIn",
    ()=>setIn,
    "setNestedObjectValues",
    ()=>setNestedObjectValues,
    "swap",
    ()=>swap,
    "useField",
    ()=>useField,
    "useFormik",
    ()=>useFormik,
    "useFormikContext",
    ()=>useFormikContext,
    "validateYupSchema",
    ()=>validateYupSchema,
    "withFormik",
    ()=>withFormik,
    "yupToFormErrors",
    ()=>yupToFormErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/deepmerge/dist/es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isPlainObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/cloneDeep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/react-fast-compare/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
var FormikContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
    var formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormikContext);
    !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : "TURBOPACK unreachable" : void 0;
    return formik;
}
/** @private is the value an empty array? */ var isEmptyArray = function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */ var isFunction = function isFunction(obj) {
    return typeof obj === 'function';
};
/** @private is the given object an Object? */ var isObject = function isObject(obj) {
    return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */ var isInteger = function isInteger(obj) {
    return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */ var isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */ // eslint-disable-next-line no-self-compare
var isNaN$1 = function isNaN1(obj) {
    return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */ var isEmptyChildren = function isEmptyChildren(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
};
/** @private is the given object/value a promise? */ var isPromise = function isPromise(value) {
    return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */ var isInputEvent = function isInputEvent(value) {
    return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */ function getActiveElement(doc) {
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
        return null;
    }
    try {
        return doc.activeElement || doc.body;
    } catch (e) {
        return doc.body;
    }
}
/**
 * Deeply get a value from an object via its path.
 */ function getIn(obj, key, def, p) {
    if (p === void 0) {
        p = 0;
    }
    var path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(key);
    while(obj && p < path.length){
        obj = obj[path[p++]];
    } // check if path is not in the end
    if (p !== path.length && !obj) {
        return def;
    }
    return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */ function setIn(obj, path, value) {
    var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(obj); // this keeps inheritance when obj is a class
    var resVal = res;
    var i = 0;
    var pathArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(path);
    for(; i < pathArray.length - 1; i++){
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentObj);
        } else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    } // Return original object if new value is the same as current
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    } else {
        resVal[pathArray[i]] = value;
    } // If the path array has a single element, the loop did not run.
    // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
    if (i === 0 && value === undefined) {
        delete res[pathArray[i]];
    }
    return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */ function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) {
        visited = new WeakMap();
    }
    if (response === void 0) {
        response = {};
    }
    for(var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++){
        var k = _Object$keys[_i];
        var val = object[k];
        if (isObject(val)) {
            if (!visited.get(val)) {
                visited.set(val, true); // In order to keep array values consistent for both dot path  and
                // bracket syntax, we need to check if this is an array so that
                // this will output  { friends: [true] } and not { friends: { "0": true } }
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        } else {
            response[k] = value;
        }
    }
    return response;
}
function formikReducer(state, msg) {
    switch(msg.type){
        case 'SET_VALUES':
            return _extends({}, state, {
                values: msg.payload
            });
        case 'SET_TOUCHED':
            return _extends({}, state, {
                touched: msg.payload
            });
        case 'SET_ERRORS':
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.errors, msg.payload)) {
                return state;
            }
            return _extends({}, state, {
                errors: msg.payload
            });
        case 'SET_STATUS':
            return _extends({}, state, {
                status: msg.payload
            });
        case 'SET_ISSUBMITTING':
            return _extends({}, state, {
                isSubmitting: msg.payload
            });
        case 'SET_ISVALIDATING':
            return _extends({}, state, {
                isValidating: msg.payload
            });
        case 'SET_FIELD_VALUE':
            return _extends({}, state, {
                values: setIn(state.values, msg.payload.field, msg.payload.value)
            });
        case 'SET_FIELD_TOUCHED':
            return _extends({}, state, {
                touched: setIn(state.touched, msg.payload.field, msg.payload.value)
            });
        case 'SET_FIELD_ERROR':
            return _extends({}, state, {
                errors: setIn(state.errors, msg.payload.field, msg.payload.value)
            });
        case 'RESET_FORM':
            return _extends({}, state, msg.payload);
        case 'SET_FORMIK_STATE':
            return msg.payload(state);
        case 'SUBMIT_ATTEMPT':
            return _extends({}, state, {
                touched: setNestedObjectValues(state.values, true),
                isSubmitting: true,
                submitCount: state.submitCount + 1
            });
        case 'SUBMIT_FAILURE':
            return _extends({}, state, {
                isSubmitting: false
            });
        case 'SUBMIT_SUCCESS':
            return _extends({}, state, {
                isSubmitting: false
            });
        default:
            return state;
    }
} // Initial empty states // objects
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
    var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose(_ref, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit"
    ]);
    var props = _extends({
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnBlur,
        validateOnMount: validateOnMount,
        onSubmit: onSubmit
    }, rest);
    var initialValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.initialValues);
    var initialErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.initialErrors || emptyErrors);
    var initialTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.initialTouched || emptyTouched);
    var initialStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.initialStatus);
    var isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var fieldRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "useFormik.useEffect": function() {
                !(typeof isInitialValid === 'undefined') ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
            }
        }["useFormik.useEffect"], []);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            isMounted.current = true;
            return ({
                "useFormik.useEffect": function() {
                    isMounted.current = false;
                }
            })["useFormik.useEffect"];
        }
    }["useFormik.useEffect"], []);
    var _React$useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), setIteration = _React$useState[1];
    var stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.initialValues),
        errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.initialErrors) || emptyErrors,
        touched: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.initialTouched) || emptyTouched,
        status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.initialStatus),
        isSubmitting: false,
        isValidating: false,
        submitCount: 0
    });
    var state = stateRef.current;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[dispatch]": function(action) {
            var prev = stateRef.current;
            stateRef.current = formikReducer(prev, action); // force rerender
            if (prev !== stateRef.current) setIteration({
                "useFormik.useCallback[dispatch]": function(x) {
                    return x + 1;
                }
            }["useFormik.useCallback[dispatch]"]);
        }
    }["useFormik.useCallback[dispatch]"], []);
    var runValidateHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[runValidateHandler]": function(values, field) {
            return new Promise({
                "useFormik.useCallback[runValidateHandler]": function(resolve, reject) {
                    var maybePromisedErrors = props.validate(values, field);
                    if (maybePromisedErrors == null) {
                        // use loose null check here on purpose
                        resolve(emptyErrors);
                    } else if (isPromise(maybePromisedErrors)) {
                        maybePromisedErrors.then({
                            "useFormik.useCallback[runValidateHandler]": function(errors) {
                                resolve(errors || emptyErrors);
                            }
                        }["useFormik.useCallback[runValidateHandler]"], {
                            "useFormik.useCallback[runValidateHandler]": function(actualException) {
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
                                }
                                reject(actualException);
                            }
                        }["useFormik.useCallback[runValidateHandler]"]);
                    } else {
                        resolve(maybePromisedErrors);
                    }
                }
            }["useFormik.useCallback[runValidateHandler]"]);
        }
    }["useFormik.useCallback[runValidateHandler]"], [
        props.validate
    ]);
    /**
   * Run validation against a Yup schema and optionally run a function if successful
   */ var runValidationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[runValidationSchema]": function(values, field) {
            var validationSchema = props.validationSchema;
            var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
            var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
            return new Promise({
                "useFormik.useCallback[runValidationSchema]": function(resolve, reject) {
                    promise.then({
                        "useFormik.useCallback[runValidationSchema]": function() {
                            resolve(emptyErrors);
                        }
                    }["useFormik.useCallback[runValidationSchema]"], {
                        "useFormik.useCallback[runValidationSchema]": function(err) {
                            // Yup will throw a validation error if validation fails. We catch those and
                            // resolve them into Formik errors. We can sniff if something is a Yup error
                            // by checking error.name.
                            // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
                            if (err.name === 'ValidationError') {
                                resolve(yupToFormErrors(err));
                            } else {
                                // We throw any other errors
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
                                }
                                reject(err);
                            }
                        }
                    }["useFormik.useCallback[runValidationSchema]"]);
                }
            }["useFormik.useCallback[runValidationSchema]"]);
        }
    }["useFormik.useCallback[runValidationSchema]"], [
        props.validationSchema
    ]);
    var runSingleFieldLevelValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[runSingleFieldLevelValidation]": function(field, value) {
            return new Promise({
                "useFormik.useCallback[runSingleFieldLevelValidation]": function(resolve) {
                    return resolve(fieldRegistry.current[field].validate(value));
                }
            }["useFormik.useCallback[runSingleFieldLevelValidation]"]);
        }
    }["useFormik.useCallback[runSingleFieldLevelValidation]"], []);
    var runFieldLevelValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[runFieldLevelValidations]": function(values) {
            var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter({
                "useFormik.useCallback[runFieldLevelValidations].fieldKeysWithValidation": function(f) {
                    return isFunction(fieldRegistry.current[f].validate);
                }
            }["useFormik.useCallback[runFieldLevelValidations].fieldKeysWithValidation"]); // Construct an array with all of the field validation functions
            var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map({
                "useFormik.useCallback[runFieldLevelValidations]": function(f) {
                    return runSingleFieldLevelValidation(f, getIn(values, f));
                }
            }["useFormik.useCallback[runFieldLevelValidations]"]) : [
                Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')
            ]; // use special case ;)
            return Promise.all(fieldValidations).then({
                "useFormik.useCallback[runFieldLevelValidations]": function(fieldErrorsList) {
                    return fieldErrorsList.reduce({
                        "useFormik.useCallback[runFieldLevelValidations]": function(prev, curr, index) {
                            if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                                return prev;
                            }
                            if (curr) {
                                prev = setIn(prev, fieldKeysWithValidation[index], curr);
                            }
                            return prev;
                        }
                    }["useFormik.useCallback[runFieldLevelValidations]"], {});
                }
            }["useFormik.useCallback[runFieldLevelValidations]"]);
        }
    }["useFormik.useCallback[runFieldLevelValidations]"], [
        runSingleFieldLevelValidation
    ]); // Run all validations and return the result
    var runAllValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[runAllValidations]": function(values) {
            return Promise.all([
                runFieldLevelValidations(values),
                props.validationSchema ? runValidationSchema(values) : {},
                props.validate ? runValidateHandler(values) : {}
            ]).then({
                "useFormik.useCallback[runAllValidations]": function(_ref2) {
                    var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
                    var combinedErrors = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].all([
                        fieldErrors,
                        schemaErrors,
                        validateErrors
                    ], {
                        arrayMerge: arrayMerge
                    });
                    return combinedErrors;
                }
            }["useFormik.useCallback[runAllValidations]"]);
        }
    }["useFormik.useCallback[runAllValidations]"], [
        props.validate,
        props.validationSchema,
        runFieldLevelValidations,
        runValidateHandler,
        runValidationSchema
    ]); // Run all validations methods and update state accordingly
    var validateFormWithHighPriority = useEventCallback({
        "useFormik.useEventCallback[validateFormWithHighPriority]": function(values) {
            if (values === void 0) {
                values = state.values;
            }
            dispatch({
                type: 'SET_ISVALIDATING',
                payload: true
            });
            return runAllValidations(values).then({
                "useFormik.useEventCallback[validateFormWithHighPriority]": function(combinedErrors) {
                    if (!!isMounted.current) {
                        dispatch({
                            type: 'SET_ISVALIDATING',
                            payload: false
                        });
                        dispatch({
                            type: 'SET_ERRORS',
                            payload: combinedErrors
                        });
                    }
                    return combinedErrors;
                }
            }["useFormik.useEventCallback[validateFormWithHighPriority]"]);
        }
    }["useFormik.useEventCallback[validateFormWithHighPriority]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            if (validateOnMount && isMounted.current === true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
                validateFormWithHighPriority(initialValues.current);
            }
        }
    }["useFormik.useEffect"], [
        validateOnMount,
        validateFormWithHighPriority
    ]);
    var resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[resetForm]": function(nextState) {
            var values = nextState && nextState.values ? nextState.values : initialValues.current;
            var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
            var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
            var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
            initialValues.current = values;
            initialErrors.current = errors;
            initialTouched.current = touched;
            initialStatus.current = status;
            var dispatchFn = function dispatchFn() {
                dispatch({
                    type: 'RESET_FORM',
                    payload: {
                        isSubmitting: !!nextState && !!nextState.isSubmitting,
                        errors: errors,
                        touched: touched,
                        status: status,
                        values: values,
                        isValidating: !!nextState && !!nextState.isValidating,
                        submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
                    }
                });
            };
            if (props.onReset) {
                var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
                if (isPromise(maybePromisedOnReset)) {
                    maybePromisedOnReset.then(dispatchFn);
                } else {
                    dispatchFn();
                }
            } else {
                dispatchFn();
            }
        }
    }["useFormik.useCallback[resetForm]"], [
        props.initialErrors,
        props.initialStatus,
        props.initialTouched,
        props.onReset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            if (isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
                if (enableReinitialize) {
                    initialValues.current = props.initialValues;
                    resetForm();
                    if (validateOnMount) {
                        validateFormWithHighPriority(initialValues.current);
                    }
                }
            }
        }
    }["useFormik.useEffect"], [
        enableReinitialize,
        props.initialValues,
        resetForm,
        validateOnMount,
        validateFormWithHighPriority
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialErrors.current, props.initialErrors)) {
                initialErrors.current = props.initialErrors || emptyErrors;
                dispatch({
                    type: 'SET_ERRORS',
                    payload: props.initialErrors || emptyErrors
                });
            }
        }
    }["useFormik.useEffect"], [
        enableReinitialize,
        props.initialErrors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialTouched.current, props.initialTouched)) {
                initialTouched.current = props.initialTouched || emptyTouched;
                dispatch({
                    type: 'SET_TOUCHED',
                    payload: props.initialTouched || emptyTouched
                });
            }
        }
    }["useFormik.useEffect"], [
        enableReinitialize,
        props.initialTouched
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormik.useEffect": function() {
            if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialStatus.current, props.initialStatus)) {
                initialStatus.current = props.initialStatus;
                dispatch({
                    type: 'SET_STATUS',
                    payload: props.initialStatus
                });
            }
        }
    }["useFormik.useEffect"], [
        enableReinitialize,
        props.initialStatus,
        props.initialTouched
    ]);
    var validateField = useEventCallback({
        "useFormik.useEventCallback[validateField]": function(name) {
            // This will efficiently validate a single field by avoiding state
            // changes if the validation function is synchronous. It's different from
            // what is called when using validateForm.
            if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
                var value = getIn(state.values, name);
                var maybePromise = fieldRegistry.current[name].validate(value);
                if (isPromise(maybePromise)) {
                    // Only flip isValidating if the function is async.
                    dispatch({
                        type: 'SET_ISVALIDATING',
                        payload: true
                    });
                    return maybePromise.then({
                        "useFormik.useEventCallback[validateField]": function(x) {
                            return x;
                        }
                    }["useFormik.useEventCallback[validateField]"]).then({
                        "useFormik.useEventCallback[validateField]": function(error) {
                            dispatch({
                                type: 'SET_FIELD_ERROR',
                                payload: {
                                    field: name,
                                    value: error
                                }
                            });
                            dispatch({
                                type: 'SET_ISVALIDATING',
                                payload: false
                            });
                        }
                    }["useFormik.useEventCallback[validateField]"]);
                } else {
                    dispatch({
                        type: 'SET_FIELD_ERROR',
                        payload: {
                            field: name,
                            value: maybePromise
                        }
                    });
                    return Promise.resolve(maybePromise);
                }
            } else if (props.validationSchema) {
                dispatch({
                    type: 'SET_ISVALIDATING',
                    payload: true
                });
                return runValidationSchema(state.values, name).then({
                    "useFormik.useEventCallback[validateField]": function(x) {
                        return x;
                    }
                }["useFormik.useEventCallback[validateField]"]).then({
                    "useFormik.useEventCallback[validateField]": function(error) {
                        dispatch({
                            type: 'SET_FIELD_ERROR',
                            payload: {
                                field: name,
                                value: getIn(error, name)
                            }
                        });
                        dispatch({
                            type: 'SET_ISVALIDATING',
                            payload: false
                        });
                    }
                }["useFormik.useEventCallback[validateField]"]);
            }
            return Promise.resolve();
        }
    }["useFormik.useEventCallback[validateField]"]);
    var registerField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[registerField]": function(name, _ref3) {
            var validate = _ref3.validate;
            fieldRegistry.current[name] = {
                validate: validate
            };
        }
    }["useFormik.useCallback[registerField]"], []);
    var unregisterField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[unregisterField]": function(name) {
            delete fieldRegistry.current[name];
        }
    }["useFormik.useCallback[unregisterField]"], []);
    var setTouched = useEventCallback({
        "useFormik.useEventCallback[setTouched]": function(touched, shouldValidate) {
            dispatch({
                type: 'SET_TOUCHED',
                payload: touched
            });
            var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
            return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
        }
    }["useFormik.useEventCallback[setTouched]"]);
    var setErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[setErrors]": function(errors) {
            dispatch({
                type: 'SET_ERRORS',
                payload: errors
            });
        }
    }["useFormik.useCallback[setErrors]"], []);
    var setValues = useEventCallback({
        "useFormik.useEventCallback[setValues]": function(values, shouldValidate) {
            var resolvedValues = isFunction(values) ? values(state.values) : values;
            dispatch({
                type: 'SET_VALUES',
                payload: resolvedValues
            });
            var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
            return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
        }
    }["useFormik.useEventCallback[setValues]"]);
    var setFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[setFieldError]": function(field, value) {
            dispatch({
                type: 'SET_FIELD_ERROR',
                payload: {
                    field: field,
                    value: value
                }
            });
        }
    }["useFormik.useCallback[setFieldError]"], []);
    var setFieldValue = useEventCallback({
        "useFormik.useEventCallback[setFieldValue]": function(field, value, shouldValidate) {
            dispatch({
                type: 'SET_FIELD_VALUE',
                payload: {
                    field: field,
                    value: value
                }
            });
            var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
            return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
        }
    }["useFormik.useEventCallback[setFieldValue]"]);
    var executeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[executeChange]": function(eventOrTextValue, maybePath) {
            // By default, assume that the first argument is a string. This allows us to use
            // handleChange with React Native and React Native Web's onChangeText prop which
            // provides just the value of the input.
            var field = maybePath;
            var val = eventOrTextValue;
            var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
            // so we handle like we would a normal HTML change event.
            if (!isString(eventOrTextValue)) {
                // If we can, persist the event
                // @see https://reactjs.org/docs/events.html#event-pooling
                if (eventOrTextValue.persist) {
                    eventOrTextValue.persist();
                }
                var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
                var type = target.type, name = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
                field = maybePath ? maybePath : name ? name : id;
                if (!field && ("TURBOPACK compile-time value", "development") !== "production") {
                    warnAboutMissingIdentifier({
                        htmlContent: outerHTML,
                        documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                        handlerName: 'handleChange'
                    });
                }
                val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
                 ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
                 ? getSelectedValues(options) : value;
            }
            if (field) {
                // Set form fields by name
                setFieldValue(field, val);
            }
        }
    }["useFormik.useCallback[executeChange]"], [
        setFieldValue,
        state.values
    ]);
    var handleChange = useEventCallback({
        "useFormik.useEventCallback[handleChange]": function(eventOrPath) {
            if (isString(eventOrPath)) {
                return ({
                    "useFormik.useEventCallback[handleChange]": function(event) {
                        return executeChange(event, eventOrPath);
                    }
                })["useFormik.useEventCallback[handleChange]"];
            } else {
                executeChange(eventOrPath);
            }
        }
    }["useFormik.useEventCallback[handleChange]"]);
    var setFieldTouched = useEventCallback({
        "useFormik.useEventCallback[setFieldTouched]": function(field, touched, shouldValidate) {
            if (touched === void 0) {
                touched = true;
            }
            dispatch({
                type: 'SET_FIELD_TOUCHED',
                payload: {
                    field: field,
                    value: touched
                }
            });
            var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
            return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
        }
    }["useFormik.useEventCallback[setFieldTouched]"]);
    var executeBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[executeBlur]": function(e, path) {
            if (e.persist) {
                e.persist();
            }
            var _e$target = e.target, name = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
            var field = path ? path : name ? name : id;
            if (!field && ("TURBOPACK compile-time value", "development") !== "production") {
                warnAboutMissingIdentifier({
                    htmlContent: outerHTML,
                    documentationAnchorLink: 'handleblur-e-any--void',
                    handlerName: 'handleBlur'
                });
            }
            setFieldTouched(field, true);
        }
    }["useFormik.useCallback[executeBlur]"], [
        setFieldTouched
    ]);
    var handleBlur = useEventCallback({
        "useFormik.useEventCallback[handleBlur]": function(eventOrString) {
            if (isString(eventOrString)) {
                return ({
                    "useFormik.useEventCallback[handleBlur]": function(event) {
                        return executeBlur(event, eventOrString);
                    }
                })["useFormik.useEventCallback[handleBlur]"];
            } else {
                executeBlur(eventOrString);
            }
        }
    }["useFormik.useEventCallback[handleBlur]"]);
    var setFormikState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[setFormikState]": function(stateOrCb) {
            if (isFunction(stateOrCb)) {
                dispatch({
                    type: 'SET_FORMIK_STATE',
                    payload: stateOrCb
                });
            } else {
                dispatch({
                    type: 'SET_FORMIK_STATE',
                    payload: function payload() {
                        return stateOrCb;
                    }
                });
            }
        }
    }["useFormik.useCallback[setFormikState]"], []);
    var setStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[setStatus]": function(status) {
            dispatch({
                type: 'SET_STATUS',
                payload: status
            });
        }
    }["useFormik.useCallback[setStatus]"], []);
    var setSubmitting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[setSubmitting]": function(isSubmitting) {
            dispatch({
                type: 'SET_ISSUBMITTING',
                payload: isSubmitting
            });
        }
    }["useFormik.useCallback[setSubmitting]"], []);
    var submitForm = useEventCallback({
        "useFormik.useEventCallback[submitForm]": function() {
            dispatch({
                type: 'SUBMIT_ATTEMPT'
            });
            return validateFormWithHighPriority().then({
                "useFormik.useEventCallback[submitForm]": function(combinedErrors) {
                    // In case an error was thrown and passed to the resolved Promise,
                    // `combinedErrors` can be an instance of an Error. We need to check
                    // that and abort the submit.
                    // If we don't do that, calling `Object.keys(new Error())` yields an
                    // empty array, which causes the validation to pass and the form
                    // to be submitted.
                    var isInstanceOfError = combinedErrors instanceof Error;
                    var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
                    if (isActuallyValid) {
                        // Proceed with submit...
                        //
                        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
                        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
                        // This would be fine in simple cases, but make it impossible to disable submit
                        // buttons where people use callbacks or promises as side effects (which is basically
                        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
                        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
                        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
                        // cleanup of isSubmitting on behalf of the consumer.
                        var promiseOrUndefined;
                        try {
                            promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
                            // via setSubmitting(false)
                            if (promiseOrUndefined === undefined) {
                                return;
                            }
                        } catch (error) {
                            throw error;
                        }
                        return Promise.resolve(promiseOrUndefined).then({
                            "useFormik.useEventCallback[submitForm]": function(result) {
                                if (!!isMounted.current) {
                                    dispatch({
                                        type: 'SUBMIT_SUCCESS'
                                    });
                                }
                                return result;
                            }
                        }["useFormik.useEventCallback[submitForm]"])["catch"]({
                            "useFormik.useEventCallback[submitForm]": function(_errors) {
                                if (!!isMounted.current) {
                                    dispatch({
                                        type: 'SUBMIT_FAILURE'
                                    }); // This is a legit error rejected by the onSubmit fn
                                    // so we don't want to break the promise chain
                                    throw _errors;
                                }
                            }
                        }["useFormik.useEventCallback[submitForm]"]);
                    } else if (!!isMounted.current) {
                        // ^^^ Make sure Formik is still mounted before updating state
                        dispatch({
                            type: 'SUBMIT_FAILURE'
                        }); // throw combinedErrors;
                        if (isInstanceOfError) {
                            throw combinedErrors;
                        }
                    }
                    return;
                }
            }["useFormik.useEventCallback[submitForm]"]);
        }
    }["useFormik.useEventCallback[submitForm]"]);
    var handleSubmit = useEventCallback({
        "useFormik.useEventCallback[handleSubmit]": function(e) {
            if (e && e.preventDefault && isFunction(e.preventDefault)) {
                e.preventDefault();
            }
            if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
                e.stopPropagation();
            } // Warn if form submission is triggered by a <button> without a
            // specified `type` attribute during development. This mitigates
            // a common gotcha in forms with both reset and submit buttons,
            // where the dev forgets to add type="button" to the reset button.
            if (("TURBOPACK compile-time value", "development") !== "production" && typeof document !== 'undefined') {
                // Safely get the active element (works with IE)
                var activeElement = getActiveElement();
                if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
                    !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : "TURBOPACK unreachable" : void 0;
                }
            }
            submitForm()["catch"]({
                "useFormik.useEventCallback[handleSubmit]": function(reason) {
                    console.warn("Warning: An unhandled error was caught from submitForm()", reason);
                }
            }["useFormik.useEventCallback[handleSubmit]"]);
        }
    }["useFormik.useEventCallback[handleSubmit]"]);
    var imperativeMethods = {
        resetForm: resetForm,
        validateForm: validateFormWithHighPriority,
        validateField: validateField,
        setErrors: setErrors,
        setFieldError: setFieldError,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setStatus: setStatus,
        setSubmitting: setSubmitting,
        setTouched: setTouched,
        setValues: setValues,
        setFormikState: setFormikState,
        submitForm: submitForm
    };
    var executeSubmit = useEventCallback({
        "useFormik.useEventCallback[executeSubmit]": function() {
            return onSubmit(state.values, imperativeMethods);
        }
    }["useFormik.useEventCallback[executeSubmit]"]);
    var handleReset = useEventCallback({
        "useFormik.useEventCallback[handleReset]": function(e) {
            if (e && e.preventDefault && isFunction(e.preventDefault)) {
                e.preventDefault();
            }
            if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
                e.stopPropagation();
            }
            resetForm();
        }
    }["useFormik.useEventCallback[handleReset]"]);
    var getFieldMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[getFieldMeta]": function(name) {
            return {
                value: getIn(state.values, name),
                error: getIn(state.errors, name),
                touched: !!getIn(state.touched, name),
                initialValue: getIn(initialValues.current, name),
                initialTouched: !!getIn(initialTouched.current, name),
                initialError: getIn(initialErrors.current, name)
            };
        }
    }["useFormik.useCallback[getFieldMeta]"], [
        state.errors,
        state.touched,
        state.values
    ]);
    var getFieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[getFieldHelpers]": function(name) {
            return {
                setValue: function setValue(value, shouldValidate) {
                    return setFieldValue(name, value, shouldValidate);
                },
                setTouched: function setTouched(value, shouldValidate) {
                    return setFieldTouched(name, value, shouldValidate);
                },
                setError: function setError(value) {
                    return setFieldError(name, value);
                }
            };
        }
    }["useFormik.useCallback[getFieldHelpers]"], [
        setFieldValue,
        setFieldTouched,
        setFieldError
    ]);
    var getFieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormik.useCallback[getFieldProps]": function(nameOrOptions) {
            var isAnObject = isObject(nameOrOptions);
            var name = isAnObject ? nameOrOptions.name : nameOrOptions;
            var valueState = getIn(state.values, name);
            var field = {
                name: name,
                value: valueState,
                onChange: handleChange,
                onBlur: handleBlur
            };
            if (isAnObject) {
                var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
                if (type === 'checkbox') {
                    if (valueProp === undefined) {
                        field.checked = !!valueState;
                    } else {
                        field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
                        field.value = valueProp;
                    }
                } else if (type === 'radio') {
                    field.checked = valueState === valueProp;
                    field.value = valueProp;
                } else if (is === 'select' && multiple) {
                    field.value = field.value || [];
                    field.multiple = true;
                }
            }
            return field;
        }
    }["useFormik.useCallback[getFieldProps]"], [
        handleBlur,
        handleChange,
        state.values
    ]);
    var dirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFormik.useMemo[dirty]": function() {
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(initialValues.current, state.values);
        }
    }["useFormik.useMemo[dirty]"], [
        initialValues.current,
        state.values
    ]);
    var isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFormik.useMemo[isValid]": function() {
            return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
        }
    }["useFormik.useMemo[isValid]"], [
        isInitialValid,
        dirty,
        state.errors,
        props
    ]);
    var ctx = _extends({}, state, {
        initialValues: initialValues.current,
        initialErrors: initialErrors.current,
        initialTouched: initialTouched.current,
        initialStatus: initialStatus.current,
        handleBlur: handleBlur,
        handleChange: handleChange,
        handleReset: handleReset,
        handleSubmit: handleSubmit,
        resetForm: resetForm,
        setErrors: setErrors,
        setFormikState: setFormikState,
        setFieldTouched: setFieldTouched,
        setFieldValue: setFieldValue,
        setFieldError: setFieldError,
        setStatus: setStatus,
        setSubmitting: setSubmitting,
        setTouched: setTouched,
        setValues: setValues,
        submitForm: submitForm,
        validateForm: validateFormWithHighPriority,
        validateField: validateField,
        isValid: isValid,
        dirty: dirty,
        unregisterField: unregisterField,
        registerField: registerField,
        getFieldProps: getFieldProps,
        getFieldMeta: getFieldMeta,
        getFieldHelpers: getFieldHelpers,
        validateOnBlur: validateOnBlur,
        validateOnChange: validateOnChange,
        validateOnMount: validateOnMount
    });
    return ctx;
}
function Formik(props) {
    var formikbag = useFormik(props);
    var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(innerRef, {
        "Formik.useImperativeHandle": function() {
            return formikbag;
        }
    }["Formik.useImperativeHandle"]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Formik.useEffect": function() {
                !!props.render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
            }
        }["Formik.useEffect"], []);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(FormikProvider, {
        value: formikbag
    }, component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, formikbag) : render ? render(formikbag) : children // children come last, always called
     ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
    var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
    console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */ function yupToFormErrors(yupError) {
    var errors = {};
    if (yupError.inner) {
        if (yupError.inner.length === 0) {
            return setIn(errors, yupError.path, yupError.message);
        }
        for(var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;){
            var _ref5;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref5 = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref5 = _i.value;
            }
            var err = _ref5;
            if (!getIn(errors, err.path)) {
                errors = setIn(errors, err.path, err.message);
            }
        }
    }
    return errors;
}
/**
 * Validate a yup schema.
 */ function validateYupSchema(values, schema, sync, context) {
    if (sync === void 0) {
        sync = false;
    }
    var normalizedValues = prepareDataForValidation(values);
    return schema[sync ? 'validateSync' : 'validate'](normalizedValues, {
        abortEarly: false,
        context: context || normalizedValues
    });
}
/**
 * Recursively prepare values.
 */ function prepareDataForValidation(values) {
    var data = Array.isArray(values) ? [] : {};
    for(var k in values){
        if (Object.prototype.hasOwnProperty.call(values, k)) {
            var key = String(k);
            if (Array.isArray(values[key]) === true) {
                data[key] = values[key].map(function(value) {
                    if (Array.isArray(value) === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)) {
                        return prepareDataForValidation(value);
                    } else {
                        return value !== '' ? value : undefined;
                    }
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(values[key])) {
                data[key] = prepareDataForValidation(values[key]);
            } else {
                data[key] = values[key] !== '' ? values[key] : undefined;
            }
        }
    }
    return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */ function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function merge(e, i) {
        if (typeof destination[i] === 'undefined') {
            var cloneRequested = options.clone !== false;
            var shouldClone = cloneRequested && options.isMergeableObject(e);
            destination[i] = shouldClone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
        } else if (options.isMergeableObject(e)) {
            destination[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target[i], e, options);
        } else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}
/** Return multi select values based on an array of options */ function getSelectedValues(options) {
    return Array.from(options).filter(function(el) {
        return el.selected;
    }).map(function(el) {
        return el.value;
    });
}
/** Return the next value for a checkbox */ function getValueForCheckbox(currentValue, checked, valueProp) {
    // If the current value was a boolean, return a boolean
    if (typeof currentValue === 'boolean') {
        return Boolean(checked);
    } // If the currentValue was not a boolean we want to return an array
    var currentArrayOfValues = [];
    var isValueInArray = false;
    var index = -1;
    if (!Array.isArray(currentValue)) {
        // eslint-disable-next-line eqeqeq
        if (!valueProp || valueProp == 'true' || valueProp == 'false') {
            return Boolean(checked);
        }
    } else {
        // If the current value is already an array, use it
        currentArrayOfValues = currentValue;
        index = currentValue.indexOf(valueProp);
        isValueInArray = index >= 0;
    } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values
    if (checked && valueProp && !isValueInArray) {
        return currentArrayOfValues.concat(valueProp);
    } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values
    if (!isValueInArray) {
        return currentArrayOfValues;
    } // If the checkbox was unchecked and the value is in the array, remove the value and return the array
    return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function useEventCallback(fn) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fn); // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect({
        "useEventCallback.useIsomorphicLayoutEffect": function() {
            ref.current = fn;
        }
    }["useEventCallback.useIsomorphicLayoutEffect"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return ref.current.apply(void 0, args);
        }
    }["useEventCallback.useCallback"], []);
}
function useField(propsOrFieldName) {
    var formik = useFormikContext();
    var getFieldProps = formik.getFieldProps, getFieldMeta = formik.getFieldMeta, getFieldHelpers = formik.getFieldHelpers, registerField = formik.registerField, unregisterField = formik.unregisterField;
    var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>
    var props = isAnObject ? propsOrFieldName : {
        name: propsOrFieldName
    };
    var fieldName = props.name, validateFn = props.validate;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useField.useEffect": function() {
            if (fieldName) {
                registerField(fieldName, {
                    validate: validateFn
                });
            }
            return ({
                "useField.useEffect": function() {
                    if (fieldName) {
                        unregisterField(fieldName);
                    }
                }
            })["useField.useEffect"];
        }
    }["useField.useEffect"], [
        registerField,
        unregisterField,
        fieldName,
        validateFn
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        !formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : "TURBOPACK unreachable" : void 0;
    }
    !fieldName ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : "TURBOPACK unreachable" : void 0;
    var fieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useField.useMemo[fieldHelpers]": function() {
            return getFieldHelpers(fieldName);
        }
    }["useField.useMemo[fieldHelpers]"], [
        getFieldHelpers,
        fieldName
    ]);
    return [
        getFieldProps(props),
        getFieldMeta(fieldName),
        fieldHelpers
    ];
}
function Field(_ref) {
    var validate = _ref.validate, name = _ref.name, render = _ref.render, children = _ref.children, is = _ref.as, component = _ref.component, className = _ref.className, props = _objectWithoutPropertiesLoose(_ref, [
        "validate",
        "name",
        "render",
        "children",
        "as",
        "component",
        "className"
    ]);
    var _useFormikContext = useFormikContext(), formik = _objectWithoutPropertiesLoose(_useFormikContext, [
        "validate",
        "validationSchema"
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "Field.useEffect": function() {
                !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : "TURBOPACK unreachable" : void 0;
                !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : "TURBOPACK unreachable" : void 0;
                !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : "TURBOPACK unreachable" : void 0;
                !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
            }
        }["Field.useEffect"], []);
    } // Register field and field-level validation with parent <Formik>
    var registerField = formik.registerField, unregisterField = formik.unregisterField;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Field.useEffect": function() {
            registerField(name, {
                validate: validate
            });
            return ({
                "Field.useEffect": function() {
                    unregisterField(name);
                }
            })["Field.useEffect"];
        }
    }["Field.useEffect"], [
        registerField,
        unregisterField,
        name,
        validate
    ]);
    var field = formik.getFieldProps(_extends({
        name: name
    }, props));
    var meta = formik.getFieldMeta(name);
    var legacyBag = {
        field: field,
        form: formik
    };
    if (render) {
        return render(_extends({}, legacyBag, {
            meta: meta
        }));
    }
    if (isFunction(children)) {
        return children(_extends({}, legacyBag, {
            meta: meta
        }));
    }
    if (component) {
        // This behavior is backwards compat with earlier Formik 0.9 to 1.x
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, [
                "innerRef"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                ref: innerRef
            }, field, rest, {
                className: className
            }), children);
        } // We don't pass `meta` for backwards compat
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
            field: field,
            form: formik
        }, props, {
            className: className
        }), children);
    } // default to input here so we can check for both `as` and `children` above
    var asElement = is || 'input';
    if (typeof asElement === 'string') {
        var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, [
            "innerRef"
        ]);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
            ref: _innerRef
        }, field, _rest, {
            className: className
        }), children);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props, {
        className: className
    }), children);
}
var Form = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
    // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
    var action = props.action, rest = _objectWithoutPropertiesLoose(props, [
        "action"
    ]);
    var _action = action != null ? action : '#';
    var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("form", _extends({
        onSubmit: handleSubmit,
        ref: ref,
        onReset: handleReset,
        action: _action
    }, rest));
});
Form.displayName = 'Form';
/**
 * A public higher-order component to access the imperative API
 */ function withFormik(_ref) {
    var _ref$mapPropsToValues = _ref.mapPropsToValues, mapPropsToValues = _ref$mapPropsToValues === void 0 ? function(vanillaProps) {
        var val = {};
        for(var k in vanillaProps){
            if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
                // @todo TypeScript fix
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _ref$mapPropsToValues, config = _objectWithoutPropertiesLoose(_ref, [
        "mapPropsToValues"
    ]);
    return function createFormik(Component$1) {
        var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
        /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */ var C = /*#__PURE__*/ function(_React$Component) {
            _inheritsLoose(C, _React$Component);
            function C() {
                var _this;
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                _this = _React$Component.call.apply(_React$Component, [
                    this
                ].concat(args)) || this;
                _this.validate = function(values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function() {
                    return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
                };
                _this.handleSubmit = function(values, actions) {
                    return config.handleSubmit(values, _extends({}, actions, {
                        props: _this.props
                    }));
                };
                _this.renderFormComponent = function(formikProps) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component$1, _extends({}, _this.props, formikProps));
                };
                return _this;
            }
            var _proto = C.prototype;
            _proto.render = function render() {
                var _this$props = this.props, props = _objectWithoutPropertiesLoose(_this$props, [
                    "children"
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Formik, _extends({}, props, config, {
                    validate: config.validate && this.validate,
                    validationSchema: config.validationSchema && this.validationSchema,
                    initialValues: mapPropsToValues(this.props),
                    initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
                    initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
                    initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
                    onSubmit: this.handleSubmit,
                    children: this.renderFormComponent
                }));
            };
            return C;
        }(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
        C.displayName = "WithFormik(" + componentDisplayName + ")";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(C, Component$1 // cast type to ComponentClass (even if SFC)
        );
    };
}
/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */ function connect(Comp) {
    var C = function C(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(FormikConsumer, null, function(formik) {
            !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : "TURBOPACK unreachable" : void 0;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Comp, _extends({}, props, {
                formik: formik
            }));
        });
    };
    var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
    // For example, <Field.WrappedComponent /> gets us <FieldInner/>
    C.WrappedComponent = Comp;
    C.displayName = "FormikConnect(" + componentDisplayName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(C, Comp // cast type to ComponentClass (even if SFC)
    );
}
/**
 * Some array helpers!
 */ var move = function move(array, from, to) {
    var copy = copyArrayLike(array);
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
    var copy = copyArrayLike(arrayLike);
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function insert(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy.splice(index, 0, value);
    return copy;
};
var replace = function replace(arrayLike, index, value) {
    var copy = copyArrayLike(arrayLike);
    copy[index] = value;
    return copy;
};
var copyArrayLike = function copyArrayLike(arrayLike) {
    if (!arrayLike) {
        return [];
    } else if (Array.isArray(arrayLike)) {
        return [].concat(arrayLike);
    } else {
        var maxIndex = Object.keys(arrayLike).map(function(key) {
            return parseInt(key);
        }).reduce(function(max, el) {
            return el > max ? el : max;
        }, 0);
        return Array.from(_extends({}, arrayLike, {
            length: maxIndex + 1
        }));
    }
};
var createAlterationHandler = function createAlterationHandler(alteration, defaultFunction) {
    var fn = typeof alteration === 'function' ? alteration : defaultFunction;
    return function(data) {
        if (Array.isArray(data) || isObject(data)) {
            var clone = copyArrayLike(data);
            return fn(clone);
        } // This can be assumed to be a primitive, which
        // is a case for top level validation errors
        return data;
    };
};
var FieldArrayInner = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(FieldArrayInner, _React$Component);
    function FieldArrayInner(props) {
        var _this;
        _this = _React$Component.call(this, props) || this; // We need TypeScript generics on these, so we'll bind them in the constructor
        // @todo Fix TS 3.2.1
        _this.updateArrayField = function(fn, alterTouched, alterErrors) {
            var _this$props = _this.props, name = _this$props.name, setFormikState = _this$props.formik.setFormikState;
            setFormikState(function(prevState) {
                var updateErrors = createAlterationHandler(alterErrors, fn);
                var updateTouched = createAlterationHandler(alterTouched, fn); // values fn should be executed before updateErrors and updateTouched,
                // otherwise it causes an error with unshift.
                var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
                var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
                var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;
                if (isEmptyArray(fieldError)) {
                    fieldError = undefined;
                }
                if (isEmptyArray(fieldTouched)) {
                    fieldTouched = undefined;
                }
                return _extends({}, prevState, {
                    values: values,
                    errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
                    touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
                });
            });
        };
        _this.push = function(value) {
            return _this.updateArrayField(function(arrayLike) {
                return [].concat(copyArrayLike(arrayLike), [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value)
                ]);
            }, false, false);
        };
        _this.handlePush = function(value) {
            return function() {
                return _this.push(value);
            };
        };
        _this.swap = function(indexA, indexB) {
            return _this.updateArrayField(function(array) {
                return swap(array, indexA, indexB);
            }, true, true);
        };
        _this.handleSwap = function(indexA, indexB) {
            return function() {
                return _this.swap(indexA, indexB);
            };
        };
        _this.move = function(from, to) {
            return _this.updateArrayField(function(array) {
                return move(array, from, to);
            }, true, true);
        };
        _this.handleMove = function(from, to) {
            return function() {
                return _this.move(from, to);
            };
        };
        _this.insert = function(index, value) {
            return _this.updateArrayField(function(array) {
                return insert(array, index, value);
            }, function(array) {
                return insert(array, index, null);
            }, function(array) {
                return insert(array, index, null);
            });
        };
        _this.handleInsert = function(index, value) {
            return function() {
                return _this.insert(index, value);
            };
        };
        _this.replace = function(index, value) {
            return _this.updateArrayField(function(array) {
                return replace(array, index, value);
            }, false, false);
        };
        _this.handleReplace = function(index, value) {
            return function() {
                return _this.replace(index, value);
            };
        };
        _this.unshift = function(value) {
            var length = -1;
            _this.updateArrayField(function(array) {
                var arr = array ? [
                    value
                ].concat(array) : [
                    value
                ];
                length = arr.length;
                return arr;
            }, function(array) {
                return array ? [
                    null
                ].concat(array) : [
                    null
                ];
            }, function(array) {
                return array ? [
                    null
                ].concat(array) : [
                    null
                ];
            });
            return length;
        };
        _this.handleUnshift = function(value) {
            return function() {
                return _this.unshift(value);
            };
        };
        _this.handleRemove = function(index) {
            return function() {
                return _this.remove(index);
            };
        };
        _this.handlePop = function() {
            return function() {
                return _this.pop();
            };
        };
        _this.remove = _this.remove.bind(_assertThisInitialized(_this));
        _this.pop = _this.pop.bind(_assertThisInitialized(_this));
        return _this;
    }
    var _proto = FieldArrayInner.prototype;
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
            this.props.formik.validateForm(this.props.formik.values);
        }
    };
    _proto.remove = function remove(index) {
        // We need to make sure we also remove relevant pieces of `touched` and `errors`
        var result;
        this.updateArrayField(function(array) {
            var copy = array ? copyArrayLike(array) : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction(copy.splice)) {
                copy.splice(index, 1);
            } // if the array only includes undefined values we have to return an empty array
            return isFunction(copy.every) ? copy.every(function(v) {
                return v === undefined;
            }) ? [] : copy : copy;
        }, true, true);
        return result;
    };
    _proto.pop = function pop() {
        // Remove relevant pieces of `touched` and `errors` too!
        var result;
        this.updateArrayField(function(array) {
            var tmp = array.slice();
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    _proto.render = function render() {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            replace: this.replace,
            unshift: this.unshift,
            remove: this.remove,
            handlePush: this.handlePush,
            handlePop: this.handlePop,
            handleSwap: this.handleSwap,
            handleMove: this.handleMove,
            handleInsert: this.handleInsert,
            handleReplace: this.handleReplace,
            handleUnshift: this.handleUnshift,
            handleRemove: this.handleRemove
        };
        var _this$props2 = this.props, component = _this$props2.component, render = _this$props2.render, children = _this$props2.children, name = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, [
            "validate",
            "validationSchema"
        ]);
        var props = _extends({}, arrayHelpers, {
            form: restOfFormik,
            name: name
        });
        return component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, props) : render ? render(props) : children // children come last, always called
         ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null;
    };
    return FieldArrayInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
FieldArrayInner.defaultProps = {
    validateOnChange: true
};
var FieldArray = /*#__PURE__*/ connect(FieldArrayInner);
var ErrorMessageImpl = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(ErrorMessageImpl, _React$Component);
    function ErrorMessageImpl() {
        return _React$Component.apply(this, arguments) || this;
    }
    var _proto = ErrorMessageImpl.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
        if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
            return true;
        } else {
            return false;
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, component = _this$props.component, formik = _this$props.formik, render = _this$props.render, children = _this$props.children, name = _this$props.name, rest = _objectWithoutPropertiesLoose(_this$props, [
            "component",
            "formik",
            "render",
            "children",
            "name"
        ]);
        var touch = getIn(formik.touched, name);
        var error = getIn(formik.errors, name);
        return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, rest, error) : error : null;
    };
    return ErrorMessageImpl;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var ErrorMessage = /*#__PURE__*/ connect(ErrorMessageImpl);
/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */ var FastFieldInner = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(FastFieldInner, _React$Component);
    function FastFieldInner(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component, is = props.as, name = props.name;
        !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : "TURBOPACK unreachable" : void 0;
        !!(component && render) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : "TURBOPACK unreachable" : void 0;
        !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : "TURBOPACK unreachable" : void 0;
        return _this;
    }
    var _proto = FastFieldInner.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
        if (this.props.shouldUpdate) {
            return this.props.shouldUpdate(props, this.props);
        } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
            return true;
        } else {
            return false;
        }
    };
    _proto.componentDidMount = function componentDidMount() {
        // Register the Field with the parent Formik. Parent will cycle through
        // registered Field's validate fns right prior to submit
        this.props.formik.registerField(this.props.name, {
            validate: this.props.validate
        });
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, {
                validate: this.props.validate
            });
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, {
                validate: this.props.validate
            });
        }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.props.formik.unregisterField(this.props.name);
    };
    _proto.render = function render() {
        var _this$props = this.props, name = _this$props.name, render = _this$props.render, is = _this$props.as, children = _this$props.children, component = _this$props.component, formik = _this$props.formik, props = _objectWithoutPropertiesLoose(_this$props, [
            "validate",
            "name",
            "render",
            "as",
            "children",
            "component",
            "shouldUpdate",
            "formik"
        ]);
        var restOfFormik = _objectWithoutPropertiesLoose(formik, [
            "validate",
            "validationSchema"
        ]);
        var field = formik.getFieldProps(_extends({
            name: name
        }, props));
        var meta = {
            value: getIn(formik.values, name),
            error: getIn(formik.errors, name),
            touched: !!getIn(formik.touched, name),
            initialValue: getIn(formik.initialValues, name),
            initialTouched: !!getIn(formik.initialTouched, name),
            initialError: getIn(formik.initialErrors, name)
        };
        var bag = {
            field: field,
            meta: meta,
            form: restOfFormik
        };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (component) {
            // This behavior is backwards compat with earlier Formik 0.9 to 1.x
            if (typeof component === 'string') {
                var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose(props, [
                    "innerRef"
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                    ref: innerRef
                }, field, rest), children);
            } // We don't pass `meta` for backwards compat
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                field: field,
                form: formik
            }, props), children);
        } // default to input here so we can check for both `as` and `children` above
        var asElement = is || 'input';
        if (typeof asElement === 'string') {
            var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, [
                "innerRef"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
                ref: _innerRef
            }, field, _rest), children);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props), children);
    };
    return FastFieldInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var FastField = /*#__PURE__*/ connect(FastFieldInner);
;
 //# sourceMappingURL=formik.esm.js.map
}),
]);

//# sourceMappingURL=a00c4_0c758f65._.js.map