webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/icons/iconsList.js":
/*!***************************************!*\
  !*** ./components/icons/iconsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconsListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconsListItem */ "./components/icons/iconsListItem.js");
var _jsxFileName = "C:\\MAIN\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\iconsList.js";



var IconsList = function IconsList(props) {
  var iconsItems = props.icons.map(function (icon, num) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconsListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: icon.id,
      icon: icon,
      num: num + 1,
      dark: props.dark,
      style: props.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-list animated delay50 fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, iconsItems));
};

/* harmony default export */ __webpack_exports__["default"] = (IconsList);

/***/ })

})
//# sourceMappingURL=index.js.3679b23025eb4cf42501.hot-update.js.map