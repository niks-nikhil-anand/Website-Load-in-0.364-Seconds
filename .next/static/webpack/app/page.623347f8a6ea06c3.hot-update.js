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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst RequestCallback = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Here you can add logic to submit the form data, such as sending an API request\n        setSubmitted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"request-callback-container frame h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mx-10 rounded-tr-[5rem] px-10 \",\n        children: submitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Thank you for your request. We will contact you soon!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"heading3 mt-4 \",\n                            children: \"Request Callback - Free Consultation\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-3 body-medium text-black\",\n                            children: \"Let's engage in a discussion about your vision or startup idea. Kindly request a callback, and I will promptly respond to your inquiry.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"form-container mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Your Name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                className: \"input-field py-[10px] mr-10 frame1 rounded-tr-[1rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"tel\",\n                                placeholder: \"Phone Number\",\n                                value: phoneNumber,\n                                onChange: (e)=>setPhoneNumber(e.target.value),\n                                className: \"input-field\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"submit-btn\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 10\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n            lineNumber: 20,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RequestCallback, \"w6JUfNwkECJktiBIGwx0GkP81Hk=\");\n_c = RequestCallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCallback);\nvar _c;\n$RefreshReg$(_c, \"RequestCallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBRTVDLE1BQU1DLGtCQUE0Qjs7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQixpRkFBaUY7UUFDakZILGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNaTiwwQkFDQyw4REFBQ087c0JBQUU7Ozs7O3NDQUVKLDhEQUFDRjtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ0Q7O3NDQUNHLDhEQUFDRzs0QkFBR0YsV0FBVTtzQ0FBaUI7Ozs7OztzQ0FDL0IsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUE4Qjs7Ozs7Ozs7Ozs7OzhCQUUvQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNHO3dCQUFLQyxVQUFVUjt3QkFBY0ksV0FBVTs7MENBRXZDLDhEQUFDSztnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT2xCO2dDQUNQbUIsVUFBVSxDQUFDWixJQUFNTixRQUFRTSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Z0NBQ3ZDUixXQUFVOzs7Ozs7MENBRVosOERBQUNLO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPaEI7Z0NBQ1BpQixVQUFVLENBQUNaLElBQU1KLGVBQWVJLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDOUNSLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ1c7Z0NBQU9MLE1BQUs7Z0NBQVNOLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEQ7R0EvQ01YO0tBQUFBO0FBaUROLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay50c3g/MTRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVxdWVzdENhbGxiYWNrOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBIZXJlIHlvdSBjYW4gYWRkIGxvZ2ljIHRvIHN1Ym1pdCB0aGUgZm9ybSBkYXRhLCBzdWNoIGFzIHNlbmRpbmcgYW4gQVBJIHJlcXVlc3RcclxuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0LWNhbGxiYWNrLWNvbnRhaW5lciBmcmFtZSBoLVsyMDBweF0gYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC01MDAgdG8teWVsbG93LTUwMCBteC0xMCByb3VuZGVkLXRyLVs1cmVtXSBweC0xMCBcIj5cclxuICAgICAge3N1Ym1pdHRlZCA/IChcclxuICAgICAgICA8cD5UaGFuayB5b3UgZm9yIHlvdXIgcmVxdWVzdC4gV2Ugd2lsbCBjb250YWN0IHlvdSBzb29uITwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LWNvbCc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naGVhZGluZzMgbXQtNCAnPlJlcXVlc3QgQ2FsbGJhY2sgLSBGcmVlIENvbnN1bHRhdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMyBib2R5LW1lZGl1bSB0ZXh0LWJsYWNrJz5MZXQncyBlbmdhZ2UgaW4gYSBkaXNjdXNzaW9uIGFib3V0IHlvdXIgdmlzaW9uIG9yIHN0YXJ0dXAgaWRlYS4gS2luZGx5IHJlcXVlc3QgYSBjYWxsYmFjaywgYW5kIEkgd2lsbCBwcm9tcHRseSByZXNwb25kIHRvIHlvdXIgaW5xdWlyeS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXIgbXQtMTBcIj5cclxuICAgICAgICBcclxuICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCJcclxuICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIHB5LVsxMHB4XSBtci0xMCBmcmFtZTEgcm91bmRlZC10ci1bMXJlbV1cIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgdmFsdWU9e3Bob25lTnVtYmVyfVxyXG4gICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiPlxyXG4gICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RDYWxsYmFjaztcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVxdWVzdENhbGxiYWNrIiwibmFtZSIsInNldE5hbWUiLCJwaG9uZU51bWJlciIsInNldFBob25lTnVtYmVyIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RequestCallback.tsx\n"));

/***/ })

});