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
})(["left:0;right:0;position:fixed;background:", ";z-index:99996;transition:all  200ms cubic-bezier(0.4,0,0.2,1);top:0;&.scroll{box-shadow:0 4px 4px rgba(0,0,0,.06);background:", ";ul{li{&.nav-search{.search-sticky{display:block!important;visibility:visible!important;}}&.boxicon_brand{width:50px;overflow:hidden;.brand{svg{width:100%;}}}}}}ul li a.active{}ul li a:hover{color:", ";}.navbar-max{margin:0px auto;ul{transition:0.15s;margin:0;list-style:none;padding:5px 20px;@media screen and (max-width:", "){padding:13px 20px!important;}display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;li{input{height:36px!important;line-height:36px!important;font-size:18px!important;}&.mobile-menu{order:3;display:none;@media screen and (max-width:", "){display:block;}@media screen and (max-width:", "){a{font-size:13PX!important;padding:0 10px!important;height:36px!important;line-height:36px!important;span{display:none;}}}}&.nav-search{padding-left:15px;flex:1;.search-sticky{display:none;visibility:hidden;}@media screen and (max-width:", "){display:none !important;}}&.nav-links{display:flex;text-align:right;padding:0;order:2;align-items:center;padding:0 15px;padding-right:0px;.git-frame{display:flex;align-items:center;padding:0px;}a{&.active{color:", ";}}@media screen and (max-width:", "){display:none !important;}}margin:0px;line-height:20px;font-size:13px;padding:0px;order:0;&.boxicon_brand{a{padding:0px;@media screen and (max-width:", "){width:50px!important;overflow:hidden;}}@media screen and (max-width:", "){flex:1;height:38px;padding:0 5px!important;}a{&:hover{background:transparent!important;}@media screen and (max-width:", "){padding:0px;}}}.search-sticky{background:transparent;padding-bottom:0px;padding:0px;transition:0.15s;transform:translateY(0px);}.search-cont{margin:0px 0!important;max-width:none;margin-left:0px!important;padding:2px;display:flex;background:", ";border:1px solid ", ";box-shadow:0 0 0 0px rgba(0,0,0,0.1)!important;height:40px;margin:0px;align-items:center;&.active{background:#fff;border:1px solid #ddd;}&.active input{color:#111!important;}i{font-size:21px!important;line-height:25px;padding:0px 12px!important;}i.bx-x{font-size:21px !important;padding:3px !important;height:21px !important;line-height:21px !important;color:#73859d;border-radius:50%;cursor:pointer;margin-right:7px;}form{width:100%;}&.active{}}a{&.show-dropdown{cursor:pointer;}font-weight:400;border-radius:2px;&.mobile-menu-button{line-height:24px !important;height:24px !important;border-radius:50%;padding:0px 12px;}&:hover{color:", ";}i{font-size:24px;line-height:24px;height:24px;vertical-align:middle;}.brand{height:60px;@media screen and (max-width:", "){height:34px;width:170px;}@media screen and (max-width:", "){height:34px;width:170px;}svg{width:100%;height:50px;}display:flex;align-items:center;width:190px;margin:1px 0;margin-right:10px;transition:0.15s;&:hover{opacity:0.9;}}padding:0px 15px;text-decoration:none;color:", ";height:60px;line-height:64px;border-radius:0;position:relative;display:inline-block;transition:0.15s;font-size:.875rem;font-weight:400;}}}}"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["NAVBAR_SCROLL_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["ACTIVE_NAV_LIST_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["LIGHT_BACKGROUND"], _types__WEBPACK_IMPORTED_MODULE_12__["BLUE_COLOR"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_12__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_12__["NAV_LIST_COLOR"]);

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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Navbar, {
        className: "navbar-cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "navbar-max",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: this.state.is_Mounted ? "navbar mounted" : "navbar",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "boxicon_brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand sprite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "556.5px",
        height: "130px",
        viewBox: "0 0 556.5 130",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        id: "XMLID_1_",
        fill: "#3A3A3A",
        d: "M11.646,47.253v39.229c0,6.275,3.138,11.509,8.892,14.646L60.292,123.1\r c3.662,2.092,8.369-0.521,8.369-4.707v-52.31l46.555-23.538c4.186-2.093,4.186-7.847,0-9.938L74.414,12.73\r c-4.707-2.093-9.938-2.093-14.646,0L21.061,32.606C15.307,35.746,11.646,40.976,11.646,47.253z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M14.261,38.884c-1.569,2.615-2.615,5.754-2.615,8.369v39.229c0,6.275,3.138,11.509,8.892,14.646\r L60.292,123.1c3.662,2.092,8.369-0.521,8.369-4.707v-52.31l1.047-0.522L14.261,38.884z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M228.26,72.923c2,2.508,3,5.414,3,8.72c0,4.854-1.613,8.641-4.84,11.36c-3.228,2.72-7.854,4.08-13.88,4.08\r h-26.32v-56.56H211.9c5.76,0,10.212,1.254,13.359,3.76c3.146,2.507,4.721,6.08,4.721,10.72c0,3.414-0.908,6.254-2.721,8.52\r c-1.813,2.268-4.188,3.748-7.12,4.44C223.553,68.764,226.26,70.417,228.26,72.923z M199.9,63.643h8.96\r c4.746,0,7.12-2.026,7.12-6.08c0-4.052-2.428-6.08-7.28-6.08h-8.8V63.643z M217.26,79.723c0-2.025-0.667-3.612-2-4.76\r c-1.334-1.146-3.228-1.72-5.68-1.72h-9.68v12.72h9.76C214.727,85.963,217.26,83.883,217.26,79.723z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M270.421,54.643c3.492,1.84,6.239,4.494,8.239,7.96c2,3.467,3,7.52,3,12.161c0,4.639-1,8.693-3,12.159\r c-2,3.468-4.747,6.12-8.239,7.96c-3.494,1.84-7.454,2.76-11.881,2.76s-8.399-0.92-11.92-2.76c-3.52-1.84-6.279-4.492-8.279-7.96\r c-2-3.466-3-7.521-3-12.159c0-4.641,1-8.693,3-12.161c2-3.466,4.76-6.12,8.279-7.96c3.521-1.84,7.493-2.76,11.92-2.76\r S266.927,52.803,270.421,54.643z M251.94,66.563c-1.787,1.895-2.68,4.628-2.68,8.201s0.893,6.293,2.68,8.159\r c1.786,1.867,3.986,2.8,6.6,2.8s4.801-0.933,6.561-2.8c1.76-1.866,2.64-4.586,2.64-8.159s-0.88-6.307-2.64-8.201\r c-1.76-1.892-3.947-2.839-6.561-2.839S253.727,64.67,251.94,66.563z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M315.899,97.083l-9.12-12.72l-7.439,12.72H284.3l14.8-23.28l-15.359-21.36H299.1l9.04,12.56l7.44-12.56\r h15.04l-15.12,22.72l15.76,21.92H315.899z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M336.538,34.723c1.493-1.36,3.467-2.04,5.92-2.04s4.427,0.68,5.92,2.04c1.493,1.36,2.24,3.08,2.24,5.16\r c0,2.028-0.747,3.72-2.24,5.08c-1.493,1.36-3.467,2.04-5.92,2.04s-4.427-0.68-5.92-2.04c-1.493-1.36-2.239-3.052-2.239-5.08\r C334.299,37.803,335.045,36.083,336.538,34.723z M349.259,52.443v44.64h-13.681v-44.64H349.259z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M392.538,56.643c3.893,3.174,6.346,7.534,7.359,13.08h-14.479c-0.428-1.92-1.308-3.412-2.641-4.479\r c-1.333-1.066-3.014-1.6-5.04-1.6c-2.399,0-4.373,0.947-5.92,2.839c-1.547,1.895-2.319,4.654-2.319,8.281s0.772,6.387,2.319,8.279\r c1.547,1.894,3.521,2.84,5.92,2.84c2.026,0,3.707-0.532,5.04-1.6c1.333-1.066,2.213-2.561,2.641-4.48h14.479\r c-1.014,5.548-3.467,9.908-7.359,13.08c-3.895,3.174-8.721,4.76-14.48,4.76c-4.374,0-8.254-0.92-11.64-2.76\r c-3.388-1.84-6.04-4.492-7.96-7.96c-1.92-3.466-2.88-7.521-2.88-12.159c0-4.693,0.946-8.761,2.84-12.201\r c1.893-3.44,4.546-6.08,7.96-7.92c3.412-1.84,7.306-2.76,11.68-2.76C383.817,51.883,388.644,53.471,392.538,56.643z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M438.979,54.643c3.492,1.84,6.239,4.494,8.239,7.96c2,3.467,3,7.52,3,12.161c0,4.639-1,8.693-3,12.159\r c-2,3.468-4.747,6.12-8.239,7.96c-3.494,1.84-7.454,2.76-11.881,2.76s-8.399-0.92-11.92-2.76c-3.52-1.84-6.279-4.492-8.279-7.96\r c-2-3.466-3-7.521-3-12.159c0-4.641,1-8.693,3-12.161c2-3.466,4.76-6.12,8.279-7.96c3.521-1.84,7.493-2.76,11.92-2.76\r S435.484,52.803,438.979,54.643z M420.498,66.563c-1.787,1.895-2.68,4.628-2.68,8.201s0.893,6.293,2.68,8.159\r c1.786,1.867,3.986,2.8,6.6,2.8s4.801-0.933,6.561-2.8c1.76-1.866,2.64-4.586,2.64-8.159s-0.88-6.307-2.64-8.201\r c-1.76-1.892-3.947-2.839-6.561-2.839S422.284,64.67,420.498,66.563z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M497.058,57.083c3.013,3.414,4.52,8.107,4.52,14.08v25.92h-13.68V72.764c0-2.986-0.787-5.32-2.36-7\r c-1.573-1.681-3.667-2.521-6.279-2.521c-2.774,0-4.975,0.88-6.601,2.64c-1.627,1.76-2.439,4.268-2.439,7.52v23.681h-13.681v-44.64\r h13.681v8.16c1.279-2.667,3.186-4.772,5.72-6.32c2.532-1.546,5.506-2.32,8.92-2.32C489.978,51.963,494.044,53.67,497.058,57.083z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "#3A3A3A",
        d: "M539.617,56.123c3.387,2.828,5.507,6.56,6.36,11.2h-12.8c-0.374-1.813-1.214-3.24-2.521-4.28\r s-2.947-1.56-4.92-1.56c-1.547,0-2.72,0.334-3.52,1c-0.8,0.667-1.2,1.614-1.2,2.84c0,1.388,0.732,2.427,2.2,3.12\r c1.466,0.693,3.772,1.387,6.92,2.08c3.412,0.8,6.213,1.613,8.4,2.439c2.186,0.828,4.079,2.174,5.68,4.04\r c1.6,1.868,2.399,4.374,2.399,7.521c0,2.56-0.693,4.827-2.079,6.8c-1.388,1.974-3.388,3.52-6,4.64\r c-2.614,1.12-5.708,1.68-9.28,1.68c-6.027,0-10.854-1.332-14.48-4c-3.627-2.666-5.84-6.479-6.64-11.439h13.2\r c0.212,1.92,1.026,3.388,2.439,4.399c1.413,1.015,3.24,1.521,5.48,1.521c1.546,0,2.72-0.36,3.52-1.08\r c0.801-0.72,1.2-1.666,1.2-2.84c0-1.546-0.733-2.652-2.2-3.32c-1.467-0.666-3.854-1.372-7.16-2.119\r c-3.307-0.693-6.027-1.44-8.159-2.24c-2.134-0.801-3.974-2.093-5.521-3.881c-1.547-1.785-2.32-4.226-2.32-7.319\r c0-4,1.521-7.24,4.561-9.72s7.332-3.72,12.88-3.72C531.71,51.883,536.23,53.297,539.617,56.123z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, this.props.page == 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_search_searchForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "nav-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "Icons")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/atisawd/boxicons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ActiveLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        activeClassName: "active",
        href: "/usage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Usage")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://paypal.me/atisawd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, "Donate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        rel: "noopener noreferrer",
        href: "http://gum.co/boxicons",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, "v", _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"]))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "mobile-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_9__["NavButton"], {
        download: true,
        href: "/static/boxicons-" + _actions_types__WEBPACK_IMPORTED_MODULE_11__["VERSION"] + ".zip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "Download ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
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
//# sourceMappingURL=index.js.4434b72f27076119108c.hot-update.js.map