webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Booking.js":
/*!*******************************!*\
  !*** ./components/Booking.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { saveBooking, toggleChecked, getRooms } from "../ducks/store";
// import React, { Component } from "react";
// import styled from "styled-components";
// import BookingForm from "./BookingForm";
// class Booking extends Component {
//   state = {
//     showSummary: false
//   };
//   handleSubmit = () => {
//     this.setState({
//       showSummary: true
//     });
//     alert("Rooms successfully booked!");
//   };
//   render() {
//     // console.log(this.props);
//     const { saveBooking, toggleChecked, rooms } = this.props;
//     const confirmation = rooms.map(room => {
//       return (
//         <div>
//           {room.checked && (
//             <p>
//               Room {room.roomId}: {room.adults} adults, {room.children}{" "}
//               children.
//             </p>
//           )}
//         </div>
//       );
//     });
//     return (
//       <Wrapper>
//         <BookingForm rooms={rooms} toggleChecked={toggleChecked} />
//         {/* <Button onClick={this.handleSubmit}> Submit</Button>
//         {this.state.showSummary && <Summary>{confirmation}</Summary>} */}
//       </Wrapper>
//     );
//   }
// }
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ saveBooking, toggleChecked, getRooms }, dispatch);
// const mapStateToProps = state => {
//   return {
//     rooms: state.rooms
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Booking);
// const Wrapper = styled.section``;
// const Button = styled.button`
//   background: lightGrey;
//   margin-top: 20px;
//   padding: 5px;
//   font-size: 16px;
// `;
// const Summary = styled.div``;

/***/ }),

/***/ "./components/BookingForm.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Booking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Booking */ "./components/Booking.js");
/* harmony import */ var _components_Booking__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Booking__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ducks_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ducks/store */ "./ducks/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "/Users/liswafford/Documents/coding/HiltonFinised/assessment2/pages/index.js";





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Booking__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req; // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`

      reduxStore.dispatch(Object(_ducks_store__WEBPACK_IMPORTED_MODULE_7__["getRooms"])(isServer));
      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // const mapDispatchToProps = { startClock }
// const mapDispatchToProps = dispatch => {
//   return {
//     saveBooking: () => dispatch(saveBooking()),
//     toggleChecked: newRooms => dispatch(toggleChecked(newRooms))
//   };
// };


var mapStateToProps = function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps // mapDispatchToProps
)(Index));

/***/ })

})
//# sourceMappingURL=index.js.0b6271afb99db9efc822.hot-update.js.map