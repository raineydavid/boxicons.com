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
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./components/common/buttons.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/types */ "./actions/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types */ "./components/types.js");
/* harmony import */ var _search_searchForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search/searchForm */ "./components/search/searchForm.js");





var _jsxFileName = "C:\\MAIN\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\heroSection.js";






var MainButtons = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  componentId: "j0itq8-0"
})(["display:block .main-buttons{padding-top:20px;display:block;text-align:center;}a{display:inline-block;margin:0 10px;}"]);
var StyledHero = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  componentId: "j0itq8-1"
})([".hero-sticky{.hero{max-width:", ";text-align:left;position:relative;margin:0 auto;display:flex;margin-top:64px;padding-top:40px;padding-bottom:50px;transform:", ";opacity:", ";transition:0.5s ease;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){max-width:600px;}.hero-side{padding-right:25px;@media screen and (max-width:", "){padding:0px 30px;p{display:none;}}flex:1;p{color:", ";font-size:30px;margin:0 auto;font-weight:300;text-align:left;height:170px;max-width:550px;line-height:1.4;@media screen and (max-width:", "){font-size:18px;text-align:left;margin-left:0px;}@media screen and (max-width:", "){font-size:16px;}@media screen and (max-width:", "){font-size:15px;}}}.hero-text{flex:2;@media screen and (max-width:", "){padding-right:20px;padding-left:20px;}.hero-header{max-width:650px;text-align:center;margin:0 auto;@media screen and (max-width:", "){height:auto!important;margin-bottom:25px;}p{color:#73859d;font-size:18px;margin-top:10px;margin-bottom:25px;@media screen and (max-width:", "){font-size:16px;}}h2{font-size:36px;margin-top:0px;text-align:center;font-family:", ";color:", ";line-height:50px;font-weight:700 !important;text-rendering:optimizeLegibility;position:relative;word-break:break-word;display:inline;background-size:100% 100%;@media screen and (max-width:768px){font-size:32px;line-height:1.25;text-align:left;}@media screen and (max-width:", "){font-size:30px;line-height:1.25;}@media screen and (max-width:", "){font-size:30px;line-height:1.25;}}}margin:0 auto;text-align:left;.hero-head{text-align:left;padding:0 50px;@media screen and (max-width:", "){text-align:left;padding:0 10px!important;}}}}}"], _types__WEBPACK_IMPORTED_MODULE_9__["MAX_WIDTH"], function (props) {
  return props.is_Mounted ? 'translateY(0px)' : 'translateY(50px)';
}, function (props) {
  return props.is_Mounted ? '1' : '0';
}, _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_MDL"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_9__["MAIN_HEADER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_SM"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_9__["FONT_FAMILY_HEADER"], _types__WEBPACK_IMPORTED_MODULE_9__["MAIN_HEADER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_MDS"], _types__WEBPACK_IMPORTED_MODULE_9__["BREAKPOINT_LG"]);

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
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-sticky",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "High Quality Web Icons Set "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Boxicons is a simple open-source icons set carefully crafted for designers and developers to use in your next project")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))))));
    }
  }]);

  return HeroSection;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeroSection);

/***/ })

})
//# sourceMappingURL=index.js.4ae6a4099203160d3732.hot-update.js.map