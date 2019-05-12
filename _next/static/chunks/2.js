(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/common/ToTop.js":
/*!************************************!*\
  !*** ./components/common/ToTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types */ "./components/types.js");






var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\ToTop.js";




var StyledToTop = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  componentId: "sc-1x8ru9n-0"
})(["position:fixed;left:30px;cursor:pointer;bottom:30px;width:45px;box-shadow:0 0 10px 5px rgba(0,0,0,0.1);visibility:hidden;z-index:999;transition:0.3s ease;height:45px;&.active{visibility:visible;}background:#fff;border-radius:50%;align-items:center;display:flex;justify-content:center;&:active{box-shadow:0 0 10px 5px rgba(0,0,0,0.1),", ";}i{color:", ";font-size:32px;}"], _types__WEBPACK_IMPORTED_MODULE_9__["BUTTON_BOX_SHADOW"], _types__WEBPACK_IMPORTED_MODULE_9__["FONT_COLOR"]);

var ToTop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ToTop, _Component);

  function ToTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ToTop).call(this, props));
    _this.state = {
      is_Mounted: false
    };
    _this.top = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ToTop, [{
    key: "handleClick",
    value: function handleClick() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var node = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this.refs.top);
      var scroll_class = "active";

      if (window.pageYOffset > 600) {
        node.classList.add(scroll_class);
      } else {
        node.classList.remove(scroll_class);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledToTop, {
        dark: this.props.dark,
        side: this.props.side,
        ref: "top",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-chevron-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }));
    }
  }]);

  return ToTop;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ToTop);

/***/ }),

/***/ "./components/common/footer.js":
/*!*************************************!*\
  !*** ./components/common/footer.js ***!
  \*************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\footer.js";




var FootNav = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  componentId: "ywb9o1-0"
})(["background:", ";color:", ";.footer-max{border-top:1px solid ", ";;max-width:", ";margin:0 auto;.footer-in{padding:30px;display:flex;@media screen and (max-width:", "){flex-wrap:wrap;.footer-links{flex:0 0 100%;justify-content:center!important;margin-bottom:20px;}.footer-logo{flex:0 0 100%;justify-content:center!important;}}.footer-links{justify-content:flex-start;display:flex;align-items:center;a{&.no-mobile{@media screen and (max-width:", "){display:none;visibility:hidden;}}color:#b8b8b8;img{height:auto !important;width:auto !important;box-shadow:0 0 15px rgba(0,0,0,0.1);border-radius:5px;}margin-right:15px;}}.footer-logo{display:flex;justify-content:flex-end;flex:1;}}}display:block;text-align:right;color:#1a1b1c;font-size:14px;span{font-size:15px;color:#bdc3cc;line-height:30px;margin-right:10px;@media screen and (max-width:", "){font-size:12px;}}svg{width:120px;height:32px;@media screen and (max-width:", "){width:90px;}}"], _types__WEBPACK_IMPORTED_MODULE_7__["ICONS_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_7__["FONT_COLOR"], _types__WEBPACK_IMPORTED_MODULE_7__["BORDER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_7__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINT_MD"]);

var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FootNav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/cheatsheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "no-mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Cheatsheet")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "no-mobile",
        href: "https://github.com/atisawd/boxicons/issues/new?labels=icon%20request,",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Request Icons"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.buymeacoffee.com/1NHhYrt",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://www.buymeacoffee.com/assets/img/custom_images/white_img.png",
        alt: "Buy Me A Coffee",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), "       "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Made with ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "bx bxs-heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), " by"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/atisawd",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        className: "footer-logo",
        version: "1.1",
        id: "Layer_1",
        x: "0px",
        y: "0px",
        width: "1825.596px",
        height: "238.593px",
        viewBox: "0 0 1825.596 238.593",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M49.282,228.111",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polyline", {
        opacity: "0.6",
        fill: "#bdc3cc",
        points: "241.149,77.679 241.149,226.777 286.708,226.777 \r 286.708,226.777 329.893,226.777 329.893,226.777 375.448,226.777 375.448,57.378 375.448,11.819 375.448,11.817 329.893,11.817 \r 329.893,11.819 286.708,11.819 286.704,11.819 286.708,11.817 241.149,11.817  ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polyline", {
        fill: "#bdc3cc",
        points: "282.99,11.819 282.985,11.819 282.99,11.817 237.43,11.817 237.43,11.817 194.245,11.819 \r 194.245,11.819 148.686,11.819 -0.001,226.777 45.563,226.777 45.563,226.777 88.743,226.777 133.082,226.777 134.303,226.777 \r 237.43,77.679   ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M749.099,238.593l-21.69-50.389h-97.772l-21.69,50.389h-55.394L653.328,5.34h50.388l100.776,233.253\r H749.099z M678.688,74.748l-29.364,67.742h58.396L678.688,74.748z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M980.018,50.389v188.205h-52.059V50.389h-66.071V5.34h184.201v45.049H980.018z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M1150.867,5.34h52.057v233.253h-52.057V5.34z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M1381.615,51.891c-5.007,4.119-7.509,9.568-7.509,16.351c0,6.789,3.056,12.181,9.177,16.187\r c6.114,4.004,20.239,8.732,42.379,14.182c22.134,5.453,39.317,13.629,51.557,24.525c12.232,10.902,18.354,26.813,18.354,47.721\r c0,20.912-7.842,37.873-23.525,50.889c-15.684,13.014-36.32,19.52-61.9,19.52c-36.932,0-70.189-13.68-99.773-41.043l31.032-38.041\r c25.136,22.023,48.386,33.035,69.742,33.035c9.563,0,17.069-2.055,22.524-6.174c5.447-4.113,8.176-9.676,8.176-16.686\r c0-7.008-2.895-12.564-8.678-16.686c-5.786-4.113-17.24-8.285-34.368-12.514c-27.146-6.449-47-14.85-59.565-25.193\r c-12.57-10.345-18.854-26.582-18.854-48.72c0-22.134,7.951-39.21,23.859-51.223C1360.145,6.008,1380,0,1403.807,0\r c15.568,0,31.143,2.67,46.718,8.008c15.568,5.34,29.142,12.906,40.71,22.692l-26.361,38.042\r c-20.244-15.352-41.16-23.025-62.734-23.025C1393.459,45.717,1386.619,47.776,1381.615,51.891z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        fill: "#bdc3cc",
        d: "M1770.201,238.593l-21.689-50.389h-97.773l-21.689,50.389h-55.395L1674.432,5.34h50.387l100.777,233.253\r H1770.201z M1699.789,74.748l-29.364,67.742h58.397L1699.789,74.748z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/icons/categories.js":
/*!****************************************!*\
  !*** ./components/icons/categories.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_iconActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/iconActions */ "./actions/iconActions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types */ "./components/types.js");
/* harmony import */ var _reducers_data_categories_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducers/data/categories.json */ "./reducers/data/categories.json");
var _reducers_data_categories_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../reducers/data/categories.json */ "./reducers/data/categories.json", 1);






var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\categories.js";







