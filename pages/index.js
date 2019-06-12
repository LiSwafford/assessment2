import React, { Component } from "react";
import BookingForm from "../components/BookingForm";
import { getRooms } from "../ducks/store";

import { connect } from "react-redux";

class Index extends Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(getRooms(isServer));

    return {};
  }

  render() {
    return <BookingForm />;
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};
export default connect(mapStateToProps)(Index);
