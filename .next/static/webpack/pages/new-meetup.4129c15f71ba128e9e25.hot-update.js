webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_react_web_demo_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_react_web_demo_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_react_web_demo_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_react_web_demo_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\react-web\\demo-nextjs\\pages\\new-meetup\\index.js",
    _s = $RefreshSig$();




function NewMeetupPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function addMeetupHandler(_x) {
    return _addMeetupHandler.apply(this, arguments);
  }

  function _addMeetupHandler() {
    _addMeetupHandler = Object(C_react_web_demo_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_react_web_demo_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(enteredMeetupData) {
      var response, result;
      return C_react_web_demo_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              result = _context.sent;
              router.push('/');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _addMeetupHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, this);
}

_s(NewMeetupPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = NewMeetupPage;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

var _c;

$RefreshReg$(_c, "NewMeetupPage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBR0EsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUVyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZxQixXQUlSQyxnQkFKUTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpUkFJdkIsaUJBQWdDQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeUJDLEtBQUssQ0FBQyxpQkFBRCxFQUFxQjtBQUM3Q0Msc0JBQU0sRUFBQyxNQURzQztBQUU3Q0Msb0JBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLGlCQUFmLENBRndDO0FBRzdDTSx1QkFBTyxFQUFDO0FBQ0osa0NBQWU7QUFEWDtBQUhxQyxlQUFyQixDQUQ5Qjs7QUFBQTtBQUNRQyxzQkFEUjtBQUFBO0FBQUEscUJBUXNCQSxRQUFRLENBQUNDLElBQVQsRUFSdEI7O0FBQUE7QUFRUUMsb0JBUlI7QUFTRVosb0JBQU0sQ0FBQ2EsSUFBUCxDQUFZLEdBQVo7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKdUI7QUFBQTtBQUFBOztBQWV2QixzQkFBUyxxRUFBQyx5RUFBRDtBQUFlLGVBQVcsRUFBRVg7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFUO0FBRUQ7O0dBakJRSCxhO1VBRVVFLHFEOzs7S0FGVkYsYTtBQW1CTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC40MTI5YzE1ZjcxYmExMjhlOWUyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0nO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ICBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcgLCB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXN1bHQ9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcbiAgcmV0dXJuICAoPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+KVxyXG4gICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9