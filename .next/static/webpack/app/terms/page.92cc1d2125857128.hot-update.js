"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/terms/page",{

/***/ "(app-pages-browser)/./src/components/ui/tracing-beam.tsx":
/*!********************************************!*\
  !*** ./src/components/ui/tracing-beam.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TracingBeam: function() { return /* binding */ TracingBeam; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cn */ \"(app-pages-browser)/./src/utils/cn.ts\");\n/* __next_internal_client_entry_do_not_use__ TracingBeam auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TracingBeam = (param)=>{\n    let { children, className } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [svgHeight, setSvgHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (contentRef.current) {\n            setSvgHeight(contentRef.current.offsetHeight);\n        }\n    }, []);\n    const y1 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        0.8\n    ], [\n        50,\n        svgHeight\n    ]), {\n        stiffness: 500,\n        damping: 90\n    });\n    const y2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        50,\n        svgHeight - 200\n    ]), {\n        stiffness: 500,\n        damping: 90\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        ref: ref,\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(\"relative w-full max-w-4xl mx-auto h-full\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute -left-4 md:-left-20 top-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        transition: {\n                            duration: 0.2,\n                            delay: 0.5\n                        },\n                        animate: {\n                            boxShadow: scrollYProgress.get() > 0 ? \"none\" : \"rgba(0, 0, 0, 0.24) 0px 3px 8px\"\n                        },\n                        className: \"ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            transition: {\n                                duration: 0.2,\n                                delay: 0.5\n                            },\n                            animate: {\n                                backgroundColor: scrollYProgress.get() > 0 ? \"white\" : \"var(--emerald-500)\",\n                                borderColor: scrollYProgress.get() > 0 ? \"white\" : \"var(--emerald-600)\"\n                            },\n                            className: \"h-2 w-2  rounded-full border border-neutral-300 bg-green\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        viewBox: \"0 0 20 \".concat(svgHeight),\n                        width: \"20\",\n                        height: svgHeight,\n                        className: \" ml-4 block\",\n                        \"aria-hidden\": \"true\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.path, {\n                                d: \"M 1 0V -36 l 18 24 V \".concat(svgHeight * 0.8, \" l -18 24V \").concat(svgHeight),\n                                fill: \"none\",\n                                stroke: \"#9091A0\",\n                                strokeOpacity: \"0.16\",\n                                transition: {\n                                    duration: 10\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.path, {\n                                d: \"M 1 0V -36 l 18 24 V \".concat(svgHeight * 0.8, \" l -18 24V \").concat(svgHeight),\n                                fill: \"none\",\n                                stroke: \"url(#gradient)\",\n                                strokeWidth: \"1.25\",\n                                className: \"motion-reduce:hidden\",\n                                transition: {\n                                    duration: 10\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.linearGradient, {\n                                    id: \"gradient\",\n                                    gradientUnits: \"userSpaceOnUse\",\n                                    x1: \"0\",\n                                    x2: \"0\",\n                                    y1: y1,\n                                    y2: y2,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                            stopColor: \"#18CCFC\",\n                                            stopOpacity: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                            stopColor: \"#18CCFC\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                            offset: \"0.325\",\n                                            stopColor: \"#6344F5\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                            offset: \"1\",\n                                            stopColor: \"#AE48FF\",\n                                            stopOpacity: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: contentRef,\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\ui\\\\tracing-beam.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TracingBeam, \"y/yB7n7x6TISxJH3l8deZ0MnElM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring\n    ];\n});\n_c = TracingBeam;\nvar _c;\n$RefreshReg$(_c, \"TracingBeam\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL3RyYWNpbmctYmVhbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMkQ7QUFPcEM7QUFDUztBQUV6QixNQUFNUyxjQUFjO1FBQUMsRUFDMUJDLFFBQVEsRUFDUkMsU0FBUyxFQUlWOztJQUNDLE1BQU1DLE1BQU1WLDZDQUFNQSxDQUFpQjtJQUNuQyxNQUFNLEVBQUVXLGVBQWUsRUFBRSxHQUFHUCx3REFBU0EsQ0FBQztRQUNwQ1EsUUFBUUY7UUFDUkcsUUFBUTtZQUFDO1lBQWU7U0FBWTtJQUN0QztJQUVBLE1BQU1DLGFBQWFkLDZDQUFNQSxDQUFpQjtJQUMxQyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0NGLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWUsV0FBV0csT0FBTyxFQUFFO1lBQ3RCRCxhQUFhRixXQUFXRyxPQUFPLENBQUNDLFlBQVk7UUFDOUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQyxLQUFLZCx3REFBU0EsQ0FDbEJGLDJEQUFZQSxDQUFDUSxpQkFBaUI7UUFBQztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUlJO0tBQVUsR0FDdkQ7UUFDRUssV0FBVztRQUNYQyxTQUFTO0lBQ1g7SUFFRixNQUFNQyxLQUFLakIsd0RBQVNBLENBQ2xCRiwyREFBWUEsQ0FBQ1EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFJSSxZQUFZO0tBQUksR0FDM0Q7UUFDRUssV0FBVztRQUNYQyxTQUFTO0lBQ1g7SUFHRixxQkFDRSw4REFBQ25CLGlEQUFNQSxDQUFDcUIsR0FBRztRQUNUYixLQUFLQTtRQUNMRCxXQUFXSCw2Q0FBRUEsQ0FBQyw0Q0FBNENHOzswQkFFMUQsOERBQUNjO2dCQUFJZCxXQUFVOztrQ0FDYiw4REFBQ1AsaURBQU1BLENBQUNxQixHQUFHO3dCQUNUQyxZQUFZOzRCQUNWQyxVQUFVOzRCQUNWQyxPQUFPO3dCQUNUO3dCQUNBQyxTQUFTOzRCQUNQQyxXQUNFakIsZ0JBQWdCa0IsR0FBRyxLQUFLLElBQ3BCLFNBQ0E7d0JBQ1I7d0JBQ0FwQixXQUFVO2tDQUVWLDRFQUFDUCxpREFBTUEsQ0FBQ3FCLEdBQUc7NEJBQ1RDLFlBQVk7Z0NBQ1ZDLFVBQVU7Z0NBQ1ZDLE9BQU87NEJBQ1Q7NEJBQ0FDLFNBQVM7Z0NBQ1BHLGlCQUNFbkIsZ0JBQWdCa0IsR0FBRyxLQUFLLElBQUksVUFBVTtnQ0FDeENFLGFBQ0VwQixnQkFBZ0JrQixHQUFHLEtBQUssSUFBSSxVQUFVOzRCQUMxQzs0QkFDQXBCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDdUI7d0JBQ0NDLFNBQVMsVUFBb0IsT0FBVmxCO3dCQUNuQm1CLE9BQU07d0JBQ05DLFFBQVFwQjt3QkFDUk4sV0FBVTt3QkFDVjJCLGVBQVk7OzBDQUVaLDhEQUFDbEMsaURBQU1BLENBQUNtQyxJQUFJO2dDQUNWQyxHQUFHLHdCQUFxRHZCLE9BQTdCQSxZQUFZLEtBQUksZUFBdUIsT0FBVkE7Z0NBQ3hEd0IsTUFBSztnQ0FDTEMsUUFBTztnQ0FDUEMsZUFBYztnQ0FDZGpCLFlBQVk7b0NBQ1ZDLFVBQVU7Z0NBQ1o7Ozs7OzswQ0FFRiw4REFBQ3ZCLGlEQUFNQSxDQUFDbUMsSUFBSTtnQ0FDVkMsR0FBRyx3QkFBcUR2QixPQUE3QkEsWUFBWSxLQUFJLGVBQXVCLE9BQVZBO2dDQUN4RHdCLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BFLGFBQVk7Z0NBQ1pqQyxXQUFVO2dDQUNWZSxZQUFZO29DQUNWQyxVQUFVO2dDQUNaOzs7Ozs7MENBRUYsOERBQUNrQjswQ0FDQyw0RUFBQ3pDLGlEQUFNQSxDQUFDMEMsY0FBYztvQ0FDcEJDLElBQUc7b0NBQ0hDLGVBQWM7b0NBQ2RDLElBQUc7b0NBQ0hDLElBQUc7b0NBQ0g3QixJQUFJQTtvQ0FDSkcsSUFBSUE7O3NEQUVKLDhEQUFDMkI7NENBQUtDLFdBQVU7NENBQVVDLGFBQVk7Ozs7OztzREFDdEMsOERBQUNGOzRDQUFLQyxXQUFVOzs7Ozs7c0RBQ2hCLDhEQUFDRDs0Q0FBS3BDLFFBQU87NENBQVFxQyxXQUFVOzs7Ozs7c0RBQy9CLDhEQUFDRDs0Q0FBS3BDLFFBQU87NENBQUlxQyxXQUFVOzRDQUFVQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUM1QjtnQkFBSWIsS0FBS0k7MEJBQWFOOzs7Ozs7Ozs7Ozs7QUFHN0IsRUFBRTtHQXBIV0Q7O1FBUWlCSCxvREFBU0E7UUFjMUJDLG9EQUFTQTtRQU9UQSxvREFBU0E7OztLQTdCVEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvdHJhY2luZy1iZWFtLnRzeD9lM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VTY3JvbGwsXHJcbiAgdXNlVmVsb2NpdHksXHJcbiAgdXNlU3ByaW5nLFxyXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvdXRpbHMvY25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFjaW5nQmVhbSA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xyXG4gICAgdGFyZ2V0OiByZWYsXHJcbiAgICBvZmZzZXQ6IFtcInN0YXJ0IHN0YXJ0XCIsIFwiZW5kIHN0YXJ0XCJdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbc3ZnSGVpZ2h0LCBzZXRTdmdIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY29udGVudFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHNldFN2Z0hlaWdodChjb250ZW50UmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHkxID0gdXNlU3ByaW5nKFxyXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuOF0sIFs1MCwgc3ZnSGVpZ2h0XSksXHJcbiAgICB7XHJcbiAgICAgIHN0aWZmbmVzczogNTAwLFxyXG4gICAgICBkYW1waW5nOiA5MCxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IHkyID0gdXNlU3ByaW5nKFxyXG4gICAgdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbNTAsIHN2Z0hlaWdodCAtIDIwMF0pLFxyXG4gICAge1xyXG4gICAgICBzdGlmZm5lc3M6IDUwMCxcclxuICAgICAgZGFtcGluZzogOTAsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwicmVsYXRpdmUgdy1mdWxsIG1heC13LTR4bCBteC1hdXRvIGgtZnVsbFwiLCBjbGFzc05hbWUpfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LTQgbWQ6LWxlZnQtMjAgdG9wLTNcIj5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxyXG4gICAgICAgICAgICBkZWxheTogMC41LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgICAgIHNjcm9sbFlQcm9ncmVzcy5nZXQoKSA+IDBcclxuICAgICAgICAgICAgICAgID8gXCJub25lXCJcclxuICAgICAgICAgICAgICAgIDogXCJyZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWwtWzI3cHhdIGgtNCB3LTQgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItbmV0dXJhbC0yMDAgc2hhZG93LXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuMixcclxuICAgICAgICAgICAgICBkZWxheTogMC41LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsWVByb2dyZXNzLmdldCgpID4gMCA/IFwid2hpdGVcIiA6IFwidmFyKC0tZW1lcmFsZC01MDApXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxZUHJvZ3Jlc3MuZ2V0KCkgPiAwID8gXCJ3aGl0ZVwiIDogXCJ2YXIoLS1lbWVyYWxkLTYwMClcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0yIHctMiAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItbmV1dHJhbC0zMDAgYmctZ3JlZW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgdmlld0JveD17YDAgMCAyMCAke3N2Z0hlaWdodH1gfVxyXG4gICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9e3N2Z0hlaWdodH0gLy8gU2V0IHRoZSBTVkcgaGVpZ2h0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgbWwtNCBibG9ja1wiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtb3Rpb24ucGF0aFxyXG4gICAgICAgICAgICBkPXtgTSAxIDBWIC0zNiBsIDE4IDI0IFYgJHtzdmdIZWlnaHQgKiAwLjh9IGwgLTE4IDI0ViAke3N2Z0hlaWdodH1gfVxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cIiM5MDkxQTBcIlxyXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5PVwiMC4xNlwiXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9tb3Rpb24ucGF0aD5cclxuICAgICAgICAgIDxtb3Rpb24ucGF0aFxyXG4gICAgICAgICAgICBkPXtgTSAxIDBWIC0zNiBsIDE4IDI0IFYgJHtzdmdIZWlnaHQgKiAwLjh9IGwgLTE4IDI0ViAke3N2Z0hlaWdodH1gfVxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cInVybCgjZ3JhZGllbnQpXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjI1XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90aW9uLXJlZHVjZTpoaWRkZW5cIlxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvbW90aW9uLnBhdGg+XHJcbiAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgPG1vdGlvbi5saW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgICAgIGlkPVwiZ3JhZGllbnRcIlxyXG4gICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgeDE9XCIwXCJcclxuICAgICAgICAgICAgICB4Mj1cIjBcIlxyXG4gICAgICAgICAgICAgIHkxPXt5MX0gLy8gc2V0IHkxIGZvciBncmFkaWVudFxyXG4gICAgICAgICAgICAgIHkyPXt5Mn0gLy8gc2V0IHkyIGZvciBncmFkaWVudFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzE4Q0NGQ1wiIHN0b3BPcGFjaXR5PVwiMFwiPjwvc3RvcD5cclxuICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMThDQ0ZDXCI+PC9zdG9wPlxyXG4gICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzI1XCIgc3RvcENvbG9yPVwiIzYzNDRGNVwiPjwvc3RvcD5cclxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0FFNDhGRlwiIHN0b3BPcGFjaXR5PVwiMFwiPjwvc3RvcD5cclxuICAgICAgICAgICAgPC9tb3Rpb24ubGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj17Y29udGVudFJlZn0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlVHJhbnNmb3JtIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwiY24iLCJUcmFjaW5nQmVhbSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0IiwiY29udGVudFJlZiIsInN2Z0hlaWdodCIsInNldFN2Z0hlaWdodCIsImN1cnJlbnQiLCJvZmZzZXRIZWlnaHQiLCJ5MSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ5MiIsImRpdiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiYW5pbWF0ZSIsImJveFNoYWRvdyIsImdldCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwic3ZnIiwidmlld0JveCIsIndpZHRoIiwiaGVpZ2h0IiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2lkdGgiLCJkZWZzIiwibGluZWFyR3JhZGllbnQiLCJpZCIsImdyYWRpZW50VW5pdHMiLCJ4MSIsIngyIiwic3RvcCIsInN0b3BDb2xvciIsInN0b3BPcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/tracing-beam.tsx\n"));

/***/ })

});