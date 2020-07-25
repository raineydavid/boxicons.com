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
})(["position:absolute;background:", ";border-radius:5px;color:#fff;&:before{content:\"\";right:100%;bottom:100%;position:absolute;margin-right:-33px;position:absolute;width:0;height:0;border:7px solid transparent;border-top-width:0;border-bottom-color:", ";}transition:all .25s cubic-bezier(.24,.22,.015,1.56),opacity .1s ease-in-out;top:60px;max-width:170px;opacity:0;visibility:hidden;transform:scale(0.8) translateY(-10px);&.active{box-shadow:60px 40px 60px 0 rgba(19,23,32,0.1);opacity:1;visibility:visible;transform:scale(1) translateY(0);}ul{list-style:none;display:block;text-align:left;padding:12px 20px!important;li{display:block;font-size:13px!important;line-height:1.6!important;min-width:130px;a{line-height:30px!important;height:auto!important;}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["SEARCH_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["SEARCH_BACKGROUND"]);
var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  componentId: "r3kz9n-1"
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:all  200ms cubic-bezier(0.4,0,0.2,1);top:0;&.scroll{box-shadow:0 4px 4px rgba(0,0,0,.06);background:", ";ul{padding:4px 20px!important;li{&.nav-search{.search-sticky{display:block!important;visibility:visible!important;}}&.boxicon_brand{width:36px;overflow:hidden;.brand{svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:", ";}border-bottom:1px solid #eee;.navbar-max{margin:0px auto;max-width:", ";ul{transition:0.15s;margin:0;list-style:none;padding:4px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;li{input{height:36px!important;line-height:36px!important;font-size:18px!important;}&.mobile-menu{order:3;display:none;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){a{font-size:13PX!important;padding:0 10px!important;height:36px!important;line-height:36px!important;span{display:none;}}}}&.nav-search{padding-left:15px;flex:1;.search-sticky{display:none;visibility:hidden;}@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;padding-right:0px;.git-frame{display:flex;align-items:center;padding:0px;}a{&.active{color:", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:13px;padding:0px;order:0;&.boxicon_brand{a{padding:0px;@media screen and (max-width:", "){svg{height:28px!important;}}}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px!important;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;display:flex;background:#f7f7f7;box-shadow:0 0 0 0px rgba(0,0,0,0.1)!important;height:40px;margin:0px;align-items:center;&.active{background:#fff;border:1px solid #ddd;}&.active input{color:#111!important;}i{font-size:21px!important;line-height:25px;padding:0px 12px!important;}i.bx-x{font-size:21px !important;padding:3px !important;height:21px !important;line-height:21px !important;color:#73859d;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}&.active{}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:#0a083b;}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:60px;@media screen and (max-width:", "){height:34px;width:170px;}@media screen and (max-width:", "){height:34px;width:170px;}svg{width:100%;height:32px;}display:flex;align-items:center;width:170px;margin:1px 0;margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 12px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:.875rem;font-weight:400;}}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["NAV_LIST_COLOR"]);

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

      if (window.pageYOffset > 280) {
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
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: this.state.is_Mounted ? "navbar mounted" : "navbar",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "boxicon_brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand sprite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "20.979 21.016 498.438 92.965",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#0a083b",
        d: "M21.979,50.794v32.367c0,5.177,2.589,9.496,7.336,12.084l32.8,18.128\r c3.021,1.726,6.905-0.43,6.905-3.884V66.331l38.411-19.421c3.454-1.727,3.454-6.474,0-8.2l-33.664-16.4\r c-3.884-1.727-8.2-1.727-12.084,0L29.748,38.71C25,41.301,21.979,45.616,21.979,50.794z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M24.137,43.89c-1.295,2.158-2.158,4.748-2.158,6.905v32.367c0,5.177,2.589,9.496,7.336,12.084l32.8,18.128\r c3.021,1.726,6.905-0.43,6.905-3.884V66.331l0.864-0.432L24.137,43.89z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M199.26,72.923c2,2.509,3,5.414,3,8.72c0,4.854-1.613,8.642-4.84,11.36c-3.228,2.72-7.854,4.08-13.88,4.08\r h-26.32v-56.56h25.68c5.76,0,10.212,1.254,13.359,3.76c3.146,2.507,4.721,6.08,4.721,10.72c0,3.414-0.908,6.254-2.721,8.52\r c-1.813,2.268-4.188,3.749-7.12,4.44C194.553,68.764,197.26,70.417,199.26,72.923z M170.9,63.643h8.96\r c4.746,0,7.12-2.026,7.12-6.08c0-4.052-2.428-6.08-7.28-6.08h-8.8V63.643z M188.26,79.723c0-2.024-0.667-3.611-2-4.76\r c-1.334-1.146-3.228-1.72-5.68-1.72h-9.68v12.72h9.76C185.727,85.963,188.26,83.883,188.26,79.723z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M241.421,54.643c3.492,1.84,6.239,4.494,8.239,7.96c2,3.467,3,7.52,3,12.161c0,4.639-1,8.693-3,12.159\r c-2,3.468-4.747,6.12-8.239,7.96c-3.494,1.84-7.454,2.76-11.881,2.76c-4.427,0-8.399-0.92-11.92-2.76\r c-3.52-1.84-6.279-4.492-8.279-7.96c-2-3.466-3-7.521-3-12.159c0-4.641,1-8.693,3-12.161c2-3.466,4.76-6.12,8.279-7.96\r c3.521-1.84,7.493-2.76,11.92-2.76C233.967,51.883,237.927,52.803,241.421,54.643z M222.94,66.563\r c-1.787,1.896-2.68,4.629-2.68,8.201c0,3.573,0.893,6.293,2.68,8.159c1.786,1.867,3.986,2.8,6.6,2.8c2.614,0,4.801-0.933,6.561-2.8\r c1.76-1.866,2.64-4.586,2.64-8.159c0-3.572-0.88-6.307-2.64-8.201c-1.76-1.892-3.947-2.838-6.561-2.838\r C226.926,63.724,224.727,64.67,222.94,66.563z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M286.899,97.083l-9.12-12.72l-7.439,12.72H255.3l14.8-23.28l-15.358-21.36H270.1l9.04,12.56l7.44-12.56\r h15.04l-15.12,22.72l15.76,21.92H286.899z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M307.538,34.723c1.493-1.36,3.467-2.04,5.92-2.04s4.427,0.68,5.92,2.04c1.493,1.36,2.24,3.08,2.24,5.16\r c0,2.028-0.747,3.72-2.24,5.08c-1.493,1.36-3.467,2.04-5.92,2.04s-4.427-0.68-5.92-2.04c-1.493-1.36-2.239-3.052-2.239-5.08\r C305.299,37.803,306.045,36.083,307.538,34.723z M320.259,52.443v44.64h-13.681v-44.64H320.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M363.538,56.643c3.893,3.174,6.346,7.534,7.359,13.08h-14.479c-0.428-1.92-1.308-3.412-2.641-4.479\r s-3.015-1.6-5.04-1.6c-2.399,0-4.373,0.947-5.92,2.838c-1.548,1.896-2.319,4.654-2.319,8.281s0.771,6.387,2.319,8.279\r c1.547,1.895,3.521,2.84,5.92,2.84c2.025,0,3.707-0.531,5.04-1.6c1.333-1.066,2.213-2.561,2.641-4.48h14.479\r c-1.015,5.549-3.468,9.908-7.359,13.08c-3.896,3.174-8.721,4.76-14.48,4.76c-4.374,0-8.254-0.92-11.64-2.76\r c-3.388-1.84-6.04-4.492-7.96-7.96c-1.92-3.466-2.88-7.521-2.88-12.159c0-4.693,0.946-8.761,2.84-12.201\r c1.893-3.44,4.546-6.08,7.96-7.92c3.412-1.84,7.306-2.76,11.68-2.76C354.817,51.883,359.644,53.471,363.538,56.643z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M409.979,54.643c3.492,1.84,6.239,4.494,8.239,7.96c2,3.467,3,7.52,3,12.161c0,4.639-1,8.693-3,12.159\r c-2,3.468-4.747,6.12-8.239,7.96c-3.493,1.84-7.453,2.76-11.881,2.76c-4.427,0-8.398-0.92-11.92-2.76\r c-3.52-1.84-6.278-4.492-8.278-7.96c-2-3.466-3-7.521-3-12.159c0-4.641,1-8.693,3-12.161c2-3.466,4.76-6.12,8.278-7.96\r c3.521-1.84,7.493-2.76,11.92-2.76C402.525,51.883,406.484,52.803,409.979,54.643z M391.498,66.563\r c-1.787,1.896-2.68,4.629-2.68,8.201c0,3.573,0.893,6.293,2.68,8.159c1.786,1.867,3.986,2.8,6.6,2.8c2.614,0,4.802-0.933,6.562-2.8\r c1.76-1.866,2.64-4.586,2.64-8.159c0-3.572-0.88-6.307-2.64-8.201c-1.76-1.892-3.947-2.838-6.562-2.838\r C395.484,63.724,393.284,64.67,391.498,66.563z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M468.058,57.083c3.014,3.414,4.521,8.107,4.521,14.08v25.92h-13.68V72.764c0-2.986-0.787-5.32-2.36-7\r c-1.573-1.681-3.667-2.521-6.279-2.521c-2.773,0-4.975,0.88-6.601,2.64c-1.627,1.76-2.439,4.268-2.439,7.52v23.682h-13.681v-44.64\r h13.681v8.16c1.279-2.667,3.187-4.772,5.721-6.32c2.531-1.546,5.506-2.32,8.92-2.32C460.978,51.963,465.044,53.67,468.058,57.083z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#0a083b",
        d: "M510.617,56.123c3.387,2.828,5.507,6.56,6.359,11.2h-12.8c-0.374-1.813-1.214-3.24-2.521-4.28\r c-1.308-1.04-2.947-1.56-4.92-1.56c-1.547,0-2.721,0.334-3.521,1c-0.8,0.667-1.2,1.614-1.2,2.84c0,1.388,0.732,2.427,2.2,3.12\r c1.466,0.692,3.772,1.387,6.92,2.08c3.412,0.8,6.213,1.612,8.4,2.438c2.186,0.828,4.079,2.174,5.68,4.04\r c1.601,1.868,2.399,4.374,2.399,7.521c0,2.56-0.693,4.826-2.079,6.8c-1.388,1.974-3.388,3.52-6,4.64\r c-2.614,1.12-5.708,1.68-9.28,1.68c-6.027,0-10.854-1.332-14.479-4c-3.627-2.666-5.841-6.479-6.641-11.438h13.2\r c0.212,1.92,1.026,3.388,2.439,4.399c1.413,1.015,3.239,1.521,5.479,1.521c1.546,0,2.72-0.36,3.521-1.08s1.199-1.666,1.199-2.84\r c0-1.546-0.732-2.652-2.199-3.32c-1.468-0.666-3.854-1.372-7.16-2.118c-3.308-0.693-6.027-1.44-8.159-2.24\r c-2.134-0.801-3.974-2.094-5.521-3.881c-1.548-1.785-2.32-4.227-2.32-7.319c0-4,1.521-7.24,4.561-9.72s7.332-3.72,12.88-3.72\r C502.71,51.883,507.23,53.297,510.617,56.123z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
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
//# sourceMappingURL=index.js.63a82582fe46f3ad30a8.hot-update.js.map