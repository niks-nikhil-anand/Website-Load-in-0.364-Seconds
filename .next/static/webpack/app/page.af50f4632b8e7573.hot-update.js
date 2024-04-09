"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/RequestCallback.tsx":
/*!********************************************!*\
  !*** ./src/components/RequestCallback.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_phone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/phone.png */ \"(app-pages-browser)/./public/phone.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst RequestCallback = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setSubmitted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"request-callback-container frame h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mx-10 rounded-tr-[5rem] px-10 mb-10 flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: _public_phone_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"phone\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            submitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"heading3\",\n                children: \"Thank you for your request. We will contact you soon!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"heading3 mt-4 \",\n                                children: \"Request Callback - Free Consultation\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-3 body-medium text-black\",\n                                children: \"Let's engage in a discussion about your vision or startup idea. Kindly request a callback, and I will promptly respond to your inquiry.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"form-container mt-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Your Name\",\n                                    value: name,\n                                    onChange: (e)=>setName(e.target.value),\n                                    className: \"input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"tel\",\n                                    placeholder: \"+91\",\n                                    value: phoneNumber,\n                                    onChange: (e)=>setPhoneNumber(e.target.value),\n                                    className: \"input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5 w-[20rem]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-gradient-to-r from-blue-500 to-blue-300 px-6 py-3 body-semibold  rounded-tr-[1rem]  \",\n                                    children: \"Request Callback\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RequestCallback, \"BySk7ymuTRbEI1eLQVAjKp1SGlM=\");\n_c = RequestCallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCallback);\nvar _c;\n$RefreshReg$(_c, \"RequestCallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0I7QUFDVztBQUNFO0FBRTVDLE1BQU1HLGtCQUE0Qjs7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUVoQkgsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDswQkFDQyw0RUFBQ2Isa0RBQUtBO29CQUFDZSxLQUFLZCx5REFBS0E7b0JBQUVlLEtBQUk7Ozs7Ozs7Ozs7O1lBRXhCUiwwQkFDQyw4REFBQ1M7Z0JBQUdILFdBQVU7MEJBQVc7Ozs7OzBDQUV6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7MENBQ0MsOERBQUNJO2dDQUFHSCxXQUFVOzBDQUFpQjs7Ozs7OzBDQUcvQiw4REFBQ0k7Z0NBQUVKLFdBQVU7MENBQThCOzs7Ozs7Ozs7Ozs7a0NBTTdDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQUtDLFVBQVVWOzRCQUFjSSxXQUFVOzs4Q0FDdEMsOERBQUNPO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPcEI7b0NBQ1BxQixVQUFVLENBQUNkLElBQU1OLFFBQVFNLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDdkNWLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ087b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pDLE9BQU9sQjtvQ0FDUG1CLFVBQVUsQ0FBQ2QsSUFBTUosZUFBZUksRUFBRWUsTUFBTSxDQUFDRixLQUFLO29DQUM5Q1YsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDYTtvQ0FDQ0wsTUFBSztvQ0FDTFIsV0FBVTs4Q0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakI7R0EzRE1YO0tBQUFBO0FBNkROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay50c3g/MTRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBwaG9uZSBmcm9tICcuLi8uLi9wdWJsaWMvcGhvbmUucG5nJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSZXF1ZXN0Q2FsbGJhY2s6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZU51bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtY2FsbGJhY2stY29udGFpbmVyIGZyYW1lIGgtWzIwMHB4XSBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTUwMCB0by15ZWxsb3ctNTAwIG14LTEwIHJvdW5kZWQtdHItWzVyZW1dIHB4LTEwIG1iLTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3Bob25lfSBhbHQ9XCJwaG9uZVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzdWJtaXR0ZWQgPyAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmczXCI+VGhhbmsgeW91IGZvciB5b3VyIHJlcXVlc3QuIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbiE8L2gxPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nMyBtdC00IFwiPlxyXG4gICAgICAgICAgICAgIFJlcXVlc3QgQ2FsbGJhY2sgLSBGcmVlIENvbnN1bHRhdGlvblxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIGJvZHktbWVkaXVtIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICBMZXQncyBlbmdhZ2UgaW4gYSBkaXNjdXNzaW9uIGFib3V0IHlvdXIgdmlzaW9uIG9yIHN0YXJ0dXAgaWRlYS5cclxuICAgICAgICAgICAgICBLaW5kbHkgcmVxdWVzdCBhIGNhbGxiYWNrLCBhbmQgSSB3aWxsIHByb21wdGx5IHJlc3BvbmQgdG8geW91clxyXG4gICAgICAgICAgICAgIGlucXVpcnkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgbXQtMTBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIHB5LVsxMHB4XSBtci0xMCBmcmFtZTEgcm91bmRlZC10ci1bMXJlbV0gcHgtNVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIrOTFcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBweS1bMTBweF0gbXItMTAgZnJhbWUxIHJvdW5kZWQtdHItWzFyZW1dIHB4LTUgdy1bMjByZW1dXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLWJsdWUtMzAwIHB4LTYgcHktMyBib2R5LXNlbWlib2xkICByb3VuZGVkLXRyLVsxcmVtXSAgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlcXVlc3QgQ2FsbGJhY2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENhbGxiYWNrO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJwaG9uZSIsInVzZVN0YXRlIiwiUmVxdWVzdENhbGxiYWNrIiwibmFtZSIsInNldE5hbWUiLCJwaG9uZU51bWJlciIsInNldFBob25lTnVtYmVyIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaDEiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RequestCallback.tsx\n"));

/***/ })

});