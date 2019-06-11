import React, { Component } from "react";
import styled from "styled-components";

class BookingForm extends Component {
  render() {
    console.log(this.props);
    const roomsToDisplay = this.props.rooms.map(room => {
      return (
        <Wrapper key={room.roomId}>
          <Title>
            {room.roomId === 1 ? null : (
              <input type="checkbox" defaultChecked={room.checked} />
            )}{" "}
            Room {room.roomId}{" "}
          </Title>
          <BoxContent>
            <BoxUnit>
              <Paragraph>
                Adults <br /> (18+)
              </Paragraph>
              <SelectWrapper>
                <Select value={room.adults} disabled={!room.checked}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
                <DownArrow />
              </SelectWrapper>
            </BoxUnit>
            <BoxUnit>
              <Paragraph>
                Children <br /> (0-17)
              </Paragraph>
              <SelectWrapper>
                <Select value={room.children} disabled={!room.checked}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
                <DownArrow />
              </SelectWrapper>
            </BoxUnit>
          </BoxContent>
        </Wrapper>
      );
    });
    return <Container>{roomsToDisplay}</Container>;
  }
}

export default BookingForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 630px;
`;

const Wrapper = styled.section`
  width: 130px;
  border: 3px solid #eee;
  border-radius: 8px;
  padding-bottom: 10px;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;
const BoxUnit = styled.div``;
const Title = styled.div`
  background: #eee;
  padding: 5px;
`;
const Paragraph = styled.p``;
const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
`;
const Select = styled.select`
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
const DownArrow = styled.div`
  position: absolute;
  top: 9px;
  right: 5px;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: grey transparent transparent transparent;
`;
