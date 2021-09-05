"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.jsx");
/* harmony import */ var _components_SmallCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SmallCard */ "./components/SmallCard.jsx");
/* harmony import */ var _components_MediumCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MediumCard */ "./components/MediumCard.jsx");
/* harmony import */ var _components_LargeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LargeCard */ "./components/LargeCard.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\React\\aribnb-clone\\pages\\index.jsx";






var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var exploreData = _ref.exploreData,
      cardsData = _ref.cardsData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "airbnb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map(function (_ref2) {
            var img = _ref2.img,
                location = _ref2.location,
                distance = _ref2.distance;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmallCard__WEBPACK_IMPORTED_MODULE_4__.default, {
              img: img,
              distance: distance,
              location: location
            }, img, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex py-3 space-x-3 overflow-scroll scrollbar-hide",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map(function (_ref3) {
            var img = _ref3.img,
                title = _ref3.title;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MediumCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              img: img,
              title: title
            }, img, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LargeCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "",
        img: "http://links.papareact.com/4cj",
        title: "The Greatest Outdoors",
        description: "Wishlists curated by Airbnb.",
        buttonText: "Get "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODI2YTE5M2U3YzVkMmYxM2ZlMjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxJQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBUUU7QUFBTSxlQUFTLEVBQUMsaUNBQWhCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUE7QUFBSyxtQkFBUyxFQUFDLCtEQUFmO0FBQUEsb0JBQ0tELFdBREwsYUFDS0EsV0FETCx1QkFDS0EsV0FBVyxDQUFFRSxHQUFiLENBQWlCLGlCQUEyQjtBQUFBLGdCQUF6QkMsR0FBeUIsU0FBekJBLEdBQXlCO0FBQUEsZ0JBQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxnQkFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQzlDLGdDQUNDLDhEQUFDLDBEQUFEO0FBRUMsaUJBQUcsRUFBRUYsR0FGTjtBQUdDLHNCQUFRLEVBQUVFLFFBSFg7QUFJQyxzQkFBUSxFQUFFRDtBQUpYLGVBQ01ELEdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQVFELFdBVEc7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZ0JFO0FBQVMsaUJBQVMsRUFBQyxFQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVHO0FBQUssbUJBQVMsRUFBQyxvREFBZjtBQUFBLG9CQUNFRixTQURGLGFBQ0VBLFNBREYsdUJBQ0VBLFNBQVMsQ0FBRUMsR0FBWCxDQUFlLGlCQUFlO0FBQUEsZ0JBQWJDLEdBQWEsU0FBYkEsR0FBYTtBQUFBLGdCQUFURyxLQUFTLFNBQVRBLEtBQVM7QUFDaEMsZ0NBQ0MsOERBQUMsMkRBQUQ7QUFFQyxpQkFBRyxFQUFFSCxHQUZOO0FBR0MsbUJBQUssRUFBRUc7QUFIUixlQUNNSCxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFPRCxXQVJHO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUErQkUsOERBQUMsMERBQUQ7QUFBVyxpQkFBUyxFQUFDLEVBQXJCO0FBQ0UsV0FBRyxFQUFDLGdDQUROO0FBRUUsYUFBSyxFQUFDLHVCQUZSO0FBR0UsbUJBQVcsRUFBQyw4QkFIZDtBQUlFLGtCQUFVLEVBQUM7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREO0tBbER1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1NtYWxsQ2FyZCdcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTWVkaXVtQ2FyZCdcbmltcG9ydCBMYXJnZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXJnZUNhcmQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZXhwbG9yZURhdGEsY2FyZHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5haXJibmI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxCYW5uZXIvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC04IHNtOnB4LTE2XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBwYi01XCI+RXhwbG9yZSBOZWFyYnk8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgeyBleHBsb3JlRGF0YT8ubWFwKCh7aW1nLGxvY2F0aW9uLGRpc3RhbmNlfSk9PntcbiAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFNtYWxsQ2FyZFxuICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgIGltZz17aW1nfSBcbiAgICAgICAgICAgICBkaXN0YW5jZT17ZGlzdGFuY2V9IFxuICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICApXG4gICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcHktOFwiPkxpdmUgQW55d2hlcmU8L2gyPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMyBzcGFjZS14LTMgb3ZlcmZsb3ctc2Nyb2xsIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgICAgIHsgY2FyZHNEYXRhPy5tYXAoKHtpbWcsdGl0bGV9KT0+e1xuICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TWVkaXVtQ2FyZFxuICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgIGltZz17aW1nfSBcbiAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgKVxuICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPExhcmdlQ2FyZCBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgIGltZz1cImh0dHA6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzRjalwiXG4gICAgICAgICAgdGl0bGU9XCJUaGUgR3JlYXRlc3QgT3V0ZG9vcnNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2lzaGxpc3RzIGN1cmF0ZWQgYnkgQWlyYm5iLlwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkdldCBcIlxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCBleHBsb3JlRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbGlua3MucGFwYXJlYWN0LmNvbS9weXAnKVxuICAudGhlbigocmVzKT0+cmVzLmpzb24oKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICBcbiAgY29uc3QgY2FyZHNEYXRhID1hd2FpdCBmZXRjaCgnaHR0cDovL2xpbmtzLnBhcGFyZWFjdC5jb20venAxJylcbiAgIC50aGVuKChyZXMpPT5yZXMuanNvbigpKVxuICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIGV4cGxvcmVEYXRhLFxuICAgICAgY2FyZHNEYXRhXG4gICAgfVxuICB9XG5cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkJhbm5lciIsIlNtYWxsQ2FyZCIsIk1lZGl1bUNhcmQiLCJMYXJnZUNhcmQiLCJIb21lIiwiZXhwbG9yZURhdGEiLCJjYXJkc0RhdGEiLCJtYXAiLCJpbWciLCJsb2NhdGlvbiIsImRpc3RhbmNlIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9