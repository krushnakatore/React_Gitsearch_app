import { LOG_FLR, LOG_IN, LOG_IN1 } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOG_IN,
    payload: token
  };
};
export const loginuserInfo = (user) => {
  return {
    type: LOG_IN1,
    payload: user
  };
};

export const loginFailure = (err) => {
  return {
    type: LOG_FLR,
    payload: err
  };
};
