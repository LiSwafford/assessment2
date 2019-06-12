import { connect } from "react-redux";
import React, { Component } from "react";
import styled from "styled-components";

class Summary extends Component {
  render() {
    // console.log(this.props);

    const confirmation = this.props.rooms.map(room => {
      return (
        <div>
          {room.checked && (
            <p>
              Room {room.roomId}: {room.adults} adults, {room.children}{" "}
              children.
            </p>
          )}
        </div>
      );
    });
    return <Wrapper>{confirmation}</Wrapper>;
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};

export default connect(mapStateToProps)(Summary);

const Wrapper = styled.section``;
// const Button = styled.button`
//   background: lightGrey;
//   margin-top: 20px;
//   padding: 5px;
//   font-size: 16px;
// `;
// const ConfirmInfo = styled.div``;
