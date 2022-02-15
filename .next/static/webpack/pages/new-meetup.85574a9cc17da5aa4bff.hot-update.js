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
      addressValue = _useInput6.value,
      addressFormValid = _useInput6.isValid,
      addressHasError = _useInput6.hasError,
      addressChangeHandler = _useInput6.valueChangeHandler,
      addressBlurHandler = _useInput6.inputBlurHandler,
      resetAddress = _useInput6.reset;

  var formValid = false;

  if (titleFormValid && firstNameFormValid && lastNameFormValid && emailFormValid && mobileFormValid && addressFormValid) {
    formValid = true;
  }

  var titleClass = titleHasError ? 'form-control invalid' : 'form-control ';
  var firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control ';
  var lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control ';
  var emailClass = emailHasError ? 'form-control invalid' : 'form-control ';
  var mobileClass = mobileHasError ? 'form-control invalid' : 'form-control ';
  var addressClass = addressHasError ? 'form-control invalid' : 'form-control ';

  var formSubmitHandler = function formSubmitHandler(event) {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    console.log(titleValue, firstNameValue, lastNameValue, emailValue, mobileValue, addressValue);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetMobile();
    resetTitle();
    resetAddress();
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
              className: addressClass,
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
                value: addressValue,
                onChange: addressChangeHandler,
                onBlur: addressBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 11
              }, _this), addressHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
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
                htmlFor: "description",
                children: "Meetup Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
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
                lineNumber: 193,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-actions",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: !formValid,
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
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

