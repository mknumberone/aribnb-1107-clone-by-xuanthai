"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\React\\aribnb-clone\\components\\Footer.jsx";

function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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


/***/ }),

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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
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
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
          lineNumber: 21,
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
              lineNumber: 25,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
              lineNumber: 40,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LargeCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "",
        img: "http://links.papareact.com/4cj",
        title: "The Greatest Outdoors",
        description: "Wishlists curated by Airbnb.",
        buttonText: "Get Inspored"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmYwZDE3YjVmMDg2Y2Y0ZDM3NTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNkLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQU5RQTtBQVFULCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sSUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVFFO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBQyxNQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVBO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLG9CQUNLRCxXQURMLGFBQ0tBLFdBREwsdUJBQ0tBLFdBQVcsQ0FBRUUsR0FBYixDQUFpQixpQkFBMkI7QUFBQSxnQkFBekJDLEdBQXlCLFNBQXpCQSxHQUF5QjtBQUFBLGdCQUFyQkMsUUFBcUIsU0FBckJBLFFBQXFCO0FBQUEsZ0JBQVpDLFFBQVksU0FBWkEsUUFBWTtBQUM5QyxnQ0FDQyw4REFBQywwREFBRDtBQUVDLGlCQUFHLEVBQUVGLEdBRk47QUFHQyxzQkFBUSxFQUFFRSxRQUhYO0FBSUMsc0JBQVEsRUFBRUQ7QUFKWCxlQUNNRCxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFRRCxXQVRHO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWdCRTtBQUFTLGlCQUFTLEVBQUMsRUFBbkI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRztBQUFLLG1CQUFTLEVBQUMsb0RBQWY7QUFBQSxvQkFDRUYsU0FERixhQUNFQSxTQURGLHVCQUNFQSxTQUFTLENBQUVDLEdBQVgsQ0FBZSxpQkFBZTtBQUFBLGdCQUFiQyxHQUFhLFNBQWJBLEdBQWE7QUFBQSxnQkFBVEcsS0FBUyxTQUFUQSxLQUFTO0FBQ2hDLGdDQUNDLDhEQUFDLDJEQUFEO0FBRUMsaUJBQUcsRUFBRUgsR0FGTjtBQUdDLG1CQUFLLEVBQUVHO0FBSFIsZUFDTUgsR0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBT0QsV0FSRztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGLGVBK0JFLDhEQUFDLDBEQUFEO0FBQVcsaUJBQVMsRUFBQyxFQUFyQjtBQUNFLFdBQUcsRUFBQyxnQ0FETjtBQUVFLGFBQUssRUFBQyx1QkFGUjtBQUdFLG1CQUFXLEVBQUMsOEJBSGQ7QUFJRSxrQkFBVSxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQThDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0REO0tBbkR1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1NtYWxsQ2FyZCdcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTWVkaXVtQ2FyZCdcbmltcG9ydCBMYXJnZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXJnZUNhcmQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZXhwbG9yZURhdGEsY2FyZHNEYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5haXJibmI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxCYW5uZXIvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC04IHNtOnB4LTE2XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBwYi01XCI+RXhwbG9yZSBOZWFyYnk8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgeyBleHBsb3JlRGF0YT8ubWFwKCh7aW1nLGxvY2F0aW9uLGRpc3RhbmNlfSk9PntcbiAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFNtYWxsQ2FyZFxuICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgIGltZz17aW1nfSBcbiAgICAgICAgICAgICBkaXN0YW5jZT17ZGlzdGFuY2V9IFxuICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICApXG4gICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcHktOFwiPkxpdmUgQW55d2hlcmU8L2gyPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMyBzcGFjZS14LTMgb3ZlcmZsb3ctc2Nyb2xsIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgICAgIHsgY2FyZHNEYXRhPy5tYXAoKHtpbWcsdGl0bGV9KT0+e1xuICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TWVkaXVtQ2FyZFxuICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgIGltZz17aW1nfSBcbiAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgKVxuICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPExhcmdlQ2FyZCBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgIGltZz1cImh0dHA6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzRjalwiXG4gICAgICAgICAgdGl0bGU9XCJUaGUgR3JlYXRlc3QgT3V0ZG9vcnNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2lzaGxpc3RzIGN1cmF0ZWQgYnkgQWlyYm5iLlwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkdldCBJbnNwb3JlZFwiXG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgY29uc3QgZXhwbG9yZURhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xpbmtzLnBhcGFyZWFjdC5jb20vcHlwJylcbiAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgXG4gIGNvbnN0IGNhcmRzRGF0YSA9YXdhaXQgZmV0Y2goJ2h0dHA6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3pwMScpXG4gICAudGhlbigocmVzKT0+cmVzLmpzb24oKSlcbiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBleHBsb3JlRGF0YSxcbiAgICAgIGNhcmRzRGF0YVxuICAgIH1cbiAgfVxuXG59Il0sIm5hbWVzIjpbIkZvb3RlciIsIkhlYWQiLCJIZWFkZXIiLCJCYW5uZXIiLCJTbWFsbENhcmQiLCJNZWRpdW1DYXJkIiwiTGFyZ2VDYXJkIiwiSG9tZSIsImV4cGxvcmVEYXRhIiwiY2FyZHNEYXRhIiwibWFwIiwiaW1nIiwibG9jYXRpb24iLCJkaXN0YW5jZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==