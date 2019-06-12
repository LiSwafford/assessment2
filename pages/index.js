import React, { Component } from "react";
import BookingForm from "../components/BookingForm";
import { getRooms, toggleChecked, saveBooking } from "../ducks/store";

import { connect } from "react-redux";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(getRooms(isServer));

    return {};
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
  }

  render() {
    return <BookingForm />;
  }
}
// const mapDispatchToProps = { startClock }
// const mapDispatchToProps = dispatch => {
//   return {
//     saveBooking: () => dispatch(saveBooking()),
//     toggleChecked: newRooms => dispatch(toggleChecked(newRooms))
//   };
// };

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Index);
