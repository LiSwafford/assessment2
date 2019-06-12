import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const myInitialState = {
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

export const actionTypes = {
  GET_ROOMS: "GET_ROOMS",
  SAVE_BOOKING: "SAVE_BOOKING"
  // TOGGLE_CHECKED: "TOGGLE_CHECKED"
};

// REDUCERS
export const reducer = (state = myInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return state;
    case actionTypes.GET_ROOMS:
      return state;
    // case actionTypes.TOGGLE_CHECKED:
    //   return {
    //     ...state,
    //     rooms: action.payload
    //   };
    case actionTypes.SAVE_BOOKING:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
};

// ACTIONS

export const getRooms = () => {
  return { type: actionTypes.GET_ROOMS };
};
export const saveBooking = rooms => {
  return { type: actionTypes.SAVE_BOOKING, payload: rooms };
};

// export function toggleChecked(newRooms) {
//   // console.log("action 2: ", newRooms);
//   return {
//     type: actionTypes.TOGGLE_CHECKED,
//     payload: newRooms
//   };
// }

export function initializeStore(initialState = myInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
