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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst RequestCallback = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setSubmitted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"request-callback-container frame h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mx-10 rounded-tr-[5rem] px-10 mb-10 \",\n        children: submitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Thank you for your request. We will contact you soon!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"heading3 mt-4 \",\n                            children: \"Request Callback - Free Consultation\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-3 body-medium text-black\",\n                            children: \"Let's engage in a discussion about your vision or startup idea. Kindly request a callback, and I will promptly respond to your inquiry.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"form-container mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Your Name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                className: \"input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"tel\",\n                                placeholder: \"+91\",\n                                value: phoneNumber,\n                                onChange: (e)=>setPhoneNumber(e.target.value),\n                                className: \"input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-linear-gradient(90deg, #4ca5ff 0%, #b573f8 100%) bg-white\",\n                                children: \"Request Callback\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Niks\\\\Desktop\\\\seconds\\\\src\\\\components\\\\RequestCallback.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RequestCallback, \"BySk7ymuTRbEI1eLQVAjKp1SGlM=\");\n_c = RequestCallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCallback);\nvar _c;\n$RefreshReg$(_c, \"RequestCallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RDYWxsYmFjay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBRTVDLE1BQU1DLGtCQUE0Qjs7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUVoQkgsYUFBYTtJQUNmO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1pOLDBCQUNDLDhEQUFDTztzQkFBRTs7Ozs7c0NBRUgsOERBQUNGO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs7c0NBQ0MsOERBQUNHOzRCQUFHRixXQUFVO3NDQUFpQjs7Ozs7O3NDQUcvQiw4REFBQ0M7NEJBQUVELFdBQVU7c0NBQThCOzs7Ozs7Ozs7Ozs7OEJBTTdDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQUtDLFVBQVVSO3dCQUFjSSxXQUFVOzswQ0FDdEMsOERBQUNLO2dDQUNDQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPbEI7Z0NBQ1BtQixVQUFVLENBQUNaLElBQU1OLFFBQVFNLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDdkNSLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9oQjtnQ0FDUGlCLFVBQVUsQ0FBQ1osSUFBTUosZUFBZUksRUFBRWEsTUFBTSxDQUFDRixLQUFLO2dDQUM5Q1IsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDVztnQ0FDQ0wsTUFBSztnQ0FDTE4sV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBdkRNWDtLQUFBQTtBQXlETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXF1ZXN0Q2FsbGJhY2sudHN4PzE0ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFJlcXVlc3RDYWxsYmFjazogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lTnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1jYWxsYmFjay1jb250YWluZXIgZnJhbWUgaC1bMjAwcHhdIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtNTAwIHRvLXllbGxvdy01MDAgbXgtMTAgcm91bmRlZC10ci1bNXJlbV0gcHgtMTAgbWItMTAgXCI+XHJcbiAgICAgIHtzdWJtaXR0ZWQgPyAoXHJcbiAgICAgICAgPHA+VGhhbmsgeW91IGZvciB5b3VyIHJlcXVlc3QuIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbiE8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmczIG10LTQgXCI+XHJcbiAgICAgICAgICAgICAgUmVxdWVzdCBDYWxsYmFjayAtIEZyZWUgQ29uc3VsdGF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgYm9keS1tZWRpdW0gdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIExldCdzIGVuZ2FnZSBpbiBhIGRpc2N1c3Npb24gYWJvdXQgeW91ciB2aXNpb24gb3Igc3RhcnR1cCBpZGVhLlxyXG4gICAgICAgICAgICAgIEtpbmRseSByZXF1ZXN0IGEgY2FsbGJhY2ssIGFuZCBJIHdpbGwgcHJvbXB0bHkgcmVzcG9uZCB0byB5b3VyXHJcbiAgICAgICAgICAgICAgaW5xdWlyeS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lciBtdC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgcHktWzEwcHhdIG1yLTEwIGZyYW1lMSByb3VuZGVkLXRyLVsxcmVtXSBweC01XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIis5MVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIHB5LVsxMHB4XSBtci0xMCBmcmFtZTEgcm91bmRlZC10ci1bMXJlbV0gcHgtNVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRjYTVmZiAwJSwgI2I1NzNmOCAxMDAlKSBiZy13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVxdWVzdCBDYWxsYmFja1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Q2FsbGJhY2s7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlcXVlc3RDYWxsYmFjayIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmVOdW1iZXIiLCJzZXRQaG9uZU51bWJlciIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RequestCallback.tsx\n"));

/***/ })

});