import { GET_PROFILE } from "./actionTypes";

export const getProfile = (user) => {
  return {
    type: GET_PROFILE,
    payload: user
  };
};
