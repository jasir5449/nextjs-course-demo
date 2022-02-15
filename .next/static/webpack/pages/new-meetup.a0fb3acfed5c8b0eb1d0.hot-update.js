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
            lineNumber: 91,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "name",
            value: firstNameValue,
            onChange: firstNameChangeHandler,
            onBlur: firstNameBlurHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }, _this), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "error-text",
            children: "Please Enter Your First Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 35
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: lastNameClass,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "name",
            value: lastNameValue,
            onChange: lastNameChangeHandler,
            onBlur: lastNameBlurHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, _this), lastNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "error-text",
            children: "Please Enter Your Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 32
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "name",
            value: emailValue,
            onChange: emailChangeHandler,
            onBlur: emailBlurHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), emailHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "error-text",
            children: "Please Enter Valid Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: passwordClass,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            id: "password",
            value: passwordValue,
            onChange: passwordChangeHandler,
            onBlur: passwordBlurHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), passwordHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "error-text",
            children: "Please Enter more than 5 Characters"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 34
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
            lineNumber: 137,
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
              lineNumber: 139,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "admin",
              children: "Admin"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "supervisor",
              children: "Supervisor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "manager",
              children: "Manager"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "salesman",
              children: "Salesman"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "employee",
              children: "Employee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), userTypeHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "error-text",
            children: "Please Select a User Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 34
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "form-actions",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: !formValid,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
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

/***/ "./components/ui/Card.js":
false,

