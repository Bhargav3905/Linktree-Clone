module.exports = {

"[project]/.next-internal/server/app/[handle]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/[handle]/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function Page({ params }) {
    const handle = (await params).handle;
    const item = {
        "_id": {
            "$oid": "689234e1f8cbd3c115743b8e"
        },
        "links": [
            {
                "link": "https://www.facebook.com/",
                "linktext": "Facebook"
            },
            {
                "link": "https://www.bing.com/search?filters=ufn%3a%22GitHub%22+sid%3a%228528e02f-4774-a8d4-b753-b2f78720cba3%22&qs=MB&pq=gith&sk=CSYN1AS7LS2FT4&sc=17-4&pglt=297&q=github&cvid=f346e82476884386916fa719f6cafebb&gs_lcrp=EgRlZGdlKgYIARAuGEAyBggAEEUYOTIGCAEQLhhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEEUYPDIGCAcQRRg8MgYICBBFGDzSAQgyOTg1ajBqMagCCLACAQ&FORM=ANNTA1&PC=HCTS",
                "linktext": "Github"
            },
            {
                "link": "https://www.instagram.com/",
                "linktext": "Instagram"
            },
            {
                "link": "https://www.youtube.com/",
                "linktext": "Youtube"
            }
        ],
        "handle": "bhargav",
        "picture": "https://th.bing.com/th/id/OIP.gphDwTDJSNT7uDXa6WWl2gHaEo?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-purple-400 justify-center items-start py-10",
        children: item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "photo flex justify-center flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.pic,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/app/[handle]/page.js",
                    lineNumber: 32,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-xl",
                    children: [
                        "@",
                        item.handle
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[handle]/page.js",
                    lineNumber: 33,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "desc w-80 text-center",
                    children: item.desc
                }, void 0, false, {
                    fileName: "[project]/app/[handle]/page.js",
                    lineNumber: 34,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "links",
                    children: item.links.map((item, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                            href: item.link,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3",
                                children: item.linktext
                            }, void 0, false, {
                                fileName: "[project]/app/[handle]/page.js",
                                lineNumber: 37,
                                columnNumber: 65
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/[handle]/page.js",
                            lineNumber: 37,
                            columnNumber: 28
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/[handle]/page.js",
                    lineNumber: 35,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/[handle]/page.js",
            lineNumber: 31,
            columnNumber: 18
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[handle]/page.js",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/[handle]/page.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[handle]/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__907741b1._.js.map