import { CounterActionTypes } from "./types";
import { increaseCount, decreaseCount } from "./actions";

describe("Counter actions", () => {
  describe("increaseCount", () => {
    it("should return correct action type", () => {
      expect(increaseCount()).toEqual({
        type: CounterActionTypes.INCREASE_COUNTER,
      });
    });
  });

  describe("decreaseCount", () => {
    it("should return correct action type", () => {
      expect(decreaseCount()).toEqual({
        type: CounterActionTypes.DECREASE_COUNTER,
      });
    });
  });
});
