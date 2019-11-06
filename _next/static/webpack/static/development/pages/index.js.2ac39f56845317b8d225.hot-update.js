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
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:all  200ms cubic-bezier(0.4,0,0.2,1);top:0;&.scroll{box-shadow:0 4px 4px rgba(0,0,0,.06);background:", ";ul{li{&.nav-search{.search-sticky{display:block!important;visibility:visible!important;}}&.boxicon_brand{overflow:hidden;.brand{svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:", ";}.navbar-max{margin:0px auto;ul{transition:0.15s;margin:0;list-style:none;padding:5px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;li{input{height:36px!important;line-height:36px!important;font-size:18px!important;}&.mobile-menu{order:3;display:none;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){a{font-size:13PX!important;padding:0 10px!important;height:36px!important;line-height:36px!important;span{display:none;}}}}&.nav-search{padding-left:15px;flex:1;.search-sticky{display:none;visibility:hidden;}@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;padding-right:0px;.git-frame{display:flex;align-items:center;padding:0px;}a{&.active{color:", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:13px;padding:0px;order:0;&.boxicon_brand{a{padding:0px;}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px!important;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;display:flex;background:", ";border:1px solid ", ";box-shadow:0 0 0 0px rgba(0,0,0,0.1)!important;height:40px;margin:0px;align-items:center;&.active{background:#fff;border:1px solid #ddd;}&.active input{color:#111!important;}i{font-size:21px!important;line-height:25px;padding:0px 12px!important;}i.bx-x{font-size:21px !important;padding:3px !important;height:21px !important;line-height:21px !important;color:#73859d;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}&.active{}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:", ";}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:56px;@media screen and (max-width:", "){height:34px;width:34px;}@media screen and (max-width:", "){height:34px;width:34px;}svg{width:100%;height:40px;}display:flex;align-items:center;width:56px;margin:1px 0;margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 15px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:.875rem;font-weight:400;}}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["NAV_LIST_COLOR"]);

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
        width: "466.167px",
        height: "130px",
        viewBox: "0 0 466.167 130",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#3A3A3A",
        d: "M11.646,47.253v39.229c0,6.275,3.138,11.509,8.892,14.646L60.292,123.1\r c3.662,2.092,8.369-0.521,8.369-4.707v-52.31l46.555-23.538c4.186-2.093,4.186-7.847,0-9.938L74.414,12.73\r c-4.707-2.093-9.938-2.093-14.646,0L21.061,32.606C15.307,35.746,11.646,40.976,11.646,47.253z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M14.261,38.884c-1.569,2.615-2.615,5.754-2.615,8.369v39.229c0,6.275,3.138,11.509,8.892,14.646\r L60.292,123.1c3.662,2.092,8.369-0.521,8.369-4.707v-52.31l1.047-0.522L14.261,38.884z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M189.735,69.438c1.796,2.217,2.694,4.819,2.694,7.805c0,4.154-1.389,7.433-4.165,9.835\r c-2.776,2.404-6.802,3.605-12.074,3.605h-21.21v-49.42h20.789c4.993,0,8.831,1.097,11.516,3.29c2.683,2.194,4.024,5.274,4.024,9.24\r c0,3.08-0.805,5.6-2.415,7.56c-1.609,1.96-3.722,3.244-6.335,3.85C185.546,65.81,187.938,67.222,189.735,69.438z M164.85,61.982\r h8.891c2.473,0,4.351-0.548,5.635-1.645c1.283-1.096,1.925-2.671,1.925-4.725c0-2.053-0.63-3.64-1.89-4.76s-3.197-1.68-5.811-1.68\r h-8.75V61.982z M180.25,80.918c1.4-1.144,2.1-2.812,2.1-5.006c0-2.192-0.712-3.885-2.135-5.074\r c-1.424-1.19-3.441-1.785-6.055-1.785h-9.311v13.58h9.381C176.843,82.633,178.85,82.062,180.25,80.918z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M225.714,53.792c3.01,1.587,5.378,3.885,7.105,6.895c1.726,3.01,2.59,6.545,2.59,10.605\r c0,4.06-0.864,7.584-2.59,10.57c-1.728,2.986-4.096,5.284-7.105,6.895c-3.01,1.609-6.405,2.415-10.185,2.415\r c-3.78,0-7.176-0.806-10.186-2.415c-3.01-1.61-5.379-3.908-7.104-6.895c-1.728-2.986-2.591-6.511-2.591-10.57\r c0-4.061,0.863-7.595,2.591-10.605c1.726-3.01,4.095-5.308,7.104-6.895c3.01-1.586,6.405-2.38,10.186-2.38\r C219.309,51.413,222.704,52.207,225.714,53.792z M208.529,62.857c-1.914,1.937-2.87,4.749-2.87,8.436s0.956,6.498,2.87,8.435\r c1.912,1.937,4.245,2.905,7,2.905c2.753,0,5.086-0.969,7-2.905c1.912-1.937,2.869-4.748,2.869-8.435s-0.957-6.499-2.869-8.436\r c-1.914-1.936-4.247-2.905-7-2.905C212.774,59.953,210.441,60.922,208.529,62.857z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M264.249,90.683l-8.82-12.46l-7.42,12.46h-10.85l12.81-20.229l-13.09-18.55h11.06l8.61,12.25l7.42-12.25\r h10.85l-13.02,19.669l13.51,19.11H264.249z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M279.158,36.888c1.12-1.003,2.59-1.505,4.41-1.505c1.819,0,3.29,0.502,4.41,1.505\r c1.12,1.004,1.68,2.299,1.68,3.885c0,1.54-0.56,2.812-1.68,3.815c-1.12,1.004-2.591,1.505-4.41,1.505\r c-1.82,0-3.29-0.501-4.41-1.505c-1.12-1.003-1.68-2.275-1.68-3.815C277.479,39.187,278.038,37.892,279.158,36.888z M288.468,51.903\r v38.78h-9.869v-38.78H288.468z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M325.604,55.473c3.336,2.707,5.425,6.394,6.265,11.061h-10.43c-0.42-2.054-1.377-3.676-2.87-4.866\r c-1.494-1.19-3.384-1.785-5.67-1.785c-2.614,0-4.795,0.969-6.545,2.905c-1.75,1.937-2.625,4.772-2.625,8.505\r c0,3.734,0.875,6.568,2.625,8.505s3.931,2.905,6.545,2.905c2.286,0,4.176-0.596,5.67-1.785c1.493-1.19,2.45-2.812,2.87-4.865h10.43\r c-0.84,4.667-2.929,8.354-6.265,11.06c-3.337,2.707-7.502,4.061-12.495,4.061c-3.78,0-7.141-0.806-10.08-2.415\r c-2.94-1.61-5.228-3.908-6.86-6.895c-1.634-2.986-2.45-6.511-2.45-10.57c0-4.061,0.816-7.595,2.45-10.605\r c1.633-3.01,3.92-5.308,6.86-6.895c2.939-1.586,6.3-2.38,10.08-2.38C318.102,51.413,322.267,52.767,325.604,55.473z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M365.223,53.792c3.01,1.587,5.378,3.885,7.105,6.895c1.726,3.01,2.59,6.545,2.59,10.605\r c0,4.06-0.864,7.584-2.59,10.57c-1.728,2.986-4.096,5.284-7.105,6.895c-3.01,1.609-6.405,2.415-10.185,2.415\r c-3.78,0-7.176-0.806-10.186-2.415c-3.01-1.61-5.379-3.908-7.104-6.895c-1.728-2.986-2.591-6.511-2.591-10.57\r c0-4.061,0.863-7.595,2.591-10.605c1.726-3.01,4.095-5.308,7.104-6.895c3.01-1.586,6.405-2.38,10.186-2.38\r C358.817,51.413,362.213,52.207,365.223,53.792z M348.038,62.857c-1.914,1.937-2.87,4.749-2.87,8.436s0.956,6.498,2.87,8.435\r c1.912,1.937,4.245,2.905,7,2.905c2.753,0,5.086-0.969,7-2.905c1.912-1.937,2.869-4.748,2.869-8.435s-0.957-6.499-2.869-8.436\r c-1.914-1.936-4.247-2.905-7-2.905C352.283,59.953,349.95,60.922,348.038,62.857z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M413.978,55.752c2.66,2.94,3.99,7.07,3.99,12.39v22.54h-9.8v-21.42c0-3.08-0.795-5.471-2.381-7.175\r c-1.587-1.703-3.757-2.555-6.51-2.555c-2.8,0-5.04,0.91-6.72,2.73c-1.68,1.82-2.521,4.435-2.521,7.84v20.58h-9.869v-38.78h9.869\r v7.77c1.026-2.613,2.719-4.655,5.075-6.125c2.356-1.47,5.075-2.205,8.155-2.205C407.747,51.343,411.317,52.813,413.978,55.752z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M449.607,54.982c2.846,2.38,4.619,5.554,5.319,9.52h-9.24c-0.374-1.866-1.214-3.36-2.52-4.48\r c-1.307-1.12-3.01-1.68-5.11-1.68c-1.68,0-2.986,0.397-3.92,1.19c-0.934,0.794-1.399,1.867-1.399,3.22\r c0,1.074,0.373,1.937,1.12,2.59c0.745,0.653,1.68,1.167,2.8,1.54c1.12,0.374,2.729,0.816,4.83,1.33\r c2.939,0.654,5.331,1.342,7.175,2.064c1.843,0.725,3.43,1.867,4.76,3.43c1.33,1.564,1.995,3.676,1.995,6.336\r c0,3.313-1.295,5.997-3.885,8.05c-2.59,2.054-6.079,3.08-10.465,3.08c-5.04,0-9.077-1.131-12.11-3.396\r c-3.034-2.263-4.877-5.494-5.53-9.695h9.45c0.233,1.914,1.073,3.42,2.521,4.516c1.445,1.097,3.336,1.645,5.67,1.645\r c1.68,0,2.963-0.407,3.85-1.225c0.886-0.816,1.33-1.878,1.33-3.186c0-1.119-0.385-2.029-1.155-2.729\r c-0.77-0.7-1.727-1.235-2.87-1.61c-1.144-0.373-2.765-0.815-4.864-1.33c-2.895-0.652-5.239-1.317-7.035-1.994\r c-1.797-0.676-3.337-1.762-4.62-3.256c-1.284-1.492-1.925-3.545-1.925-6.16c0-3.36,1.282-6.09,3.85-8.19\r c2.566-2.1,6.113-3.15,10.64-3.15C442.979,51.413,446.76,52.603,449.607,54.982z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://paypal.me/atisawd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, "Donate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
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
//# sourceMappingURL=index.js.2ac39f56845317b8d225.hot-update.js.map