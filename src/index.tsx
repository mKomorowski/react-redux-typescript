import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";

import App from "./App";

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());
const rootEl = document.getElementById("root");

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