var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].ul.withConfig({
  componentId: "ikalhn-0"
})(["padding:0px;list-style:none;margin:0px;@media screen and (min-width:", "){padding:0px;padding-left:0px;padding-top:0px;}li{font-size:14px;padding:0px;cursor:pointer;display:inline-block;width:100%;@media screen and (min-width:", "){width:100%;display:block;}div{border-radius:2px;padding:5px 20px;border:2px solid  transparent;transition:0.1s;&:active{background:#f9f9f9;}-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;@media screen and (min-width:", "){min-width:160px;}display:block;color:", ";&:hover{}}&.active{div{color:#b06c4a;}}}"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["FONT_COLOR"]);

var Categories =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Categories, _Component);

  function Categories(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Categories);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Categories).call(this, props));
    _this.state = {
      categories: _reducers_data_categories_json__WEBPACK_IMPORTED_MODULE_12__
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Categories, [{
    key: "handleClick",
    value: function handleClick(name) {
      var el = document.querySelector(".icons-right-section");
      var boundingRect = el.getBoundingClientRect();
      window.scroll({
        top: boundingRect.top + window.pageYOffset - 128,
        behavior: 'smooth'
      });
      this.props.setCategory(name, this.props.style, this.props.search);
      this.props.changeCategories(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var categoryItems = this.state.categories.map(function (category, num) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: num,
          className: _this2.props.search === category.name ? 'active' : '',
          onClick: function onClick() {
            return _this2.handleClick(category.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, category.name));
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "fadeIn animated",
        id: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CategoryList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        onClick: function onClick() {
          return _this2.handleClick(null);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "All")), categoryItems));
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    setCategory: _actions_iconActions__WEBPACK_IMPORTED_MODULE_9__["setCategory"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(Categories));

/***/ }),

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

/***/ }),

/***/ "./components/icons/iconsListItem.js":
/*!*******************************************!*\
  !*** ./components/icons/iconsListItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types */ "./components/types.js");
/* harmony import */ var _actions_iconActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/iconActions */ "./actions/iconActions.js");






var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\iconsListItem.js";







var IconBox = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  componentId: "qp0pm4-0"
})(["transition:background-color .4s,box-shadow 0.15s;animation-fill-mode:forwards;.new-dot{background:", ";width:5px;height:5px;border-radius:50%;position:absolute;right:5px;top:5px;}i{color:", ";font-size:", ";@media screen and (max-width:", "){font-size:", ";}@media screen and (max-width:", "){font-size:", ";}}&.fade{&.active{.icon-base{opacity:1;}}.icon-base{opacity:0.5;}}&.active{i{color:", ";}}cursor:pointer;outline:none !important;display:inline-block;&:hover{z-index:9999999;}border-radius:2px;overflow:hidden;overflow:hidden;.icon-box-inner{margin:2px;border:2px solid transparent;font-weight:700;position:relative;font-size:16px;border-radius:5px;line-height:35px;text-align:center;pointer-events:none;.icon-base{height:", ";i{line-height:", ";}@media screen and (max-width:", "){height:", ";i{line-height:", ";}}@media screen and (max-width:", "){height:", ";i{line-height:", ";}}}.icon-box-name{font-size:12px;-webkit-touch-callout:none;-webkit-user-select:none;text-transform:capitalize;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;color:", ";@media screen and (max-width:", "){display:none;}margin:0px 10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:20px;margin-top:5px;margin-bottom:16px;}padding:15px;@media screen and (max-width:", "){width:auto;padding:15px;}@media screen and (max-width:", "){padding:10px;}}&:active{box-shadow:none;border-radius:5px;background:#f5f5f5;}&:hover{box-shadow:0 0 10px rgba(0,0,0,0.12);border-radius:5px;background:#fff;}&.active{box-shadow:none;border-radius:5px;background:#f5f5f5;}@media screen and (max-width:", "){cursor:initial;&.active,&:hover,&:active{box-shadow:none;background:transparent;}}"], _types__WEBPACK_IMPORTED_MODULE_11__["BLUE_COLOR"], function (props) {
  return props.dark ? _types__WEBPACK_IMPORTED_MODULE_11__["DARK_FONT_COLOR"] : _types__WEBPACK_IMPORTED_MODULE_11__["FONT_COLOR"];
}, _types__WEBPACK_IMPORTED_MODULE_11__["ICON_SIZE"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_SIZE"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_SIZE_MD"], function (props) {
  return props.dark ? '#FFF' : _types__WEBPACK_IMPORTED_MODULE_11__["SELECTED_COLOR"];
}, _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE_MD"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_BASE_MD"], _types__WEBPACK_IMPORTED_MODULE_11__["ICON_NAME_COLOR"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_MDL"]);

var IconsListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IconsListItem, _Component);

  function IconsListItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IconsListItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IconsListItem).call(this, props));
    _this.handleBoxClick = _this.handleBoxClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      selectedIcon: {
        name: null,
        slug: null,
        type_of_icon: null
      },
      searchTerm: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IconsListItem, [{
    key: "handleBoxClick",
    value: function handleBoxClick(name, slug, type_of_icon) {
      this.props.changeSideIcon(true);
      this.props.setSelectedIcon(name, slug, type_of_icon);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        selectedIcon: newProps.selectedIcon
      });
      this.setState({
        searchTerm: newProps.searchTerm
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var boxClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()({
        'active': this.state.selectedIcon.slug === this.props.icon.slug,
        'icon-box ': true
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconBox, {
        dark: this.props.dark,
        className: boxClass,
        ref: "iconbox",
        tabIndex: this.props.num,
        onFocus: function onFocus() {
          return _this2.handleBoxClick(_this2.props.icon.name, _this2.props.icon.slug, _this2.props.icon.type_of_icon);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icon-box-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, this.props.icon.new && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "new-dot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icon-base",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, this.props.icon.type_of_icon === 'REGULAR' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fadeIn animated bx bx-" + this.props.icon.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), this.props.icon.type_of_icon === 'SOLID' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fadeIn animated bx bxs-" + this.props.icon.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), this.props.icon.type_of_icon === 'LOGO' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fadeIn animated bx bxl-" + this.props.icon.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }))));
    }
  }]);

  return IconsListItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

function mapStateToProps(state) {
  return {
    selectedIcon: state.selectedIcon,
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    changeSideIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_12__["changeSideIcon"],
    setSelectedIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_12__["setSelectedIcon"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(IconsListItem));

/***/ }),

/***/ "./components/icons/iconsSet.js":
/*!**************************************!*\
  !*** ./components/icons/iconsSet.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/iconActions */ "./actions/iconActions.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _iconsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./iconsList */ "./components/icons/iconsList.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/buttons */ "./components/common/buttons.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories */ "./components/icons/categories.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../types */ "./components/types.js");
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! simplebar-react */ "./node_modules/simplebar-react/dist/simplebar-react.esm.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/types */ "./actions/types.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/footer */ "./components/common/footer.js");
/* harmony import */ var _common_ToTop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/ToTop */ "./components/common/ToTop.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_22__);






var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\iconsSet.js";















