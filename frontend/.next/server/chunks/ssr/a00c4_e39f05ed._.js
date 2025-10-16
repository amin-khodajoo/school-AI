module.exports = [
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/school-AI/school-ai/node_modules/deepmerge/dist/es.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Detect free variable `global` from Node.js. */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
const __TURBOPACK__default__export__ = freeGlobal;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-rsc] (ecmascript)");
;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] || freeSelf || Function('return this')();
const __TURBOPACK__default__export__ = root;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
/** Built-in value references. */ var Symbol = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Symbol;
const __TURBOPACK__default__export__ = Symbol;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getRawTag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-rsc] (ecmascript)");
;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].toStringTag : undefined;
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_objectToString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getRawTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getRawTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_objectToString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_objectToString.js [app-rsc] (ecmascript)");
;
;
;
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].toStringTag : undefined;
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
    return symToStringTag && symToStringTag in Object(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getRawTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_objectToString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = baseGetTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-rsc] (ecmascript)");
;
/** Built-in value references. */ var getPrototype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Object.getPrototypeOf, Object);
const __TURBOPACK__default__export__ = getPrototype;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isPlainObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) != objectTag) {
        return false;
    }
    var proto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
const __TURBOPACK__default__export__ = isPlainObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheClear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-rsc] (ecmascript)");
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
const __TURBOPACK__default__export__ = assocIndexOf;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-rsc] (ecmascript)");
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
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(data, key);
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheGet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-rsc] (ecmascript)");
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
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(data, key);
    return index < 0 ? undefined : data[index][1];
}
const __TURBOPACK__default__export__ = listCacheGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheHas.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this.__data__, key) > -1;
}
const __TURBOPACK__default__export__ = listCacheHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assocIndexOf.js [app-rsc] (ecmascript)");
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
    var data = this.__data__, index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assocIndexOf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(data, key);
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheClear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheGet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheHas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_listCacheSet.js [app-rsc] (ecmascript)");
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
ListCache.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
ListCache.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_listCacheSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = ListCache;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackClear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-rsc] (ecmascript)");
;
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    this.size = 0;
}
const __TURBOPACK__default__export__ = stackClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackGet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackHas.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
const __TURBOPACK__default__export__ = isFunction;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_coreJsData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
/** Used to detect overreaching core-js shims. */ var coreJsData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]['__core-js_shared__'];
const __TURBOPACK__default__export__ = coreJsData;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isMasked.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_coreJsData.js [app-rsc] (ecmascript)");
;
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].keys && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_coreJsData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].keys.IE_PROTO || '');
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsNative.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isMasked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isMasked.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isMasked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return false;
    }
    var pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value));
}
const __TURBOPACK__default__export__ = baseIsNative;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getValue.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getValue.js [app-rsc] (ecmascript)");
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
    var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, key);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) ? value : undefined;
}
const __TURBOPACK__default__export__ = getNative;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], 'Map');
const __TURBOPACK__default__export__ = Map;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
;
/* Built-in method references that are verified to be native. */ var nativeCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Object, 'create');
const __TURBOPACK__default__export__ = nativeCreate;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashClear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-rsc] (ecmascript)");
;
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(null) : {};
    this.size = 0;
}
const __TURBOPACK__default__export__ = hashClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashGet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-rsc] (ecmascript)");
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
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
const __TURBOPACK__default__export__ = hashGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashHas.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-rsc] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
const __TURBOPACK__default__export__ = hashHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeCreate.js [app-rsc] (ecmascript)");
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
    data[key] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
const __TURBOPACK__default__export__ = hashSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Hash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashClear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashGet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashHas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_hashSet.js [app-rsc] (ecmascript)");
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
Hash.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Hash.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Hash.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_hashSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Hash;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheClear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Hash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-rsc] (ecmascript)");
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
        'hash': new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        'map': new (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
        'string': new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    };
}
const __TURBOPACK__default__export__ = mapCacheClear;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isKeyable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isKeyable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isKeyable.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isKeyable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
const __TURBOPACK__default__export__ = getMapData;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheDelete.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-rsc] (ecmascript)");
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
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
const __TURBOPACK__default__export__ = mapCacheDelete;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheGet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this, key).get(key);
}
const __TURBOPACK__default__export__ = mapCacheGet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheHas.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this, key).has(key);
}
const __TURBOPACK__default__export__ = mapCacheHas;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getMapData.js [app-rsc] (ecmascript)");
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
    var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getMapData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
const __TURBOPACK__default__export__ = mapCacheSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheClear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheGet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheHas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_mapCacheSet.js [app-rsc] (ecmascript)");
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
MapCache.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
MapCache.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_mapCacheSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = MapCache;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-rsc] (ecmascript)");
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
    if (data instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) {
        var pairs = data.__data__;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
const __TURBOPACK__default__export__ = stackSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Stack.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_ListCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackClear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackDelete.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackGet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackHas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stackSet.js [app-rsc] (ecmascript)");
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
    var data = this.__data__ = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_ListCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackClear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Stack.prototype['delete'] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackDelete$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.get = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackGet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.has = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackHas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
Stack.prototype.set = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stackSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = Stack;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayEach.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_defineProperty.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
;
var defineProperty = function() {
    try {
        var func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
const __TURBOPACK__default__export__ = defineProperty;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_defineProperty.js [app-rsc] (ecmascript)");
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
    if (key == '__proto__' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_defineProperty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, key, {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/eq.js [app-rsc] (ecmascript)");
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
    if (!(hasOwnProperty.call(object, key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$eq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(objValue, value)) || value === undefined && !(key in object)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, key, value);
    }
}
const __TURBOPACK__default__export__ = assignValue;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignValue.js [app-rsc] (ecmascript)");
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, key, newValue);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, key, newValue);
        }
    }
    return object;
}
const __TURBOPACK__default__export__ = copyObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseTimes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsArguments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) == argsTag;
}
const __TURBOPACK__default__export__ = baseIsArguments;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArguments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsArguments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
 */ var isArguments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(function() {
    return arguments;
}()) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsArguments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : function(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
const __TURBOPACK__default__export__ = isArguments;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubFalse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubFalse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubFalse.js [app-rsc] (ecmascript)");
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
 */ var isBuffer = nativeIsBuffer || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubFalse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isBuffer;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isIndex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsTypedArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value.length) && !!typedArrayTags[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)];
}
const __TURBOPACK__default__export__ = baseIsTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_freeGlobal.js [app-rsc] (ecmascript)");
;
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "undefined") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "undefined") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_freeGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].process;
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isTypedArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsTypedArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-rsc] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsTypedArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isTypedArray;
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
 */ var isTypedArray = nodeIsTypedArray ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(nodeIsTypedArray) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseTimes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseTimes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArguments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArguments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isIndex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isTypedArray.js [app-rsc] (ecmascript)");
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
    var isArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), isArg = !isArr && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArguments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), isBuff = !isArr && !isArg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), isType = !isArr && !isArg && !isBuff && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseTimes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value.length, String) : [], length = result.length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = arrayLikeKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_overArg.js [app-rsc] (ecmascript)");
