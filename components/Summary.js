import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

const Summary = props => {
  const confirmation = props.rooms.map((room, i) => {
    return (
      <div key={i}>
        {room.checked && (
          <p>
            Room {room.roomId}: {room.adults} adults, {room.children} children.
          </p>
        )}
      </div>
    );
  });
  return <Wrapper>{confirmation}</Wrapper>;
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Summary);

const Wrapper = styled.section``;
