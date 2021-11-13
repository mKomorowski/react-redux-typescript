import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { applyMiddleware, configureStore, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { RootState } from "../..";
import reducer from "../../store/reducer";
import Counter from "./index";

jest.useFakeTimers();

const preloadedState: RootState = {
  counter: {
    count: 100,
  },
};

const middleware = compose(applyMiddleware(thunk));
const store = configureStore({
  reducer,
  preloadedState,
  enhancers: [applyMiddleware(thunk)],
});

const wrapper = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

describe("Counter", () => {
  beforeEach(() => {
    render(wrapper());
  });

  it("should display initial value", () => {
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it('should display correct value when "increment"/"decrement" button are used', () => {
    const [incrementBtn, decrementBtn] = screen.getAllByRole("button");

    fireEvent.click(incrementBtn);
    expect(screen.getByText("101")).toBeInTheDocument();

    fireEvent.click(decrementBtn);

    // simulate setTimeout in async action
    jest.advanceTimersByTime(1);

    fireEvent.click(decrementBtn);

    // simulate setTimeout in async action
    jest.advanceTimersByTime(1);

    expect(screen.getByText("99")).toBeInTheDocument();
  });
});
