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
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:all  200ms cubic-bezier(0.4,0,0.2,1);top:0;border-bottom:1px solid #e8ecf7;&.scroll{background:", ";ul{li{&.nav-search{.search-sticky{display:block!important;visibility:visible!important;}}&.boxicon_brand{overflow:hidden;.brand{svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:", ";}.navbar-max{max-width:", ";margin:0px auto;ul{transition:0.15s;margin:0;list-style:none;padding:2px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;li{input{height:36px!important;line-height:36px!important;}&.mobile-menu{order:3;display:none;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){a{font-size:13PX!important;padding:0 10px!important;height:36px!important;line-height:36px!important;span{display:none;}}}}&.nav-search{padding-left:15px;flex:1;.search-sticky{display:none;visibility:hidden;}@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;padding-right:0px;.git-frame{display:flex;align-items:center;padding:0px;}a{&.active{color:", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:13px;padding:0px;order:0;&.boxicon_brand{a{padding:0px;}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px!important;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;display:flex;height:40px;margin:0px;align-items:center;&.active input{color:#111!important;}i{font-size:21px!important;line-height:25px;padding:0px 12px!important;}i.bx-x{font-size:21px !important;padding:3px !important;height:21px !important;line-height:21px !important;color:#73859d;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}&.active{}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:", ";}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:56px;@media screen and (max-width:", "){height:34px;width:150px;}@media screen and (max-width:", "){height:34px;width:130px;}svg{width:100%;height:40px;}display:flex;align-items:center;width:160px;margin:1px 0;margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 15px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:.875rem;font-weight:500;}}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["NAV_LIST_COLOR"]);

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
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: this.state.is_Mounted ? "navbar mounted" : "navbar",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "boxicon_brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand sprite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "612px",
        height: "134.994px",
        viewBox: "0 274.096 612 134.994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#DCE0E6",
        d: "M6.669,319.417v39.23c0,6.277,3.138,11.508,8.892,14.646l39.754,21.97\r c3.662,2.091,8.369-0.523,8.369-4.708v-52.308l46.554-23.538c4.185-2.093,4.185-7.847,0-9.939l-40.8-19.876\r c-4.708-2.093-9.938-2.093-14.646,0l-38.708,19.876C10.33,307.91,6.669,313.14,6.669,319.417z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#73859D",
        d: "M9.284,311.048c-1.569,2.615-2.615,5.754-2.615,8.369v39.23c0,6.277,3.138,11.508,8.892,14.646l39.754,21.97\r c3.662,2.091,8.369-0.523,8.369-4.708v-52.308l1.046-0.523L9.284,311.048z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M225.35,348.711c2.35,2.946,3.525,6.361,3.525,10.246\r c0,5.703-1.896,10.152-5.687,13.348c-3.792,3.196-9.228,4.794-16.309,4.794h-30.926v-66.458h30.174c6.768,0,12,1.473,15.698,4.418\r c3.697,2.946,5.546,7.144,5.546,12.596c0,4.011-1.066,7.348-3.196,10.011c-2.131,2.665-4.92,4.403-8.366,5.217\r C219.819,343.823,223,345.766,225.35,348.711z M192.027,337.807h10.528c5.577,0,8.366-2.381,8.366-7.144\r c0-4.762-2.853-7.144-8.554-7.144h-10.34V337.807z M212.425,356.701c0-2.381-0.784-4.245-2.35-5.593\r c-1.567-1.347-3.792-2.021-6.674-2.021h-11.374v14.946h11.468C209.448,364.033,212.425,361.589,212.425,356.701z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M275.828,327.232c4.104,2.162,7.332,5.28,9.682,9.353\r c2.35,4.075,3.525,8.836,3.525,14.288s-1.175,10.215-3.525,14.288c-2.35,4.074-5.579,7.191-9.682,9.353\r c-4.105,2.162-8.758,3.243-13.959,3.243c-5.202,0-9.87-1.081-14.006-3.243c-4.136-2.162-7.379-5.279-9.729-9.353\r c-2.35-4.073-3.525-8.836-3.525-14.288s1.175-10.213,3.525-14.288c2.35-4.073,5.593-7.191,9.729-9.353\r c4.136-2.162,8.804-3.243,14.006-3.243C267.07,323.989,271.723,325.07,275.828,327.232z M254.114,341.238\r c-2.101,2.225-3.149,5.437-3.149,9.635c0,4.199,1.049,7.395,3.149,9.588c2.099,2.194,4.684,3.29,7.755,3.29\r c3.07,0,5.64-1.096,7.708-3.29c2.068-2.193,3.102-5.389,3.102-9.588c0-4.198-1.034-7.41-3.102-9.635\r c-2.068-2.224-4.638-3.337-7.708-3.337C258.798,337.901,256.213,339.015,254.114,341.238z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M330.206,377.099l-10.716-14.946l-8.742,14.946h-17.671\r l17.39-27.354l-18.048-25.098h18.048l10.622,14.758l8.741-14.758h17.673l-17.767,26.696l18.519,25.756H330.206z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M355.397,303.826c1.754-1.598,4.073-2.397,6.956-2.397\r c2.882,0,5.201,0.799,6.956,2.397c1.754,1.598,2.632,3.619,2.632,6.063c0,2.382-0.878,4.371-2.632,5.969\r c-1.755,1.598-4.074,2.397-6.956,2.397c-2.883,0-5.202-0.799-6.956-2.397c-1.755-1.598-2.632-3.586-2.632-5.969\r C352.766,307.445,353.643,305.424,355.397,303.826z M370.344,324.647v52.452H354.27v-52.452H370.344z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M422.137,329.582c4.573,3.729,7.457,8.852,8.648,15.369h-17.015\r c-0.502-2.256-1.536-4.01-3.102-5.264c-1.567-1.253-3.541-1.88-5.922-1.88c-2.82,0-5.14,1.113-6.956,3.337\r c-1.818,2.225-2.727,5.468-2.727,9.729c0,4.262,0.908,7.505,2.727,9.729c1.816,2.225,4.136,3.337,6.956,3.337\r c2.381,0,4.354-0.625,5.922-1.88c1.565-1.253,2.6-3.008,3.102-5.264h17.015c-1.191,6.519-4.075,11.642-8.648,15.369\r c-4.575,3.729-10.246,5.593-17.014,5.593c-5.14,0-9.698-1.081-13.678-3.243s-7.097-5.279-9.353-9.353\r c-2.256-4.073-3.384-8.836-3.384-14.288c0-5.514,1.111-10.293,3.337-14.335c2.224-4.042,5.342-7.144,9.353-9.306\r c4.01-2.162,8.585-3.243,13.725-3.243C411.891,323.989,417.562,325.854,422.137,329.582z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M477.644,327.232c4.104,2.162,7.332,5.28,9.682,9.353\r c2.351,4.075,3.525,8.836,3.525,14.288s-1.175,10.215-3.525,14.288c-2.35,4.074-5.578,7.191-9.682,9.353\r c-4.105,2.162-8.758,3.243-13.959,3.243c-5.202,0-9.87-1.081-14.006-3.243s-7.379-5.279-9.729-9.353\r c-2.35-4.073-3.524-8.836-3.524-14.288s1.175-10.213,3.524-14.288c2.351-4.073,5.594-7.191,9.729-9.353\r c4.136-2.162,8.804-3.243,14.006-3.243C468.886,323.989,473.538,325.07,477.644,327.232z M455.93,341.238\r c-2.101,2.225-3.149,5.437-3.149,9.635c0,4.199,1.049,7.395,3.149,9.588c2.099,2.194,4.684,3.29,7.755,3.29\r c3.069,0,5.64-1.096,7.708-3.29c2.068-2.193,3.102-5.389,3.102-9.588c0-4.198-1.033-7.41-3.102-9.635\r c-2.068-2.224-4.639-3.337-7.708-3.337C460.613,337.901,458.028,339.015,455.93,341.238z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M546.827,330.099c3.539,4.011,5.311,9.526,5.311,16.544v30.456\r h-16.074v-28.576c0-3.509-0.925-6.251-2.772-8.225c-1.85-1.974-4.31-2.961-7.379-2.961c-3.26,0-5.845,1.034-7.755,3.102\r c-1.913,2.068-2.867,5.015-2.867,8.836v27.824h-16.074v-52.452h16.074v9.588c1.504-3.133,3.744-5.608,6.721-7.426\r c2.976-1.817,6.47-2.726,10.481-2.726C538.508,324.083,543.286,326.089,546.827,330.099z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        stroke: "#15161E",
        strokeMiterlimit: "10",
        d: "M597.774,328.971c3.979,3.322,6.471,7.708,7.474,13.16h-15.04\r c-0.439-2.13-1.427-3.807-2.961-5.029c-1.536-1.222-3.464-1.833-5.781-1.833c-1.818,0-3.196,0.392-4.136,1.175\r c-0.94,0.784-1.41,1.896-1.41,3.337c0,1.63,0.86,2.852,2.585,3.666c1.723,0.815,4.433,1.63,8.131,2.444\r c4.01,0.94,7.3,1.896,9.87,2.867c2.569,0.972,4.794,2.554,6.674,4.747c1.88,2.194,2.82,5.139,2.82,8.836\r c0,3.008-0.815,5.672-2.444,7.99c-1.63,2.319-3.98,4.136-7.05,5.452c-3.071,1.316-6.706,1.974-10.904,1.974\r c-7.082,0-12.753-1.566-17.014-4.7c-4.263-3.133-6.862-7.614-7.802-13.442h15.51c0.25,2.256,1.206,3.98,2.867,5.17\r c1.659,1.191,3.807,1.786,6.438,1.786c1.817,0,3.196-0.423,4.137-1.269c0.939-0.846,1.409-1.958,1.409-3.337\r c0-1.817-0.861-3.117-2.585-3.901c-1.724-0.783-4.527-1.612-8.413-2.491c-3.886-0.814-7.082-1.692-9.588-2.632\r c-2.507-0.94-4.669-2.458-6.485-4.559c-1.818-2.099-2.727-4.966-2.727-8.601c0-4.7,1.786-8.507,5.358-11.421\r c3.572-2.914,8.615-4.371,15.134-4.371C588.483,323.989,593.795,325.65,597.774,328.971z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
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
//# sourceMappingURL=index.js.74877ea58204bc4a9cc1.hot-update.js.map