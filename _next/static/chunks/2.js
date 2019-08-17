(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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






var _jsxFileName = "C:\\MAIN\\Aniket\\Personal Projects\\boxicons\\basic\\boxicons.com\\components\\icons\\categories.js";







var CategoryList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].ul.withConfig({
  componentId: "ikalhn-0"
})(["padding:0px;list-style:none;margin:0px;@media screen and (min-width:", "){padding:0px;padding-left:0px;padding-top:0px;}li{font-size:14px;padding:0px;cursor:pointer;display:inline-block;width:100%;@media screen and (min-width:", "){width:100%;display:block;}div{border-radius:2px;padding:5px 20px;border:2px solid  transparent;transition:", ";&:active{background:#f9f9f9;}-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;@media screen and (min-width:", "){min-width:160px;}display:block;color:", ";&:hover{}}&.active{div{color:#b06c4a;}}}"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["TRANSITION"], _types__WEBPACK_IMPORTED_MODULE_11__["BREAKPOINT_LG"], _types__WEBPACK_IMPORTED_MODULE_11__["FONT_COLOR"]);

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
    value: function handleClick(id) {
      var el = document.querySelector(".icons-right-section");
      var boundingRect = el.getBoundingClientRect();
      window.scroll({
        top: boundingRect.top + window.pageYOffset - 64,
        behavior: 'smooth'
      });
      var name = "";

      for (var i = 0; i < this.state.categories.length; i++) {
        if (this.state.categories[i].id == id) {
          name = this.state.categories[i].name;
        }
      }

      this.props.setCategory(id, name, this.props.style, this.props.search);
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
            return _this2.handleClick(category.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, category.name));
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "fadeIn animated",
        id: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CategoryList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        onClick: function onClick() {
          return _this2.handleClick(null);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
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

/***/ "./reducers/data/categories.json":
/*!***************************************!*\
  !*** ./reducers/data/categories.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = [{"name":"Accessibility","id":94},{"name":"Alert","id":95},{"name":"Arrow","id":96},{"name":"Brands","id":97},{"name":"Building","id":98},{"name":"Business","id":99},{"name":"Code","id":100},{"name":"Communication","id":101},{"name":"Design","id":102},{"name":"Device","id":103},{"name":"E-Commerce","id":104},{"name":"Emoji","id":105},{"name":"Files & Folders","id":106},{"name":"Finance","id":107},{"name":"Food & Beverage","id":108},{"name":"Health","id":109},{"name":"Interface","id":110},{"name":"Layout","id":111},{"name":"Loader","id":112},{"name":"Misc","id":113},{"name":"Music","id":114},{"name":"Network","id":115},{"name":"Object","id":116},{"name":"Photo & Video","id":117},{"name":"Shape","id":118},{"name":"Sports","id":119},{"name":"Time","id":120},{"name":"Travel","id":121},{"name":"User","id":122},{"name":"Weather","id":123},{"name":"Writing","id":124}];

/***/ })

}]);
//# sourceMappingURL=2.js.map