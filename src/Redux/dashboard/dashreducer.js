import { GET_PROFILE } from "./actionTypes";

let init = {
  user: []
};

export const dashReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PROFILE:
      // console.log("payload",payload.items[0])
      return {
        ...state,
        user: payload.items
      };
    default:
      return state;
  }
};