_s(MeetupFormNew, "00n6C68jfXdyuqJh2rfqmDJabO8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiXSwibmFtZXMiOlsiaXNOb3RFbXB0eSIsInZhbHVlIiwidHJpbSIsImlzRW1haWwiLCJpbmNsdWRlcyIsImlzTGVuZ3RoIiwibGVuZ3RoIiwiTWVldHVwRm9ybU5ldyIsInByb3BzIiwidXNlSW5wdXQiLCJ0aXRsZVZhbHVlIiwidGl0bGVGb3JtVmFsaWQiLCJpc1ZhbGlkIiwidGl0bGVIYXNFcnJvciIsImhhc0Vycm9yIiwidGl0bGVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwidGl0bGVCbHVySGFuZGxlciIsImlucHV0Qmx1ckhhbmRsZXIiLCJyZXNldFRpdGxlIiwicmVzZXQiLCJmaXJzdE5hbWVWYWx1ZSIsImZpcnN0TmFtZUZvcm1WYWxpZCIsImZpcnN0TmFtZUhhc0Vycm9yIiwiZmlyc3ROYW1lQ2hhbmdlSGFuZGxlciIsImZpcnN0TmFtZUJsdXJIYW5kbGVyIiwicmVzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZVZhbHVlIiwibGFzdE5hbWVGb3JtVmFsaWQiLCJsYXN0TmFtZUhhc0Vycm9yIiwibGFzdE5hbWVDaGFuZ2VIYW5kbGVyIiwibGFzdE5hbWVCbHVySGFuZGxlciIsInJlc2V0TGFzdE5hbWUiLCJlbWFpbFZhbHVlIiwiZW1haWxGb3JtVmFsaWQiLCJlbWFpbEhhc0Vycm9yIiwiZW1haWxDaGFuZ2VIYW5kbGVyIiwiZW1haWxCbHVySGFuZGxlciIsInJlc2V0RW1haWwiLCJtb2JpbGVWYWx1ZSIsIm1vYmlsZUZvcm1WYWxpZCIsIm1vYmlsZUhhc0Vycm9yIiwibW9iaWxlQ2hhbmdlSGFuZGxlciIsIm1vYmlsZUJsdXJIYW5kbGVyIiwicmVzZXRNb2JpbGUiLCJhZGRyZXNzVmFsdWUiLCJhZGRyZXNzRm9ybVZhbGlkIiwiYWRkcmVzc0hhc0Vycm9yIiwiYWRkcmVzc0NoYW5nZUhhbmRsZXIiLCJhZGRyZXNzQmx1ckhhbmRsZXIiLCJyZXNldEFkZHJlc3MiLCJmb3JtVmFsaWQiLCJ0aXRsZUNsYXNzIiwiZmlyc3ROYW1lQ2xhc3MiLCJsYXN0TmFtZUNsYXNzIiwiZW1haWxDbGFzcyIsIm1vYmlsZUNsYXNzIiwiYWRkcmVzc0NsYXNzIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsSUFBTixPQUFlLEVBQW5CO0FBQUEsQ0FBeEI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csUUFBTixDQUFlLEdBQWYsQ0FBSjtBQUFBLENBQXJCOztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFKLEtBQUs7QUFBQSxTQUFHQSxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFsQjtBQUFBLENBQXRCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBVTFCQyxnRUFBUSxDQUFDVCxVQUFELENBVmtCO0FBQUEsTUFJdkJVLFVBSnVCLGFBSTdCVCxLQUo2QjtBQUFBLE1BS3JCVSxjQUxxQixhQUs3QkMsT0FMNkI7QUFBQSxNQU1uQkMsYUFObUIsYUFNN0JDLFFBTjZCO0FBQUEsTUFPVkMsa0JBUFUsYUFPN0JDLGtCQVA2QjtBQUFBLE1BUVpDLGdCQVJZLGFBUTdCQyxnQkFSNkI7QUFBQSxNQVN2QkMsVUFUdUIsYUFTN0JDLEtBVDZCOztBQUFBLG1CQW1CMUJYLGdFQUFRLENBQUNULFVBQUQsQ0FuQmtCO0FBQUEsTUFhdkJxQixjQWJ1QixjQWE3QnBCLEtBYjZCO0FBQUEsTUFjckJxQixrQkFkcUIsY0FjN0JWLE9BZDZCO0FBQUEs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bkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlIRCxDQWhORDs7R0FBTTVDLGE7VUFVQ0Usd0QsRUFTQUEsd0QsRUFTQUEsd0QsRUFRQUEsd0QsRUFRREEsd0QsRUFVQUEsd0Q7OztLQXREQUYsYTtBQWtOU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC44NTU3NGE5Y2MxN2RhNWFhNGJmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2UtaW5wdXQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5cblxuY29uc3QgaXNOb3RFbXB0eSA9IHZhbHVlID0+IHZhbHVlLnRyaW0oKSE9PScnO1xuY29uc3QgaXNFbWFpbCA9IHZhbHVlID0+IHZhbHVlLmluY2x1ZGVzKCdAJyk7XG5jb25zdCBpc0xlbmd0aCA9IHZhbHVlID0+dmFsdWUubGVuZ3RoID4gNSA7XG5jb25zdCBNZWV0dXBGb3JtTmV3ID0gKHByb3BzKSA9PiB7XG5cbiAgXG4gIGNvbnN0IHtcbiAgICB2YWx1ZTp0aXRsZVZhbHVlLFxuICAgIGlzVmFsaWQ6dGl0bGVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IHRpdGxlSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOnRpdGxlQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOnRpdGxlQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRUaXRsZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICBcbiAgY29uc3Qge1xuICAgIHZhbHVlOmZpcnN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6Zmlyc3ROYW1lRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBmaXJzdE5hbWVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmZpcnN0TmFtZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0Rmlyc3ROYW1lXG4gICB9ID0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTpsYXN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6bGFzdE5hbWVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGxhc3ROYW1lSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmxhc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmxhc3ROYW1lQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRMYXN0TmFtZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICAgY29uc3Qge1xuICAgIHZhbHVlOmVtYWlsVmFsdWUsXG4gICAgaXNWYWxpZDplbWFpbEZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZW1haWxIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6ZW1haWxDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6ZW1haWxCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldEVtYWlsXG4gICB9ID0gdXNlSW5wdXQoaXNFbWFpbCk7XG4gICBjb25zdCB7XG4gICAgdmFsdWU6bW9iaWxlVmFsdWUsXG4gICAgaXNWYWxpZDptb2JpbGVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IG1vYmlsZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjptb2JpbGVDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6bW9iaWxlQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRNb2JpbGVcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuXG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTphZGRyZXNzVmFsdWUsXG4gICAgaXNWYWxpZDphZGRyZXNzRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBhZGRyZXNzSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmFkZHJlc3NDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6YWRkcmVzc0JsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0QWRkcmVzc1xuICAgfT0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG4gXG4gICBsZXQgZm9ybVZhbGlkID0gZmFsc2U7XG5cbiAgIGlmKHRpdGxlRm9ybVZhbGlkICYmIGZpcnN0TmFtZUZvcm1WYWxpZCAmJiBsYXN0TmFtZUZvcm1WYWxpZCAmJiBlbWFpbEZvcm1WYWxpZCAmJiBtb2JpbGVGb3JtVmFsaWQgJiYgYWRkcmVzc0Zvcm1WYWxpZCl7XG4gICAgIGZvcm1WYWxpZD10cnVlO1xuICAgfVxuXG5cbiAgIGNvbnN0IHRpdGxlQ2xhc3MgPSB0aXRsZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgZmlyc3ROYW1lQ2xhc3MgPSBmaXJzdE5hbWVIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IGxhc3ROYW1lQ2xhc3MgID0gbGFzdE5hbWVIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IGVtYWlsQ2xhc3MgICAgID0gZW1haWxIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IG1vYmlsZUNsYXNzICA9IG1vYmlsZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgYWRkcmVzc0NsYXNzICA9IGFkZHJlc3NIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcblxuXG5cbiAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0oZXZlbnQpID0+e1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgIGlmKCFmb3JtVmFsaWQpe1xuICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgICBjb25zb2xlLmxvZyh0aXRsZVZhbHVlLGZpcnN0TmFtZVZhbHVlLGxhc3ROYW1lVmFsdWUsZW1haWxWYWx1ZSxtb2JpbGVWYWx1ZSxhZGRyZXNzVmFsdWUpO1xuICAgICByZXNldEZpcnN0TmFtZSgpO1xuICAgICByZXNldExhc3ROYW1lKCk7XG4gICAgIHJlc2V0RW1haWwoKTtcbiAgICAgcmVzZXRNb2JpbGUoKTtcbiAgICAgcmVzZXRUaXRsZSgpO1xuICAgICByZXNldEFkZHJlc3MoKTtcbiAgIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cblxuICA8ZGl2IGNsYXNzTmFtZT0nZm9ybSc+XG4gIDxDYXJkPlxuICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0SGFuZGxlcn0+XG4gICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUtbmV3Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZTEnPkNyZWF0ZSBOZXcgTkVYVCBKUyBNZWV0dXA8L3NwYW4+XG4gXG4gICAgICA8L2gxPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGl0bGVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpdGxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17dGl0bGVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHt0aXRsZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIEZpcnN0IE5hbWU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xhc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtsYXN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2xhc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2xhc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIExhc3QgTmFtZTwvcD59XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWxDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+RS1NYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZScgXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2VtYWlsQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2VtYWlsSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbDwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vYmlsZUNsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtb2JpbGUnPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgaWQ9J21vYmlsZScgXG4gICAgICAgICAgICB2YWx1ZT17bW9iaWxlVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17bW9iaWxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17bW9iaWxlQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7bW9iaWxlSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1vYmlsZSBOdW1iZXI8L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthZGRyZXNzQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5NZWV0dXAgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17YWRkcmVzc0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2FkZHJlc3NCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHthZGRyZXNzSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBBZGRyZXNzPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+TWVldHVwIFBvc3RlciBVcmw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBUaXRsZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2Rlc2NyaXB0aW9uJz5NZWV0dXAgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJvd3M9JzUnXG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IFxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZVZhbHVlfVxuICAgICAgICAgID57Zmlyc3ROYW1lVmFsdWV9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIHtmaXJzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTWVldHVwIFRpdGxlPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1hY3Rpb25zJz5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWZvcm1WYWxpZH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEZvcm1OZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9