var Icon = next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./icon */ "./components/icons/icon.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "mock-icon-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "mock-box-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "mock-box-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "mock-box-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./icon */ "./components/icons/icon.js")];
    },
    modules: ['./icon']
  }
});
var StyledIconCont = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  componentId: "sc-8yb2nv-0"
})(["padding:25px;background:", ";display:flex;pointer-events:auto;@media screen and (max-width:", "){display:block;height:48px;padding:15px;}@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}.mock-icon-box{@media screen and (max-width:", "){display:none;visibility:hidden;}width:280px;height:260px;display:flex;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(to right,#eeeeee 8%,#dddddd 18%,#eeeeee 33%);background-size:800px 104px;position:relative;div{background:", ";position:absolute;}.mock-box-1{top:170px;width:280px;height:20px;}.mock-box-2{top:215px;width:280px;height:20px;}.mock-box-3{top:235px;left:160px;width:120px;height:94px;}}"], _types__WEBPACK_IMPORTED_MODULE_15__["FILTER_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["FILTER_BACKGROUND"]);
var IconsSection = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  componentId: "sc-8yb2nv-1"
})(["padding:0px;background:", ";@media screen and (max-width:", "){padding:0px;}&.active .icons-left-section{order:0;}"], _types__WEBPACK_IMPORTED_MODULE_15__["ICONS_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"]);
var IconsSectionCont = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  componentId: "sc-8yb2nv-2"
})(["padding:", ";@media screen and (max-width:", "){padding:0px;}@media screen and (min-width:", "){&.side-active .icon-box{flex:0 0 ", "!important;max-width:", "!important;}}max-width:", ";margin:0 auto;@media screen and (min-width:", "){display:flex;}.icons-left-section{@media screen and (max-width:", "){display:none;visibility:hidden;}-webkit-animation-duration:0.5s !important;animation-duration:0.5s !important;position:fixed;z-index:99997;-webkit-transform:translateZ(0);animation-fill-mode:forwards;top:65px;bottom:0;right:0px;width:", ";transition:0.4s ease;.left-section-inner{background:", ";overflow-y:auto;margin:0 auto;display:block;border-radius:2px;box-shadow:", ";margin-left:15px;height:calc( 100vh - 62px );@media screen and (max-width:", "){border-radius:0px;border-left:0px;border-right:0px;max-width:none;left:0;right:0;}}@media screen and (max-width:", "){pointer-events:all;}}.icons-side-section{position:fixed;background:#fff;z-index:99999;top:20px;right:20px;overflow-y:scroll;max-height:200px;border-radius:", ";box-shadow:", ";min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;overflow-x:hidden;.side-section-inner{border-bottom:1px solid transparent;padding-left:0px;@media screen and (max-width:", "){border-bottom:1px solid ", ";margin:0;}}@media screen and (max-width:", "){display:none;visibility:hidden;}}.icons-right-section{padding-top:90px;padding-left:20px;width:100%;padding-right:340px;@media screen and (max-width:", "){width:auto;}@media screen and (max-width:", "){padding-right:20px;}h2{margin:15px;margin-bottom:30px;font-size:36px;font-weight:400;line-height:48px;color:", ";a{display:none!important;visibility:hidden;@media screen and (max-width:", "){display:flex!important;visibility:visible;}}@media screen and (max-width:", "){font-size:30px;line-height:44px;margin:10px;margin-bottom:25px;}@media screen and (max-width:", "){font-size:24px;line-height:36px;}}}.icon-list{padding:0px;min-height:calc(100vh - 260px);padding-bottom:50px;.container{.no-result{text-align:center;font-weight:400;padding:30px;min-height:50px;color:", ";font-size:18px;margin-bottom:0px;p{margin-top:2px;font-size:16px;color:", ";font-style:italic;}}}@media screen and (max-width:", "){padding:0px;}}}"], _types__WEBPACK_IMPORTED_MODULE_15__["PADDING"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["FLEX_ACTIVE"], _types__WEBPACK_IMPORTED_MODULE_15__["FLEX_ACTIVE"], _types__WEBPACK_IMPORTED_MODULE_15__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MDL"], _types__WEBPACK_IMPORTED_MODULE_15__["SIDE_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_15__["FILTER_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["SIDE_BOX_SHADOW"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BUTTON_RADIUS"], _types__WEBPACK_IMPORTED_MODULE_15__["BOX_SHADOW_POPUP"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BORDER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_SM"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MDL"], _types__WEBPACK_IMPORTED_MODULE_15__["HEADER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MDS"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_SM"], _types__WEBPACK_IMPORTED_MODULE_15__["SECONDARY_FONT_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["SECONDARY_FONT_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"]);
var IconsFilter = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  componentId: "sc-8yb2nv-3"
})(["   background:", ";box-sizing:border-box;.icon-filter-max{max-width:", ";margin:0 auto;@media screen and (max-width:", "){padding-top:0px;margin-bottom:0px;}.icons-filter-in{font-weight:400;padding-bottom:10px!important;padding-top:20px!important;border-bottom:1px solid ", ";.icons-count{align-self:flex-end;flex:1;font-style:italic;text-align:left;padding-bottom:10px;transition:0.15s;@media screen and (max-width:", "){display:none;}}.selected-category{display:flex;background:#313133;@media screen and (max-width:", "){display:none;visibility:hidden;}color:#fff;margin-left:10px;align-items:center;height:28px;transition:0.2s ease;justify-content:center;border-radius:30px!important;&:active{box-shadow:0 0px 0 5px ", ";}div{padding:0px!important;line-height:18px!important;height:20px!important;}.selected-category-name{color:#fff!important;}.selected-category-x i{color:#fff!important;font-size:12px!important;margin-left:10px;}}.icons-theme{@media screen and (max-width:", "){display:none;visibility:hidden;}flex:0 0 36px;width:36px;height:36px;margin-bottom:4px;align-items:center;box-shadow:0 0px 0 2px #f9f9f9;justify-content:center;transition:0.2s  ease;margin-left:0px;display:flex;padding:0px;border-radius:30px;div{width:12px!important;height:12px!important;background:#313133;padding:0!important;border-radius:50%!important;}@media screen and (max-width:", "){margin-bottom:7px;}@media screen and (max-width:", "){display:none;visibility:hidden;}&:active{box-shadow:0 0px 0 5px ", ";}}.icons-filter{align-self:flex-end;flex:1;@media screen and (max-width:", "){display:none;visibility:hidden;}line-height:30px;height:30px;text-align:left;padding:0px;padding:5px 15px;padding-top:0px;font-size:16px;margin-bottom:4px;@media screen and (max-width:", "){margin-bottom:7px;}transition:0.2s  ease;margin-left:0px;border-radius:", ";border:1px solid transparent;background:", ";i{color:#313133;}&:active{box-shadow:", ";}}i{font-size:16px;color:#313133;float:right;line-height:30px;}display:block;padding:", ";margin:0px;@media screen and (max-width:", "){margin:0;padding:15px;padding-bottom:10px;}.filter-top,.filter-bottom{display:flex;padding:0;}.filter-bottom{border-radius:", ";overflow:hidden;border:1px solid ", ";div{flex:1;text-align:center;}}.filter-top{border-radius:0px!important;margin-top:15px!important;}div{@media screen and (max-width:", "){margin:0 5px;padding:5px 10px;}padding:5px 15px;margin:0px;font-size:14px;font-weight:400;transition:0.2s;border-radius:5px;cursor:pointer;color:", ";-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;&.active{background:#f9f9f9;color:", ";border-radius:0px;}&:last-child{}&:first:child{margin-right:0px;}}}}"], _types__WEBPACK_IMPORTED_MODULE_15__["FILTER_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BORDER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_SM"], _types__WEBPACK_IMPORTED_MODULE_15__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["BUTTON_RADIUS"], function (props) {
  return props.side ? _types__WEBPACK_IMPORTED_MODULE_15__["LIGHT_BACKGROUND"] : 'transparent';
}, _types__WEBPACK_IMPORTED_MODULE_15__["BUTTON_BOX_SHADOW"], _types__WEBPACK_IMPORTED_MODULE_15__["PADDING"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_15__["BUTTON_RADIUS"], _types__WEBPACK_IMPORTED_MODULE_15__["BORDER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_15__["NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_15__["ACTIVE_NAV_LIST_COLOR"]);




var IconsSet =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IconsSet, _Component);

  function IconsSet(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IconsSet);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IconsSet).call(this, props));
    _this.state = {
      icons: {
        data: null
      },
      categories: {
        data: null
      },
      showSide: false,
      view: 'grid',
      noResult: false,
      selectedIcon: {
        name: null,
        slug: null,
        type_of_icon: null
      },
      category: null,
      style: 'ALL',
      displaySideIcon: false,
      search: "",
      dark: false
    };
    _this.handleBlur = _this.handleBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSide = _this.handleSide.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleFilter = _this.handleFilter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IconsSet, [{
    key: "renderIcon",
    value: function renderIcon() {
      if (this.state.selectedIcon.name != null) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
          icon: this.state.selectedIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 520
          },
          __self: this
        }));
      }

      return '';
    }
  }, {
    key: "handleSide",
    value: function handleSide() {
      if (!this.state.showSide) {
        var el = document.querySelector(".icons-filter-in");
        var boundingRect = el.getBoundingClientRect();
        window.scroll({
          top: boundingRect.top + window.pageYOffset - 60,
          behavior: 'smooth'
        });
      }

      this.props.changeCategories(!this.state.showSide);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {}
  }, {
    key: "handleFilter",
    value: function handleFilter(style) {
      this.setState({
        style: style
      });

      if (style === 'REGULAR' || style === 'SOLID' || style === 'LOGO') {
        this.props.fetchStyle(style, this.state.search, this.state.category);
      } else {
        this.props.fetchIcons(this.state.search, this.state.category);
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.state.icons.data !== null) {
        if (event.keyCode == 39) {
          if (this.state.selectedIcon.name != null) {
            var index = this.state.icons.data.findIndex(function (p) {
              return p.slug == _this2.state.selectedIcon.slug;
            });

            if (index === this.state.icons.data.length - 1) {
              index = -1;
            }

            this.props.changeSideIcon(true);
            this.props.setSelectedIcon(this.state.icons.data[index + 1].name, this.state.icons.data[index + 1].slug, this.state.icons.data[index + 1].type_of_icon);
          }
        } else if (event.keyCode == 37) {
          if (this.state.selectedIcon.name != null) {
            var index = this.state.icons.data.findIndex(function (p) {
              return p.slug == _this2.state.selectedIcon.slug;
            });

            if (index === 0) {
              index = this.state.icons.data.length;
            }

            this.props.changeSideIcon(true);
            this.props.setSelectedIcon(this.state.icons.data[index - 1].name, this.state.icons.data[index - 1].slug, this.state.icons.data[index - 1].type_of_icon);
          }
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        displaySideIcon: newProps.displaySideIcon
      });
      this.setState({
        showSide: newProps.displayCategories
      });

      if (newProps.icons.data !== null && newProps.icons.data.length === 0) {
        this.setState({
          noResult: true
        });
      } else {
        this.setState({
          noResult: false
        });
      }

      this.setState({
        selectedIcon: newProps.selectedIcon,
        search: newProps.search,
        category: newProps.category,
        icons: newProps.icons
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchIcons("", this.state.category);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.setSearchTerm("");
      this.props.setCategory(null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var sectionClass = classnames__WEBPACK_IMPORTED_MODULE_21___default()({
        active: this.state.displaySideIcon
      });
      var sectionContClass = classnames__WEBPACK_IMPORTED_MODULE_21___default()({
        'side-active': this.state.showSide
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconsSection, {
        className: sectionClass,
        onKeyDown: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 646
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_ToTop__WEBPACK_IMPORTED_MODULE_20__["default"], {
        side: this.state.displaySideIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconsSectionCont, {
        displaySideIcon: this.state.displaySideIcon,
        side: this.state.showSide,
        className: sectionContClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icons-left-section ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "left-section-inner",
        onBlur: this.handleBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconsFilter, {
        side: this.state.showSide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icon-filter-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icons-filter-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "filter-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.style === 'ALL' ? "filter-all active" : "filter-all",
        onClick: function onClick() {
          return _this3.handleFilter('ALL');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        },
        __self: this
      }, "All"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.style === 'REGULAR' ? "filter-regular active" : "filter-regular",
        onClick: function onClick() {
          return _this3.handleFilter('REGULAR');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        },
        __self: this
      }, "Regular"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.style === 'SOLID' ? "filter-solid active" : "filter-solid",
        onClick: function onClick() {
          return _this3.handleFilter('SOLID');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, "Solid"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.style === 'LOGO' ? "filter-logo active" : "filter-logo",
        onClick: function onClick() {
          return _this3.handleFilter('LOGO');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        },
        __self: this
      }, "Logos")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "filter-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icons-filter",
        onClick: this.handleSide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, this.state.category != null ? this.state.category : 'Filter Category', " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-caret-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      })), "   ")))), this.state.selectedIcon.name != null && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledIconCont, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }, this.renderIcon()))), this.state.showSide && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_18___default.a, {
        onOutsideClick: function onOutsideClick() {
          _this3.setState({
            showSide: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icons-side-section ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "side-section-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_categories__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeCategories: this.props.changeCategories,
        search: this.state.search,
        style: this.state.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      })))), this.state.icons.data != null && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icons-right-section ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }, this.state.category === null && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, this.state.search === '' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, this.state.style === 'ALL' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }, this.state.icons.data.length, "  icons crafted with material guidelines  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_buttons__WEBPACK_IMPORTED_MODULE_12__["BlueButton"], {
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_17__["VERSION"] + ".zip",
        className: " noselect ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "button-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_17__["VERSION"])))))), this.state.noResult ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "icon-list ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "no-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717
        },
        __self: this
      }, "No result found", this.state.search !== '' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720
        },
        __self: this
      }, " for", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721
        },
        __self: this
      }, " '", this.state.search, "'")), this.state.category != null && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        },
        __self: this
      }, " in ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        },
        __self: this
      }, "'", this.state.category, "'")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        },
        __self: this
      }, "Having trouble finding an icon, try the ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
        href: "cheatsheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        },
        __self: this
      }, "Cheatsheet")))))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_iconsList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        icons: this.state.icons.data,
        style: this.state.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_footer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        },
        __self: this
      }))));
    }
  }]);

  return IconsSet;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function mapStateToProps(state) {
  return {
    icons: state.icons,
    search: state.search,
    displaySideIcon: state.displaySideIcon,
    selectedIcon: state.selectedIcon,
    category: state.category,
    displayCategories: state.displayCategories
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    fetchIcons: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["fetchIcons"],
    fetchStyle: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["fetchStyle"],
    changeSideIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["changeSideIcon"],
    setSelectedIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["setSelectedIcon"],
    setSearchTerm: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["setSearchTerm"],
    setCategory: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["setCategory"],
    changeCategories: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["changeCategories"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(IconsSet));

/***/ }),

