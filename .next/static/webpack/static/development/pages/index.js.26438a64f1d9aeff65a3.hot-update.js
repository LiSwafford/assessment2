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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _ducks_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ducks/store */ "./ducks/store.js");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Summary */ "./components/Summary.js");








var _jsxFileName = "/Users/liswafford/Documents/coding/HiltonFinised/assessment2/components/BookingForm.js";

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 9px;\n  right: 5px;\n  pointer-events: none;\n  border-style: solid;\n  border-width: 8px 5px 0 5px;\n  border-color: grey transparent transparent transparent;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n  padding: 5px 10px;\n  border: 1px solid grey;\n  border-radius: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: #eee;\n  padding: 5px;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 130px;\n  border: 3px solid #eee;\n  border-radius: 8px;\n  padding-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: lightGrey;\n  margin-top: 20px;\n  padding: 5px;\n  font-size: 16px;\n"]);

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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      localRooms: _this.props.rooms || [],
      showSummary: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onReset", function () {
      var newRooms = _this.props.rooms.slice();

      for (var i = 0; i < newRooms.length; i++) {
        if (!newRooms[i].checked) {
          newRooms[i].adults = 1;
          newRooms[i].children = 0;
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleIsChecked", function (e) {
      var id = e.target.id;
      var isChecked = e.target.checked;

      var newRooms = _this.props.rooms.slice();

      var index = newRooms.findIndex(function (item) {
        return item.roomId === +id;
      });
      newRooms[index].checked = isChecked;

      for (var j = 1; j < newRooms.length; j++) {
        if (j < index && newRooms[j].checked === false) {
          newRooms[j].checked = isChecked;
          newRooms[index].checked = true;
        } else if (j > index && newRooms[j].checked === true) {
          newRooms[j].checked = isChecked;
          newRooms[index].checked = false;
        }
      }

      _this.onReset();

      _this.setState({
        localRooms: newRooms
      }); // this.props.toggleChecked(newRooms);

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCount", function (id, e) {
      console.log("count", id, e.target.name, e.target.value);
      var targetName = e.target.name;
      var value = e.target.value;

      var newRooms = _this.props.rooms.slice();

      var i = newRooms.findIndex(function (item) {
        return item.roomId === +id;
      });
      newRooms[i][targetName] = +value;

      _this.setState({
        localRooms: newRooms
      }); // this.props.toggleChecked(newRooms);

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function () {
      _this.props.saveBooking(_this.state.localRooms);

      _this.setState({
        showSummary: true
      }, function () {
        alert("Rooms successfully booked!");
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BookingForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var roomsToDisplay = this.props.rooms.map(function (room) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Wrapper, {
          key: room.roomId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, room.roomId > 1 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "checkbox",
          id: room.roomId,
          checked: room.checked,
          onChange: _this2.toggleIsChecked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), " ", "Room ", room.roomId, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxContent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Adults ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), " (18+)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Select, {
          name: "adults",
          value: room.adults,
          disabled: !room.checked,
          onChange: function onChange(e) {
            return _this2.handleCount(room.roomId, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoxUnit, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Paragraph, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "Children ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }), " (0-17)"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SelectWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Select, {
          name: "children",
          value: room.children,
          disabled: !room.checked,
          onChange: function onChange(e) {
            return _this2.handleCount(room.roomId, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "0"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DownArrow, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, roomsToDisplay), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, " Submit"), this.state.showSummary && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }));
    }
  }]);

  return BookingForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
    saveBooking: _ducks_store__WEBPACK_IMPORTED_MODULE_12__["saveBooking"],
    toggleChecked: _ducks_store__WEBPACK_IMPORTED_MODULE_12__["toggleChecked"],
    getRooms: _ducks_store__WEBPACK_IMPORTED_MODULE_12__["getRooms"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(BookingForm));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button(_templateObject2());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].section(_templateObject3());
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4());
var BoxUnit = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject6());
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p(_templateObject7());
var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject8());
var Select = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].select(_templateObject9());
var DownArrow = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject10());

/***/ })

})
//# sourceMappingURL=index.js.26438a64f1d9aeff65a3.hot-update.js.map