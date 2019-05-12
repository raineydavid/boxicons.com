webpackHotUpdate(2,{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./components/types.js");
var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\iconsList.js";




var CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  componentId: "h8c7bw-0"
})(["margin-left:15px;font-weight:400;font-size:16px;color:#b8b8b8;@media screen and (max-width:", "){font-size:14px;}"], _types__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINT_SM"]);

var IconsList = function IconsList(props) {
  var category = '';
  var iconsItems = props.icons.map(function (icon, num) {
    if (icon.category.name !== category) {
      category = icon.category.name;
      return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryHeader, {
        key: icon.category.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, icon.category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconsListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: icon.id,
        icon: icon,
        num: num + 1,
        dark: props.dark,
        style: props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconsListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: icon.id,
      icon: icon,
      num: num + 1,
      dark: props.dark,
      style: props.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-list animated delay50 fadeIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, iconsItems));
};

/* harmony default export */ __webpack_exports__["default"] = (IconsList);

/***/ })

})
//# sourceMappingURL=2.34a807b378928658d3ef.hot-update.js.map