/***/ "./node_modules/can-use-dom/index.js":
/*!*******************************************!*\
  !*** ./node_modules/can-use-dom/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.memoize/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.memoize/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = memoize;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/scrollbarwidth/scrollbarWidth.js":
/*!*******************************************************!*\
  !*** ./node_modules/scrollbarwidth/scrollbarWidth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	'use strict';

	function scrollbarWidth() {
		if (typeof document === 'undefined') {
			return 0
		}

		var
			body = document.body,
			box = document.createElement('div'),
			boxStyle = box.style,
			width;

		boxStyle.position = 'absolute';
		boxStyle.top = boxStyle.left = '-9999px';
		boxStyle.width = boxStyle.height = '100px';
		boxStyle.overflow = 'scroll';

		body.appendChild(box);

		width = box.offsetWidth - box.clientWidth;

		body.removeChild(box);

		return width;
	}

	return scrollbarWidth;
}));


/***/ }),

/***/ "./node_modules/simplebar-react/dist/simplebar-react.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/simplebar-react/dist/simplebar-react.esm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/**
 * simplebar-react - v1.0.0-alpha.5
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function SimpleBar(_ref) {
  var children = _ref.children,
      scrollableNodeProps = _ref.scrollableNodeProps,
      options = _objectWithoutProperties(_ref, ["children", "scrollableNodeProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    "data-simplebar": true
  }, options), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-height-auto-observer-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-height-auto-observer"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-mask"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-offset"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, scrollableNodeProps, {
    className: "simplebar-content".concat(scrollableNodeProps && scrollableNodeProps.className ? " ".concat(scrollableNodeProps.className) : '')
  }), children)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-placeholder"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-track simplebar-horizontal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-scrollbar"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-track simplebar-vertical"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "simplebar-scrollbar"
  })));
}
SimpleBar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleBar);


