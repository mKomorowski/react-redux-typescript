import { createSelector } from "reselect";

import { RootState } from "../..";

// eslint-disable-next-line import/prefer-default-export
export const counterValueSelector = createSelector(
  (state: RootState) => state.counter,
  (counter) => counter.count,
);
