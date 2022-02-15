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
              lineNumber: 91,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
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
                lineNumber: 110,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: lastNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: lastNameValue,
                onChange: lastNameChangeHandler,
                onBlur: lastNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 11
              }, _this), lastNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 32
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
                lineNumber: 133,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: emailValue,
                onChange: emailChangeHandler,
                onBlur: emailBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 13
              }, _this), emailHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Valid Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: passwordClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                children: "Mobile Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                id: "password",
                value: passwordValue,
                onChange: passwordChangeHandler,
                onBlur: passwordBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 13
              }, _this), passwordHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Newmeric Value Only"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 34
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
                lineNumber: 155,
                columnNumber: 11
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 35
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
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
                children: "Meetup Address"
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
                lineNumber: 191,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                id: "description",
                required: true,
                rows: "5",
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler,
                children: firstNameValue
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 11
              }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
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
            className: "form-actions",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: !formValid,
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
      lineNumber: 87,
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

/***/ }),

/***/ "./components/meetups/NewMeetupForm.js":
false,

/***/ "./components/meetups/NewMeetupForm.module.css":
false,

/***/ "./hooks/use-input.js":
/*!****************************!*\
  !*** ./hooks/use-input.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



var useInput = function useInput(validateValue) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      enteredValue = _useState[0],
      setEnteredValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isTouched = _useState2[0],
      setIsTouched = _useState2[1];

  var valueIsValid = validateValue(enteredValue);
  var hasError = !valueIsValid && isTouched;

  var valueChangeHandler = function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  };

  var inputBlurHandler = function inputBlurHandler(event) {
    setIsTouched(true);
  };

  var reset = function reset() {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset
  };
};

_s(useInput, "uN9KnldpqRIT2LwByiGz+Mp8wEw=");

/* harmony default export */ __webpack_exports__["default"] = (useInput);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/NewMeetupForm.module.css":
false,

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
/* harmony import */ var _components_meetups_MeetupFormNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupFormNew */ "./components/meetups/MeetupFormNew.js");
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_MeetupFormNew__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJpc05vdEVtcHR5IiwidmFsdWUiLCJ0cmltIiwiaXNFbWFpbCIsImluY2x1ZGVzIiwiaXNMZW5ndGgiLCJsZW5ndGgiLCJNZWV0dXBGb3JtTmV3IiwicHJvcHMiLCJ1c2VJbnB1dCIsImZpcnN0TmFtZVZhbHVlIiwiZmlyc3ROYW1lRm9ybVZhbGlkIiwiaXNWYWxpZCIsImZpcnN0TmFtZUhhc0Vycm9yIiwiaGFzRXJyb3IiLCJmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiZmlyc3ROYW1lQmx1ckhhbmRsZXIiLCJpbnB1dEJsdXJIYW5kbGVyIiwicmVzZXRGaXJzdE5hbWUiLCJyZXNldCIsImxhc3ROYW1lVmFsdWUiLCJsYXN0TmFtZUZvcm1WYWxpZCIsImxhc3ROYW1lSGFzRXJyb3IiLCJsYXN0TmFtZUNoYW5nZUhhbmRsZXIiLCJsYXN0TmFtZUJsdXJIYW5kbGVyIiwicmVzZXRMYXN0TmFtZSIsImVtYWlsVmFsdWUiLCJlbWFpbEZvcm1WYWxpZCIsImVtYWlsSGFzRXJyb3IiLCJlbWFpbENoYW5nZUhhbmRsZXIiLCJlbWFpbEJsdXJIYW5kbGVyIiwicmVzZXRFbWFpbCIsInBhc3N3b3JkVmFsdWUiLCJwYXNzd29yZEZvcm1WYWxpZCIsInBhc3N3b3JkSGFzRXJyb3IiLCJwYXNzd29yZENoYW5nZUhhbmRsZXIiLCJwYXNzd29yZEJsdXJIYW5kbGVyIiwicmVzZXRQYXNzd29yZCIsInVzZXJUeXBlVmFsdWUiLCJ1c2VyVHlwZUZvcm1WYWxpZCIsInVzZXJUeXBlSGFzRXJyb3IiLCJ1c2VyVHlwZUNoYW5nZUhhbmRsZXIiLCJ1c2VyVHlwZUJsdXJIYW5kbGVyIiwicmVzZXRVc2VyVHlwZSIsImZvcm1WYWxpZCIsImZpcnN0TmFtZUNsYXNzIiwibGFzdE5hbWVDbGFzcyIsImVtYWlsQ2xhc3MiLCJwYXNzd29yZENsYXNzIiwidXNlclR5cGVDbGFzcyIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZVZhbHVlIiwidXNlU3RhdGUiLCJlbnRlcmVkVmFsdWUiLCJzZXRFbnRlcmVkVmFsdWUiLCJpc1RvdWNoZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWx1ZUlzVmFsaWQiLCJ0YXJnZXQiLCJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLE9BQWUsRUFBbkI7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxRQUFOLENBQWUsR0FBZixDQUFKO0FBQUEsQ0FBckI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWxCO0FBQUEsQ0FBdEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFTMUJDLGdFQUFRLENBQUNULFVBQUQsQ0FUa0I7QUFBQSxNQUd2QlUsY0FIdUIsYUFHN0JULEtBSDZC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QyxTQUFMLENBQWVMLGlCQUFmLENBRndDO0FBRzdDTSx1QkFBTyxFQUFDO0FBQ0osa0NBQWU7QUFEWDtBQUhxQyxlQUFyQixDQUQ5Qjs7QUFBQTtBQUNRQyxzQkFEUjtBQUFBO0FBQUEscUJBUXNCQSxRQUFRLENBQUNDLElBQVQsRUFSdEI7O0FBQUE7QUFRUUMsb0JBUlI7QUFTRVosb0JBQU0sQ0FBQ2EsSUFBUCxDQUFZLEdBQVo7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKdUI7QUFBQTtBQUFBOztBQWV2QixzQkFBUyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFFRDs7R0FqQlFkLGE7VUFFVUUscUQ7OztLQUZWRixhO0FBbUJNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLmNlYjQxYzRhNTIyOGVmOGFjOWFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1pbnB1dCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcblxuXG5jb25zdCBpc05vdEVtcHR5ID0gdmFsdWUgPT4gdmFsdWUudHJpbSgpIT09Jyc7XG5jb25zdCBpc0VtYWlsID0gdmFsdWUgPT4gdmFsdWUuaW5jbHVkZXMoJ0AnKTtcbmNvbnN0IGlzTGVuZ3RoID0gdmFsdWUgPT52YWx1ZS5sZW5ndGggPiA1IDtcbmNvbnN0IE1lZXR1cEZvcm1OZXcgPSAocHJvcHMpID0+IHtcblxuICAgY29uc3Qge1xuICAgIHZhbHVlOmZpcnN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6Zmlyc3ROYW1lRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBmaXJzdE5hbWVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmZpcnN0TmFtZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0Rmlyc3ROYW1lXG4gICB9ID0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTpsYXN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6bGFzdE5hbWVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGxhc3ROYW1lSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmxhc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmxhc3ROYW1lQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRMYXN0TmFtZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICAgY29uc3Qge1xuICAgIHZhbHVlOmVtYWlsVmFsdWUsXG4gICAgaXNWYWxpZDplbWFpbEZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZW1haWxIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6ZW1haWxDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6ZW1haWxCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldEVtYWlsXG4gICB9ID0gdXNlSW5wdXQoaXNFbWFpbCk7XG4gICBjb25zdCB7XG4gICAgdmFsdWU6cGFzc3dvcmRWYWx1ZSxcbiAgICBpc1ZhbGlkOnBhc3N3b3JkRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBwYXNzd29yZEhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjpwYXNzd29yZENoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjpwYXNzd29yZEJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0UGFzc3dvcmRcbiAgIH09IHVzZUlucHV0KGlzTGVuZ3RoKTtcblxuXG4gICBjb25zdCB7XG4gICAgdmFsdWU6dXNlclR5cGVWYWx1ZSxcbiAgICBpc1ZhbGlkOnVzZXJUeXBlRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiB1c2VyVHlwZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjp1c2VyVHlwZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjp1c2VyVHlwZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0VXNlclR5cGVcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuIFxuICAgbGV0IGZvcm1WYWxpZCA9IGZhbHNlO1xuXG4gICBpZihmaXJzdE5hbWVGb3JtVmFsaWQgJiYgbGFzdE5hbWVGb3JtVmFsaWQgJiYgZW1haWxGb3JtVmFsaWQgJiYgcGFzc3dvcmRGb3JtVmFsaWQgJiYgdXNlclR5cGVGb3JtVmFsaWQpe1xuICAgICBmb3JtVmFsaWQ9dHJ1ZTtcbiAgIH1cblxuXG4gICBjb25zdCBmaXJzdE5hbWVDbGFzcyA9IGZpcnN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgbGFzdE5hbWVDbGFzcyAgPSBsYXN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgZW1haWxDbGFzcyAgICAgPSBlbWFpbEhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgcGFzc3dvcmRDbGFzcyAgPSBwYXNzd29yZEhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgdXNlclR5cGVDbGFzcyAgPSB1c2VyVHlwZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuXG5cblxuICAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPShldmVudCkgPT57XG4gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgaWYoIWZvcm1WYWxpZCl7XG4gICAgICAgcmV0dXJuO1xuICAgICB9XG4gICAgIGNvbnNvbGUubG9nKGZpcnN0TmFtZVZhbHVlLGxhc3ROYW1lVmFsdWUsZW1haWxWYWx1ZSxwYXNzd29yZFZhbHVlLHVzZXJUeXBlVmFsdWUpO1xuICAgICByZXNldEZpcnN0TmFtZSgpO1xuICAgICByZXNldExhc3ROYW1lKCk7XG4gICAgIHJlc2V0RW1haWwoKTtcbiAgICAgcmVzZXRQYXNzd29yZCgpO1xuICAgICByZXNldFVzZXJUeXBlKCk7XG4gICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgPGRpdiBjbGFzc05hbWU9J2Zvcm0nPlxuICA8Q2FyZD5cbiAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxuICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlLW5ldyc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUxJz5DcmVhdGUgTmV3IE5FWFQgSlMgTWVldHVwPC9zcGFuPlxuIFxuICAgICAgPC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+TWVldHVwIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2ZpcnN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZUJsdXJIYW5kbGVyfSAvPlxuICAgICAgICAgICAge2ZpcnN0TmFtZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIEZpcnN0IE5hbWU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xhc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtsYXN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2xhc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2xhc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIExhc3QgTmFtZTwvcD59XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWxDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+RS1NYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZScgXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWxWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2VtYWlsQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAge2VtYWlsSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbDwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bhc3N3b3JkQ2xhc3N9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5Nb2JpbGUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgIGlkPSdwYXNzd29yZCcgXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd29yZENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e3Bhc3N3b3JkQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7cGFzc3dvcmRIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIE5ld21lcmljIFZhbHVlIE9ubHk8L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPk1lZXR1cCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2ZpcnN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZUJsdXJIYW5kbGVyfSAvPlxuICAgICAgICAgICAge2ZpcnN0TmFtZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zmlyc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5NZWV0dXAgUG9zdGVyIFVybDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtmaXJzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTWVldHVwIFRpdGxlPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+TWVldHVwIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBUaXRsZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+TWVldHVwIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgb25DaGFuZ2U9e2ZpcnN0TmFtZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2ZpcnN0TmFtZUJsdXJIYW5kbGVyfSBcbiAgICAgICAgICA+e2ZpcnN0TmFtZVZhbHVlfTwvdGV4dGFyZWE+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIE1lZXR1cCBUaXRsZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tYWN0aW9ucyc+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFmb3JtVmFsaWR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG4gICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBGb3JtTmV3O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9ICh2YWxpZGF0ZVZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW2VudGVyZWRWYWx1ZSwgc2V0RW50ZXJlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNUb3VjaGVkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0ZVZhbHVlKGVudGVyZWRWYWx1ZSk7XHJcbiAgY29uc3QgaGFzRXJyb3IgPSAhdmFsdWVJc1ZhbGlkICYmIGlzVG91Y2hlZDtcclxuXHJcbiAgY29uc3QgdmFsdWVDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRFbnRlcmVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbnB1dEJsdXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRFbnRlcmVkVmFsdWUoJycpO1xyXG4gICAgc2V0SXNUb3VjaGVkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWU6IGVudGVyZWRWYWx1ZSxcclxuICAgIGlzVmFsaWQ6IHZhbHVlSXNWYWxpZCxcclxuICAgIGhhc0Vycm9yLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgaW5wdXRCbHVySGFuZGxlcixcclxuICAgIHJlc2V0XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0OyIsImltcG9ydCBNZWV0dXBGb3JtTmV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBGb3JtTmV3JztcclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSAgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5ld01lZXR1cFBhZ2UoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnICwge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzdWx0PSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH1cclxuICByZXR1cm4gICg8TWVldHVwRm9ybU5ldyAvPilcclxuICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==