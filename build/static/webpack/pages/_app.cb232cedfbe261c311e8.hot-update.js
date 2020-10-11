webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/redux/saga/sagas.js":
/*!*********************************!*\
  !*** ./src/redux/saga/sagas.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/redux/constants.js\");\n/* harmony import */ var _Api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api.js */ \"./src/redux/Api.js\");\n\n\n // worker Saga: will be fired on USER_FETCH_REQUESTED actions\n\nfunction* loginRootUser(action) {\n  try {\n    const user = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(_Api_js__WEBPACK_IMPORTED_MODULE_2__[\"loginRootUser\"], action.payload);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ROOT_USER_LOGIN\"],\n      user: user.root,\n      token: user.token\n    });\n    action.payload.history.push(\"/dashboard/dashboard\");\n  } catch (e) {\n    console.log(e, \"Can not login from saggaggaggag\");\n  }\n}\n\nfunction* mywatchLogin() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(\"RLOGIN\", loginRootUser);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mywatchLogin);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3NhZ2Evc2FnYXMuanM/ZTA2MSJdLCJuYW1lcyI6WyJsb2dpblJvb3RVc2VyIiwiYWN0aW9uIiwidXNlciIsImNhbGwiLCJBcGkiLCJwYXlsb2FkIiwicHV0IiwidHlwZSIsInQiLCJyb290IiwidG9rZW4iLCJoaXN0b3J5IiwicHVzaCIsImUiLCJjb25zb2xlIiwibG9nIiwibXl3YXRjaExvZ2luIiwidGFrZUxhdGVzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsVUFBVUEsYUFBVixDQUF3QkMsTUFBeEIsRUFBZ0M7QUFFN0IsTUFBSTtBQUNMLFVBQU1DLElBQUksR0FBRyxNQUFNQywrREFBSSxDQUFDQyxxREFBRCxFQUFvQkgsTUFBTSxDQUFDSSxPQUEzQixDQUF2QjtBQUNHLFVBQU1DLDhEQUFHLENBQUM7QUFBQ0MsVUFBSSxFQUFFQywwREFBUDtBQUEwQk4sVUFBSSxFQUFFQSxJQUFJLENBQUNPLElBQXJDO0FBQTJDQyxXQUFLLEVBQUNSLElBQUksQ0FBQ1E7QUFBdEQsS0FBRCxDQUFUO0FBQ0hULFVBQU0sQ0FBQ0ksT0FBUCxDQUFlTSxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixzQkFBNUI7QUFFRSxHQUxELENBS0UsT0FBT0MsQ0FBUCxFQUFVO0FBQ1hDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaLEVBQWUsaUNBQWY7QUFDQTtBQUNIOztBQUVELFVBQVVHLFlBQVYsR0FBeUI7QUFDdkIsUUFBTUMscUVBQVUsQ0FBQyxRQUFELEVBQVdqQixhQUFYLENBQWhCO0FBQ0Q7O0FBR2NnQiwyRUFBZiIsImZpbGUiOiIuL3NyYy9yZWR1eC9zYWdhL3NhZ2FzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBBcGkgZnJvbSAnLi4vQXBpLmpzJztcblxuLy8gd29ya2VyIFNhZ2E6IHdpbGwgYmUgZmlyZWQgb24gVVNFUl9GRVRDSF9SRVFVRVNURUQgYWN0aW9uc1xuZnVuY3Rpb24qIGxvZ2luUm9vdFVzZXIoYWN0aW9uKSB7XG5cbiAgIHRyeSB7XG5cdFx0Y29uc3QgdXNlciA9IHlpZWxkIGNhbGwoQXBpLmxvZ2luUm9vdFVzZXIsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBcdHlpZWxkIHB1dCh7dHlwZTogdC5ST09UX1VTRVJfTE9HSU4sIHVzZXI6IHVzZXIucm9vdCwgdG9rZW46dXNlci50b2tlbn0pO1xuXHRcdGFjdGlvbi5wYXlsb2FkLmhpc3RvcnkucHVzaChcIi9kYXNoYm9hcmQvZGFzaGJvYXJkXCIpO1xuXG4gICB9IGNhdGNoIChlKSB7XG5cdCAgIGNvbnNvbGUubG9nKGUsIFwiQ2FuIG5vdCBsb2dpbiBmcm9tIHNhZ2dhZ2dhZ2dhZ1wiKVxuICAgfVxufVxuXG5mdW5jdGlvbiogbXl3YXRjaExvZ2luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFwiUkxPR0lOXCIsIGxvZ2luUm9vdFVzZXIpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG15d2F0Y2hMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/saga/sagas.js\n");

/***/ })

})