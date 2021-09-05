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
        description: "Wishlists cura"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDliYmNjMGFlNDJlYzEwZWRjNzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxJQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBUUU7QUFBTSxlQUFTLEVBQUMsaUNBQWhCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUE7QUFBSyxtQkFBUyxFQUFDLCtEQUFmO0FBQUEsb0JBQ0tELFdBREwsYUFDS0EsV0FETCx1QkFDS0EsV0FBVyxDQUFFRSxHQUFiLENBQWlCLGlCQUEyQjtBQUFBLGdCQUF6QkMsR0FBeUIsU0FBekJBLEdBQXlCO0FBQUEsZ0JBQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxnQkFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQzlDLGdDQUNDLDhEQUFDLDBEQUFEO0FBRUMsaUJBQUcsRUFBRUYsR0FGTjtBQUdDLHNCQUFRLEVBQUVFLFFBSFg7QUFJQyxzQkFBUSxFQUFFRDtBQUpYLGVBQ01ELEdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQVFELFdBVEc7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZ0JFO0FBQVMsaUJBQVMsRUFBQyxFQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVHO0FBQUssbUJBQVMsRUFBQyxvREFBZjtBQUFBLG9CQUNFRixTQURGLGFBQ0VBLFNBREYsdUJBQ0VBLFNBQVMsQ0FBRUMsR0FBWCxDQUFlLGlCQUFlO0FBQUEsZ0JBQWJDLEdBQWEsU0FBYkEsR0FBYTtBQUFBLGdCQUFURyxLQUFTLFNBQVRBLEtBQVM7QUFDaEMsZ0NBQ0MsOERBQUMsMkRBQUQ7QUFFQyxpQkFBRyxFQUFFSCxHQUZOO0FBR0MsbUJBQUssRUFBRUc7QUFIUixlQUNNSCxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFPRCxXQVJHO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUErQkUsOERBQUMsMERBQUQ7QUFBVyxpQkFBUyxFQUFDLEVBQXJCO0FBQ0UsV0FBRyxFQUFDLGdDQUROO0FBRUUsYUFBSyxFQUFDLHVCQUZSO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7S0FqRHVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU21hbGxDYXJkJ1xuaW1wb3J0IE1lZGl1bUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9NZWRpdW1DYXJkJ1xuaW1wb3J0IExhcmdlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQ2FyZCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBleHBsb3JlRGF0YSxjYXJkc0RhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmFpcmJuYjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPEJhbm5lci8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTggc206cHgtMTZcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtNlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHBiLTVcIj5FeHBsb3JlIE5lYXJieTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICB7IGV4cGxvcmVEYXRhPy5tYXAoKHtpbWcsbG9jYXRpb24sZGlzdGFuY2V9KT0+e1xuICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8U21hbGxDYXJkXG4gICAgICAgICAgICAga2V5PXtpbWd9XG4gICAgICAgICAgICAgaW1nPXtpbWd9IFxuICAgICAgICAgICAgIGRpc3RhbmNlPXtkaXN0YW5jZX0gXG4gICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgIClcbiAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBweS04XCI+TGl2ZSBBbnl3aGVyZTwvaDI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0zIHNwYWNlLXgtMyBvdmVyZmxvdy1zY3JvbGwgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgICAgICAgeyBjYXJkc0RhdGE/Lm1hcCgoe2ltZyx0aXRsZX0pPT57XG4gICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxNZWRpdW1DYXJkXG4gICAgICAgICAgICAga2V5PXtpbWd9XG4gICAgICAgICAgICAgaW1nPXtpbWd9IFxuICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICApXG4gICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8TGFyZ2VDYXJkIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgaW1nPVwiaHR0cDovL2xpbmtzLnBhcGFyZWFjdC5jb20vNGNqXCJcbiAgICAgICAgICB0aXRsZT1cIlRoZSBHcmVhdGVzdCBPdXRkb29yc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJXaXNobGlzdHMgY3VyYVwiXG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IGV4cGxvcmVEYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3B5cCcpXG4gIC50aGVuKChyZXMpPT5yZXMuanNvbigpKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIFxuICBjb25zdCBjYXJkc0RhdGEgPWF3YWl0IGZldGNoKCdodHRwOi8vbGlua3MucGFwYXJlYWN0LmNvbS96cDEnKVxuICAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgZXhwbG9yZURhdGEsXG4gICAgICBjYXJkc0RhdGFcbiAgICB9XG4gIH1cblxufSJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiQmFubmVyIiwiU21hbGxDYXJkIiwiTWVkaXVtQ2FyZCIsIkxhcmdlQ2FyZCIsIkhvbWUiLCJleHBsb3JlRGF0YSIsImNhcmRzRGF0YSIsIm1hcCIsImltZyIsImxvY2F0aW9uIiwiZGlzdGFuY2UiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=