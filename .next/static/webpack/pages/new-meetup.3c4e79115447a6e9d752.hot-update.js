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
      titleValue = _useInput.value,
      titleFormValid = _useInput.isValid,
      titleHasError = _useInput.hasError,
      titleChangeHandler = _useInput.valueChangeHandler,
      titleBlurHandler = _useInput.inputBlurHandler,
      resetTitle = _useInput.reset;

  var _useInput2 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      firstNameValue = _useInput2.value,
      firstNameFormValid = _useInput2.isValid,
      firstNameHasError = _useInput2.hasError,
      firstNameChangeHandler = _useInput2.valueChangeHandler,
      firstNameBlurHandler = _useInput2.inputBlurHandler,
      resetFirstName = _useInput2.reset;

  var _useInput3 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      lastNameValue = _useInput3.value,
      lastNameFormValid = _useInput3.isValid,
      lastNameHasError = _useInput3.hasError,
      lastNameChangeHandler = _useInput3.valueChangeHandler,
      lastNameBlurHandler = _useInput3.inputBlurHandler,
      resetLastName = _useInput3.reset;

  var _useInput4 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isEmail),
      emailValue = _useInput4.value,
      emailFormValid = _useInput4.isValid,
      emailHasError = _useInput4.hasError,
      emailChangeHandler = _useInput4.valueChangeHandler,
      emailBlurHandler = _useInput4.inputBlurHandler,
      resetEmail = _useInput4.reset;

  var _useInput5 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      mobileValue = _useInput5.value,
      mobileFormValid = _useInput5.isValid,
      mobileHasError = _useInput5.hasError,
      mobileChangeHandler = _useInput5.valueChangeHandler,
      mobileBlurHandler = _useInput5.inputBlurHandler,
      resetMobile = _useInput5.reset;

  var _useInput6 = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty),
      userTypeValue = _useInput6.value,
      userTypeFormValid = _useInput6.isValid,
      userTypeHasError = _useInput6.hasError,
      userTypeChangeHandler = _useInput6.valueChangeHandler,
      userTypeBlurHandler = _useInput6.inputBlurHandler,
      resetUserType = _useInput6.reset;

  var formValid = false;

  if (titleFormValid && firstNameFormValid && lastNameFormValid && emailFormValid && mobileFormValid && userTypeFormValid) {
    formValid = true;
  }

  var titleClass = titleHasError ? 'form-control invalid' : 'form-control ';
  var firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control ';
  var lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control ';
  var emailClass = emailHasError ? 'form-control invalid' : 'form-control ';
  var mobileClass = mobileHasError ? 'form-control invalid' : 'form-control ';
  var userTypeClass = userTypeHasError ? 'form-control invalid' : 'form-control ';

  var formSubmitHandler = function formSubmitHandler(event) {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    console.log(titleValue, firstNameValue, lastNameValue, emailValue, mobileValue, userTypeValue);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetMobile();
    resetTitle();
    resetUserType();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "form",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: formSubmitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "title-new",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "title1",
              children: "Create New NEXT JS Meetup"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: titleClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: titleValue,
                onChange: titleChangeHandler,
                onBlur: titleBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 11
              }, _this), titleHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 31
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: lastNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: lastNameValue,
                onChange: lastNameChangeHandler,
                onBlur: lastNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 11
              }, _this), lastNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
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
                lineNumber: 145,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: emailValue,
                onChange: emailChangeHandler,
                onBlur: emailBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 13
              }, _this), emailHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Valid Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: mobileClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mobile",
                children: "Mobile Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                id: "mobile",
                value: mobileValue,
                onChange: mobileChangeHandler,
                onBlur: mobileBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 13
              }, _this), mobileHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Mobile Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Meetup Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Meetup Poster Url"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Meetup Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "description",
                children: "Meetup Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                id: "description",
                required: true,
                rows: "5",
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler,
                value: firstNameValue,
                children: firstNameValue
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-actions",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: !formValid,
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 3
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, _this);
};

