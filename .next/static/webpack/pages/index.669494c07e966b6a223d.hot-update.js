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
        buttonText: "Get Inspored"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjY5NDk0YzA3ZTk2NmI2YTIyM2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxJQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBUUU7QUFBTSxlQUFTLEVBQUMsaUNBQWhCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUE7QUFBSyxtQkFBUyxFQUFDLCtEQUFmO0FBQUEsb0JBQ0tELFdBREwsYUFDS0EsV0FETCx1QkFDS0EsV0FBVyxDQUFFRSxHQUFiLENBQWlCLGlCQUEyQjtBQUFBLGdCQUF6QkMsR0FBeUIsU0FBekJBLEdBQXlCO0FBQUEsZ0JBQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxnQkFBWkMsUUFBWSxTQUFaQSxRQUFZO0FBQzlDLGdDQUNDLDhEQUFDLDBEQUFEO0FBRUMsaUJBQUcsRUFBRUYsR0FGTjtBQUdDLHNCQUFRLEVBQUVFLFFBSFg7QUFJQyxzQkFBUSxFQUFFRDtBQUpYLGVBQ01ELEdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQVFELFdBVEc7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZ0JFO0FBQVMsaUJBQVMsRUFBQyxFQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVHO0FBQUssbUJBQVMsRUFBQyxvREFBZjtBQUFBLG9CQUNFRixTQURGLGFBQ0VBLFNBREYsdUJBQ0VBLFNBQVMsQ0FBRUMsR0FBWCxDQUFlLGlCQUFlO0FBQUEsZ0JBQWJDLEdBQWEsU0FBYkEsR0FBYTtBQUFBLGdCQUFURyxLQUFTLFNBQVRBLEtBQVM7QUFDaEMsZ0NBQ0MsOERBQUMsMkRBQUQ7QUFFQyxpQkFBRyxFQUFFSCxHQUZOO0FBR0MsbUJBQUssRUFBRUc7QUFIUixlQUNNSCxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFPRCxXQVJHO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUErQkUsOERBQUMsMERBQUQ7QUFBVyxpQkFBUyxFQUFDLEVBQXJCO0FBQ0UsV0FBRyxFQUFDLGdDQUROO0FBRUUsYUFBSyxFQUFDLHVCQUZSO0FBR0UsbUJBQVcsRUFBQyw4QkFIZDtBQUlFLGtCQUFVLEVBQUM7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBOENFLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtERDtLQW5EdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBTbWFsbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TbWFsbENhcmQnXG5pbXBvcnQgTWVkaXVtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL01lZGl1bUNhcmQnXG5pbXBvcnQgTGFyZ2VDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTGFyZ2VDYXJkJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGV4cGxvcmVEYXRhLGNhcmRzRGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+YWlyYm5iPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8QmFubmVyLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtOCBzbTpweC0xNlwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcGItNVwiPkV4cGxvcmUgTmVhcmJ5PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00XCI+XG4gICAgICAgICAgIHsgZXhwbG9yZURhdGE/Lm1hcCgoe2ltZyxsb2NhdGlvbixkaXN0YW5jZX0pPT57XG4gICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxTbWFsbENhcmRcbiAgICAgICAgICAgICBrZXk9e2ltZ31cbiAgICAgICAgICAgICBpbWc9e2ltZ30gXG4gICAgICAgICAgICAgZGlzdGFuY2U9e2Rpc3RhbmNlfSBcbiAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgKVxuICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHB5LThcIj5MaXZlIEFueXdoZXJlPC9oMj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTMgc3BhY2UteC0zIG92ZXJmbG93LXNjcm9sbCBzY3JvbGxiYXItaGlkZVwiPlxuICAgICAgICAgICB7IGNhcmRzRGF0YT8ubWFwKCh7aW1nLHRpdGxlfSk9PntcbiAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPE1lZGl1bUNhcmRcbiAgICAgICAgICAgICBrZXk9e2ltZ31cbiAgICAgICAgICAgICBpbWc9e2ltZ30gXG4gICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgIClcbiAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxMYXJnZUNhcmQgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICBpbWc9XCJodHRwOi8vbGlua3MucGFwYXJlYWN0LmNvbS80Y2pcIlxuICAgICAgICAgIHRpdGxlPVwiVGhlIEdyZWF0ZXN0IE91dGRvb3JzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpc2hsaXN0cyBjdXJhdGVkIGJ5IEFpcmJuYi5cIlxuICAgICAgICAgIGJ1dHRvblRleHQ9XCJHZXQgSW5zcG9yZWRcIlxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IGV4cGxvcmVEYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3B5cCcpXG4gIC50aGVuKChyZXMpPT5yZXMuanNvbigpKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIFxuICBjb25zdCBjYXJkc0RhdGEgPWF3YWl0IGZldGNoKCdodHRwOi8vbGlua3MucGFwYXJlYWN0LmNvbS96cDEnKVxuICAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6e1xuICAgICAgZXhwbG9yZURhdGEsXG4gICAgICBjYXJkc0RhdGFcbiAgICB9XG4gIH1cblxufSJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiQmFubmVyIiwiU21hbGxDYXJkIiwiTWVkaXVtQ2FyZCIsIkxhcmdlQ2FyZCIsIkhvbWUiLCJleHBsb3JlRGF0YSIsImNhcmRzRGF0YSIsIm1hcCIsImltZyIsImxvY2F0aW9uIiwiZGlzdGFuY2UiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=