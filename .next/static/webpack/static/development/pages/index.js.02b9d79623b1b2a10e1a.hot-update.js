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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "/Users/liswafford/Documents/coding/HiltonFinised/assessment2/components/BookingForm.js";

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 9px;\n  right: 5px;\n  pointer-events: none;\n  border-style: solid;\n  border-width: 8px 5px 0 5px;\n  border-color: grey transparent transparent transparent;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n  padding: 5px 10px;\n  border: 1px solid grey;\n  border-radius: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #eee;\n  padding: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 130px;\n  border: 3px solid #eee;\n  border-radius: 8px;\n  padding-bottom: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 630px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BookingForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BookingForm, _Component);

  function BookingForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BookingForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BookingForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stat", {
      checkedRooms: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleIsChecked", function (e) {
      // console.log(e.target.id, e.target.checked);
      var id = e.target.id;
      var isChecked = e.target.checked;

      var newRooms = _this.props.rooms.slice();

      var index = newRooms.findIndex(function (item) {
        return item.roomId === +id;
      });
      newRooms[index].checked = e.target.checked;

      for (var j = 1; j < newRooms.length; j++) {
        if (j < index && newRooms[j].checked === false) {
          newRooms[j].checked = isChecked;
          newRooms[index].checked = true;
        } else if (j > index && newRooms[j].checked === true) {
          newRooms[j].checked = isChecked;
          newRooms[index].checked = false;
        }
      }

      _this.props.toggleChecked(newRooms);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCount", function (e) {
      console.log("count", e.target.value);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BookingForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.props);
      var roomsToDisplay = this.props.rooms.map(function (room) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Wrapper, {
          key: room.roomId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, room.roomId > 1 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "checkbox",
          id: room.roomId,
          checked: room.checked,
          onChange: _this2.toggleIsChecked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }), " ", "Room ", room.roomId, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxContent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "Adults ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), " (18+)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Select, {
          name: "adults",
          defaultValue: room.adults,
          disabled: !room.checked,
          onChange: function onChange(e) {
            return _this2.handleCount(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Children ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), " (0-17)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Select, {
          name: "children",
          value: room.children,
          disabled: !room.checked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "0"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, roomsToDisplay);
    }
  }]);

  return BookingForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BookingForm);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section(_templateObject2());
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3());
var BoxUnit = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5());
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p(_templateObject6());
var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject7());
var Select = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].select(_templateObject8());
var DownArrow = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject9());

/***/ })

})
//# sourceMappingURL=index.js.02b9d79623b1b2a10e1a.hot-update.js.map