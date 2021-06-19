import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../..";
import { CounterActionTypes, CounterActions } from "./types";

export const increaseCount = (): CounterActions => ({
  type: CounterActionTypes.INCREASE_COUNTER,
});

export const decreaseCount = (): CounterActions => ({
  type: CounterActionTypes.DECREASE_COUNTER,
});

export const decreaseCountAsync =
  (): ThunkAction<void, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    setTimeout(() => dispatch(decreaseCount()), 0);
  };
