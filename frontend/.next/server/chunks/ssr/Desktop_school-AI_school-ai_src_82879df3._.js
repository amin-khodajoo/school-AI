module.exports = [
"[project]/Desktop/school-AI/school-ai/src/components/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
;
const auth = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]().shape({
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().matches(/^09\d{9}$/, "شماره موبایل معتبر نیست").required("شماره موبایل الزامی است")
});
const __TURBOPACK__default__export__ = auth;
}),
"[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$components$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/src/components/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/school-AI/school-ai/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const LoginForm = ()=>{
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: {
            phoneNumber: ""
        },
        onSubmit: (values)=>{
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$src$2f$components$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: formik.handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "phoneNumber",
                children: "Phone Number"
            }, void 0, false, {
                fileName: "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "phoneNumber",
                name: "phoneNumber",
                type: "tel",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.phoneNumber
            }, void 0, false, {
                fileName: "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            formik.touched.phoneNumber && formik.errors.phoneNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: "red"
                },
                children: formik.errors.phoneNumber
            }, void 0, false, {
                fileName: "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$school$2d$AI$2f$school$2d$ai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/school-AI/school-ai/src/app/(auth)/login/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoginForm;
}),
];

//# sourceMappingURL=Desktop_school-AI_school-ai_src_82879df3._.js.map