;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_overArg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Object.keys, Object);
const __TURBOPACK__default__export__ = nativeKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeys.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isLength.js [app-rsc] (ecmascript)");
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
    return value != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isLength$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value.length) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = isArrayLike;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
}
const __TURBOPACK__default__export__ = keys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssign.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-rsc] (ecmascript)");
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
    return object && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = baseAssign;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeysIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeysIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nativeKeysIn.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nativeKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
    }
    var isProto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object), result = [];
    for(var key in object){
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
        }
    }
    return result;
}
const __TURBOPACK__default__export__ = baseKeysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayLikeKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseKeysIn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArrayLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArrayLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayLikeKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
}
const __TURBOPACK__default__export__ = keysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-rsc] (ecmascript)");
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
    return object && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = baseAssignIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneBuffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayFilter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayFilter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayFilter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-rsc] (ecmascript)");
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
 */ var getSymbols = !nativeGetSymbols ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : function(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayFilter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
const __TURBOPACK__default__export__ = getSymbols;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbols.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = copySymbols;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/stubArray.js [app-rsc] (ecmascript)");
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
 */ var getSymbolsIn = !nativeGetSymbols ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$stubArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : function(object) {
    var result = [];
    while(object){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(result, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object));
        object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
    }
    return result;
};
const __TURBOPACK__default__export__ = getSymbolsIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbolsIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(source), object);
}
const __TURBOPACK__default__export__ = copySymbolsIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayPush.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object) ? result : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayPush$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(result, symbolsFunc(object));
}
const __TURBOPACK__default__export__ = baseGetAllKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeys.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbols.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
const __TURBOPACK__default__export__ = getAllKeys;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeysIn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetAllKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getSymbolsIn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getSymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
}
const __TURBOPACK__default__export__ = getAllKeysIn;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_DataView.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var DataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], 'DataView');
const __TURBOPACK__default__export__ = DataView;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Promise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], 'Promise');
const __TURBOPACK__default__export__ = Promise;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Set.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var Set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], 'Set');
const __TURBOPACK__default__export__ = Set;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_WeakMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getNative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
;
/* Built-in method references that are verified to be native. */ var WeakMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getNative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], 'WeakMap');
const __TURBOPACK__default__export__ = WeakMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_DataView.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_WeakMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toSource.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]), mapCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]), promiseCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]), setCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]), weakMapCtorString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_DataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](new ArrayBuffer(1))) != dataViewTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) != mapTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && getTag(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].resolve()) != promiseTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) != setTag || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && getTag(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_WeakMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]) != weakMapTag) {
    getTag = function(value) {
        var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toSource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Ctor) : '';
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Uint8Array.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_root.js [app-rsc] (ecmascript)");
;
/** Built-in value references. */ var Uint8Array = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_root$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Uint8Array;
const __TURBOPACK__default__export__ = Uint8Array;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Uint8Array.js [app-rsc] (ecmascript)");
;
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](result).set(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Uint8Array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](arrayBuffer));
    return result;
}
const __TURBOPACK__default__export__ = cloneArrayBuffer;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneDataView.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-rsc] (ecmascript)");
;
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
const __TURBOPACK__default__export__ = cloneDataView;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneRegExp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneSymbol.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-rsc] (ecmascript)");
;
/** Used to convert symbols to primitives and strings. */ var symbolProto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneTypedArray.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-rsc] (ecmascript)");
;
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
const __TURBOPACK__default__export__ = cloneTypedArray;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneByTag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneArrayBuffer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneDataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneDataView.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneRegExp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneRegExp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneSymbol.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneTypedArray.js [app-rsc] (ecmascript)");
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneArrayBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneDataView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneTypedArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneRegExp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object);
    }
}
const __TURBOPACK__default__export__ = initCloneByTag;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseCreate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)");
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
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(proto)) {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneObject.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseCreate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getPrototype.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_isPrototype.js [app-rsc] (ecmascript)");
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
    return typeof object.constructor == 'function' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_isPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseCreate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getPrototype$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(object)) : {};
}
const __TURBOPACK__default__export__ = initCloneObject;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) == mapTag;
}
const __TURBOPACK__default__export__ = baseIsMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-rsc] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsMap = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isMap;
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
 */ var isMap = nodeIsMap ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(nodeIsMap) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isMap;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) == setTag;
}
const __TURBOPACK__default__export__ = baseIsSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSet.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseIsSet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseUnary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_nodeUtil.js [app-rsc] (ecmascript)");
;
;
;
/* Node.js helper references. */ var nodeIsSet = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_nodeUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isSet;
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
 */ var isSet = nodeIsSet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseUnary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(nodeIsSet) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseIsSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = isSet;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Stack$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Stack.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayEach$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayEach.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_assignValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseAssignIn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_cloneBuffer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbols.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copySymbolsIn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getAllKeysIn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_getTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneByTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneByTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_initCloneObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isBuffer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSet.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/keysIn.js [app-rsc] (ecmascript)");
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
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return value;
    }
    var isArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
    if (isArr) {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
        if (!isDeep) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, result);
        }
    } else {
        var tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value), isFunc = tag == funcTag || tag == genTag;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_cloneBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
            if (!isDeep) {
                return isFlat ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbolsIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssignIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(result, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copySymbols$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseAssign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(result, value));
            }
        } else {
            if (!cloneableTags[tag]) {
                return object ? value : {};
            }
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_initCloneByTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Stack$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSet$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        value.forEach(function(subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
    }
    var keysFunc = isFull ? isFlat ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_getAllKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : isFlat ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keysIn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    var props = isArr ? undefined : keysFunc(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayEach$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_assignValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
const __TURBOPACK__default__export__ = baseClone;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/cloneDeep.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
const __TURBOPACK__default__export__ = cloneDeep;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/react-fast-compare/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/clone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseClone.js [app-rsc] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseClone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, CLONE_SYMBOLS_FLAG);
}
const __TURBOPACK__default__export__ = clone;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseGetTag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isObjectLike.js [app-rsc] (ecmascript)");
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
    return typeof value == 'symbol' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isObjectLike$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseGetTag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) == symbolTag;
}
const __TURBOPACK__default__export__ = isSymbol;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/memoize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_MapCache.js [app-rsc] (ecmascript)");
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
    memoized.cache = new (memoize.Cache || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_MapCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = memoize;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_memoizeCapped.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/memoize.js [app-rsc] (ecmascript)");
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
    var result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$memoize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(func, function(key) {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stringToPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_memoizeCapped$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_memoizeCapped.js [app-rsc] (ecmascript)");
;
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_memoizeCapped$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(function(string) {
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
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toKey.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-rsc] (ecmascript)");
;
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
const __TURBOPACK__default__export__ = toKey;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseToString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_Symbol.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-rsc] (ecmascript)");
;
;
;
;
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_Symbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, baseToString) + '';
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
const __TURBOPACK__default__export__ = baseToString;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toString.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseToString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_baseToString.js [app-rsc] (ecmascript)");
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
    return value == null ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_baseToString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value);
}
const __TURBOPACK__default__export__ = toString;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_arrayMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_copyArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isArray.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isSymbol.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stringToPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_stringToPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/_toKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toString.js [app-rsc] (ecmascript)");
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_arrayMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_toKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isSymbol$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value) ? [
        value
    ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_copyArray$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$_stringToPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toString$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)));
}
const __TURBOPACK__default__export__ = toPath;
}),
"[project]/Desktop/school-AI/school-ai/node_modules/react-is/cjs/react-is.development.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
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
"[project]/Desktop/school-AI/school-ai/node_modules/react-is/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/react-is/cjs/react-is.development.js [app-rsc] (ecmascript)");
}
}),
"[project]/Desktop/school-AI/school-ai/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reactIs = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/react-is/index.js [app-rsc] (ecmascript)");
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
"[project]/Desktop/school-AI/school-ai/node_modules/formik/dist/formik.esm.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/deepmerge/dist/es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/isPlainObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/cloneDeep.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/react-fast-compare/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/tiny-warning/dist/tiny-warning.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/clone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/lodash-es/toPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js [app-rsc] (ecmascript)");
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
var FormikContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
    var formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(FormikContext);
    !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : "TURBOPACK unreachable" : void 0;
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
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
    var path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(key);
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
    var res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj); // this keeps inheritance when obj is a class
    var resVal = res;
    var i = 0;
    var pathArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$toPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(path);
    for(; i < pathArray.length - 1; i++){
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
            resVal = resVal[currentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(currentObj);
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
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(state.errors, msg.payload)) {
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
    var initialValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(props.initialValues);
    var initialErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(props.initialErrors || emptyErrors);
    var initialTouched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(props.initialTouched || emptyTouched);
    var initialStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(props.initialStatus);
    var isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(false);
    var fieldRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])({});
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !(typeof isInitialValid === 'undefined') ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        isMounted.current = true;
        return function() {
            isMounted.current = false;
        };
    }, []);
    var _React$useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0), setIteration = _React$useState[1];
    var stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])({
        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(props.initialValues),
        errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(props.initialErrors) || emptyErrors,
        touched: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(props.initialTouched) || emptyTouched,
        status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(props.initialStatus),
        isSubmitting: false,
        isValidating: false,
        submitCount: 0
    });
    var state = stateRef.current;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(action) {
        var prev = stateRef.current;
        stateRef.current = formikReducer(prev, action); // force rerender
        if (prev !== stateRef.current) setIteration(function(x) {
            return x + 1;
        });
    }, []);
    var runValidateHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(values, field) {
        return new Promise(function(resolve, reject) {
            var maybePromisedErrors = props.validate(values, field);
            if (maybePromisedErrors == null) {
                // use loose null check here on purpose
                resolve(emptyErrors);
            } else if (isPromise(maybePromisedErrors)) {
                maybePromisedErrors.then(function(errors) {
                    resolve(errors || emptyErrors);
                }, function(actualException) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
                    }
                    reject(actualException);
                });
            } else {
                resolve(maybePromisedErrors);
            }
        });
    }, [
        props.validate
    ]);
    /**
   * Run validation against a Yup schema and optionally run a function if successful
   */ var runValidationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(values, field) {
        var validationSchema = props.validationSchema;
        var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
        var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
        return new Promise(function(resolve, reject) {
            promise.then(function() {
                resolve(emptyErrors);
            }, function(err) {
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
            });
        });
    }, [
        props.validationSchema
    ]);
    var runSingleFieldLevelValidation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(field, value) {
        return new Promise(function(resolve) {
            return resolve(fieldRegistry.current[field].validate(value));
        });
    }, []);
    var runFieldLevelValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(values) {
        var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f) {
            return isFunction(fieldRegistry.current[f].validate);
        }); // Construct an array with all of the field validation functions
        var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f) {
            return runSingleFieldLevelValidation(f, getIn(values, f));
        }) : [
            Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')
        ]; // use special case ;)
        return Promise.all(fieldValidations).then(function(fieldErrorsList) {
            return fieldErrorsList.reduce(function(prev, curr, index) {
                if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                    return prev;
                }
                if (curr) {
                    prev = setIn(prev, fieldKeysWithValidation[index], curr);
                }
                return prev;
            }, {});
        });
    }, [
        runSingleFieldLevelValidation
    ]); // Run all validations and return the result
    var runAllValidations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(values) {
        return Promise.all([
            runFieldLevelValidations(values),
            props.validationSchema ? runValidationSchema(values) : {},
            props.validate ? runValidateHandler(values) : {}
        ]).then(function(_ref2) {
            var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
            var combinedErrors = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].all([
                fieldErrors,
                schemaErrors,
                validateErrors
            ], {
                arrayMerge: arrayMerge
            });
            return combinedErrors;
        });
    }, [
        props.validate,
        props.validationSchema,
        runFieldLevelValidations,
        runValidateHandler,
        runValidationSchema
    ]); // Run all validations methods and update state accordingly
    var validateFormWithHighPriority = useEventCallback(function(values) {
        if (values === void 0) {
            values = state.values;
        }
        dispatch({
            type: 'SET_ISVALIDATING',
            payload: true
        });
        return runAllValidations(values).then(function(combinedErrors) {
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
        });
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (validateOnMount && isMounted.current === true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
            validateFormWithHighPriority(initialValues.current);
        }
    }, [
        validateOnMount,
        validateFormWithHighPriority
    ]);
    var resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(nextState) {
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
    }, [
        props.initialErrors,
        props.initialStatus,
        props.initialTouched,
        props.onReset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialValues.current, props.initialValues)) {
            if (enableReinitialize) {
                initialValues.current = props.initialValues;
                resetForm();
                if (validateOnMount) {
                    validateFormWithHighPriority(initialValues.current);
                }
            }
        }
    }, [
        enableReinitialize,
        props.initialValues,
        resetForm,
        validateOnMount,
        validateFormWithHighPriority
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialErrors.current, props.initialErrors)) {
            initialErrors.current = props.initialErrors || emptyErrors;
            dispatch({
                type: 'SET_ERRORS',
                payload: props.initialErrors || emptyErrors
            });
        }
    }, [
        enableReinitialize,
        props.initialErrors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialTouched.current, props.initialTouched)) {
            initialTouched.current = props.initialTouched || emptyTouched;
            dispatch({
                type: 'SET_TOUCHED',
                payload: props.initialTouched || emptyTouched
            });
        }
    }, [
        enableReinitialize,
        props.initialTouched
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (enableReinitialize && isMounted.current === true && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialStatus.current, props.initialStatus)) {
            initialStatus.current = props.initialStatus;
            dispatch({
                type: 'SET_STATUS',
                payload: props.initialStatus
            });
        }
    }, [
        enableReinitialize,
        props.initialStatus,
        props.initialTouched
    ]);
    var validateField = useEventCallback(function(name) {
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
                return maybePromise.then(function(x) {
                    return x;
                }).then(function(error) {
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
                });
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
            return runValidationSchema(state.values, name).then(function(x) {
                return x;
            }).then(function(error) {
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
            });
        }
        return Promise.resolve();
    });
    var registerField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(name, _ref3) {
        var validate = _ref3.validate;
        fieldRegistry.current[name] = {
            validate: validate
        };
    }, []);
    var unregisterField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
        delete fieldRegistry.current[name];
    }, []);
    var setTouched = useEventCallback(function(touched, shouldValidate) {
        dispatch({
            type: 'SET_TOUCHED',
            payload: touched
        });
        var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
        return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
    });
    var setErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(errors) {
        dispatch({
            type: 'SET_ERRORS',
            payload: errors
        });
    }, []);
    var setValues = useEventCallback(function(values, shouldValidate) {
        var resolvedValues = isFunction(values) ? values(state.values) : values;
        dispatch({
            type: 'SET_VALUES',
            payload: resolvedValues
        });
        var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
        return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
    });
    var setFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(field, value) {
        dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
                field: field,
                value: value
            }
        });
    }, []);
    var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
        dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field: field,
                value: value
            }
        });
        var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
        return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
    });
    var executeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(eventOrTextValue, maybePath) {
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
    }, [
        setFieldValue,
        state.values
    ]);
    var handleChange = useEventCallback(function(eventOrPath) {
        if (isString(eventOrPath)) {
            return function(event) {
                return executeChange(event, eventOrPath);
            };
        } else {
            executeChange(eventOrPath);
        }
    });
    var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
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
    });
    var executeBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(e, path) {
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
    }, [
        setFieldTouched
    ]);
    var handleBlur = useEventCallback(function(eventOrString) {
        if (isString(eventOrString)) {
            return function(event) {
                return executeBlur(event, eventOrString);
            };
        } else {
            executeBlur(eventOrString);
        }
    });
    var setFormikState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(stateOrCb) {
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
    }, []);
    var setStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(status) {
        dispatch({
            type: 'SET_STATUS',
            payload: status
        });
    }, []);
    var setSubmitting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(isSubmitting) {
        dispatch({
            type: 'SET_ISSUBMITTING',
            payload: isSubmitting
        });
    }, []);
    var submitForm = useEventCallback(function() {
        dispatch({
            type: 'SUBMIT_ATTEMPT'
        });
        return validateFormWithHighPriority().then(function(combinedErrors) {
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
                return Promise.resolve(promiseOrUndefined).then(function(result) {
                    if (!!isMounted.current) {
                        dispatch({
                            type: 'SUBMIT_SUCCESS'
                        });
                    }
                    return result;
                })["catch"](function(_errors) {
                    if (!!isMounted.current) {
                        dispatch({
                            type: 'SUBMIT_FAILURE'
                        }); // This is a legit error rejected by the onSubmit fn
                        // so we don't want to break the promise chain
                        throw _errors;
                    }
                });
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
        });
    });
    var handleSubmit = useEventCallback(function(e) {
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
                !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : "TURBOPACK unreachable" : void 0;
            }
        }
        submitForm()["catch"](function(reason) {
            console.warn("Warning: An unhandled error was caught from submitForm()", reason);
        });
    });
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
    var executeSubmit = useEventCallback(function() {
        return onSubmit(state.values, imperativeMethods);
    });
    var handleReset = useEventCallback(function(e) {
        if (e && e.preventDefault && isFunction(e.preventDefault)) {
            e.preventDefault();
        }
        if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
            e.stopPropagation();
        }
        resetForm();
    });
    var getFieldMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
        return {
            value: getIn(state.values, name),
            error: getIn(state.errors, name),
            touched: !!getIn(state.touched, name),
            initialValue: getIn(initialValues.current, name),
            initialTouched: !!getIn(initialTouched.current, name),
            initialError: getIn(initialErrors.current, name)
        };
    }, [
        state.errors,
        state.touched,
        state.values
    ]);
    var getFieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(name) {
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
    }, [
        setFieldValue,
        setFieldTouched,
        setFieldError
    ]);
    var getFieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(nameOrOptions) {
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
    }, [
        handleBlur,
        handleChange,
        state.values
    ]);
    var dirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(initialValues.current, state.values);
    }, [
        initialValues.current,
        state.values
    ]);
    var isValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useImperativeHandle"])(innerRef, function() {
        return formikbag;
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !!props.render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(FormikProvider, {
        value: formikbag
    }, component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, formikbag) : render ? render(formikbag) : children // children come last, always called
     ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null);
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
                    if (Array.isArray(value) === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)) {
                        return prepareDataForValidation(value);
                    } else {
                        return value !== '' ? value : undefined;
                    }
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(values[key])) {
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
            destination[i] = shouldClone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
        } else if (options.isMergeableObject(e)) {
            destination[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$deepmerge$2f$dist$2f$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(target[i], e, options);
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
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"];
function useEventCallback(fn) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(fn); // we copy a ref to the callback scoped to the current state/props on each render
    useIsomorphicLayoutEffect(function() {
        ref.current = fn;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return ref.current.apply(void 0, args);
    }, []);
}
function useField(propsOrFieldName) {
    var formik = useFormikContext();
    var getFieldProps = formik.getFieldProps, getFieldMeta = formik.getFieldMeta, getFieldHelpers = formik.getFieldHelpers, registerField = formik.registerField, unregisterField = formik.unregisterField;
    var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>
    var props = isAnObject ? propsOrFieldName : {
        name: propsOrFieldName
    };
    var fieldName = props.name, validateFn = props.validate;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (fieldName) {
            registerField(fieldName, {
                validate: validateFn
            });
        }
        return function() {
            if (fieldName) {
                unregisterField(fieldName);
            }
        };
    }, [
        registerField,
        unregisterField,
        fieldName,
        validateFn
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        !formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : "TURBOPACK unreachable" : void 0;
    }
    !fieldName ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : "TURBOPACK unreachable" : void 0;
    var fieldHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return getFieldHelpers(fieldName);
    }, [
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
            !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : "TURBOPACK unreachable" : void 0;
            !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : "TURBOPACK unreachable" : void 0;
            !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : "TURBOPACK unreachable" : void 0;
            !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : "TURBOPACK unreachable" : void 0; // eslint-disable-next-line
        }, []);
    } // Register field and field-level validation with parent <Formik>
    var registerField = formik.registerField, unregisterField = formik.unregisterField;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        registerField(name, {
            validate: validate
        });
        return function() {
            unregisterField(name);
        };
    }, [
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                ref: innerRef
            }, field, rest, {
                className: className
            }), children);
        } // We don't pass `meta` for backwards compat
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
            ref: _innerRef
        }, field, _rest, {
            className: className
        }), children);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props, {
        className: className
    }), children);
}
var Form = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
    // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
    var action = props.action, rest = _objectWithoutPropertiesLoose(props, [
        "action"
    ]);
    var _action = action != null ? action : '#';
    var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("form", _extends({
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
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(Component$1, _extends({}, _this.props, formikProps));
                };
                return _this;
            }
            var _proto = C.prototype;
            _proto.render = function render() {
                var _this$props = this.props, props = _objectWithoutPropertiesLoose(_this$props, [
                    "children"
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(Formik, _extends({}, props, config, {
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
        }(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Component"]);
        C.displayName = "WithFormik(" + componentDisplayName + ")";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(C, Component$1 // cast type to ComponentClass (even if SFC)
        );
    };
}
/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */ function connect(Comp) {
    var C = function C(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(FormikConsumer, null, function(formik) {
            !!!formik ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : "TURBOPACK unreachable" : void 0;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(Comp, _extends({}, props, {
                formik: formik
            }));
        });
    };
    var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
    // For example, <Field.WrappedComponent /> gets us <FieldInner/>
    C.WrappedComponent = Comp;
    C.displayName = "FormikConnect(" + componentDisplayName + ")";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$hoist$2d$non$2d$react$2d$statics$2f$dist$2f$hoist$2d$non$2d$react$2d$statics$2e$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(C, Comp // cast type to ComponentClass (even if SFC)
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$lodash$2d$es$2f$cloneDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(value)
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
        if (this.props.validateOnChange && this.props.formik.validateOnChange && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
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
        return component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, props) : render ? render(props) : children // children come last, always called
         ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Children"].only(children) : null : null;
    };
    return FieldArrayInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Component"]);
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
        return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, rest, error) : error : null;
    };
    return ErrorMessageImpl;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Component"]);
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
        !!render ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : "TURBOPACK unreachable" : void 0;
        !!(component && render) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : "TURBOPACK unreachable" : void 0;
        !!(is && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(component && children && isFunction(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : "TURBOPACK unreachable" : void 0;
        !!(render && children && !isEmptyChildren(children)) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$tiny$2d$warning$2f$dist$2f$tiny$2d$warning$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : "TURBOPACK unreachable" : void 0;
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                    ref: innerRef
                }, field, rest), children);
            } // We don't pass `meta` for backwards compat
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(component, _extends({
                field: field,
                form: formik
            }, props), children);
        } // default to input here so we can check for both `as` and `children` above
        var asElement = is || 'input';
        if (typeof asElement === 'string') {
            var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose(props, [
                "innerRef"
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({
                ref: _innerRef
            }, field, _rest), children);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(asElement, _extends({}, field, props), children);
    };
    return FastFieldInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Component"]);
var FastField = /*#__PURE__*/ connect(FastFieldInner);
;
 //# sourceMappingURL=formik.esm.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isRevalidate) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config, appConfig) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental' && appConfig.experimental_ppr === true) {
        return true;
    }
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/path-to-regexp") + "/";
    var e = {};
    (()=>{
        var n = e;
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e) {
            var n = [];
            var r = 0;
            while(r < e.length){
                var t = e[r];
                if (t === "*" || t === "+" || t === "?") {
                    n.push({
                        type: "MODIFIER",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "\\") {
                    n.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "{") {
                    n.push({
                        type: "OPEN",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "}") {
                    n.push({
                        type: "CLOSE",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === ":") {
                    var a = "";
                    var i = r + 1;
                    while(i < e.length){
                        var o = e.charCodeAt(i);
                        if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                            a += e[i++];
                            continue;
                        }
                        break;
                    }
                    if (!a) throw new TypeError("Missing parameter name at ".concat(r));
                    n.push({
                        type: "NAME",
                        index: r,
                        value: a
                    });
                    r = i;
                    continue;
                }
                if (t === "(") {
                    var c = 1;
                    var f = "";
                    var i = r + 1;
                    if (e[i] === "?") {
                        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
                    }
                    while(i < e.length){
                        if (e[i] === "\\") {
                            f += e[i++] + e[i++];
                            continue;
                        }
                        if (e[i] === ")") {
                            c--;
                            if (c === 0) {
                                i++;
                                break;
                            }
                        } else if (e[i] === "(") {
                            c++;
                            if (e[i + 1] !== "?") {
                                throw new TypeError("Capturing groups are not allowed at ".concat(i));
                            }
                        }
                        f += e[i++];
                    }
                    if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
                    if (!f) throw new TypeError("Missing pattern at ".concat(r));
                    n.push({
                        type: "PATTERN",
                        index: r,
                        value: f
                    });
                    r = i;
                    continue;
                }
                n.push({
                    type: "CHAR",
                    index: r,
                    value: e[r++]
                });
            }
            n.push({
                type: "END",
                index: r,
                value: ""
            });
            return n;
        }
        function parse(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = lexer(e);
            var t = n.prefixes, a = t === void 0 ? "./" : t, i = n.delimiter, o = i === void 0 ? "/#?" : i;
            var c = [];
            var f = 0;
            var u = 0;
            var p = "";
            var tryConsume = function(e) {
                if (u < r.length && r[u].type === e) return r[u++].value;
            };
            var mustConsume = function(e) {
                var n = tryConsume(e);
                if (n !== undefined) return n;
                var t = r[u], a = t.type, i = t.index;
                throw new TypeError("Unexpected ".concat(a, " at ").concat(i, ", expected ").concat(e));
            };
            var consumeText = function() {
                var e = "";
                var n;
                while(n = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
                    e += n;
                }
                return e;
            };
            var isSafe = function(e) {
                for(var n = 0, r = o; n < r.length; n++){
                    var t = r[n];
                    if (e.indexOf(t) > -1) return true;
                }
                return false;
            };
            var safePattern = function(e) {
                var n = c[c.length - 1];
                var r = e || (n && typeof n === "string" ? n : "");
                if (n && !r) {
                    throw new TypeError('Must have text between two parameters, missing text after "'.concat(n.name, '"'));
                }
                if (!r || isSafe(r)) return "[^".concat(escapeString(o), "]+?");
                return "(?:(?!".concat(escapeString(r), ")[^").concat(escapeString(o), "])+?");
            };
            while(u < r.length){
                var v = tryConsume("CHAR");
                var s = tryConsume("NAME");
                var d = tryConsume("PATTERN");
                if (s || d) {
                    var g = v || "";
                    if (a.indexOf(g) === -1) {
                        p += g;
                        g = "";
                    }
                    if (p) {
                        c.push(p);
                        p = "";
                    }
                    c.push({
                        name: s || f++,
                        prefix: g,
                        suffix: "",
                        pattern: d || safePattern(g),
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                var x = v || tryConsume("ESCAPED_CHAR");
                if (x) {
                    p += x;
                    continue;
                }
                if (p) {
                    c.push(p);
                    p = "";
                }
                var h = tryConsume("OPEN");
                if (h) {
                    var g = consumeText();
                    var l = tryConsume("NAME") || "";
                    var m = tryConsume("PATTERN") || "";
                    var T = consumeText();
                    mustConsume("CLOSE");
                    c.push({
                        name: l || (m ? f++ : ""),
                        pattern: l && !m ? safePattern(g) : m,
                        prefix: g,
                        suffix: T,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                mustConsume("END");
            }
            return c;
        }
        n.parse = parse;
        function compile(e, n) {
            return tokensToFunction(parse(e, n), n);
        }
        n.compile = compile;
        function tokensToFunction(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = flags(n);
            var t = n.encode, a = t === void 0 ? function(e) {
                return e;
            } : t, i = n.validate, o = i === void 0 ? true : i;
            var c = e.map(function(e) {
                if (typeof e === "object") {
                    return new RegExp("^(?:".concat(e.pattern, ")$"), r);
                }
            });
            return function(n) {
                var r = "";
                for(var t = 0; t < e.length; t++){
                    var i = e[t];
                    if (typeof i === "string") {
                        r += i;
                        continue;
                    }
                    var f = n ? n[i.name] : undefined;
                    var u = i.modifier === "?" || i.modifier === "*";
                    var p = i.modifier === "*" || i.modifier === "+";
                    if (Array.isArray(f)) {
                        if (!p) {
                            throw new TypeError('Expected "'.concat(i.name, '" to not repeat, but got an array'));
                        }
                        if (f.length === 0) {
                            if (u) continue;
                            throw new TypeError('Expected "'.concat(i.name, '" to not be empty'));
                        }
                        for(var v = 0; v < f.length; v++){
                            var s = a(f[v], i);
                            if (o && !c[t].test(s)) {
                                throw new TypeError('Expected all "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                            }
                            r += i.prefix + s + i.suffix;
                        }
                        continue;
                    }
                    if (typeof f === "string" || typeof f === "number") {
                        var s = a(String(f), i);
                        if (o && !c[t].test(s)) {
                            throw new TypeError('Expected "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                        }
                        r += i.prefix + s + i.suffix;
                        continue;
                    }
                    if (u) continue;
                    var d = p ? "an array" : "a string";
                    throw new TypeError('Expected "'.concat(i.name, '" to be ').concat(d));
                }
                return r;
            };
        }
        n.tokensToFunction = tokensToFunction;
        function match(e, n) {
            var r = [];
            var t = pathToRegexp(e, r, n);
            return regexpToFunction(t, r, n);
        }
        n.match = match;
        function regexpToFunction(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.decode, a = t === void 0 ? function(e) {
                return e;
            } : t;
            return function(r) {
                var t = e.exec(r);
                if (!t) return false;
                var i = t[0], o = t.index;
                var c = Object.create(null);
                var _loop_1 = function(e) {
                    if (t[e] === undefined) return "continue";
                    var r = n[e - 1];
                    if (r.modifier === "*" || r.modifier === "+") {
                        c[r.name] = t[e].split(r.prefix + r.suffix).map(function(e) {
                            return a(e, r);
                        });
                    } else {
                        c[r.name] = a(t[e], r);
                    }
                };
                for(var f = 1; f < t.length; f++){
                    _loop_1(f);
                }
                return {
                    path: i,
                    index: o,
                    params: c
                };
            };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e) {
            return e && e.sensitive ? "" : "i";
        }
        function regexpToRegexp(e, n) {
            if (!n) return e;
            var r = /\((?:\?<(.*?)>)?(?!\?)/g;
            var t = 0;
            var a = r.exec(e.source);
            while(a){
                n.push({
                    name: a[1] || t++,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: ""
                });
                a = r.exec(e.source);
            }
            return e;
        }
        function arrayToRegexp(e, n, r) {
            var t = e.map(function(e) {
                return pathToRegexp(e, n, r).source;
            });
            return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e, n, r) {
            return tokensToRegexp(parse(e, r), n, r);
        }
        function tokensToRegexp(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f = c === void 0 ? true : c, u = r.encode, p = u === void 0 ? function(e) {
                return e;
            } : u, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
            var x = "[".concat(escapeString(g), "]|$");
            var h = "[".concat(escapeString(s), "]");
            var l = o ? "^" : "";
            for(var m = 0, T = e; m < T.length; m++){
                var E = T[m];
                if (typeof E === "string") {
                    l += escapeString(p(E));
                } else {
                    var w = escapeString(p(E.prefix));
                    var y = escapeString(p(E.suffix));
                    if (E.pattern) {
                        if (n) n.push(E);
                        if (w || y) {
                            if (E.modifier === "+" || E.modifier === "*") {
                                var R = E.modifier === "*" ? "?" : "";
                                l += "(?:".concat(w, "((?:").concat(E.pattern, ")(?:").concat(y).concat(w, "(?:").concat(E.pattern, "))*)").concat(y, ")").concat(R);
                            } else {
                                l += "(?:".concat(w, "(").concat(E.pattern, ")").concat(y, ")").concat(E.modifier);
                            }
                        } else {
                            if (E.modifier === "+" || E.modifier === "*") {
                                throw new TypeError('Can not repeat "'.concat(E.name, '" without a prefix and suffix'));
                            }
                            l += "(".concat(E.pattern, ")").concat(E.modifier);
                        }
                    } else {
                        l += "(?:".concat(w).concat(y, ")").concat(E.modifier);
                    }
                }
            }
            if (f) {
                if (!a) l += "".concat(h, "?");
                l += !r.endsWith ? "$" : "(?=".concat(x, ")");
            } else {
                var A = e[e.length - 1];
                var _ = typeof A === "string" ? h.indexOf(A[A.length - 1]) > -1 : A === undefined;
                if (!a) {
                    l += "(?:".concat(h, "(?=").concat(x, "))?");
                }
                if (!_) {
                    l += "(?=".concat(h, "|").concat(x, ")");
                }
            }
            return new RegExp(l, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e, n, r) {
            if (e instanceof RegExp) return regexpToRegexp(e, n);
            if (Array.isArray(e)) return arrayToRegexp(e, n, r);
            return stringToRegexp(e, n, r);
        }
        n.pathToRegexp = pathToRegexp;
    })();
    module.exports = e;
})();
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ __turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
;
;
function getRouteMatcher(param) {
    let { re, groups } = param;
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (e) {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = "/" + interceptedRoute;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *
 * Shared logic on client and server for creating a dynamic param value.
 *
 * This code needs to be shared with the client so it can extract dynamic route
 * params from the URL without a server request.
 *
 * Because everything in this module is sent to the client, we should aim to
 * keep this code as simple as possible. The special case handling for catchall
 * and optional is, alas, unfortunate.
 */ __turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
function getDynamicParam(params, segmentKey, dynamicParamType, pagePath, fallbackRouteParams) {
    let value = params[segmentKey];
    if (fallbackRouteParams && fallbackRouteParams.has(segmentKey)) {
        value = fallbackRouteParams.get(segmentKey);
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    if (!value) {
        const isCatchall = dynamicParamType === 'c';
        const isOptionalCatchall = dynamicParamType === 'oc';
        if (isCatchall || isOptionalCatchall) {
            // handle the case where an optional catchall does not have a value,
            // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
            if (isOptionalCatchall) {
                return {
                    param: segmentKey,
                    value: null,
                    type: dynamicParamType,
                    treeSegment: [
                        segmentKey,
                        '',
                        dynamicParamType
                    ]
                };
            }
            // handle the case where a catchall or optional catchall does not have a value,
            // e.g. `/foo/bar/hello` and `@slot/[...catchall]` or `@slot/[[...catchall]]` is matched
            value = pagePath.split('/') // remove the first empty string
            .slice(1) // replace any dynamic params with the actual values
            .flatMap((pathSegment)=>{
                const param = parseParameter(pathSegment);
                var _params_param_key;
                // if the segment matches a param, return the param value
                // otherwise, it's a static segment, so just return that
                return (_params_param_key = params[param.key]) != null ? _params_param_key : param.key;
            });
            return {
                param: segmentKey,
                value,
                type: dynamicParamType,
                // This value always has to be a string.
                treeSegment: [
                    segmentKey,
                    value.join('/'),
                    dynamicParamType
                ]
            };
        }
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value: value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1]));
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, param) {
    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp("^" + re + "$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = "\\k<" + cleanedKey + ">";
    } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
    } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
    }
    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            segments.push(getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker: paramMatches[1],
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined,
                backreferenceDuplicateKeys
            }));
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1]));
            }
            let s = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
;
;
function getParamKeys(page) {
    const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteRegex"])(page);
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMatcher"])(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function getFallbackRouteParams(pageOrKeys) {
    let keys;
    if (typeof pageOrKeys === 'string') {
        keys = getParamKeys(pageOrKeys);
    } else {
        keys = pageOrKeys;
    }
    // If there are no keys, we can return early.
    if (keys.length === 0) return null;
    const params = new Map();
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    for (const key of keys){
        params.set(key, `%%drp:${key}:${uniqueID}%%`);
    }
    return params;
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestForRsc",
    ()=>getClientReferenceManifestForRsc,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
function createServerModuleMap({ serverActionsManifest }) {
    return new Proxy({}, {
        get: (_, id)=>{
            var _serverActionsManifest__id, _serverActionsManifest_;
            const workers = (_serverActionsManifest_ = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_serverActionsManifest__id = _serverActionsManifest_[id]) == null ? void 0 : _serverActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/login/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Desktop/school-AI/school-ai/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_7 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_8 => \"[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "pages",
    ()=>pages,
    "routeModule",
    ()=>routeModule,
    "tree",
    ()=>tree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
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
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "(auth)",
            {
                "children": [
                    "login",
                    {
                        "children": [
                            "__PAGE__",
                            {},
                            {
                                metadata: {},
                                "page": [
                                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
                                    "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx"
                                ]
                            }
                        ]
                    },
                    {
                        metadata: {}
                    }
                ]
            },
            {
                metadata: {},
                "not-found": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
                    "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js"
                ],
                "forbidden": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
                    "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js"
                ],
                "unauthorized": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
                    "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js"
                ]
            }
        ]
    },
    {
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/Desktop/school-AI/school-ai/src/app/layout.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__,
            "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
const pages = [
    "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx"
];
;
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/(auth)/login/page",
        pathname: "/login",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    let srcPage = "/(auth)/login/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const initialPostponed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed');
    // TODO: replace with more specific flags
    const minimalMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode');
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, parsedUrl, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, interceptionRoutePatterns } = prepareResult;
    const pathname = parsedUrl.pathname || '/';
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    const prerenderInfo = routeModule.match(pathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    let isSSG = Boolean(prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]);
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? initialPostponed : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    const isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    let serveStreamingMetadata = !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    if (isHtmlBot && isRoutePPREnabled) {
        isSSG = false;
        serveStreamingMetadata = false;
    }
    // In development, we always want to generate dynamic HTML.
    let supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof initialPostponed === 'string' || // If this is a dynamic RSC request, then this render supports dynamic
    // HTML (it's dynamic).
    isDynamicRSCRequest;
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        pages,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            // TODO: adapt for putting the RDC inside the postponed data
            // If we're in dev, and this isn't a prefetch or a server action,
            // we should seed the resume data cache.
            if ("TURBOPACK compile-time truthy", 1) {
                if (nextConfig.experimental.cacheComponents && !isPrefetchRSCRequest && !context.renderOpts.isPossibleServerAction) {
                    const warmup = await routeModule.warmup(nextReq, nextRes, context);
                    // If the warmup is successful, we should use the resume data
                    // cache from the warmup.
                    if (warmup.metadata.renderResumeDataCache) {
                        context.renderOpts.renderResumeDataCache = warmup.metadata.renderResumeDataCache;
                    }
                }
            }
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${req.url}`);
                }
            });
        };
        const doRender = async ({ span, postponed, fallbackRouteParams })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    isRevalidate: isSSG && !postponed && !isDynamicRSCRequest,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    devtoolSegmentExplorer: nextConfig.experimental.devtoolSegmentExplorer,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache'),
                    cacheLifeProfiles: nextConfig.experimental.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isRevalidate: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        cacheComponents: Boolean(nextConfig.experimental.cacheComponents),
                        clientSegmentCache: Boolean(nextConfig.experimental.clientSegmentCache),
                        clientParamParsing: Boolean(nextConfig.experimental.clientParamParsing),
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || []
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = metadata.fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry, isRevalidating, span })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry && !minimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!minimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                let fallbackResponse;
                if (isRoutePPREnabled && !isRSCRequest) {
                    const cacheKey = typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : isProduction ? normalizedSrcPage : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams: // shell then we should postpone when dynamic params are
                                // accessed.
                                isProduction || isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage) : null
                            }),
                        waitUntil: ctx.waitUntil
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            const postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            // If this is a dynamic route with PPR enabled and the default route
            // matches were set, then we should pass the fallback route params to
            // the renderer as this is a fallback revalidation request.
            const fallbackRouteParams = pageIsDynamic && isRoutePPREnabled && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') || isDebugFallbackShell) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(pathname) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!minimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (minimalMode && isRSCRequest && !isPrefetchRSCRequest && isRoutePPREnabled) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (minimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options.
            const onCacheEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry({
                    ...cacheEntry,
                    // TODO: remove this when upstream doesn't
                    // always expect this value to be "PAGE"
                    value: {
                        ...cacheEntry.value,
                        kind: 'PAGE'
                    }
                }, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL')
                });
                if (finished) {
                    // TODO: maybe we have to end the request?
                    return null;
                }
            }
            // If the request has a postponed state and it's a resume request we
            // should error.
            if (didPostpone && minimalPostponed) {
                throw Object.defineProperty(new Error('Invariant: postponed state should not be present on a resume request'), "__NEXT_ERROR_CODE", {
                    value: "E396",
                    enumerable: false,
                    configurable: true
                });
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!minimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (minimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!minimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    if (cachedData.postponed) {
                        throw Object.defineProperty(new Error('Invariant: Expected postponed to be undefined'), "__NEXT_ERROR_CODE", {
                            value: "E372",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        // Dynamic RSC responses cannot be cached, even if they're
                        // configured with `force-static` because we have no way of
                        // distinguishing between `force-static` and pages that have no
                        // postponed state.
                        // TODO: distinguish `force-static` from pages with no postponed state (static)
                        cacheControl: isDynamicRSCRequest ? {
                            revalidate: 0,
                            expire: undefined
                        } : cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            let body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || minimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${req.url}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isRevalidate: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/login/page { GLOBAL_ERROR_MODULE => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Desktop/school-AI/school-ai/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_7 => \"[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_8 => \"[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "MetadataBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["MetadataBoundary"],
    "OutletBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["OutletBoundary"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "ViewportBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ViewportBoundary"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "pages",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "tree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$auth$292f$login$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/build/templates/app-page.js?page=/(auth)/login/page { GLOBAL_ERROR_MODULE => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_0 => "[project]/Desktop/school-AI/school-ai/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_7 => "[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_8 => "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=a00c4_e39f05ed._.js.map