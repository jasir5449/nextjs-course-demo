module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/new-meetup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupFormNew.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupFormNew.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-input */ "./hooks/use-input.js");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");

var _jsxFileName = "C:\\react-web\\demo-nextjs\\components\\meetups\\MeetupFormNew.js";




const isNotEmpty = value => value.trim() !== '';

const isEmail = value => value.includes('@');

const isLength = value => value.length > 5;

const MeetupFormNew = props => {
  const {
    value: titleValue,
    isValid: titleFormValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: firstNameValue,
    isValid: firstNameFormValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameFormValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailFormValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isEmail);
  const {
    value: mobileValue,
    isValid: mobileFormValid,
    hasError: mobileHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHandler: mobileBlurHandler,
    reset: resetMobile
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: addressValue,
    isValid: addressFormValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: imageValue,
    isValid: imageFormValid,
    hasError: imageHasError,
    valueChangeHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
    reset: resetImage
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  const {
    value: descValue,
    isValid: descFormValid,
    hasError: descHasError,
    valueChangeHandler: descChangeHandler,
    inputBlurHandler: descBlurHandler,
    reset: resetDesc
  } = Object(_hooks_use_input__WEBPACK_IMPORTED_MODULE_2__["default"])(isNotEmpty);
  let formValid = false;

  if (titleFormValid && firstNameFormValid && lastNameFormValid && emailFormValid && mobileFormValid && addressFormValid && imageFormValid && descFormValid) {
    formValid = true;
  }

  const titleClass = titleHasError ? 'form-control invalid' : 'form-control ';
  const firstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control ';
  const lastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control ';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control ';
  const mobileClass = mobileHasError ? 'form-control invalid' : 'form-control ';
  const addressClass = addressHasError ? 'form-control invalid' : 'form-control ';
  const imageClass = imageHasError ? 'form-control invalid' : 'form-control ';
  const descClass = descHasError ? 'form-control invalid' : 'form-control ';

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    const meetupData = {
      title: titleValue,
      firstname: firstNameValue,
      lastname: lastNameValue,
      email: emailValue,
      mobile: mobileValue,
      image: imageValue,
      address: addressValue,
      description: descValue
    };
    props.onAddMeetup(meetupData);
    console.log(titleValue, firstNameValue, lastNameValue, emailValue, mobileValue, addressValue, imageValue, descValue);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetMobile();
    resetTitle();
    resetAddress();
    resetImage();
    resetDesc();
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
              lineNumber: 139,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 5
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: titleClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "title",
                children: "Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "title",
                value: titleValue,
                onChange: titleChangeHandler,
                onBlur: titleBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 11
              }, undefined), titleHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 31
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 5
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: firstNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "name",
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "name",
                value: firstNameValue,
                onChange: firstNameChangeHandler,
                onBlur: firstNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 11
              }, undefined), firstNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 35
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: lastNameClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "lname",
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "lname",
                value: lastNameValue,
                onChange: lastNameChangeHandler,
                onBlur: lastNameBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 11
              }, undefined), lastNameHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 32
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: emailClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "email",
                children: "E-Mail Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 13
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "email",
                value: emailValue,
                onChange: emailChangeHandler,
                onBlur: emailBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 13
              }, undefined), emailHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Valid Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: mobileClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "mobile",
                children: "Mobile Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 13
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                id: "mobile",
                value: mobileValue,
                onChange: mobileChangeHandler,
                onBlur: mobileBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 13
              }, undefined), mobileHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Mobile Number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 32
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: addressClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "address",
                children: "Meetup Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "address",
                value: addressValue,
                onChange: addressChangeHandler,
                onBlur: addressBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 11
              }, undefined), addressHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: imageClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "image",
                children: "Meetup Poster Url"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "image",
                value: imageValue,
                onChange: imageChangeHandler,
                onBlur: imageBlurHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 11
              }, undefined), imageHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Poster URL"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 31
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "control-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: descClass,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "description",
                children: "Meetup Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                id: "description",
                required: true,
                rows: "5",
                onChange: descChangeHandler,
                onBlur: descBlurHandler,
                value: descValue,
                children: descValue
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 11
              }, undefined), descHasError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "error-text",
                children: "Please Enter Your Meetup Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 30
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-actions",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              disabled: !formValid,
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 5
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 3
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 3
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupFormNew);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\react-web\\demo-nextjs\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./hooks/use-input.js":
/*!****************************!*\
  !*** ./hooks/use-input.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = validateValue => {
  const {
    0: enteredValue,
    1: setEnteredValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isTouched,
    1: setIsTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupFormNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupFormNew */ "./components/meetups/MeetupFormNew.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\react-web\\demo-nextjs\\pages\\new-meetup\\index.js";



function NewMeetupPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    router.push('/');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupFormNew__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEZvcm1OZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpc05vdEVtcHR5IiwidmFsdWUiLCJ0cmltIiwiaXNFbWFpbCIsImluY2x1ZGVzIiwiaXNMZW5ndGgiLCJsZW5ndGgiLCJNZWV0dXBGb3JtTmV3IiwicHJvcHMiLCJ0aXRsZVZhbHVlIiwiaXNWYWxpZCIsInRpdGxlRm9ybVZhbGlkIiwiaGFzRXJyb3IiLCJ0aXRsZUhhc0Vycm9yIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwidGl0bGVDaGFuZ2VIYW5kbGVyIiwiaW5wdXRCbHVySGFuZGxlciIsInRpdGxlQmx1ckhhbmRsZXIiLCJyZXNldCIsInJlc2V0VGl0bGUiLCJ1c2VJbnB1dCIsImZpcnN0TmFtZVZhbHVlIiwiZmlyc3ROYW1lRm9ybVZhbGlkIiwiZmlyc3ROYW1lSGFzRXJyb3IiLCJmaXJzdE5hbWVDaGFuZ2VIYW5kbGVyIiwiZmlyc3ROYW1lQmx1ckhhbmRsZXIiLCJyZXNldEZpcnN0TmFtZSIsImxhc3ROYW1lVmFsdWUiLCJsYXN0TmFtZUZvcm1WYWxpZCIsImxhc3ROYW1lSGFzRXJyb3IiLCJsYXN0TmFtZUNoYW5nZUhhbmRsZXIiLCJsYXN0TmFtZUJsdXJIYW5kbGVyIiwicmVzZXRMYXN0TmFtZSIsImVtYWlsVmFsdWUiLCJlbWFpbEZvcm1WYWxpZCIsImVtYWlsSGFzRXJyb3IiLCJlbWFpbENoYW5nZUhhbmRsZXIiLCJlbWFpbEJsdXJIYW5kbGVyIiwicmVzZXRFbWFpbCIsIm1vYmlsZVZhbHVlIiwibW9iaWxlRm9ybVZhbGlkIiwibW9iaWxlSGFzRXJyb3IiLCJtb2JpbGVDaGFuZ2VIYW5kbGVyIiwibW9iaWxlQmx1ckhhbmRsZXIiLCJyZXNldE1vYmlsZSIsImFkZHJlc3NWYWx1ZSIsImFkZHJlc3NGb3JtVmFsaWQiLCJhZGRyZXNzSGFzRXJyb3IiLCJhZGRyZXNzQ2hhbmdlSGFuZGxlciIsImFkZHJlc3NCbHVySGFuZGxlciIsInJlc2V0QWRkcmVzcyIsImltYWdlVmFsdWUiLCJpbWFnZUZvcm1WYWxpZCIsImltYWdlSGFzRXJyb3IiLCJpbWFnZUNoYW5nZUhhbmRsZXIiLCJpbWFnZUJsdXJIYW5kbGVyIiwicmVzZXRJbWFnZSIsImRlc2NWYWx1ZSIsImRlc2NGb3JtVmFsaWQiLCJkZXNjSGFzRXJyb3IiLCJkZXNjQ2hhbmdlSGFuZGxlciIsImRlc2NCbHVySGFuZGxlciIsInJlc2V0RGVzYyIsImZvcm1WYWxpZCIsInRpdGxlQ2xhc3MiLCJmaXJzdE5hbWVDbGFzcyIsImxhc3ROYW1lQ2xhc3MiLCJlbWFpbENsYXNzIiwibW9iaWxlQ2xhc3MiLCJhZGRyZXNzQ2xhc3MiLCJpbWFnZUNsYXNzIiwiZGVzY0NsYXNzIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVldHVwRGF0YSIsInRpdGxlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsIm1vYmlsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwib25BZGRNZWV0dXAiLCJjb25zb2xlIiwibG9nIiwiQ2FyZCIsImNsYXNzZXMiLCJjYXJkIiwiY2hpbGRyZW4iLCJ2YWxpZGF0ZVZhbHVlIiwiZW50ZXJlZFZhbHVlIiwic2V0RW50ZXJlZFZhbHVlIiwidXNlU3RhdGUiLCJpc1RvdWNoZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWx1ZUlzVmFsaWQiLCJ0YXJnZXQiLCJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3VsdCIsImpzb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxVQUFVLEdBQUdDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFOLE9BQWUsRUFBM0M7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixLQUFLLElBQUlBLEtBQUssQ0FBQ0csUUFBTixDQUFlLEdBQWYsQ0FB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Q0FBWjtBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNML0YsU0FBSyxFQUFFMkYsWUFERjtBQUVMbEYsV0FBTyxFQUFFdUYsWUFGSjtBQUdMckYsWUFISztBQUlMRSxzQkFKSztBQUtMRSxvQkFMSztBQU1MRTtBQU5LLEdBQVA7QUFRRCxDQTVCRDs7QUE4QmVFLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7O0FBR0EsU0FBUytFLGFBQVQsR0FBeUI7QUFFckIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFRixpQkFBZUMsZ0JBQWYsQ0FBZ0NDLGlCQUFoQyxFQUFtRDtBQUNqRGxCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaUIsaUJBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlCQUFELEVBQXFCO0FBQzdDQyxZQUFNLEVBQUMsTUFEc0M7QUFFN0NDLFVBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGlCQUFmLENBRndDO0FBRzdDTyxhQUFPLEVBQUM7QUFDSix3QkFBZTtBQURYO0FBSHFDLEtBQXJCLENBQTVCO0FBT0EsVUFBTUMsTUFBTSxHQUFFLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFwQjtBQUNBWixVQUFNLENBQUNhLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBQ0Qsc0JBQVMscUVBQUMseUVBQUQ7QUFBZSxlQUFXLEVBQUVYO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBVDtBQUVEOztBQUVjSCw0RUFBZixFOzs7Ozs7Ozs7OztBQ3pCQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9uZXctbWVldHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2UtaW5wdXQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5cblxuY29uc3QgaXNOb3RFbXB0eSA9IHZhbHVlID0+IHZhbHVlLnRyaW0oKSE9PScnO1xuY29uc3QgaXNFbWFpbCA9IHZhbHVlID0+IHZhbHVlLmluY2x1ZGVzKCdAJyk7XG5jb25zdCBpc0xlbmd0aCA9IHZhbHVlID0+dmFsdWUubGVuZ3RoID4gNSA7XG5jb25zdCBNZWV0dXBGb3JtTmV3ID0gKHByb3BzKSA9PiB7XG5cbiAgXG4gIGNvbnN0IHtcbiAgICB2YWx1ZTp0aXRsZVZhbHVlLFxuICAgIGlzVmFsaWQ6dGl0bGVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IHRpdGxlSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOnRpdGxlQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOnRpdGxlQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRUaXRsZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICBcbiAgY29uc3Qge1xuICAgIHZhbHVlOmZpcnN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6Zmlyc3ROYW1lRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBmaXJzdE5hbWVIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmZpcnN0TmFtZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0Rmlyc3ROYW1lXG4gICB9ID0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTpsYXN0TmFtZVZhbHVlLFxuICAgIGlzVmFsaWQ6bGFzdE5hbWVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IGxhc3ROYW1lSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmxhc3ROYW1lQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmxhc3ROYW1lQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRMYXN0TmFtZVxuICAgfSA9IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuICAgY29uc3Qge1xuICAgIHZhbHVlOmVtYWlsVmFsdWUsXG4gICAgaXNWYWxpZDplbWFpbEZvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZW1haWxIYXNFcnJvcixcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6ZW1haWxDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6ZW1haWxCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldEVtYWlsXG4gICB9ID0gdXNlSW5wdXQoaXNFbWFpbCk7XG4gICBjb25zdCB7XG4gICAgdmFsdWU6bW9iaWxlVmFsdWUsXG4gICAgaXNWYWxpZDptb2JpbGVGb3JtVmFsaWQsXG4gICAgaGFzRXJyb3I6IG1vYmlsZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjptb2JpbGVDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6bW9iaWxlQmx1ckhhbmRsZXIsXG4gICAgcmVzZXQ6cmVzZXRNb2JpbGVcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuXG5cbiAgIGNvbnN0IHtcbiAgICB2YWx1ZTphZGRyZXNzVmFsdWUsXG4gICAgaXNWYWxpZDphZGRyZXNzRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBhZGRyZXNzSGFzRXJyb3IsXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyOmFkZHJlc3NDaGFuZ2VIYW5kbGVyLFxuICAgIGlucHV0Qmx1ckhhbmRsZXI6YWRkcmVzc0JsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0QWRkcmVzc1xuICAgfT0gdXNlSW5wdXQoaXNOb3RFbXB0eSk7XG4gXG4gICBjb25zdCB7XG4gICAgdmFsdWU6aW1hZ2VWYWx1ZSxcbiAgICBpc1ZhbGlkOmltYWdlRm9ybVZhbGlkLFxuICAgIGhhc0Vycm9yOiBpbWFnZUhhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjppbWFnZUNoYW5nZUhhbmRsZXIsXG4gICAgaW5wdXRCbHVySGFuZGxlcjppbWFnZUJsdXJIYW5kbGVyLFxuICAgIHJlc2V0OnJlc2V0SW1hZ2VcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuXG4gICBjb25zdCB7XG4gICAgdmFsdWU6ZGVzY1ZhbHVlLFxuICAgIGlzVmFsaWQ6ZGVzY0Zvcm1WYWxpZCxcbiAgICBoYXNFcnJvcjogZGVzY0hhc0Vycm9yLFxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjpkZXNjQ2hhbmdlSGFuZGxlcixcbiAgICBpbnB1dEJsdXJIYW5kbGVyOmRlc2NCbHVySGFuZGxlcixcbiAgICByZXNldDpyZXNldERlc2NcbiAgIH09IHVzZUlucHV0KGlzTm90RW1wdHkpO1xuIFxuXG4gICBsZXQgZm9ybVZhbGlkID0gZmFsc2U7XG5cbiAgIGlmKHRpdGxlRm9ybVZhbGlkICYmIGZpcnN0TmFtZUZvcm1WYWxpZCAmJiBsYXN0TmFtZUZvcm1WYWxpZCAmJiBlbWFpbEZvcm1WYWxpZCAmJiBtb2JpbGVGb3JtVmFsaWQgJiYgYWRkcmVzc0Zvcm1WYWxpZCAmJiBpbWFnZUZvcm1WYWxpZCAmJiBkZXNjRm9ybVZhbGlkKXtcbiAgICAgZm9ybVZhbGlkPXRydWU7XG4gICB9XG5cblxuICAgY29uc3QgdGl0bGVDbGFzcyA9IHRpdGxlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBmaXJzdE5hbWVDbGFzcyA9IGZpcnN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgbGFzdE5hbWVDbGFzcyAgPSBsYXN0TmFtZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgZW1haWxDbGFzcyAgICAgPSBlbWFpbEhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgbW9iaWxlQ2xhc3MgID0gbW9iaWxlSGFzRXJyb3IgPyAnZm9ybS1jb250cm9sIGludmFsaWQnIDonZm9ybS1jb250cm9sICc7XG4gICBjb25zdCBhZGRyZXNzQ2xhc3MgID0gYWRkcmVzc0hhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgaW1hZ2VDbGFzcyAgPSBpbWFnZUhhc0Vycm9yID8gJ2Zvcm0tY29udHJvbCBpbnZhbGlkJyA6J2Zvcm0tY29udHJvbCAnO1xuICAgY29uc3QgZGVzY0NsYXNzICA9IGRlc2NIYXNFcnJvciA/ICdmb3JtLWNvbnRyb2wgaW52YWxpZCcgOidmb3JtLWNvbnRyb2wgJztcblxuXG5cbiAgIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0oZXZlbnQpID0+e1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgIGlmKCFmb3JtVmFsaWQpe1xuICAgICAgIHJldHVybjtcbiAgICAgfVxuICAgICBjb25zdCBtZWV0dXBEYXRhID0ge1xuICAgICAgdGl0bGU6IHRpdGxlVmFsdWUsXG4gICAgICBmaXJzdG5hbWU6Zmlyc3ROYW1lVmFsdWUsXG4gICAgICBsYXN0bmFtZTpsYXN0TmFtZVZhbHVlLFxuICAgICAgZW1haWw6ZW1haWxWYWx1ZSxcbiAgICAgIG1vYmlsZTptb2JpbGVWYWx1ZSxcbiAgICAgIGltYWdlOiBpbWFnZVZhbHVlLFxuICAgICAgYWRkcmVzczogYWRkcmVzc1ZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NWYWx1ZSxcbiAgICB9O1xuXG4gICAgcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XG5cbiAgICAgY29uc29sZS5sb2codGl0bGVWYWx1ZSxmaXJzdE5hbWVWYWx1ZSxsYXN0TmFtZVZhbHVlLGVtYWlsVmFsdWUsbW9iaWxlVmFsdWUsYWRkcmVzc1ZhbHVlLGltYWdlVmFsdWUsZGVzY1ZhbHVlKTtcbiAgICAgcmVzZXRGaXJzdE5hbWUoKTtcbiAgICAgcmVzZXRMYXN0TmFtZSgpO1xuICAgICByZXNldEVtYWlsKCk7XG4gICAgIHJlc2V0TW9iaWxlKCk7XG4gICAgIHJlc2V0VGl0bGUoKTtcbiAgICAgcmVzZXRBZGRyZXNzKCk7XG4gICAgIHJlc2V0SW1hZ2UoKTtcbiAgICAgcmVzZXREZXNjKCk7XG4gICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgPGRpdiBjbGFzc05hbWU9J2Zvcm0nPlxuICA8Q2FyZD5cbiAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdEhhbmRsZXJ9PlxuICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlLW5ldyc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUxJz5DcmVhdGUgTmV3IE5FWFQgSlMgTWVldHVwPC9zcGFuPlxuIFxuICAgICAgPC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd0aXRsZSc+TWVldHVwIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSd0aXRsZSdcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RpdGxlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17dGl0bGVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHt0aXRsZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgVGl0bGU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaXJzdE5hbWVDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Zmlyc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17Zmlyc3ROYW1lQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lSGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBFbnRlciBZb3VyIEZpcnN0IE5hbWU8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xhc3ROYW1lQ2xhc3N9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdsbmFtZSc+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSdsbmFtZSdcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2xhc3ROYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17bGFzdE5hbWVCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICB7bGFzdE5hbWVIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTGFzdCBOYW1lPC9wPn1cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlbWFpbENsYXNzfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RS1NYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICBpZD0nZW1haWwnIFxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlbWFpbEJsdXJIYW5kbGVyfSAvPlxuICAgICAgICAgIHtlbWFpbEhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgVmFsaWQgRW1haWw8L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2JpbGVDbGFzc30+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbW9iaWxlJz5Nb2JpbGUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgIGlkPSdtb2JpbGUnIFxuICAgICAgICAgICAgdmFsdWU9e21vYmlsZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e21vYmlsZUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e21vYmlsZUJsdXJIYW5kbGVyfSAvPlxuICAgICAgICAgICAge21vYmlsZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNb2JpbGUgTnVtYmVyPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtZ3JvdXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWRkcmVzc0NsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYWRkcmVzcyc+TWVldHVwIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgaWQ9J2FkZHJlc3MnXG4gICAgICAgICAgICB2YWx1ZT17YWRkcmVzc1ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2FkZHJlc3NDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXthZGRyZXNzQmx1ckhhbmRsZXJ9IC8+XG4gICAgICAgICAgICB7YWRkcmVzc0hhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgQWRkcmVzczwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC1ncm91cCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbWFnZUNsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0naW1hZ2UnPk1lZXR1cCBQb3N0ZXIgVXJsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIGlkPSdpbWFnZSdcbiAgICAgICAgICAgIHZhbHVlPXtpbWFnZVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2ltYWdlQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQmx1cj17aW1hZ2VCbHVySGFuZGxlcn0gLz5cbiAgICAgICAgICAgIHtpbWFnZUhhc0Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgRW50ZXIgWW91ciBNZWV0dXAgUG9zdGVyIFVSTDwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWdyb3VwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rlc2NDbGFzc30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdkZXNjcmlwdGlvbic+TWVldHVwIERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByb3dzPSc1J1xuICAgICAgICAgICAgb25DaGFuZ2U9e2Rlc2NDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgb25CbHVyPXtkZXNjQmx1ckhhbmRsZXJ9IFxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NWYWx1ZX1cbiAgICAgICAgICA+e2Rlc2NWYWx1ZX08L3RleHRhcmVhPlxuICAgICAgICAgICAge2Rlc2NIYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIEVudGVyIFlvdXIgTWVldHVwIFRpdGxlPC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1hY3Rpb25zJz5cbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWZvcm1WYWxpZH0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEZvcm1OZXc7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9ICh2YWxpZGF0ZVZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW2VudGVyZWRWYWx1ZSwgc2V0RW50ZXJlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNUb3VjaGVkLCBzZXRJc1RvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0ZVZhbHVlKGVudGVyZWRWYWx1ZSk7XHJcbiAgY29uc3QgaGFzRXJyb3IgPSAhdmFsdWVJc1ZhbGlkICYmIGlzVG91Y2hlZDtcclxuXHJcbiAgY29uc3QgdmFsdWVDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRFbnRlcmVkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbnB1dEJsdXJIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJc1RvdWNoZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRFbnRlcmVkVmFsdWUoJycpO1xyXG4gICAgc2V0SXNUb3VjaGVkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWU6IGVudGVyZWRWYWx1ZSxcclxuICAgIGlzVmFsaWQ6IHZhbHVlSXNWYWxpZCxcclxuICAgIGhhc0Vycm9yLFxyXG4gICAgdmFsdWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgaW5wdXRCbHVySGFuZGxlcixcclxuICAgIHJlc2V0XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUlucHV0OyIsImltcG9ydCBNZWV0dXBGb3JtTmV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBGb3JtTmV3JztcclxuXHJcbmltcG9ydCB7dXNlUm91dGVyfSAgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5ld01lZXR1cFBhZ2UoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbnRlcmVkTWVldHVwRGF0YSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnICwge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzdWx0PSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH1cclxuICByZXR1cm4gICg8TWVldHVwRm9ybU5ldyBvbkFkZE1lZXR1cD17YWRkTWVldHVwSGFuZGxlcn0gLz4pXHJcbiAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9