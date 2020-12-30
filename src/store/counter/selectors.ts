import { createSelector } from "reselect";

import { AppState } from "../..";

// eslint-disable-next-line import/prefer-default-export
export const counterValueSelector = createSelector(
  (state: AppState) => state.counter,
  (counter) => counter.count,
);
