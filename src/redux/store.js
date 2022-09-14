import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiReducer";
import { userReducer } from "./userReducer";
import { authMiddleware } from "./authMiddleware";
import { registrationMiddleware } from "./registrationMiddleware";

export const rootReducers = combineReducers({
  ui: uiReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authMiddleware)
      .concat(registrationMiddleware),
});
