import React from "react";
import ReactDOM from "react-dom";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

import App from "./App";

const store = configureStore({
  reducer,
  enhancers: [applyMiddleware(thunk)],
});
const rootEl = document.getElementById("root");

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