/***/ }),

/***/ "./node_modules/simplebar/dist/simplebar.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/simplebar/dist/simplebar.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/simplebar/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/simplebar/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/simplebar/node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/simplebar/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/simplebar/node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/simplebar/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/simplebar/node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/simplebar/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var scrollbarwidth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scrollbarwidth */ "./node_modules/scrollbarwidth/scrollbarWidth.js");
/* harmony import */ var scrollbarwidth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scrollbarwidth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash.memoize */ "./node_modules/lodash.memoize/index.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var can_use_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! can-use-dom */ "./node_modules/can-use-dom/index.js");
/* harmony import */ var can_use_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(can_use_dom__WEBPACK_IMPORTED_MODULE_15__);
/**
 * SimpleBar.js - v4.0.0-alpha.5
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */


















var SimpleBar =
/*#__PURE__*/
function () {
  function SimpleBar(element, options) {
    var _this = this;

    this.onScroll = function () {
      if (!_this.scrollXTicking) {
        window.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }

      if (!_this.scrollYTicking) {
        window.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
    };

    this.scrollX = function () {
      if (_this.axis.x.isOverflowing) {
        _this.showScrollbar('x');

        _this.positionScrollbar('x');
      }

      _this.scrollXTicking = false;
    };

    this.scrollY = function () {
      if (_this.axis.y.isOverflowing) {
        _this.showScrollbar('y');

        _this.positionScrollbar('y');
      }

      _this.scrollYTicking = false;
    };

    this.onMouseEnter = function () {
      _this.showScrollbar('x');

      _this.showScrollbar('y');
    };

    this.onMouseMove = function (e) {
      _this.mouseX = e.clientX;
      _this.mouseY = e.clientY;

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis('y');
      }
    };

    this.onMouseLeave = function () {
      _this.onMouseMove.cancel();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis('x');
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis('y');
      }

      _this.mouseX = -1;
      _this.mouseY = -1;
    };

    this.onWindowResize = function () {
      // Recalculate scrollbarWidth in case it's a zoom
      _this.scrollbarWidth = scrollbarwidth__WEBPACK_IMPORTED_MODULE_10___default()();

      _this.hideNativeScrollbar();
    };

    this.hideScrollbars = function () {
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

      if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
        _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.y.isVisible = false;
      }

      if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
        _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

        _this.axis.x.isVisible = false;
      }
    };

    this.onPointerEvent = function (e) {
      var isWithinBoundsY, isWithinBoundsX;
      _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
      _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinBoundsX = _this.isWithinBounds(_this.axis.x.scrollbar.rect);
      }

      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinBoundsY = _this.isWithinBounds(_this.axis.y.scrollbar.rect);
      } // If any pointer event is called on the scrollbar


      if (isWithinBoundsY || isWithinBoundsX) {
        // Preventing the event's default action stops text being
        // selectable during the drag.
        e.preventDefault(); // Prevent event leaking

        e.stopPropagation();

        if (e.type === 'mousedown') {
          if (isWithinBoundsY) {
            _this.onDragStart(e, 'y');
          }

          if (isWithinBoundsX) {
            _this.onDragStart(e, 'x');
          }
        }
      }
    };

    this.drag = function (e) {
      var eventOffset;
      var track = _this.axis[_this.draggedAxis].track;
      var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      e.preventDefault();
      e.stopPropagation();

      if (_this.draggedAxis === 'y') {
        eventOffset = e.pageY;
      } else {
        eventOffset = e.pageX;
      } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


      var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

      var dragPerc = dragPos / track.rect[_this.axis[_this.draggedAxis].sizeAttr]; // Scroll the content by the same percentage.

      var scrollPos = dragPerc * _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr]; // Fix browsers inconsistency on RTL

      if (_this.draggedAxis === 'x') {
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
        scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
      }

      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };

    this.onEndDrag = function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.el.classList.remove(_this.classNames.dragging);

      document.removeEventListener('mousemove', _this.drag);
      document.removeEventListener('mouseup', _this.onEndDrag);
    };

    this.el = element;
    this.flashTimeout;
    this.contentEl;
    this.contentWrapperEl;
    this.offsetEl;
    this.maskEl;
    this.globalObserver;
    this.mutationObserver;
    this.resizeObserver;
    this.scrollbarWidth;
    this.minScrollbarWidth = 20;
    this.options = Object.assign({}, SimpleBar.defaultOptions, options);
    this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
    this.isRtl;
    this.axis = {
      x: {
        scrollOffsetAttr: 'scrollLeft',
        sizeAttr: 'width',
        scrollSizeAttr: 'scrollWidth',
        offsetAttr: 'left',
        overflowAttr: 'overflowX',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: 'scrollTop',
        sizeAttr: 'height',
        scrollSizeAttr: 'scrollHeight',
        offsetAttr: 'top',
        overflowAttr: 'overflowY',
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    }; // Don't re-instantiate over an existing one

    if (this.el.SimpleBar) {
      return;
    }

    this.recalculate = lodash_throttle__WEBPACK_IMPORTED_MODULE_11___default()(this.recalculate.bind(this), 64);
    this.onMouseMove = lodash_throttle__WEBPACK_IMPORTED_MODULE_11___default()(this.onMouseMove.bind(this), 64);
    this.hideScrollbars = lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default()(this.hideScrollbars.bind(this), this.options.timeout);
    this.onWindowResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_12___default()(this.onWindowResize.bind(this), 64, {
      leading: true
    });
    SimpleBar.getRtlHelpers = lodash_memoize__WEBPACK_IMPORTED_MODULE_13___default()(SimpleBar.getRtlHelpers);
    this.init();
  }
  /**
   * Static properties
   */

  /**
   * Helper to fix browsers inconsistency on RTL:
   *  - Firefox inverts the scrollbar initial position
   *  - IE11 inverts both scrollbar position and scrolling offset
   * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
   */


  SimpleBar.getRtlHelpers = function getRtlHelpers() {
    var dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
    var scrollbarDummyEl = dummyDiv.firstElementChild;
    document.body.appendChild(scrollbarDummyEl);
    var dummyContainerChild = scrollbarDummyEl.firstElementChild;
    scrollbarDummyEl.scrollLeft = 0;
    var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
    var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
    scrollbarDummyEl.scrollLeft = 999;
    var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
    return {
      // determines if the scrolling is responding with negative values
      isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
      // determines if the origin scrollbar position is inverted or not (positioned on left or right)
      isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
    };
  };

  SimpleBar.initHtmlApi = function initHtmlApi() {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

    if (typeof MutationObserver !== 'undefined') {
      // Mutation observer to observe dynamically added elements
      this.globalObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
            if (addedNode.nodeType === 1) {
              if (addedNode.hasAttribute('data-simplebar')) {
                !addedNode.SimpleBar && new SimpleBar(addedNode, SimpleBar.getElOptions(addedNode));
              } else {
                Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
                  !el.SimpleBar && new SimpleBar(el, SimpleBar.getElOptions(el));
                });
              }
            }
          });
          Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
            if (removedNode.nodeType === 1) {
              if (removedNode.hasAttribute('data-simplebar')) {
                removedNode.SimpleBar && removedNode.SimpleBar.unMount();
              } else {
                Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar]'), function (el) {
                  el.SimpleBar && el.SimpleBar.unMount();
                });
              }
            }
          });
        });
      });
      this.globalObserver.observe(document, {
        childList: true,
        subtree: true
      });
    } // Taken from jQuery `ready` function
    // Instantiate elements already present on the page


    if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
      // Handle it asynchronously to allow scripts the opportunity to delay init
      window.setTimeout(this.initDOMLoadedElements);
    } else {
      document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
      window.addEventListener('load', this.initDOMLoadedElements);
    }
  } // Helper function to retrieve options from element attributes
  ;

  SimpleBar.getElOptions = function getElOptions(el) {
    var options = Array.prototype.reduce.call(el.attributes, function (acc, attribute) {
      var option = attribute.name.match(/data-simplebar-(.+)/);

      if (option) {
        var key = option[1].replace(/\W+(.)/g, function (x, chr) {
          return chr.toUpperCase();
        });

        switch (attribute.value) {
          case 'true':
            acc[key] = true;
            break;

          case 'false':
            acc[key] = false;
            break;

          case undefined:
            acc[key] = true;
            break;

          default:
            acc[key] = attribute.value;
        }
      }

      return acc;
    }, {});
    return options;
  };

  SimpleBar.removeObserver = function removeObserver() {
    this.globalObserver.disconnect();
  };

  SimpleBar.initDOMLoadedElements = function initDOMLoadedElements() {
    document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
    window.removeEventListener('load', this.initDOMLoadedElements);
    Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
      if (!el.SimpleBar) new SimpleBar(el, SimpleBar.getElOptions(el));
    });
  };

  SimpleBar.getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
  };

  var _proto = SimpleBar.prototype;

  _proto.init = function init() {
    // Save a reference to the instance, so we know this DOM node has already been instancied
    this.el.SimpleBar = this; // We stop here on server-side

    if (can_use_dom__WEBPACK_IMPORTED_MODULE_15___default.a) {
      this.initDOM();
      this.scrollbarWidth = scrollbarwidth__WEBPACK_IMPORTED_MODULE_10___default()();
      this.recalculate();
      this.initListeners();
    }
  };

  _proto.initDOM = function initDOM() {
    var _this2 = this;

    // make sure this element doesn't have the elements yet
    if (Array.prototype.filter.call(this.el.children, function (child) {
      return child.classList.contains(_this2.classNames.wrapper);
    }).length) {
      // assume that element has his DOM already initiated
      this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
      this.contentWrapperEl = this.el.querySelector("." + this.classNames.contentWrapper);
      this.offsetEl = this.el.querySelector("." + this.classNames.offset);
      this.maskEl = this.el.querySelector("." + this.classNames.mask);
      this.contentEl = this.el.querySelector("." + this.classNames.contentEl);
      this.placeholderEl = this.el.querySelector("." + this.classNames.placeholder);
      this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
      this.axis.x.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.horizontal);
      this.axis.y.track.el = this.el.querySelector("." + this.classNames.track + "." + this.classNames.vertical);
    } else {
      // Prepare DOM
      this.wrapperEl = document.createElement('div');
      this.contentWrapperEl = document.createElement('div');
      this.offsetEl = document.createElement('div');
      this.maskEl = document.createElement('div');
      this.contentEl = document.createElement('div');
      this.placeholderEl = document.createElement('div');
      this.heightAutoObserverWrapperEl = document.createElement('div');
      this.heightAutoObserverEl = document.createElement('div');
      this.wrapperEl.classList.add(this.classNames.wrapper);
      this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
      this.offsetEl.classList.add(this.classNames.offset);
      this.maskEl.classList.add(this.classNames.mask);
      this.contentEl.classList.add(this.classNames.contentEl);
      this.placeholderEl.classList.add(this.classNames.placeholder);
      this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
      this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

      while (this.el.firstChild) {
        this.contentEl.appendChild(this.el.firstChild);
      }

      this.contentWrapperEl.appendChild(this.contentEl);
      this.offsetEl.appendChild(this.contentWrapperEl);
      this.maskEl.appendChild(this.offsetEl);
      this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
      this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
      this.wrapperEl.appendChild(this.maskEl);
      this.wrapperEl.appendChild(this.placeholderEl);
      this.el.appendChild(this.wrapperEl);
    }

    if (!this.axis.x.track.el || !this.axis.y.track.el) {
      var track = document.createElement('div');
      var scrollbar = document.createElement('div');
      track.classList.add(this.classNames.track);
      scrollbar.classList.add(this.classNames.scrollbar);
      track.appendChild(scrollbar);
      this.axis.x.track.el = track.cloneNode(true);
      this.axis.x.track.el.classList.add(this.classNames.horizontal);
      this.axis.y.track.el = track.cloneNode(true);
      this.axis.y.track.el.classList.add(this.classNames.vertical);
      this.el.appendChild(this.axis.x.track.el);
      this.el.appendChild(this.axis.y.track.el);
    }

    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
    this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

    if (!this.options.autoHide) {
      this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
      this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
    }

    this.el.setAttribute('data-simplebar', 'init');
  };

  _proto.initListeners = function initListeners() {
    var _this3 = this;

    // Event listeners
    if (this.options.autoHide) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this3.el.addEventListener(e, _this3.onPointerEvent, true);
    });
    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

    window.addEventListener('resize', this.onWindowResize);
    this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_14__["default"](this.recalculate);
    this.resizeObserver.observe(this.el);
    this.resizeObserver.observe(this.contentEl);
  };

  _proto.recalculate = function recalculate() {
    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
    this.elStyles = window.getComputedStyle(this.el);
    this.isRtl = this.elStyles.direction === 'rtl';
    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
    this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
    this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

    this.placeholderEl.style.width = isWidthAuto ? this.contentEl.offsetWidth + "px" : 'auto';
    this.placeholderEl.style.height = this.contentEl.scrollHeight + "px"; // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

    this.axis.x.isOverflowing = this.contentWrapperEl.scrollWidth > this.contentWrapperEl.offsetWidth;
    this.axis.y.isOverflowing = this.contentWrapperEl.scrollHeight > this.contentWrapperEl.offsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

    this.axis.x.isOverflowing = this.elStyles.overflowX === 'hidden' ? false : this.axis.x.isOverflowing;
    this.axis.y.isOverflowing = this.elStyles.overflowY === 'hidden' ? false : this.axis.y.isOverflowing;
    this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
    this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
    this.hideNativeScrollbar();
    this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect();
    this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect();
    this.axis.x.scrollbar.size = this.getScrollbarSize('x');
    this.axis.y.scrollbar.size = this.getScrollbarSize('y');
    this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
    this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
    this.positionScrollbar('x');
    this.positionScrollbar('y');
    this.toggleTrackVisibility('x');
    this.toggleTrackVisibility('y');
  }
  /**
   * Calculate scrollbar size
   */
  ;

  _proto.getScrollbarSize = function getScrollbarSize(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var contentSize = this.scrollbarWidth ? this.contentWrapperEl[this.axis[axis].scrollSizeAttr] : this.contentWrapperEl[this.axis[axis].scrollSizeAttr] - this.minScrollbarWidth;
    var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
    var scrollbarSize;

    if (!this.axis[axis].isOverflowing) {
      return;
    }

    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

    if (this.options.scrollbarMaxSize) {
      scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
    }

    return scrollbarSize;
  };

  _proto.positionScrollbar = function positionScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
    var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
    var scrollbar = this.axis[axis].scrollbar;
    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
    scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
    var scrollPourcent = scrollOffset / (contentSize - hostSize);
    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
    handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
    scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
  };

  _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var track = this.axis[axis].track.el;
    var scrollbar = this.axis[axis].scrollbar.el;

    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
      track.style.visibility = 'visible';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
    } else {
      track.style.visibility = 'hidden';
      this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
    } // Even if forceVisible is enabled, scrollbar itself should be hidden


    if (this.axis[axis].isOverflowing) {
      scrollbar.style.display = 'block';
    } else {
      scrollbar.style.display = 'none';
    }
  };

  _proto.hideNativeScrollbar = function hideNativeScrollbar() {
    this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0;
    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + (this.scrollbarWidth || this.minScrollbarWidth) + "px" : 0; // If floating scrollbar

    if (!this.scrollbarWidth) {
      var paddingDirection = [this.isRtl ? 'paddingLeft' : 'paddingRight'];
      this.contentWrapperEl.style[paddingDirection] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? this.minScrollbarWidth + "px" : 0;
      this.contentWrapperEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? this.minScrollbarWidth + "px" : 0;
    }
  }
  /**
   * On scroll event handling
   */
  ;

  _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
    this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
    var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

    if (isWithinScrollbarBoundsX) {
      this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }

    if (this.isWithinBounds(this.axis[axis].track.rect)) {
      this.showScrollbar(axis);
      this.axis[axis].track.el.classList.add(this.classNames.hover);
    } else {
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
    }
  };

  _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    this.axis[axis].track.el.classList.remove(this.classNames.hover);
    this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
  };

  /**
   * Show scrollbar
   */
  _proto.showScrollbar = function showScrollbar(axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el;

    if (!this.axis[axis].isVisible) {
      scrollbar.classList.add(this.classNames.visible);
      this.axis[axis].isVisible = true;
    }

    if (this.options.autoHide) {
      this.hideScrollbars();
    }
  }
  /**
   * Hide Scrollbar
   */
  ;

  /**
   * on scrollbar handle drag movement starts
   */
  _proto.onDragStart = function onDragStart(e, axis) {
    if (axis === void 0) {
      axis = 'y';
    }

    var scrollbar = this.axis[axis].scrollbar.el; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
    this.axis[axis].dragOffset = eventOffset - scrollbar.getBoundingClientRect()[this.axis[axis].offsetAttr];
    this.draggedAxis = axis;
    this.el.classList.add(this.classNames.dragging);
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.onEndDrag);
  }
  /**
   * Drag scrollbar handle
   */
  ;

  /**
   * Getter for content element
   */
  _proto.getContentElement = function getContentElement() {
    return this.contentEl;
  }
  /**
   * Getter for original scrolling element
   */
  ;

  _proto.getScrollElement = function getScrollElement() {
    return this.contentWrapperEl;
  };

  _proto.removeListeners = function removeListeners() {
    var _this4 = this;

    // Event listeners
    if (this.options.autoHide) {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }

    ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
      _this4.el.removeEventListener(e, _this4.onPointerEvent);
    });
    this.el.removeEventListener('mousemove', this.onMouseMove);
    this.el.removeEventListener('mouseleave', this.onMouseLeave);
    this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onWindowResize);
    this.mutationObserver && this.mutationObserver.disconnect();
    this.resizeObserver.disconnect(); // Cancel all debounced functions

    this.recalculate.cancel();
    this.onMouseMove.cancel();
    this.hideScrollbars.cancel();
    this.onWindowResize.cancel();
  }
  /**
   * UnMount mutation observer and delete SimpleBar instance from DOM element
   */
  ;

  _proto.unMount = function unMount() {
    this.removeListeners();
    this.el.SimpleBar = null;
  }
  /**
   * Recursively walks up the parent nodes looking for this.el
   */
  ;

  _proto.isChildNode = function isChildNode(el) {
    if (el === null) return false;
    if (el === this.el) return true;
    return this.isChildNode(el.parentNode);
  }
  /**
   * Check if mouse is within bounds
   */
  ;

  _proto.isWithinBounds = function isWithinBounds(bbox) {
    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
  };

  return SimpleBar;
}();
/**
 * HTML API
 * Called only in a browser env.
 */


SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  classNames: {
    contentEl: 'simplebar-content',
    contentWrapper: 'simplebar-content-wrapper',
    offset: 'simplebar-offset',
    mask: 'simplebar-mask',
    wrapper: 'simplebar-wrapper',
    placeholder: 'simplebar-placeholder',
    scrollbar: 'simplebar-scrollbar',
    track: 'simplebar-track',
    heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
    heightAutoObserverEl: 'simplebar-height-auto-observer',
    visible: 'simplebar-visible',
    horizontal: 'simplebar-horizontal',
    vertical: 'simplebar-vertical',
    hover: 'simplebar-hover',
    dragging: 'simplebar-dragging'
  },
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0,
  timeout: 1000
};

if (can_use_dom__WEBPACK_IMPORTED_MODULE_15___default.a) {
  SimpleBar.initHtmlApi();
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleBar);
//# sourceMappingURL=simplebar.esm.js.map


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/a-function.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/a-function.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/simplebar/node_modules/core-js/internals/string-at.js");

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? codePointAt(S, index, true).length : 1);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/an-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativeForEach = [].forEach;
var internalForEach = __webpack_require__(/*! ../internals/array-methods */ "./node_modules/simplebar/node_modules/core-js/internals/array-methods.js")(0);

var SLOPPY_METHOD = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/simplebar/node_modules/core-js/internals/sloppy-array-method.js")('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = SLOPPY_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return internalForEach(this, callbackfn, arguments[1]);
} : nativeForEach;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-includes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/simplebar/node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-method-has-species-support.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-method-has-species-support.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js");
var SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js")('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-methods.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-methods.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/simplebar/node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/simplebar/node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
// 0 -> Array#forEach
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
// 1 -> Array#map
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// 2 -> Array#filter
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// 3 -> Array#some
// https://tc39.github.io/ecma262/#sec-array.prototype.some
// 4 -> Array#every
// https://tc39.github.io/ecma262/#sec-array.prototype.every
// 5 -> Array#find
// https://tc39.github.io/ecma262/#sec-array.prototype.find
// 6 -> Array#findIndex
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
module.exports = function (TYPE, specificCreate) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = specificCreate || arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: target.push(value);       // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-reduce.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-reduce.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/simplebar/node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
module.exports = function (that, callbackfn, argumentsLength, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IndexedObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (argumentsLength < 2) while (true) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/array-species-create.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/array-species-create.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/simplebar/node_modules/core-js/internals/is-array.js");
var SPECIES = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js")('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/bind-context.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/bind-context.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/simplebar/node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/classof-raw.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/classof-raw.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/copy-constructor-properties.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/simplebar/node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/simplebar/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/simplebar/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/descriptors.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/document-create-element.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/document-create-element.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js");
var document = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/export.js":
/*!*************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/export.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/simplebar/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/simplebar/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/simplebar/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/simplebar/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/fails.js":
/*!************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/fails.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/simplebar/node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/function-to-string.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/function-to-string.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/shared */ "./node_modules/simplebar/node_modules/core-js/internals/shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/global.js":
/*!*************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/global.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = typeof window == 'object' && window && window.Math == Math ? window
  : typeof self == 'object' && self && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/has.js":
/*!**********************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/has.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/hide.js":
/*!***********************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/hide.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/simplebar/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js") ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ../internals/descriptors */ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js") && !__webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ../internals/document-create-element */ "./node_modules/simplebar/node_modules/core-js/internals/document-create-element.js")('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/simplebar/node_modules/core-js/internals/classof-raw.js");
var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/internal-state.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/internal-state.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/simplebar/node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/simplebar/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js");
var WeakMap = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/is-array.js":
/*!***************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/is-array.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/simplebar/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/is-forced.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/is-forced.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js");
var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/is-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/is-pure.js":
/*!**************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/is-pure.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/native-symbol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/native-symbol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Chrome 38 Symbol has incorrect toString conversion
module.exports = !__webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js")(function () {
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/native-weak-map.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/simplebar/node_modules/core-js/internals/function-to-string.js");
var WeakMap = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-assign.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-assign.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/simplebar/node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js");
var nativeAssign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (propertyIsEnumerable.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-define-property.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-define-property.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/simplebar/node_modules/core-js/internals/to-primitive.js");
var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/simplebar/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/simplebar/node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/simplebar/node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/simplebar/node_modules/core-js/internals/ie8-dom-define.js");
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-names.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/simplebar/node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js");
var arrayIndexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/simplebar/node_modules/core-js/internals/array-includes.js")(false);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/simplebar/node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-keys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-keys.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/simplebar/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/simplebar/node_modules/core-js/internals/enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = nativeGetOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/own-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/own-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/simplebar/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js");
var Reflect = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/parse-int.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/parse-int.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeParseInt = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").parseInt;
var internalStringTrim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/simplebar/node_modules/core-js/internals/string-trim.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/simplebar/node_modules/core-js/internals/whitespaces.js");
var hex = /^[-+]?0[xX]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

module.exports = FORCED ? function parseInt(str, radix) {
  var string = internalStringTrim(String(str), 3);
  return nativeParseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/redefine.js":
/*!***************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/redefine.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/simplebar/node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/simplebar/node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/simplebar/node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/simplebar/node_modules/core-js/internals/internal-state.js");
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

__webpack_require__(/*! ../internals/shared */ "./node_modules/simplebar/node_modules/core-js/internals/shared.js")('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/simplebar/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/regexp-flags.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/regexp-flags.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/set-global.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/set-global.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/shared-key.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/shared-key.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/simplebar/node_modules/core-js/internals/shared.js")('keys');
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/simplebar/node_modules/core-js/internals/uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/shared.js":
/*!*************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/shared.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/simplebar/node_modules/core-js/internals/set-global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.0.1',
  mode: __webpack_require__(/*! ../internals/is-pure */ "./node_modules/simplebar/node_modules/core-js/internals/is-pure.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/sloppy-array-method.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/sloppy-array-method.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/simplebar/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/string-at.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/string-at.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/simplebar/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");
// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/string-trim.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/string-trim.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");
var whitespace = '[' + __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/simplebar/node_modules/core-js/internals/whitespaces.js") + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// 1 -> String#trimStart
// 2 -> String#trimEnd
// 3 -> String#trim
module.exports = function (string, TYPE) {
  string = String(requireObjectCoercible(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-absolute-index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-absolute-index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/simplebar/node_modules/core-js/internals/to-integer.js");
var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js":
/*!************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-indexed-object.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/simplebar/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-integer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-integer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/simplebar/node_modules/core-js/internals/to-integer.js");
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/to-primitive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/to-primitive.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/simplebar/node_modules/core-js/internals/is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/uid.js":
/*!**********************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/uid.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js":
/*!************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/well-known-symbol.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared */ "./node_modules/simplebar/node_modules/core-js/internals/shared.js")('wks');
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/simplebar/node_modules/core-js/internals/uid.js");
var Symbol = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js").Symbol;
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/simplebar/node_modules/core-js/internals/native-symbol.js");

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/internals/whitespaces.js":
/*!******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/internals/whitespaces.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.array.filter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.array.filter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalFilter = __webpack_require__(/*! ../internals/array-methods */ "./node_modules/simplebar/node_modules/core-js/internals/array-methods.js")(2);

var SPECIES_SUPPORT = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/simplebar/node_modules/core-js/internals/array-method-has-species-support.js")('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ target: 'Array', proto: true, forced: !SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return internalFilter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.array.for-each.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.array.for-each.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/simplebar/node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ target: 'Array', proto: true, forced: [].forEach != forEach }, { forEach: forEach });


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.array.reduce.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.array.reduce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalReduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/simplebar/node_modules/core-js/internals/array-reduce.js");

var SLOPPY_METHOD = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/simplebar/node_modules/core-js/internals/sloppy-array-method.js")('reduce');

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ target: 'Array', proto: true, forced: SLOPPY_METHOD }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return internalReduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.function.name.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.function.name.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/simplebar/node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/simplebar/node_modules/core-js/internals/object-define-property.js").f;
var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.object.assign.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.object.assign.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/simplebar/node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ target: 'Object', stat: true, forced: Object.assign !== assign }, { assign: assign });


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.parse-int.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.parse-int.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/simplebar/node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.regexp.exec.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec.js");

