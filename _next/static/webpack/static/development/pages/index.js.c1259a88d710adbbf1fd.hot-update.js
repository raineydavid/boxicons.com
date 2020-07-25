webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/search/searchForm.js":
/*!*****************************************!*\
  !*** ./components/search/searchForm.js ***!
  \*****************************************/
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types */ "./components/types.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "D:\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\search\\searchForm.js";






var StyledSearch = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  componentId: "e9dimx-0"
})([".search-cont{transition:", ";border:1px solid transparent;margin:0 auto;box-shadow:0 0px 2px rgba(0,0,0,0.07),0 0px 4px rgba(0,0,0,0.07),0 2px 8px rgba(0,0,0,0.07),0 4px 16px rgba(0,0,0,0.07),0 8px 32px rgba(0,0,0,0.07),0 16px 64px rgba(0,0,0,0.07);&.active{background:#fff;.search-box{}}&.fixed{position:fixed;top:70px;left:0px;padding:5px;z-index:11;border-radius:0;right:0;max-width:none;background:#fff;border:0px;border-top:1px solid #dee3eb;border-bottom:1px solid #dee3eb;.search-box{max-width:", ";border-bottom:0px solid #ddd;}}&.active{}.search-box input::-ms-clear{display:none;}@media screen and (max-width:", "){margin:0px 0px;margin-bottom:0px;max-width:none;&.fixed{margin:0px;}}.search-box{position:relative;border-radius:", ";display:flex;width:100%;.close{order:1;align-self:center;padding:0px 15px;height:32px;cursor:pointer;}input{height:40px;margin-left:60px;box-shadow:none;outline:none;font-weight:400;order:1;color:#000;font-size:19px;width:100%;margin:0;padding:0;border-radius:2px;border:0;display:block;background:transparent;margin-left:10px;@media screen and (max-width:", "){height:40px;font-size:18px;}}i{@media screen and (max-width:", "){font-size:27px;height:27px;}order:1;align-self:center;padding:0px 5px;height:27px;font-size:27px;color:#999;cursor:pointer;&.bx-x{font-size:24px;padding:5px;height:24px;line-height:24px;color:#9ca5ad;border-radius:50%;cursor:pointer;&:hover{background:rgba(0,0,0,0.075);}}}}z-index:23;margin-bottom:25px;position:relative;display:block;padding:6px 15px;margin:0 auto;border-radius:", ";}"], _types__WEBPACK_IMPORTED_MODULE_10__["TRANSITION"], _types__WEBPACK_IMPORTED_MODULE_10__["MAX_WIDTH"], _types__WEBPACK_IMPORTED_MODULE_10__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_10__["BUTTON_RADIUS"], _types__WEBPACK_IMPORTED_MODULE_10__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_10__["BREAKPOINT_MD"], _types__WEBPACK_IMPORTED_MODULE_10__["SEARCH_RADIUS"]);

var SearchForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchForm, _Component);

  function SearchForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchForm).call(this, props));
    _this.state = {
      search: "",
      isFocused: false,
      resultVisible: false,
      lastScrollPos: 0,
      searchClass: 'search-cont',
      style: 'ALL',
      category: {
        id: null,
        name: null
      }
    };
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.emptySearch = _this.emptySearch.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchFocus = _this.onSearchFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onSearchBlur = _this.onSearchBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSearchScroll = _this.handleSearchScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchForm, [{
    key: "emptySearch",
    value: function emptySearch() {
      this.setState({
        searchClass: 'search-cont'
      });
      this.setState({
        search: ""
      });
      setTimeout(function () {
        if (this.state.category != null) {
          this.props.setSearchTerm("", this.state.style, this.state.category.id);
        } else {
          this.props.setSearchTerm("", this.state.style, null);
        }
      }.bind(this), 100);
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        search: e.target.value
      });
      setTimeout(function () {
        if (this.state.category != null) {
          this.props.setSearchTerm(this.state.search, this.state.style, this.state.category.id);
        } else {
          this.props.setSearchTerm(this.state.search, this.state.style, null);
        }
      }.bind(this), 100);
    }
  }, {
    key: "onSearchFocus",
    value: function onSearchFocus() {
      this.setState({
        searchClass: 'search-cont active'
      });
    }
  }, {
    key: "onSearchBlur",
    value: function onSearchBlur() {
      this.setState({
        searchClass: 'search-cont'
      });
    }
  }, {
    key: "handleSearchScroll",
    value: function handleSearchScroll() {
      var header = document.querySelector(".navbar-cont  .search-sticky");
      var navbar = document.querySelector(".navbar-cont");
      var sticky = document.querySelector(".home-top .search-sticky");
      var focusEl = document.querySelector(".navbar-cont  .search-box input");
      var searchEl = document.querySelector(".home-top .search-box input");
      var isFocused = document.activeElement === focusEl;
      var isMainFocused = document.activeElement === searchEl;
      var fixed_class = "nav-active";

      if (sticky !== null) {
        var rect = sticky.getBoundingClientRect();

        if (rect.top < 0) {
          navbar.classList.add(fixed_class);
          header.classList.add(fixed_class);

          if (isMainFocused) {
            focusEl.focus();
          }

          ;
        } else {
          if (isFocused) {
            searchEl.focus();
          }

          ;
          header.classList.remove(fixed_class);
          navbar.classList.remove(fixed_class);
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        search: newProps.search,
        category: newProps.category
      });
      this.setState({
        style: newProps.style
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleSearchScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleSearchScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledSearch, {
        className: "search-sticky animated fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.searchClass,
        onFocus: this.onSearchFocus,
        onBlur: this.onSearchBlur,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "search-box",
        ref: "searchBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        onChange: this.onChange,
        value: this.state.search,
        autoComplete: "off",
        placeholder: "Search icons...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), this.state.search.length > 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "bx bx-x",
        onClick: this.emptySearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }))));
    }
  }]);

  return SearchForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function mapStateToProps(state) {
  return {
    search: state.search,
    category: state.category,
    style: state.style
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    fetchIcons: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["fetchIcons"],
    setSearchTerm: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["setSearchTerm"],
    changeSideIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["changeSideIcon"],
    setSelectedIcon: _actions_iconActions__WEBPACK_IMPORTED_MODULE_8__["setSelectedIcon"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(SearchForm));

/***/ })

})
//# sourceMappingURL=index.js.c1259a88d710adbbf1fd.hot-update.js.map