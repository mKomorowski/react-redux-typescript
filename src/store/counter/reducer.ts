import { CounterActions, CounterActionTypes, CounterState } from "./types";

const initialState: CounterState = {
  count: 0,
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: CounterActions,
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREASE_COUNTER:
      return {
        count: state.count + 1,
      };
    case CounterActionTypes.DECREASE_COUNTER:
      return {
        count: state.count - 1,
      };
    case CounterActionTypes.RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