_s(MeetupFormNew, "pw4/0v77l/fpWuETNBIro/9pRjk=", false, function () {
  return [_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"], _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiXSwibmFtZXMiOlsiaXNOb3RFbXB0eSIsInZhbHVlIiwidHJpbSIsImlzRW1haWwiLCJpbmNsdWRlcyIsImlzTGVuZ3RoIiwibGVuZ3RoIiwiTWVldHVwRm9ybU5ldyIsInByb3BzIiwidXNlSW5wdXQiLCJ0aXRsZVZhbHVlIiwidGl0bGVGb3JtVmFsaWQiLCJpc1ZhbGlkIiwidGl0bGVIYXNFcnJvciIsImhhc0Vycm9yIiwidGl0bGVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwidGl0bGVCbHVySGFuZGxlciIsImlucHV0Qmx1ckhhbmRsZXIiLCJyZXNldFRpdGxlIiwicmVzZXQiLCJmaXJzdE5hbWVWYWx1ZSIsImZpcnN0TmFtZUZvcm1WYWxpZCIsImZpcnN0TmFtZUhhc0Vycm9yIiwiZmlyc3ROYW1lQ2hhbmdlSGFuZGxlciIsImZpcnN0TmFtZUJsdXJIYW5kbGVyIiwicmVzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZVZhbHVlIiwibGFzdE5hbWVGb3JtVmFsaWQiLCJsYXN0TmFtZUhhc0Vycm9yIiwibGFzdE5hbWVDaGFuZ2VIYW5kbGVyIiwibGFzdE5hbWVCbHVySGFuZGxlciIsInJlc2V0TGFzdE5hbWUiLCJlbWFpbFZhbHVlIiwiZW1haWxGb3JtVmFsaWQiLCJlbWFpbEhhc0Vycm9yIiwiZW1haWxDaGFuZ2VIYW5kbGVyIiwiZW1haWxCbHVySGFuZGxlciIsInJlc2V0RW1haWwiLCJtb2JpbGVWYWx1ZSIsIm1vYmlsZUZvcm1WYWxpZCIsIm1vYmlsZUhhc0Vycm9yIiwibW9iaWxlQ2hhbmdlSGFuZGxlciIsIm1vYmlsZUJsdXJIYW5kbGVyIiwicmVzZXRNb2JpbGUiLCJ1c2VyVHlwZVZhbHVlIiwidXNlclR5cGVGb3JtVmFsaWQiLCJ1c2VyVHlwZUhhc0Vycm9yIiwidXNlclR5cGVDaGFuZ2VIYW5kbGVyIiwidXNlclR5cGVCbHVySGFuZGxlciIsInJlc2V0VXNlclR5cGUiLCJmb3JtVmFsaWQiLCJ0aXRsZUNsYXNzIiwiZmlyc3ROYW1lQ2xhc3MiLCJsYXN0TmFtZUNsYXNzIiwiZW1haWxDbGFzcyIsIm1vYmlsZUNsYXNzIiwidXNlclR5cGVDbGFzcyIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sT0FBZSxFQUFuQjtBQUFBLENBQXhCOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLFFBQU4sQ0FBZSxHQUFmLENBQUo7QUFBQSxDQUFyQjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixLQUFLO0FBQUEsU0FBR0EsS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBbEI7QUFBQSxDQUF0Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQVUxQkMsZ0VBQVEsQ0FBQ1QsVUFBRCxDQVZrQjtBQUFBLE1BSXZCVSxVQUp1QixhQUk3QlQsS0FKNkI7QUFBQSxNQUtyQlUsY0FMcUIsYUFLN0JDLE9BTDZCO0FBQUEsTUFNbkJDLGFBTm1CLGFBTTdCQyxRQU42QjtBQUFBLE1BT1ZDLGtCQVBVLGFBTzdCQyxrQkFQNkI7QUFBQSxNQVFaQyxnQkFSWSxhQVE3QkMsZ0JBUjZCO0FBQUEsTUFTdkJDLFVBVHVCLGFBUzdCQyxLQVQ2Qjs7QUFBQSxtQkFtQjFCWCxnRUFBUSxDQUFDVCxVQUFELENBbkJrQjtBQUFBLE1BYXZCcUIsY0FidUIsY0FhN0JwQixLQWI2QjtBQUFBLE1BY3JCcUIsa0JBZHFCLGNBYzdCVixPQWQ2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QUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFRTtBQUNFLGtCQUFFLEVBQUMsYUFETDtBQUVFLHdCQUFRLE1BRlY7QUFHRSxvQkFBSSxFQUFDLEdBSFA7QUFJRSx3QkFBUSxFQUFFN0Isc0JBSlo7QUFLRSxzQkFBTSxFQUFFQyxvQkFMVjtBQU1FLHFCQUFLLEVBQUVKLGNBTlQ7QUFBQSwwQkFPRUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBVUtFLGlCQUFpQixpQkFBSTtBQUFHLHlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwR0YsZUFzSEU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FDRTtBQUFRLHNCQUFRLEVBQUUsQ0FBQzRCLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvSUQsQ0EzTkQ7O0dBQU01QyxhO1VBVUNFLHdELEVBU0FBLHdELEVBU0FBLHdELEVBUUFBLHdELEVBUURBLHdELEVBVUFBLHdEOzs7S0F0REFGLGE7QUE2TlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuM2M0ZTc5MTE1NDQ3YTZlOWQ3NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLWlucHV0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuXG5cbmNvbnN0IGlzTm90RW1wdHkgPSB2YWx1ZSA9PiB2YWx1ZS50cmltKCkhPT0nJztcbmNvbnN0IGlzRW1haWwgPSB2YWx1ZSA9PiB2YWx1ZS5pbmNsdWRlcygnQCcpO1xuY29uc3QgaXNMZW5ndGggPSB2YWx1ZSA9PnZhbHVlLmxlbmd0aCA+IDUgO1xuY29uc3QgTWVldHVwRm9ybU5ldyA9IChwcm9wcykgPT4ge1xuXG4gIFxuICBjb25zdCB7XG4gICAgdmFsdWU6dGl0bGVWYWx1ZSxcbiAgICBpc1ZhbGlkOnRpdGxlRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiB0aXRsZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjp0aXRsZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjp0aXRsZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0VGl0bGVcbiAgIH0gPSB1c2VJbnB1dChpc05vdEVtcHR5KTtcbiAgXG4gIGNvbnN0IHtcbiAgICB2YWx1ZTpmaXJzdE5hbWVWYWx1ZSxcbiAgICBpc1ZhbGlkOmZpcnN0TmFtZUZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZmlyc3ROYW1lSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmZpcnN0TmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjpmaXJzdE5hbWVCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldEZpcnN0TmFtZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuXG4gICBjb25zdCB7XG4gICAgdmFsdWU6bGFzdE5hbWVWYWx1ZSxcbiAgICBpc1ZhbGlkOmxhc3ROYW1lRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBsYXN0TmFtZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjpsYXN0TmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjpsYXN0TmFtZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0TGFzdE5hbWVcbiAgIH0gPSB1c2VJbnB1dChpc05vdEVtcHR5KTtcbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTplbWFpbFZhbHVlLFxuICAgIGlzVmFsaWQ6ZW1haWxGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGVtYWlsSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmVtYWlsQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmVtYWlsQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRFbWFpbFxuICAgfSA9IHVzZUlucHV0KGlzRW1haWwpO1xuICAgY29uc3Qge1xuICAgIHZhbHVlOm1vYmlsZVZhbHVlLFxuICAgIGlzVmFsaWQ6bW9iaWxlRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBtb2JpbGVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6bW9iaWxlQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOm1vYmlsZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0TW9iaWxlXG4gICB9PSB1c2VJbnB1dChpc05vdEVtcHR5KTtcblxuXG4gICBjb25zdCB7XG4gICAgdmFsdWU6dXNlclR5cGVWYWx1ZSxcbiAgICBpc1ZhbGlkOnVzZXJUeXBlRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiB1c2VyVHlwZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjp1c2VyVHlwZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjp1c2VyVHlwZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0VXNlclR5cGVcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuIFxuICAgbGV0IGZvcm1WYWxpZCA9IGZhbHNlO1xuXG4gICBpZih0aXRsZUZvcm1WYWxpZCAmJiBmaXJzdE5hbWVGb3JtVmFsaWQgJiYgbGFzdE5hbWVGb3JtVmFsaWQgJiYgZW1haWxGb3JtVmFsaWQgJiYgbW9iaWxlRm9ybVZhbGlkICYmIHVzZXJUeXBlRm9ybVZhbGlkKXtcbiAgICAgZm9ybVZhbGlkPXRydWU7XG4gICB9XG5cblxuICAgY29uc3QgdGl0bGVDbGFzcyA9IHRpdGxlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBmaXJzdE5hbWVDbGFzcyA9IGZpcnN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgbGFzdE5hbWVDbGFzcyAgPSBsYXN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgZW1haWxDbGFzcyAgICAgPSBlbWFpbEhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgbW9iaWxlQ2xhc3MgID0gbW9iaWxlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCB1c2VyVHlwZUNsYXNzICA9IHVzZXJUeXBlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG5cblxuXG4gICBjb25zdCBmb3JtU3VibWl0SGFuZGxlciA9KGV2ZW50KSA9PntcbiAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICBpZighZm9ybVZhbGlkKXtcbiAgICAgICByZXR1cm47XG4gICAgIH1cbiAgICAgY29uc29sZS5sb2codGl0bGVWYWx1ZSxmaXJzdE5hbWVWYWx1ZSxsYXN0TmFtZVZhbHVlLGVtYWlsVmFsdWUsbW9iaWxlVmFsdWUsdXNlclR5cGVWYWx1ZSk7XG4gICAgIHJlc2V0Rmlyc3ROYW1lKCk7XG4gICAgIHJlc2V0TGFzdE5hbWUoKTtcbiAgICAgcmVzZXRFbWFpbCgpO1xuICAgICByZXNldE1vYmlsZSgpO1xuICAgICByZXNldFRpdGxlKCk7XG4gICAgIHJlc2V0VXNlclR5cGUoKTtcbiAgIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICA8ZGl2IGNsYXNzTmFtZT0nZm9ybSc+XG4gIDxDYXJkPlxuICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XG4gICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUtbmV3Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZTEnPkNyZWF0ZSBOZXcgTkVYVCBKUyBNZWV0dXA8L3NwYW4+XG4gXG4gICAgICA8L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpdGxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17dGl0bGVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHt0aXRsZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIEZpcnN0IE5hbWU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xhc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtsYXN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2xhc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2xhc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIExhc3QgTmFtZTwvcD59XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWxDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+RS1NYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZScgXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2VtYWlsQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2VtYWlsSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbDwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vYmlsZUNsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtb2JpbGUnPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgaWQ9J21vYmlsZScgXG4gICAgICAgICAgICB2YWx1ZT17bW9iaWxlVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17bW9iaWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17bW9iaWxlQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7bW9iaWxlSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1vYmlsZSBOdW1iZXI8L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk1lZXR1cCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2ZpcnN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZUJsdXJIYW5kbGVyfSAvPlxuICAgICAgICAgICAge2ZpcnN0TmFtZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zmlyc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5NZWV0dXAgUG9zdGVyIFVybDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtmaXJzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTWVldHVwIFRpdGxlPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+TWVldHVwIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBUaXRsZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+TWVldHVwIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgb25DaGFuZ2U9e2ZpcnN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZUJsdXJIYW5kbGVyfSBcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWVWYWx1ZX1cbiAgICAgICAgICA+e2ZpcnN0TmFtZVZhbHVlfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBUaXRsZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tYWN0aW9ucyc+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFmb3JtVmFsaWR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBGb3JtTmV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==