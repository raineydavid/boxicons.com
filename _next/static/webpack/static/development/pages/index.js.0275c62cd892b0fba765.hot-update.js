webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/heroSection.js":
/*!******************************************!*\
  !*** ./components/common/heroSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./components/types.js");





var _jsxFileName = "D:\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\heroSection.js";



var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  componentId: "j0itq8-0"
})([".hero-sticky{background:", ";.hero{max-width:", ";text-align:left;position:relative;margin:0 auto;display:flex;margin-top:80px;padding-top:0px;padding-bottom:0px;transform:", ";opacity:", ";transition:0.5s ease;@media screen and (max-width:", "){display:block;padding-top:80px;}@media screen and (max-width:", "){max-width:600px;padding-top:60px;margin-left:0px;}.hero-side{padding-right:25px;@media screen and (max-width:", "){padding:0px 30px;p{display:none;}}flex:1;p{color:", ";font-size:30px;margin:0 auto;font-weight:300;text-align:left;height:170px;max-width:550px;line-height:1.4;@media screen and (max-width:", "){font-size:18px;text-align:left;margin-left:0px;}@media screen and (max-width:", "){font-size:16px;}@media screen and (max-width:", "){font-size:15px;}}}.hero-text{flex:2;@media screen and (max-width:", "){padding-right:20px;padding-left:20px;}.hero-header{text-align:center;@media screen and (max-width:", "){text-align:left;}@media screen and (max-width:", "){height:auto!important;margin-bottom:25px;}p{font-size:19px;margin:0 auto;margin-top:15px;margin-bottom:5px;max-width:600px;color:", ";@media screen and (max-width:", "){font-size:16px;}}h2{font-size:48px;margin-top:0px;font-family:", ";color:", ";line-height:1.13;letter-spacing:-.5px;font-weight:700 !important;text-rendering:optimizeLegibility;position:relative;word-break:break-word;display:inline;background-size:100% 100%;@media screen and (max-width:768px){font-size:32px;line-height:1.25;text-align:left;}}}text-align:left;.hero-head{max-width:690px;text-align:left;margin:0 auto;padding:70px 10px;padding-bottom:40px;@media screen and (max-width:", "){text-align:left;padding:0 10px!important;}}}}}"], _types__WEBPACK_IMPORTED_MODULE_7__["HEADER_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_7__["MAX_WIDTH"], function (props) {
  return props.is_Mounted ? 'translateY(0px)' : 'translateY(50px)';
}, function (props) {
  return props.is_Mounted ? '1' : '0';
}, _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MDL"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["MAIN_HEADER_SUB_COLOR"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_SM"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["MAIN_HEADER_SUB_COLOR"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_7__["FONT_FAMILY_HEADER"], _types__WEBPACK_IMPORTED_MODULE_7__["MAIN_HEADER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"]);

var HeroSection =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HeroSection, _Component);

  function HeroSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeroSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeroSection).call(this, props));
    _this.state = {
      is_Mounted: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeroSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          is_Mounted: true
        });
      }.bind(this), 10);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(StyledHero, {
        is_Mounted: this.state.is_Mounted,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-sticky",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "High Quality Web Icons Set "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Boxicons is a simple vector icons set carefully crafted for designers and developers to use in your next project")))))));
    }
  }]);

  return HeroSection;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeroSection);

/***/ })

})
//# sourceMappingURL=index.js.0275c62cd892b0fba765.hot-update.js.map