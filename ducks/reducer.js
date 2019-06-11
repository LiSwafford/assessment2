import { SAVE_BOOKING } from "./action";

const initialState = {
  rooms: [
    {
      roomId: 1,
      adults: 1,
      children: 0,
      checked: true
    },
    {
      roomId: 2,
      adults: 1,
      children: 0,
      checked: false
    },
    {
      roomId: 3,
      adults: 1,
      children: 0,
      checked: false
    },
    {
      roomId: 4,
      adults: 1,
      children: 0,
      checked: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BOOKING:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
