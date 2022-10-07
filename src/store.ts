import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import userReducer from "./reducer/auth";

const rootReducer = combineReducers({
  user: userReducer,
});

export default configureStore({ reducer: rootReducer });
