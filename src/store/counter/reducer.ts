import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.count += 1;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.count -= 1;
    },
    reset: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.count = initialState.count;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
