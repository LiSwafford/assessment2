export const SAVE_BOOKING = "SAVE_BOOKING";

const saveBooking = rooms => {
  return { type: "SAVE_BOOKING", payload: rooms };
};

export default { saveBooking };
