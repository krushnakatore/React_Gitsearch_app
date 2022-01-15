import { loadData, saveData } from "../../utils/localStorage";
import { LOG_FLR, LOG_IN, LOG_IN1 } from "./actionTypes";

// let token =
let token = loadData("token");
let user = loadData("user");

let init = {
  isAuth: token ? true : false,
  token: token || "",
  user: user || ""
};

export const loginReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      console.log("payload", payload.token);
      saveData("token", payload);
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case LOG_IN1:
      console.log("payload", payload);
      saveData("user", payload);
      return {
        ...state,
        isAuth: true,
        user: payload
      };
    case LOG_FLR:
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    default:
      return state;
  }
};