__webpack_require__(/*! ../internals/export */ "./node_modules/simplebar/node_modules/core-js/internals/export.js")({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.string.match.js":
/*!********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.string.match.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js")(
  'match',
  1,
  function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        if (!rx.global) return regExpExec(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  }
);


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/es.string.replace.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/es.string.replace.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/simplebar/node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/simplebar/node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/simplebar/node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/simplebar/node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/simplebar/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/simplebar/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/simplebar/node_modules/core-js/internals/regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/simplebar/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js")(
  'replace',
  2,
  function (REPLACE, nativeReplace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  }
);


/***/ }),

/***/ "./node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/simplebar/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/simplebar/node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/simplebar/node_modules/core-js/internals/array-for-each.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/simplebar/node_modules/core-js/internals/hide.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/simplebar/node_modules/core-js/internals/global.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./reducers/data/categories.json":
/*!***************************************!*\
  !*** ./reducers/data/categories.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = [{"name":"Accessibility","slug":"accessibility"},{"name":"Alert","slug":"alert"},{"name":"Arrow","slug":"arrow"},{"name":"Beverage","slug":"beverage"},{"name":"Building","slug":"building"},{"name":"Business","slug":"business"},{"name":"Code","slug":"code"},{"name":"Communication","slug":"communication"},{"name":"Design","slug":"design"},{"name":"Device","slug":"device"},{"name":"E-Commerce","slug":"e-commerce"},{"name":"Emoji","slug":"emoji"},{"name":"Files & Folders","slug":"files-folders"},{"name":"Finance","slug":"finance"},{"name":"Health","slug":"health"},{"name":"Interface","slug":"interface"},{"name":"Layout","slug":"layout"},{"name":"Loader","slug":"loader"},{"name":"Misc","slug":"misc"},{"name":"Music","slug":"music"},{"name":"Network","slug":"network"},{"name":"Object","slug":"object"},{"name":"Photo & Video","slug":"photo-video"},{"name":"Shape","slug":"shape"},{"name":"Sports","slug":"sports"},{"name":"Time","slug":"time"},{"name":"Travel","slug":"travel"},{"name":"User","slug":"user"},{"name":"Weather","slug":"weather"},{"name":"Writing","slug":"writing"}];

/***/ })

}]);
//# sourceMappingURL=2.js.map