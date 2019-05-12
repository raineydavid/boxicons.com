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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _search_searchForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/searchForm */ "./components/search/searchForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ActiveLink */ "./components/common/ActiveLink.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-outside-click-handler */ "./node_modules/react-outside-click-handler/index.js");
/* harmony import */ var react_outside_click_handler__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_outside_click_handler__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons */ "./components/common/buttons.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/types */ "./actions/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../types */ "./components/types.js");






var _jsxFileName = "C:\\Sorted\\Work 2\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\common\\navbar.js";









var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "r3kz9n-0"
})(["position:absolute;background:", ";border-radius:5px;color:#fff;&:before{content:\"\";right:100%;bottom:100%;position:absolute;margin-right:-33px;position:absolute;width:0;height:0;border:7px solid transparent;border-top-width:0;border-bottom-color:", ";}transition:all .25s cubic-bezier(.24,.22,.015,1.56),opacity .1s ease-in-out;top:60px;max-width:160px;opacity:0;visibility:hidden;transform:scale(0.8) translateY(-10px);&.active{box-shadow:0 1px 3px 0 rgba(0,0,0,0.08),0 0 5PX 1px rgba(0,0,0,0.04);opacity:1;visibility:visible;transform:scale(1) translateY(0);}ul{list-style:none;display:block;text-align:left;padding:12px 15px!important;li{display:block;font-size:13px!important;line-height:1.6!important;min-width:130px;a{line-height:30px!important;height:auto!important;}}}"], _types__WEBPACK_IMPORTED_MODULE_14__["SEARCH_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_14__["SEARCH_BACKGROUND"]);
var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  componentId: "r3kz9n-1"
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:background 200ms cubic-bezier(0.4,0,0.2,1);top:0;box-shadow:", ";&.scroll{background:", ";ul{padding:", "!important;li{&.boxicon_brand{overflow:hidden;.brand{width:160px;svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:#b06c4a;}.navbar-max{max-width:", ";margin:0px auto;ul{transition:0.15s;margin:0;list-style:none;padding:0px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;&.mobile-menu-cont{list-style:none;position:fixed;overflow-y:auto;display:block;li a{font-size:27px !important;padding:10px 20px !important;display:block;color:#a4a4a4!important;&.active,&:hover{color:#fff!important;}}background:#313133;left:0;right:0px;top:62px;animation-duration:0.25s;bottom:0px;padding:30px;border-bottom:1px solid rgba(0,0,0,0.05);border-top:1px solid rgba(0,0,0,0.05);transition:all 500ms cubic-bezier(0.4,0,0.2,1);}li{input{height:36px!important;line-height:36px!important;font-size:16px!important;color:#bbb!important;}&.mobile-menu{i{font-size:1.55rem;vertical-align:middle;color:", ";&:hover{color:#b06c4a;}}order:3;display:none;@media screen and (max-width:", "){display:inline-block;padding-right:0px !important;width:40px;height:30px;}}&.nav-search{flex:0 0 330px;order:3;border-left:1px solid ", ";@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;.git-frame{display:flex;align-items:center;padding:0px;}a{border-bottom:4px solid transparent;&.active{color:", ";border-bottom:4px solid ", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:14px;padding:0px;order:1;&.boxicon_brand{padding:0 25px!important;flex:1;a{padding:0px;}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{box-shadow:none!important;margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;padding-left:15px;height:60px;display:flex;margin:0px;align-items:center;background:#fff;&.active input{color:#111!important;}i{font-size:21px!important;line-height:30px;padding:0px 12px!important;}i.bx-x{font-size:16px !important;padding:5px !important;height:16px !important;line-height:16px !important;color:#aab0bc;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}border:0px solid ", ";&.active{background:#fff;}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:#b06c4a;}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:56px;@media screen and (max-width:", "){height:34px;width:150px;}svg{width:100%;height:30px;}display:flex;align-items:center;width:160px;margin:1px 0;margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 15px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:14px;}}}}"], _types__WEBPACK_IMPORTED_MODULE_14__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_14__["BOX_SHADOW"], _types__WEBPACK_IMPORTED_MODULE_14__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_14__["NAVBAR_PADDING"], _types__WEBPACK_IMPORTED_MODULE_14__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["BORDER_COLOR"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_14__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_14__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_14__["NAV_LIST_COLOR"]);

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

      if (window.pageYOffset > 50) {
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
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Navbar, {
        className: "navbar-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: this.state.is_Mounted ? "navbar mounted" : "navbar",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "boxicon_brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand sprite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "117",
        height: "23",
        viewBox: "0 4.5 117 23",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#4f5d6a",
        d: "M0 10L0 21.5 11 27.5 11 15.5 22 10 10.7 4.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        fill: "#4f5d6a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M43.4 17.75c-.5-.6-1.1-1-1.8-1.2.7-.2 1.2-.5 1.6-1 .4-.5.6-1.1.6-1.899 0-1-.4-1.9-1.1-2.4-.7-.5-1.7-.8-3-.8H34v12.6h5.9c1.4 0 2.4-.3 3.1-.899.7-.601 1.1-1.4 1.1-2.5C44.1 18.95 43.8 18.35 43.4 17.75zM37 12.85h2c1.1 0 1.6.5 1.6 1.4s-.5 1.4-1.6 1.4h-2V12.85zM39.2 20.55H37v-2.8h2.2c.6 0 1 .1 1.3.4.3.3.4.6.4 1.1C40.9 20.15 40.3 20.65 39.2 20.55zM54.7 15.45c-.4-.8-1-1.4-1.8-1.8-.8-.4-1.601-.601-2.6-.601-1 0-1.9.2-2.7.601-.7.399-1.4 1-1.8 1.8-.5.8-.7 1.7-.7 2.7s.3 1.899.7 2.699c.4.801 1 1.4 1.8 1.801.8.399 1.8.6 2.7.6s1.8-.2 2.6-.6c.7-.4 1.399-1 1.8-1.801.5-.8.7-1.699.7-2.699S55.1 16.25 54.7 15.45zM51.799 19.85c-.399.4-.899.601-1.5.601-.6 0-1.1-.2-1.5-.601-.4-.399-.6-1-.6-1.8s.2-1.399.6-1.8c.4-.4.9-.6 1.5-.6.6 0 1.1.199 1.5.6.4.4.601 1 .601 1.8S52.2 19.45 51.799 19.85zM66.5 13.05L63.199 13.05 61.5 15.85 59.5 13.05 56.1 13.05 59.5 17.85 56.2 23.05 59.5 23.05 61.199 20.25 63.199 23.05 66.6 23.05 63.1 18.15zM69.299 8.75c-.5 0-1 .2-1.299.5-.301.3-.5.6-.5 1.1 0 .4.199.801.5 1.101.299.3.799.5 1.299.5s1-.2 1.301-.5.5-.601.5-1.101c0-.399-.199-.8-.5-1.1S69.799 8.75 69.299 8.75zM67.799 13.15H70.799V23.049H67.799zM77.4 15.55c.398 0 .799.2 1.1.4.299.2.5.6.6 1h3.199c-.199-1.2-.699-2.2-1.6-2.9s-2-1-3.199-1.3c-1 0-1.801.2-2.6.6-.801.4-1.4 1-1.801 1.801-.4.699-.6 1.699-.6 2.699s.199 1.9.6 2.7c.5.8 1 1.4 1.801 1.8.799.4 1.6.601 2.6.601 1.299 0 2.299-.4 3.199-1.101.801-.699 1.4-1.699 1.6-2.899H79.1c-.1.399-.301.8-.6 1-.301.3-.6.399-1.1.399s-1-.199-1.301-.6-.5-1-.5-1.8.199-1.4.5-1.8C76.4 15.75 76.9 15.55 77.4 15.55L77.4 15.55zM93 15.45c-.4-.8-1-1.4-1.801-1.8-.799-.4-1.699-.601-2.6-.601-1 0-1.9.2-2.699.601-.701.399-1.4 1-1.801 1.8-.5.8-.699 1.7-.699 2.7s.299 1.899.699 2.699c.4.801 1 1.4 1.801 1.801.799.399 1.699.6 2.699.6.9 0 1.801-.2 2.6-.6.701-.4 1.4-1 1.801-1.801.5-.8.699-1.699.699-2.699S93.4 16.25 93 15.45zM90.1 19.85c-.4.4-.9.601-1.5.601s-1.1-.2-1.5-.601c-.4-.399-.6-1-.6-1.8s.199-1.399.6-1.8.801-.6 1.5-.6c.6 0 1.1.199 1.5.6s.6 1 .6 1.8S90.5 19.45 90.1 19.85zM101.699 13.05c-.799 0-1.4.2-2 .5s-1 .8-1.299 1.4v-1.8h-3v9.899h3v-5.3c0-.7.1-1.3.5-1.7.398-.399.898-.6 1.5-.6.6 0 1 .2 1.398.6.301.4.5.9.5 1.601v5.399h3v-5.8c0-1.3-.299-2.3-1-3.1C103.6 13.45 102.699 13.05 101.699 13.05L101.699 13.05zM113.5 17.65c-.5-.101-1.1-.301-1.9-.5-.699-.2-1.199-.301-1.5-.5-.301-.2-.5-.4-.5-.7 0-.2.1-.5.301-.601.199-.1.5-.199.799-.199.4 0 .801.1 1.1.3.301.3.5.6.602 1h2.898c-.199-1-.6-1.9-1.398-2.5-.701-.601-1.701-.9-3.201-.9-1.299 0-2.199.2-2.9.8-.699.601-1 1.301-1 2.2 0 .7.201 1.2.5 1.601C107.6 18.05 108 18.35 108.5 18.55s1.1.3 1.799.5c.701.2 1.301.4 1.602.5.299.101.5.4.5.7 0 .2-.102.4-.301.6-.199.101-.5.2-.801.2-.5 0-.898-.1-1.199-.3s-.5-.6-.5-1h-2.9c.201 1.1.701 1.9 1.5 2.5.801.6 1.9.9 3.201.9.799 0 1.5-.2 2.1-.4.5-.2 1-.6 1.299-1 .301-.4.5-.9.5-1.5 0-.7-.1-1.3-.5-1.7C114.4 18.15 114 17.85 113.5 17.65L113.5 17.65z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }))))))), this.props.page === 'index' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, "   ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "git-frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        src: "https://ghbtns.com/github-btn.html?user=atisawd&repo=boxicons&type=star&count=true",
        frameBorder: "0",
        scrolling: "0",
        width: "110px",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_12__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_13__["VERSION"] + ".zip",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "Download  ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_13__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        className: "mobile-menu-button",
        onClick: this.handleMenuClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, this.state.showMobile ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-menu-alt-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      })), this.state.showMobile && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "mobile-menu-cont animated slideInRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/",
        onClick: this.handleMenuLinkClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, "Icons "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "",
        href: "https://gum.co/boxicons?wanted=true",
        target: "_blank",
        "data-gumroad-single-product": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/get-started",
        onClick: this.handleMenuLinkClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Get Started "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/cheatsheet",
        onClick: this.handleMenuLinkClick,
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
      }, "Cheatsheet "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/atisawd/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "Github")))))));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=index.js.b13d3089cf49e512d43d.hot-update.js.map