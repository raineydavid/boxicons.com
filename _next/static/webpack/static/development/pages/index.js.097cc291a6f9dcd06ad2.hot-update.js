webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/navbar.js":
/*!*************************************!*\
  !*** ./components/common/navbar.js ***!
  \*************************************/
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
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActiveLink */ "./components/common/ActiveLink.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons */ "./components/common/buttons.js");
/* harmony import */ var _search_searchForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search/searchForm */ "./components/search/searchForm.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/types */ "./actions/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types */ "./components/types.js");






var _jsxFileName = "D:\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\navbar.js";







var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  componentId: "r3kz9n-0"
})(["position:absolute;background:", ";border-radius:5px;color:#fff;&:before{content:\"\";right:100%;bottom:100%;position:absolute;margin-right:-33px;position:absolute;width:0;height:0;border:7px solid transparent;border-top-width:0;border-bottom-color:", ";}transition:all .25s cubic-bezier(.24,.22,.015,1.56),opacity .1s ease-in-out;top:60px;max-width:160px;opacity:0;visibility:hidden;transform:scale(0.8) translateY(-10px);&.active{box-shadow:0 1px 3px 0 rgba(0,0,0,0.08),0 0 5PX 1px rgba(0,0,0,0.04);opacity:1;visibility:visible;transform:scale(1) translateY(0);}ul{list-style:none;display:block;text-align:left;padding:12px 15px!important;li{display:block;font-size:13px!important;line-height:1.6!important;min-width:130px;a{line-height:30px!important;height:auto!important;}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["SEARCH_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["SEARCH_BACKGROUND"]);
var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  componentId: "r3kz9n-1"
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:all  200ms cubic-bezier(0.4,0,0.2,1);top:0;border-bottom:1px solid #e8ecf7;&.scroll{background:", ";ul{li{&.nav-search{.search-sticky{display:block!important;visibility:visible!important;}}&.boxicon_brand{overflow:hidden;.brand{svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:", ";}.navbar-max{max-width:", ";margin:0px auto;ul{transition:0.15s;margin:0;list-style:none;padding:2px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;li{input{height:36px!important;line-height:36px!important;font-size:18px!important;}&.mobile-menu{order:3;display:none;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){a{font-size:13PX!important;padding:0 10px!important;height:36px!important;line-height:36px!important;span{display:none;}}}}&.nav-search{padding-left:15px;flex:1;.search-sticky{display:none;visibility:hidden;}@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;padding-right:0px;.git-frame{display:flex;align-items:center;padding:0px;}a{&.active{color:", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:13px;padding:0px;order:0;&.boxicon_brand{a{padding:0px;}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px!important;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;display:flex;box-shadow:0 0 0 1px rgba(0,0,0,0.1);height:40px;margin:0px;align-items:center;&.active input{color:#111!important;}i{font-size:21px!important;line-height:25px;padding:0px 12px!important;}i.bx-x{font-size:21px !important;padding:3px !important;height:21px !important;line-height:21px !important;color:#73859d;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}&.active{}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:", ";}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:56px;@media screen and (max-width:", "){height:34px;width:150px;}@media screen and (max-width:", "){height:34px;width:130px;}svg{width:100%;height:40px;}display:flex;align-items:center;width:200px;margin:1px 0;span{margin-left:7px;font-size:11px;font-weight:500;font-family:", ";}margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 15px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:.875rem;font-weight:400;}}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["FONT_FAMILY_HEADER"], _types__WEBPACK_IMPORTED_MODULE_12__["NAV_LIST_COLOR"]);

var NavigationBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavigationBar, _Component);

  function NavigationBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar).call(this, props));
    _this.state = {
      showMobile: false,
      showGum: false,
      showDropdown: false,
      is_Mounted: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleMenuLinkClick = _this.handleMenuLinkClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleNavbarScroll = _this.handleNavbarScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleDropdown = _this.handleDropdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar, [{
    key: "handleNavbarScroll",
    value: function handleNavbarScroll() {
      var header = document.querySelector(".navbar-cont");
      var fixed_class = "scroll";

      if (window.pageYOffset > 250) {
        header.classList.add(fixed_class);
      } else {
        header.classList.remove(fixed_class);
      }
    }
  }, {
    key: "handleMenuLinkClick",
    value: function handleMenuLinkClick() {
      this.setState({
        showMobile: false
      });
    }
  }, {
    key: "handleDropdown",
    value: function handleDropdown(e) {
      e.preventDefault();
      this.setState({
        showDropdown: !this.state.showDropdown
      });
    }
  }, {
    key: "handleMenuClick",
    value: function handleMenuClick(e) {
      e.preventDefault();
      this.setState({
        showMobile: !this.state.showMobile
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          is_Mounted: true
        });
      }.bind(this), 10);
      window.addEventListener("scroll", this.handleNavbarScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var header = document.querySelector(".navbar-cont");
      header.classList.remove("scroll");
      window.removeEventListener("scroll", this.handleNavbarScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Navbar, {
        className: "navbar-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: this.state.is_Mounted ? "navbar mounted" : "navbar",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "boxicon_brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand sprite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "612px",
        height: "134.994px",
        viewBox: "0 0 612 134.994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#15161E",
        d: "M6.753,47.253v39.23c0,6.276,3.138,11.508,8.892,14.646l39.754,21.97\r c3.662,2.091,8.369-0.522,8.369-4.707V66.083l46.554-23.538c4.185-2.093,4.185-7.847,0-9.938l-40.8-19.877\r c-4.708-2.093-9.938-2.093-14.646,0L16.168,32.606C10.414,35.746,6.753,40.976,6.753,47.253z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        d: "M9.368,38.884c-1.569,2.615-2.615,5.754-2.615,8.369v39.23c0,6.276,3.138,11.508,8.892,14.646l39.754,21.97\r c3.662,2.091,8.369-0.522,8.369-4.707V66.083l1.046-0.523L9.368,38.884z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M225.434,76.547c2.35,2.946,3.525,6.36,3.525,10.246c0,5.703-1.896,10.151-5.687,13.349\r c-3.792,3.195-9.228,4.793-16.309,4.793h-30.926V38.478h30.174c6.768,0,12,1.473,15.698,4.418\r c3.697,2.945,5.546,7.144,5.546,12.596c0,4.011-1.066,7.348-3.196,10.011c-2.131,2.665-4.92,4.403-8.366,5.217\r C219.903,71.659,223.084,73.603,225.434,76.547z M192.111,65.644h10.528c5.577,0,8.366-2.382,8.366-7.145\r c0-4.762-2.853-7.145-8.554-7.145h-10.34V65.644z M212.509,84.537c0-2.382-0.784-4.245-2.35-5.593\r c-1.567-1.348-3.792-2.021-6.674-2.021h-11.374v14.946h11.468C209.532,91.869,212.509,89.425,212.509,84.537z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M275.912,55.067c4.104,2.162,7.332,5.281,9.682,9.354\r c2.35,4.075,3.525,8.836,3.525,14.288s-1.175,10.215-3.525,14.288c-2.35,4.074-5.579,7.191-9.682,9.354\r c-4.105,2.161-8.758,3.242-13.959,3.242c-5.202,0-9.87-1.081-14.006-3.242c-4.136-2.162-7.379-5.279-9.729-9.354\r c-2.35-4.073-3.525-8.836-3.525-14.288s1.175-10.213,3.525-14.288c2.35-4.072,5.593-7.191,9.729-9.354\r c4.136-2.162,8.804-3.242,14.006-3.242C267.154,51.825,271.807,52.905,275.912,55.067z M254.198,69.073\r c-2.101,2.226-3.149,5.438-3.149,9.636c0,4.199,1.049,7.396,3.149,9.588c2.099,2.194,4.684,3.29,7.755,3.29\r c3.07,0,5.64-1.096,7.708-3.29c2.068-2.192,3.102-5.389,3.102-9.588c0-4.198-1.034-7.41-3.102-9.636\r c-2.068-2.223-4.638-3.336-7.708-3.336C258.882,65.737,256.297,66.851,254.198,69.073z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M330.29,104.935l-10.716-14.945l-8.742,14.945h-17.671l17.39-27.354l-18.048-25.098\r h18.048l10.622,14.758l8.741-14.758h17.673L329.82,79.179l18.519,25.756H330.29L330.29,104.935z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M355.481,31.662c1.754-1.599,4.072-2.397,6.955-2.397s5.201,0.799,6.956,2.397\r c1.754,1.598,2.633,3.618,2.633,6.063c0,2.381-0.879,4.37-2.633,5.969c-1.755,1.598-4.073,2.396-6.956,2.396\r s-5.201-0.799-6.955-2.396c-1.756-1.599-2.633-3.586-2.633-5.969C352.85,35.28,353.727,33.26,355.481,31.662z M370.428,52.483\r v52.451h-16.074V52.483H370.428z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M422.221,57.418c4.573,3.729,7.457,8.853,8.648,15.369h-17.016\r c-0.502-2.257-1.535-4.011-3.102-5.265c-1.567-1.252-3.541-1.879-5.922-1.879c-2.82,0-5.14,1.112-6.956,3.336\r c-1.818,2.226-2.727,5.469-2.727,9.729c0,4.262,0.907,7.505,2.727,9.729c1.816,2.225,4.136,3.336,6.956,3.336\r c2.381,0,4.354-0.625,5.922-1.879c1.565-1.254,2.6-3.009,3.102-5.265h17.016c-1.191,6.519-4.075,11.642-8.648,15.369\r c-4.574,3.729-10.246,5.593-17.014,5.593c-5.14,0-9.698-1.081-13.678-3.242c-3.98-2.162-7.098-5.279-9.354-9.354\r c-2.256-4.073-3.384-8.836-3.384-14.288c0-5.515,1.111-10.293,3.337-14.335c2.224-4.042,5.342-7.145,9.354-9.307\r c4.01-2.162,8.585-3.242,13.725-3.242C411.975,51.825,417.646,53.69,422.221,57.418z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M477.728,55.067c4.104,2.162,7.332,5.281,9.683,9.354\r c2.351,4.075,3.524,8.836,3.524,14.288s-1.175,10.215-3.524,14.288c-2.351,4.074-5.578,7.191-9.683,9.354\r c-4.104,2.161-8.758,3.242-13.959,3.242s-9.869-1.081-14.006-3.242c-4.136-2.162-7.379-5.279-9.729-9.354\r c-2.351-4.073-3.524-8.836-3.524-14.288s1.175-10.213,3.524-14.288c2.351-4.072,5.594-7.191,9.729-9.354\r c4.137-2.162,8.805-3.242,14.006-3.242S473.622,52.905,477.728,55.067z M456.014,69.073c-2.101,2.226-3.148,5.438-3.148,9.636\r c0,4.199,1.049,7.396,3.148,9.588c2.1,2.194,4.685,3.29,7.755,3.29c3.069,0,5.641-1.096,7.708-3.29\r c2.068-2.192,3.103-5.389,3.103-9.588c0-4.198-1.033-7.41-3.103-9.636c-2.067-2.223-4.639-3.336-7.708-3.336\r C460.697,65.737,458.112,66.851,456.014,69.073z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M546.911,57.935c3.539,4.012,5.311,9.526,5.311,16.545v30.455h-16.073V76.358\r c0-3.508-0.926-6.25-2.772-8.225c-1.85-1.974-4.31-2.961-7.379-2.961c-3.26,0-5.845,1.034-7.755,3.102\r c-1.913,2.068-2.867,5.016-2.867,8.836v27.824h-16.074V52.483h16.074v9.588c1.504-3.133,3.744-5.608,6.721-7.426\r s6.471-2.727,10.481-2.727C538.592,51.919,543.37,53.925,546.911,57.935z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        d: "M597.858,56.808c3.979,3.321,6.471,7.707,7.474,13.159h-15.04\r c-0.439-2.13-1.427-3.807-2.961-5.028c-1.536-1.223-3.464-1.834-5.781-1.834c-1.817,0-3.196,0.393-4.136,1.176\r c-0.94,0.783-1.41,1.896-1.41,3.337c0,1.63,0.86,2.852,2.585,3.665c1.724,0.816,4.434,1.631,8.131,2.445\r c4.011,0.939,7.3,1.896,9.87,2.866c2.569,0.972,4.794,2.554,6.674,4.747c1.881,2.194,2.82,5.139,2.82,8.836\r c0,3.008-0.814,5.672-2.444,7.99s-3.979,4.136-7.05,5.452c-3.07,1.315-6.706,1.974-10.903,1.974\r c-7.082,0-12.753-1.566-17.015-4.699c-4.263-3.134-6.861-7.615-7.802-13.442h15.51c0.25,2.256,1.206,3.979,2.867,5.17\r c1.659,1.19,3.807,1.786,6.438,1.786c1.816,0,3.195-0.424,4.137-1.27c0.938-0.846,1.409-1.958,1.409-3.337\r c0-1.817-0.861-3.116-2.585-3.901c-1.725-0.782-4.527-1.611-8.413-2.49c-3.887-0.814-7.082-1.692-9.588-2.633\r c-2.508-0.939-4.669-2.457-6.485-4.559c-1.818-2.099-2.727-4.966-2.727-8.601c0-4.7,1.785-8.507,5.357-11.421\r s8.615-4.371,15.134-4.371C588.567,51.825,593.879,53.485,597.858,56.808z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }))), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://paypal.me/atisawd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, "Donate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, "Download Pack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))))));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=index.js.097cc291a6f9dcd06ad2.hot-update.js.map