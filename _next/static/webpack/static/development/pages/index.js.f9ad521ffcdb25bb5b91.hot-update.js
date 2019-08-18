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






var _jsxFileName = "C:\\MAIN\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\navbar.js";







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
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "-191 239 117 23",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#dce0e6",
        d: "M-189.6,246.7v7.5c0,1.2,0.6,2.2,1.7,2.8l7.6,4.2c0.7,0.4,1.6-0.1,1.6-0.9v-10l8.9-4.5\r c0.8-0.4,0.8-1.5,0-1.9l-7.8-3.8c-0.9-0.4-1.9-0.4-2.8,0l-7.4,3.8C-188.9,244.5-189.6,245.5-189.6,246.7z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        className: "logo-hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#15161E",
        d: "M-147.8,252c-0.5-0.6-1.1-1-1.8-1.2c0.7-0.2,1.2-0.5,1.6-1c0.4-0.5,0.6-1.1,0.6-1.9c0-1-0.4-1.9-1.1-2.4\r s-1.7-0.8-3-0.8h-5.7v12.6h5.9c1.4,0,2.4-0.3,3.1-0.9c0.7-0.6,1.1-1.4,1.1-2.5C-147.1,253.2-147.4,252.6-147.8,252z M-154.1,247.1\r h2c1.1,0,1.6,0.5,1.6,1.4s-0.5,1.4-1.6,1.4h-2V247.1z M-151.9,254.8h-2.2V252h2.2c0.6,0,1,0.1,1.3,0.4c0.3,0.3,0.4,0.6,0.4,1.1\r C-150.3,254.4-150.9,254.9-151.9,254.8z M-136.4,249.7c-0.4-0.8-1-1.4-1.8-1.8c-0.8-0.4-1.6-0.6-2.6-0.6c-1,0-1.9,0.2-2.7,0.6\r c-0.7,0.4-1.4,1-1.8,1.8c-0.5,0.8-0.7,1.7-0.7,2.7s0.3,1.9,0.7,2.7c0.4,0.8,1,1.4,1.8,1.8c0.8,0.4,1.8,0.6,2.7,0.6\r c0.9,0,1.8-0.2,2.6-0.6c0.7-0.4,1.4-1,1.8-1.8c0.5-0.8,0.7-1.7,0.7-2.7S-136.1,250.5-136.4,249.7z M-139.4,254.1\r c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-1-0.6-1.8s0.2-1.4,0.6-1.8c0.4-0.4,0.9-0.6,1.5-0.6\r c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.8S-138.9,253.7-139.4,254.1z M-124.7,247.3h-3.3l-1.7,2.8l-2-2.8h-3.4l3.4,4.8\r l-3.3,5.2h3.3l1.7-2.8l2,2.8h3.4l-3.5-4.9L-124.7,247.3z M-121.9,243c-0.5,0-1,0.2-1.3,0.5c-0.3,0.3-0.5,0.6-0.5,1.1\r c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.8,0.5,1.3,0.5s1-0.2,1.3-0.5s0.5-0.6,0.5-1.1c0-0.4-0.2-0.8-0.5-1.1S-121.4,243-121.9,243z\r M-123.4,247.4h3v9.9h-3V247.4z M-113.8,249.8c0.4,0,0.8,0.2,1.1,0.4c0.3,0.2,0.5,0.6,0.6,1h3.2c-0.2-1.2-0.7-2.2-1.6-2.9\r s-2-1-3.2-1.3c-1,0-1.8,0.2-2.6,0.6c-0.8,0.4-1.4,1-1.8,1.8c-0.4,0.7-0.6,1.7-0.6,2.7s0.2,1.9,0.6,2.7c0.5,0.8,1,1.4,1.8,1.8\r c0.8,0.4,1.6,0.6,2.6,0.6c1.3,0,2.3-0.4,3.2-1.1c0.8-0.7,1.4-1.7,1.6-2.9h-3.2c-0.1,0.4-0.3,0.8-0.6,1c-0.3,0.3-0.6,0.4-1.1,0.4\r s-1-0.2-1.3-0.6s-0.5-1-0.5-1.8c0-0.8,0.2-1.4,0.5-1.8C-114.8,250-114.3,249.8-113.8,249.8L-113.8,249.8z M-98.2,249.7\r c-0.4-0.8-1-1.4-1.8-1.8c-0.8-0.4-1.7-0.6-2.6-0.6c-1,0-1.9,0.2-2.7,0.6c-0.7,0.4-1.4,1-1.8,1.8c-0.5,0.8-0.7,1.7-0.7,2.7\r s0.3,1.9,0.7,2.7c0.4,0.8,1,1.4,1.8,1.8c0.8,0.4,1.7,0.6,2.7,0.6c0.9,0,1.8-0.2,2.6-0.6c0.7-0.4,1.4-1,1.8-1.8\r c0.5-0.8,0.7-1.7,0.7-2.7S-97.8,250.5-98.2,249.7z M-101.1,254.1c-0.4,0.4-0.9,0.6-1.5,0.6s-1.1-0.2-1.5-0.6\r c-0.4-0.4-0.6-1-0.6-1.8s0.2-1.4,0.6-1.8s0.8-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6s0.6,1,0.6,1.8S-100.7,253.7-101.1,254.1z\r M-89.5,247.3c-0.8,0-1.4,0.2-2,0.5s-1,0.8-1.3,1.4v-1.8h-3v9.9h3V252c0-0.7,0.1-1.3,0.5-1.7c0.4-0.4,0.9-0.6,1.5-0.6\r c0.6,0,1,0.2,1.4,0.6c0.3,0.4,0.5,0.9,0.5,1.6v5.4h3v-5.8c0-1.3-0.3-2.3-1-3.1C-87.6,247.7-88.5,247.3-89.5,247.3L-89.5,247.3z\r M-77.7,251.9c-0.5-0.1-1.1-0.3-1.9-0.5c-0.7-0.2-1.2-0.3-1.5-0.5c-0.3-0.2-0.5-0.4-0.5-0.7c0-0.2,0.1-0.5,0.3-0.6\r c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.8,0.1,1.1,0.3c0.3,0.3,0.5,0.6,0.6,1h2.9c-0.2-1-0.6-1.9-1.4-2.5c-0.7-0.6-1.7-0.9-3.2-0.9\r c-1.3,0-2.2,0.2-2.9,0.8c-0.7,0.6-1,1.3-1,2.2c0,0.7,0.2,1.2,0.5,1.6c0.3,0.4,0.7,0.7,1.2,0.9s1.1,0.3,1.8,0.5\r c0.7,0.2,1.3,0.4,1.6,0.5c0.3,0.1,0.5,0.4,0.5,0.7c0,0.2-0.1,0.4-0.3,0.6c-0.2,0.1-0.5,0.2-0.8,0.2c-0.5,0-0.9-0.1-1.2-0.3\r s-0.5-0.6-0.5-1h-2.9c0.2,1.1,0.7,1.9,1.5,2.5c0.8,0.6,1.9,0.9,3.2,0.9c0.8,0,1.5-0.2,2.1-0.4c0.5-0.2,1-0.6,1.3-1\r c0.3-0.4,0.5-0.9,0.5-1.5c0-0.7-0.1-1.3-0.5-1.7C-76.8,252.4-77.2,252.1-77.7,251.9L-77.7,251.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#73859d",
        d: "M-189.1,245.1c-0.3,0.5-0.5,1.1-0.5,1.6v7.5c0,1.2,0.6,2.2,1.7,2.8l7.6,4.2c0.7,0.4,1.6-0.1,1.6-0.9v-10\r l0.2-0.1L-189.1,245.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
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
//# sourceMappingURL=index.js.f9ad521ffcdb25bb5b91.hot-update.js.map