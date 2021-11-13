import { AnyAction } from "@reduxjs/toolkit";

import reducer, { decrement, increment, reset } from "./reducer";

describe("Counter reducer", () => {
  it("should return the initial state", () => {
    const result = reducer(undefined, {} as AnyAction);

    expect(result).toEqual({ count: 0 });
  });

  it("should handle increment action", () => {
    const result = reducer(undefined, increment());

    expect(result).toEqual({ count: 1 });
  });

  it("should handle decrement action", () => {
    const result = reducer(undefined, decrement());

    expect(result).toEqual({ count: -1 });
  });

  it("should handle reset action", () => {
    const result = reducer({ count: 100 }, reset());

    expect(result).toEqual({ count: 0 });
  });
});
