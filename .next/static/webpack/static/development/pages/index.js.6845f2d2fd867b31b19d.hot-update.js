webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BookingForm.js":
/*!***********************************!*\
  !*** ./components/BookingForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/liswafford/Documents/coding/HiltonFinised/assessment2/components/BookingForm.js";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 9px;\n  right: 5px;\n  pointer-events: none;\n  border-style: solid;\n  border-width: 8px 5px 0 5px;\n  border-color: grey transparent transparent transparent;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n  padding: 5px 10px;\n  border: 1px solid grey;\n  border-radius: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #eee;\n  padding: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 130px;\n  border: 3px solid #eee;\n  border-radius: 8px;\n  padding-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BookingForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BookingForm, _Component);

  function BookingForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BookingForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BookingForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BookingForm, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var roomsToDisplay = this.props.rooms.map(function (room) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, "Room ", room.roomId), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BoxContent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "Adults ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }), " (18+)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Select, {
          value: room.adults,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "Children ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), " (0-17)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Select, {
          value: room.children,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, roomsToDisplay);
    }
  }]);

  return BookingForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BookingForm);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section(_templateObject());
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
var BoxUnit = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject3());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject4());
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].p(_templateObject5());
var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject6());
var Select = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].select(_templateObject7());
var DownArrow = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject8());

/***/ })

})
//# sourceMappingURL=index.js.6845f2d2fd867b31b19d.hot-update.js.map