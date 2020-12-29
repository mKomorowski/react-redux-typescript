import reducer from "./reducer";
import { CounterActionTypes } from "./types";

describe("Counter reducer", () => {
  it("should handle INCREASE_COUNTER action", () => {
    const result = reducer(undefined, {
      type: CounterActionTypes.INCREASE_COUNTER,
    });

    expect(result).toEqual({ count: 1 });
  });

  it("should handle DECREASE_COUNTER action", () => {
    const result = reducer(undefined, {
      type: CounterActionTypes.DECREASE_COUNTER,
    });

    expect(result).toEqual({ count: -1 });
  });

  it("should handle RESET_COUNTER action", () => {
    const result = reducer(
      { count: 100 },
      {
        type: CounterActionTypes.RESET_COUNTER,
      },
    );

    expect(result).toEqual({ count: 0 });
  });

  it("should handle unsupported action", () => {
    const result = reducer(undefined, {
      type: "unsupported",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    expect(result).toEqual({ count: 0 });
  });
});
