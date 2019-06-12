import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveBooking, toggleChecked, getRooms } from "../ducks/store";
import Summary from "./Summary";

class BookingForm extends Component {
  state = {
    localRooms: this.props.rooms || [],
    showSummary: false
  };
  onReset = () => {
    let newRooms = this.props.rooms.slice();
    for (let i = 0; i < newRooms.length; i++) {
      if (!newRooms[i].checked) {
        newRooms[i].adults = 1;
        newRooms[i].children = 0;
      }
    }
  };
  toggleIsChecked = e => {
    const id = e.target.id;
    const isChecked = e.target.checked;
    let newRooms = this.props.rooms.slice();
    let index = newRooms.findIndex(item => item.roomId === +id);
    newRooms[index].checked = isChecked;
    for (let j = 1; j < newRooms.length; j++) {
      if (j < index && newRooms[j].checked === false) {
        newRooms[j].checked = isChecked;
        newRooms[index].checked = true;
      } else if (j > index && newRooms[j].checked === true) {
        newRooms[j].checked = isChecked;
        newRooms[index].checked = false;
      }
    }
    this.onReset();
    this.setState({
      localRooms: newRooms
    });
    // this.props.toggleChecked(newRooms);
  };

  handleCount = (id, e) => {
    console.log("count", id, e.target.name, e.target.value);
    let targetName = e.target.name;
    let value = e.target.value;
    let newRooms = this.props.rooms.slice();
    let i = newRooms.findIndex(item => item.roomId === +id);
    newRooms[i][targetName] = +value;
    this.setState({
      localRooms: newRooms
    });
    // this.props.toggleChecked(newRooms);
  };
  handleSubmit = () => {
    this.props.saveBooking(this.state.localRooms);
    this.setState(
      {
        showSummary: true
      },
      () => {
        alert("Rooms successfully booked!");
      }
    );
  };

  render() {
    const roomsToDisplay = this.props.rooms.map(room => {
      return (
        <Wrapper key={room.roomId}>
          <Title>
            {room.roomId > 1 && (
              <input
                type="checkbox"
                id={room.roomId}
                checked={room.checked}
                onChange={this.toggleIsChecked}
              />
            )}{" "}
            Room {room.roomId}{" "}
          </Title>
          <BoxContent>
            <BoxUnit>
              <Paragraph>
                Adults <br /> (18+)
              </Paragraph>
              <SelectWrapper>
                <Select
                  name="adults"
                  value={room.adults}
                  disabled={!room.checked}
                  onChange={e => this.handleCount(room.roomId, e)}
                >
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
                <Select
                  name="children"
                  value={room.children}
                  disabled={!room.checked}
                  onChange={e => this.handleCount(room.roomId, e)}
                >
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
    return (
      <>
        <Container>{roomsToDisplay}</Container>
        <Button onClick={this.handleSubmit}> Submit</Button>
        {this.state.showSummary && <Summary />}
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ saveBooking, toggleChecked, getRooms }, dispatch);

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 630px;
`;
const Button = styled.button`
  background: lightGrey;
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
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
