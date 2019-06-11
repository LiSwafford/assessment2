import { initStore } from "../ducks/store";
import withRedux from "next-redux-wrapper";
import Actions from "../ducks/action";
import React, { Component } from "react";
import styled from "styled-components";
import BookingForm from "./BookingForm";

class Booking extends Component {
  render() {
    // console.log(this.props.store.getState());
    return (
      <Wrapper>
        <BookingForm rooms={this.props.store.getState().rooms} />
        <Button>Submit</Button>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveBooking: () => dispatch(Actions.saveBooking())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    rooms: state.rooms
  };
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  Booking
);

const Wrapper = styled.section``;
const Button = styled.button`
  background: lightGrey;
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
`;