/***/ "./components/ui/Card.module.css":
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/NewMeetupForm.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Card.module.css":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJpc05vdEVtcHR5IiwidmFsdWUiLCJ0cmltIiwiaXNFbWFpbCIsImluY2x1ZGVzIiwiaXNMZW5ndGgiLCJsZW5ndGgiLCJNZWV0dXBGb3JtTmV3IiwicHJvcHMiLCJ1c2VJbnB1dCIsImZpcnN0TmFtZVZhbHVlIiwiZmlyc3ROYW1lRm9ybVZhbGlkIiwiaXNWYWxpZCIsImZpcnN0TmFtZUhhc0Vycm9yIiwiaGFzRXJyb3IiLCJmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiZmlyc3ROYW1lQmx1ckhhbmRsZXIiLCJpbnB1dEJsdXJIYW5kbGVyIiwicmVzZXRGaXJzdE5hbWUiLCJyZXNldCIsImxhc3ROYW1lVmFsdWUiLCJsYXN0TmFtZUZvcm1WYWxpZCIsImxhc3ROYW1lSGFzRXJyb3IiLCJsYXN0TmFtZUNoYW5nZUhhbmRsZXIiLCJsYXN0TmFtZUJsdXJIYW5kbGVyIiwicmVzZXRMYXN0TmFtZSIsImVtYWlsVmFsdWUiLCJlbWFpbEZvcm1WYWxpZCIsImVtYWlsSGFzRXJyb3IiLCJlbWFpbENoYW5nZUhhbmRsZXIiLCJlbWFpbEJsdXJIYW5kbGVyIiwicmVzZXRFbWFpbCIsInBhc3N3b3JkVmFsdWUiLCJwYXNzd29yZEZvcm1WYWxpZCIsInBhc3N3b3JkSGFzRXJyb3IiLCJwYXNzd29yZENoYW5nZUhhbmRsZXIiLCJwYXNzd29yZEJsdXJIYW5kbGVyIiwicmVzZXRQYXNzd29yZCIsInVzZXJUeXBlVmFsdWUiLCJ1c2VyVHlwZUZvcm1WYWxpZCIsInVzZXJUeXBlSGFzRXJyb3IiLCJ1c2VyVHlwZUNoYW5nZUhhbmRsZXIiLCJ1c2VyVHlwZUJsdXJIYW5kbGVyIiwicmVzZXRVc2VyVHlwZSIsImZvcm1WYWxpZCIsImZpcnN0TmFtZUNsYXNzIiwibGFzdE5hbWVDbGFzcyIsImVtYWlsQ2xhc3MiLCJwYXNzd29yZENsYXNzIiwidXNlclR5cGVDbGFzcyIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZVZhbHVlIiwidXNlU3RhdGUiLCJlbnRlcmVkVmFsdWUiLCJzZXRFbnRlcmVkVmFsdWUiLCJpc1RvdWNoZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWx1ZUlzVmFsaWQiLCJ0YXJnZXQiLCJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLE9BQWUsRUFBbkI7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxRQUFOLENBQWUsR0FBZixDQUFKO0FBQUEsQ0FBckI7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosS0FBSztBQUFBLFNBQUdBLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWxCO0FBQUEsQ0FBdEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFTMUJDLGdFQUFRLENBQUNULFVBQUQsQ0FUa0I7QUFBQSxNQUd2QlUsY0FIdUIsYUFHN0JULEtBSDZCO0FBQUEs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTs7QUFHQSxTQUFTdUQsYUFBVCxHQUF5QjtBQUFBOztBQUVyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZxQixXQUlSQyxnQkFKUTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpUkFJdkIsaUJBQWdDQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeUJDLEtBQUssQ0FBQyxpQkFBRCxFQUFxQjtBQUM3Q0Msc0JBQU0sRUFBQyxNQURzQztBQUU3Q0Msb0JBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLGlCQUFmLENBRndDO0FBRzdDTSx1QkFBTyxFQUFDO0FBQ0osa0NBQWU7QUFEWDtBQUhxQyxlQUFyQixDQUQ5Qjs7QUFBQTtBQUNRQyxzQkFEUjtBQUFBO0FBQUEscUJBUXNCQSxRQUFRLENBQUNDLElBQVQsRUFSdEI7O0FBQUE7QUFRUUMsb0JBUlI7QUFTRVosb0JBQU0sQ0FBQ2EsSUFBUCxDQUFZLEdBQVo7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKdUI7QUFBQTtBQUFBOztBQWV2QixzQkFBUyxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVQ7QUFFRDs7R0FqQlFkLGE7VUFFVUUscUQ7OztLQUZWRixhO0FBbUJNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLmEwZmIzYWNmZWQ1YzhiMGViMWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1pbnB1dCc7XG5cblxuY29uc3QgaXNOb3RFbXB0eSA9IHZhbHVlID0+IHZhbHVlLnRyaW0oKSE9PScnO1xuY29uc3QgaXNFbWFpbCA9IHZhbHVlID0+IHZhbHVlLmluY2x1ZGVzKCdAJyk7XG5jb25zdCBpc0xlbmd0aCA9IHZhbHVlID0+dmFsdWUubGVuZ3RoID4gNSA7XG5jb25zdCBNZWV0dXBGb3JtTmV3ID0gKHByb3BzKSA9PiB7XG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTpmaXJzdE5hbWVWYWx1ZSxcbiAgICBpc1ZhbGlkOmZpcnN0TmFtZUZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZmlyc3ROYW1lSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmZpcnN0TmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjpmaXJzdE5hbWVCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldEZpcnN0TmFtZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICAgXG4gICBjb25zdCB7XG4gICAgdmFsdWU6bGFzdE5hbWVWYWx1ZSxcbiAgICBpc1ZhbGlkOmxhc3ROYW1lRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBsYXN0TmFtZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjpsYXN0TmFtZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjpsYXN0TmFtZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0TGFzdE5hbWVcbiAgIH0gPSB1c2VJbnB1dChpc05vdEVtcHR5KTtcbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTplbWFpbFZhbHVlLFxuICAgIGlzVmFsaWQ6ZW1haWxGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGVtYWlsSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmVtYWlsQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmVtYWlsQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRFbWFpbFxuICAgfSA9IHVzZUlucHV0KGlzRW1haWwpO1xuICAgY29uc3Qge1xuICAgIHZhbHVlOnBhc3N3b3JkVmFsdWUsXG4gICAgaXNWYWxpZDpwYXNzd29yZEZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogcGFzc3dvcmRIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6cGFzc3dvcmRDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6cGFzc3dvcmRCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldFBhc3N3b3JkXG4gICB9PSB1c2VJbnB1dChpc0xlbmd0aCk7XG5cblxuICAgY29uc3Qge1xuICAgIHZhbHVlOnVzZXJUeXBlVmFsdWUsXG4gICAgaXNWYWxpZDp1c2VyVHlwZUZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogdXNlclR5cGVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6dXNlclR5cGVDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6dXNlclR5cGVCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldFVzZXJUeXBlXG4gICB9PSB1c2VJbnB1dChpc05vdEVtcHR5KTtcbiBcbiAgIGxldCBmb3JtVmFsaWQgPSBmYWxzZTtcblxuICAgaWYoZmlyc3ROYW1lRm9ybVZhbGlkICYmIGxhc3ROYW1lRm9ybVZhbGlkICYmIGVtYWlsRm9ybVZhbGlkICYmIHBhc3N3b3JkRm9ybVZhbGlkICYmIHVzZXJUeXBlRm9ybVZhbGlkKXtcbiAgICAgZm9ybVZhbGlkPXRydWU7XG4gICB9XG5cblxuICAgY29uc3QgZmlyc3ROYW1lQ2xhc3MgPSBmaXJzdE5hbWVIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IGxhc3ROYW1lQ2xhc3MgID0gbGFzdE5hbWVIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IGVtYWlsQ2xhc3MgICAgID0gZW1haWxIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IHBhc3N3b3JkQ2xhc3MgID0gcGFzc3dvcmRIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcbiAgIGNvbnN0IHVzZXJUeXBlQ2xhc3MgID0gdXNlclR5cGVIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcblxuXG5cbiAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0oZXZlbnQpID0+e1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgIGlmKCFmb3JtVmFsaWQpe1xuICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgICBjb25zb2xlLmxvZyhmaXJzdE5hbWVWYWx1ZSxsYXN0TmFtZVZhbHVlLGVtYWlsVmFsdWUscGFzc3dvcmRWYWx1ZSx1c2VyVHlwZVZhbHVlKTtcbiAgICAgcmVzZXRGaXJzdE5hbWUoKTtcbiAgICAgcmVzZXRMYXN0TmFtZSgpO1xuICAgICByZXNldEVtYWlsKCk7XG4gICAgIHJlc2V0UGFzc3dvcmQoKTtcbiAgICAgcmVzZXRVc2VyVHlwZSgpO1xuICAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuXG4gIFxuXG4gICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpcnN0TmFtZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWVWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtmaXJzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtmaXJzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgRmlyc3QgTmFtZTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGFzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2xhc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17bGFzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICB7bGFzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTGFzdCBOYW1lPC9wPn1cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlbWFpbENsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5FLU1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSduYW1lJyBcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2VtYWlsQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZW1haWxCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICB7ZW1haWxIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFZhbGlkIEVtYWlsPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzc3dvcmRDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJyBcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3b3JkQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17cGFzc3dvcmRCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtwYXNzd29yZEhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgbW9yZSB0aGFuIDUgQ2hhcmFjdGVyczwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyVHlwZUNsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5Vc2VyIFR5cGVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3VzZXJUeXBlVmFsdWV9IG9uQmx1cj17dXNlclR5cGVCbHVySGFuZGxlcn0gIG9uQ2hhbmdlPXt1c2VyVHlwZUNoYW5nZUhhbmRsZXJ9IG5hbWU9XCJ1c2VydHlwZXNcIiBpZD1cInVzZXJ0eXBlc1wiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlBsZWFzZSBzZWxlY3QgWW91ciBVc2VyIFR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nYWRtaW4nPkFkbWluPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3N1cGVydmlzb3InPlN1cGVydmlzb3I8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWFuYWdlcic+TWFuYWdlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzYWxlc21hbic+U2FsZXNtYW48L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZW1wbG95ZWUnPkVtcGxveWVlPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIHt1c2VyVHlwZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgU2VsZWN0IGEgVXNlciBUeXBlPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3VzZXJUeXBlQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdnZW5kZXInPkdlbmRlcjwvbGFiZWw+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiTUFMRVwiIGRlZmF1bHRDaGVja2VkIG5hbWU9XCJnZW5kZXJcIiBpZD1cImdlbmRlclwiLz4gTWFsZVxuICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJGQU1FTEVcIiAgbmFtZT1cImdlbmRlclwiIGlkPVwiZ2VuZGVyXCIgLz4gRmVtYWxlICAgICAgIFxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PiAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1hY3Rpb25zJz5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWZvcm1WYWxpZH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEZvcm1OZXc7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKHZhbGlkYXRlVmFsdWUpID0+IHtcclxuICBjb25zdCBbZW50ZXJlZFZhbHVlLCBzZXRFbnRlcmVkVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc1RvdWNoZWQsIHNldElzVG91Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlSXNWYWxpZCA9IHZhbGlkYXRlVmFsdWUoZW50ZXJlZFZhbHVlKTtcclxuICBjb25zdCBoYXNFcnJvciA9ICF2YWx1ZUlzVmFsaWQgJiYgaXNUb3VjaGVkO1xyXG5cclxuICBjb25zdCB2YWx1ZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVudGVyZWRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlucHV0Qmx1ckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldElzVG91Y2hlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldEVudGVyZWRWYWx1ZSgnJyk7XHJcbiAgICBzZXRJc1RvdWNoZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZTogZW50ZXJlZFZhbHVlLFxyXG4gICAgaXNWYWxpZDogdmFsdWVJc1ZhbGlkLFxyXG4gICAgaGFzRXJyb3IsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBpbnB1dEJsdXJIYW5kbGVyLFxyXG4gICAgcmVzZXRcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7IiwiaW1wb3J0IE1lZXR1cEZvcm1OZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcnO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9ICBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvbmV3LW1lZXR1cCcgLCB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXN1bHQ9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfVxyXG4gIHJldHVybiAgKDxNZWV0dXBGb3JtTmV3IC8+KVxyXG4gICAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9