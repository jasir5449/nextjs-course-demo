webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./components/meetups/MeetupFormNew.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupFormNew.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-input */ "./hooks/use-input.js");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");


var _jsxFileName = "C:\\react-web\\demo-nextjs\\components\\meetups\\MeetupFormNew.js",
    _this = undefined,
    _s = $RefreshSig$();





var isNotEmpty = function isNotEmpty(value) {
  return value.trim() !== '';
};

var isEmail = function isEmail(value) {
  return value.includes('@');
};

var isLength = function isLength(value) {
  return value.length > 5;
};

var MeetupFormNew = function MeetupFormNew(props) {
  _s();

  var _useInput = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      firstNameValue = _useInput.value,
      firstNameFormValid = _useInput.isValid,
      firstNameHasError = _useInput.hasError,
      firstNameChangeHandler = _useInput.valueChangeHandler,
      firstNameBlurHandler = _useInput.inputBlurHandler,
      resetFirstName = _useInput.reset;

  var _useInput2 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      lastNameValue = _useInput2.value,
      lastNameFormValid = _useInput2.isValid,
      lastNameHasError = _useInput2.hasError,
      lastNameChangeHandler = _useInput2.valueChangeHandler,
      lastNameBlurHandler = _useInput2.inputBlurHandler,
      resetLastName = _useInput2.reset;

  var _useInput3 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isEmail),
      emailValue = _useInput3.value,
      emailFormValid = _useInput3.isValid,
      emailHasError = _useInput3.hasError,
      emailChangeHandler = _useInput3.valueChangeHandler,
      emailBlurHandler = _useInput3.inputBlurHandler,
      resetEmail = _useInput3.reset;

  var _useInput4 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isLength),
      passwordValue = _useInput4.value,
      passwordFormValid = _useInput4.isValid,
      passwordHasError = _useInput4.hasError,
      passwordChangeHandler = _useInput4.valueChangeHandler,
      passwordBlurHandler = _useInput4.inputBlurHandler,
      resetPassword = _useInput4.reset;

  var _useInput5 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      userTypeValue = _useInput5.value,
      userTypeFormValid = _useInput5.isValid,
      userTypeHasError = _useInput5.hasError,
      userTypeChangeHandler = _useInput5.valueChangeHandler,
      userTypeBlurHandler = _useInput5.inputBlurHandler,
      resetUserType = _useInput5.reset;

  var formValid = false;

  if (firstNameFormValid && lastNameFormValid && emailFormValid && passwordFormValid && userTypeFormValid) {
    formValid = true;
  }

  var firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control ';
  var lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control ';
  var emailClass = emailHasError ? 'form-control invalid' : 'form-control ';
  var passwordClass = passwordHasError ? 'form-control invalid' : 'form-control ';
  var userTypeClass = userTypeHasError ? 'form-control invalid' : 'form-control ';

  var formSubmitHandler = function formSubmitHandler(event) {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    console.log(firstNameValue, lastNameValue, emailValue, passwordValue, userTypeValue);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    resetUserType();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: formSubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "control-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: firstNameClass,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "name",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "name",
              value: firstNameValue,
              onChange: firstNameChangeHandler,
              onBlur: firstNameBlurHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 11
            }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "error-text",
              children: "Please Enter Your First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 35
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: lastNameClass,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "name",
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "name",
              value: lastNameValue,
              onChange: lastNameChangeHandler,
              onBlur: lastNameBlurHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, _this), lastNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "error-text",
              children: "Please Enter Your Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 32
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "control-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: emailClass,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "name",
              children: "E-Mail Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              id: "name",
              value: emailValue,
              onChange: emailChangeHandler,
              onBlur: emailBlurHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 13
            }, _this), emailHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "error-text",
              children: "Please Enter Valid Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: passwordClass,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              id: "password",
              value: passwordValue,
              onChange: passwordChangeHandler,
              onBlur: passwordBlurHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, _this), passwordHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "error-text",
              children: "Please Enter more than 5 Characters"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 34
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "control-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: userTypeClass,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              htmlFor: "name",
              children: "User Types"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              value: userTypeValue,
              onBlur: userTypeBlurHandler,
              onChange: userTypeChangeHandler,
              name: "usertypes",
              id: "usertypes",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "",
                children: "Please select Your User Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "admin",
                children: "Admin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "supervisor",
                children: "Supervisor"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "manager",
                children: "Manager"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "salesman",
                children: "Salesman"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "employee",
                children: "Employee"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, _this), userTypeHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "error-text",
              children: "Please Select a User Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 34
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-actions",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            disabled: !formValid,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(MeetupFormNew, "poRSnWQg16RLEXkjj8NuMpbn2Rg=", false, function () {
  return [_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = MeetupFormNew;
/* harmony default export */ __webpack_exports__["default"] = (MeetupFormNew);

var _c;

$RefreshReg$(_c, "MeetupFormNew");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiXSwibmFtZXMiOlsiaXNOb3RFbXB0eSIsInZhbHVlIiwidHJpbSIsImlzRW1haWwiLCJpbmNsdWRlcyIsImlzTGVuZ3RoIiwibGVuZ3RoIiwiTWVldHVwRm9ybU5ldyIsInByb3BzIiwidXNlSW5wdXQiLCJmaXJzdE5hbWVWYWx1ZSIsImZpcnN0TmFtZUZvcm1WYWxpZCIsImlzVmFsaWQiLCJmaXJzdE5hbWVIYXNFcnJvciIsImhhc0Vycm9yIiwiZmlyc3ROYW1lQ2hhbmdlSGFuZGxlciIsInZhbHVlQ2hhbmdlSGFuZGxlciIsImZpcnN0TmFtZUJsdXJIYW5kbGVyIiwiaW5wdXRCbHVySGFuZGxlciIsInJlc2V0Rmlyc3ROYW1lIiwicmVzZXQiLCJsYXN0TmFtZVZhbHVlIiwibGFzdE5hbWVGb3JtVmFsaWQiLCJsYXN0TmFtZUhhc0Vycm9yIiwibGFzdE5hbWVDaGFuZ2VIYW5kbGVyIiwibGFzdE5hbWVCbHVySGFuZGxlciIsInJlc2V0TGFzdE5hbWUiLCJlbWFpbFZhbHVlIiwiZW1haWxGb3JtVmFsaWQiLCJlbWFpbEhhc0Vycm9yIiwiZW1haWxDaGFuZ2VIYW5kbGVyIiwiZW1haWxCbHVySGFuZGxlciIsInJlc2V0RW1haWwiLCJwYXNzd29yZFZhbHVlIiwicGFzc3dvcmRGb3JtVmFsaWQiLCJwYXNzd29yZEhhc0Vycm9yIiwicGFzc3dvcmRDaGFuZ2VIYW5kbGVyIiwicGFzc3dvcmRCbHVySGFuZGxlciIsInJlc2V0UGFzc3dvcmQiLCJ1c2VyVHlwZVZhbHVlIiwidXNlclR5cGVGb3JtVmFsaWQiLCJ1c2VyVHlwZUhhc0Vycm9yIiwidXNlclR5cGVDaGFuZ2VIYW5kbGVyIiwidXNlclR5cGVCbHVySGFuZGxlciIsInJlc2V0VXNlclR5cGUiLCJmb3JtVmFsaWQiLCJmaXJzdE5hbWVDbGFzcyIsImxhc3ROYW1lQ2xhc3MiLCJlbWFpbENsYXNzIiwicGFzc3dvcmRDbGFzcyIsInVzZXJUeXBlQ2xhc3MiLCJmb3JtU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLE9BQWUsRUFBbkI7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxRQUFOLENBQWUsR0FBZixDQUFKO0FBQUEsQ0FBckI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWxCO0FBQUEsQ0FBdEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFTMUJDLGdFQUFRLENBQUNULFVBQUQsQ0FUa0I7QUFBQSxNQUd2QlUsY0FIdUIsYUFHN0JULEtBSDZCO0FBQUEsTUFJckJVLGtCQUpxQixhQUk3QkMsT0FKNkI7QUFBQSxNQUtuQkMsaUJBTG1CLGFBSzdCQyxRQUw2QjtBQUFBLE1BTVZDLHNCQU5VLGFBTTdCQyxrQkFONkI7QUFBQSxNQU9aQyxvQkFQWSxhQU83QkMsZ0JBUDZCO0FBQUEsTUFRdkJDLGNBUnVCLGFBUTdCQyxLQVI2Qjs7QUFBQSxtQkFrQjFCWCxnRUFBUSxDQUFDVCxVQUFELENBbEJrQjtBQUFBLE1BWXZCcUIsYUFadUIsY0FZN0JwQixLQVo2QjtBQUFBLE1BYXJCcUIsaUJBYnFCLGNBYTdCVixPQWI2QjtBQUFBLE1BY25CVyxnQkFkbUIsY0FjN0JULFFBZDZCO0FBQUEsTUFlVlUscUJBZlUsY0FlN0JSLGtCQWY2QjtBQUFBLE1BZ0JaUyxtQkFoQlksY0FnQjdCUCxnQkFo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LHVCQUpGLGVBS0U7QUFBUSxxQkFBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFNRTtBQUFRLHFCQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFVR0QsZ0JBQWdCLGlCQUFJO0FBQUcsdUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9DRixlQW9FRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGlDQUNFO0FBQVEsb0JBQVEsRUFBRSxDQUFDSSxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRkQsQ0E1SkQ7O0dBQU10QyxhO1VBU0NFLHdELEVBU0FBLHdELEVBUUFBLHdELEVBUURBLHdELEVBVUFBLHdEOzs7S0E1Q0FGLGE7QUE4SlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuMTBjOWU0NzQ3YWNmMDBiZWY5ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLWlucHV0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuXG5cbmNvbnN0IGlzTm90RW1wdHkgPSB2YWx1ZSA9PiB2YWx1ZS50cmltKCkhPT0nJztcbmNvbnN0IGlzRW1haWwgPSB2YWx1ZSA9PiB2YWx1ZS5pbmNsdWRlcygnQCcpO1xuY29uc3QgaXNMZW5ndGggPSB2YWx1ZSA9PnZhbHVlLmxlbmd0aCA+IDUgO1xuY29uc3QgTWVldHVwRm9ybU5ldyA9IChwcm9wcykgPT4ge1xuXG4gICBjb25zdCB7XG4gICAgdmFsdWU6Zmlyc3ROYW1lVmFsdWUsXG4gICAgaXNWYWxpZDpmaXJzdE5hbWVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGZpcnN0TmFtZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjpmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6Zmlyc3ROYW1lQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRGaXJzdE5hbWVcbiAgIH0gPSB1c2VJbnB1dChpc05vdEVtcHR5KTtcblxuICAgY29uc3Qge1xuICAgIHZhbHVlOmxhc3ROYW1lVmFsdWUsXG4gICAgaXNWYWxpZDpsYXN0TmFtZUZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogbGFzdE5hbWVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6bGFzdE5hbWVDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6bGFzdE5hbWVCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldExhc3ROYW1lXG4gICB9ID0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG4gICBjb25zdCB7XG4gICAgdmFsdWU6ZW1haWxWYWx1ZSxcbiAgICBpc1ZhbGlkOmVtYWlsRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBlbWFpbEhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjplbWFpbENoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjplbWFpbEJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0RW1haWxcbiAgIH0gPSB1c2VJbnB1dChpc0VtYWlsKTtcbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTpwYXNzd29yZFZhbHVlLFxuICAgIGlzVmFsaWQ6cGFzc3dvcmRGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IHBhc3N3b3JkSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOnBhc3N3b3JkQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOnBhc3N3b3JkQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRQYXNzd29yZFxuICAgfT0gdXNlSW5wdXQoaXNMZW5ndGgpO1xuXG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTp1c2VyVHlwZVZhbHVlLFxuICAgIGlzVmFsaWQ6dXNlclR5cGVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IHVzZXJUeXBlSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOnVzZXJUeXBlQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOnVzZXJUeXBlQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRVc2VyVHlwZVxuICAgfT0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG4gXG4gICBsZXQgZm9ybVZhbGlkID0gZmFsc2U7XG5cbiAgIGlmKGZpcnN0TmFtZUZvcm1WYWxpZCAmJiBsYXN0TmFtZUZvcm1WYWxpZCAmJiBlbWFpbEZvcm1WYWxpZCAmJiBwYXNzd29yZEZvcm1WYWxpZCAmJiB1c2VyVHlwZUZvcm1WYWxpZCl7XG4gICAgIGZvcm1WYWxpZD10cnVlO1xuICAgfVxuXG5cbiAgIGNvbnN0IGZpcnN0TmFtZUNsYXNzID0gZmlyc3ROYW1lSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBsYXN0TmFtZUNsYXNzICA9IGxhc3ROYW1lSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBlbWFpbENsYXNzICAgICA9IGVtYWlsSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBwYXNzd29yZENsYXNzICA9IHBhc3N3b3JkSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCB1c2VyVHlwZUNsYXNzICA9IHVzZXJUeXBlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG5cblxuXG4gICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9KGV2ZW50KSA9PntcbiAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICBpZighZm9ybVZhbGlkKXtcbiAgICAgICByZXR1cm47XG4gICAgIH1cbiAgICAgY29uc29sZS5sb2coZmlyc3ROYW1lVmFsdWUsbGFzdE5hbWVWYWx1ZSxlbWFpbFZhbHVlLHBhc3N3b3JkVmFsdWUsdXNlclR5cGVWYWx1ZSk7XG4gICAgIHJlc2V0Rmlyc3ROYW1lKCk7XG4gICAgIHJlc2V0TGFzdE5hbWUoKTtcbiAgICAgcmVzZXRFbWFpbCgpO1xuICAgICByZXNldFBhc3N3b3JkKCk7XG4gICAgIHJlc2V0VXNlclR5cGUoKTtcbiAgIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICBcbiAgPENhcmQ+XG4gICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtmaXJzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgRmlyc3QgTmFtZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGFzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2xhc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17bGFzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICB7bGFzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTGFzdCBOYW1lPC9wPn1cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlbWFpbENsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5FLU1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSduYW1lJyBcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZW1haWxCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICB7ZW1haWxIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFZhbGlkIEVtYWlsPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzc3dvcmRDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJyBcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17cGFzc3dvcmRCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtwYXNzd29yZEhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgbW9yZSB0aGFuIDUgQ2hhcmFjdGVyczwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyVHlwZUNsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5Vc2VyIFR5cGVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3VzZXJUeXBlVmFsdWV9IG9uQmx1cj17dXNlclR5cGVCbHVySGFuZGxlcn0gIG9uQ2hhbmdlPXt1c2VyVHlwZUNoYW5nZUhhbmRsZXJ9IG5hbWU9XCJ1c2VydHlwZXNcIiBpZD1cInVzZXJ0eXBlc1wiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlBsZWFzZSBzZWxlY3QgWW91ciBVc2VyIFR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nYWRtaW4nPkFkbWluPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3N1cGVydmlzb3InPlN1cGVydmlzb3I8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWFuYWdlcic+TWFuYWdlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzYWxlc21hbic+U2FsZXNtYW48L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZW1wbG95ZWUnPkVtcGxveWVlPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHt1c2VyVHlwZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgU2VsZWN0IGEgVXNlciBUeXBlPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3VzZXJUeXBlQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdnZW5kZXInPkdlbmRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiTUFMRVwiIGRlZmF1bHRDaGVja2VkIG5hbWU9XCJnZW5kZXJcIiBpZD1cImdlbmRlclwiLz4gTWFsZVxuICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJGQU1FTEVcIiAgbmFtZT1cImdlbmRlclwiIGlkPVwiZ2VuZGVyXCIgLz4gRmVtYWxlICAgICAgIFxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PiAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1hY3Rpb25zJz5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWZvcm1WYWxpZH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8L0NhcmQ+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEZvcm1OZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9