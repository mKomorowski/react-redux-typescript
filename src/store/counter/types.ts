export enum CounterActionTypes {
  INCREASE_COUNTER = "COUNTER/INCREASE_COUNTER",
  DECREASE_COUNTER = "COUNTER/DECREASE_COUNTER",
  RESET_COUNTER = "COUNTER/RESET_COUNTER",
}

export type CounterActions = {
  type: CounterActionTypes;
};

export type CounterState = {
  count: number;
};
