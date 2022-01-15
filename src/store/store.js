import { combineReducers, createStore } from "redux";
import { loginReducer } from "../Redux/login/loginReducer";

import { regReducer } from "../Redux/register/regReducer";
import { dashReducer } from "../Redux/dashboard/dashreducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  app: regReducer,
  user: dashReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
