import { CounterActionTypes, CounterActions } from "./types";

export const increaseCount = (): CounterActions => ({
  type: CounterActionTypes.INCREASE_COUNTER,
});

export const decreaseCount = (): CounterActions => ({
  type: CounterActionTypes.DECREASE_COUNTER,
});
