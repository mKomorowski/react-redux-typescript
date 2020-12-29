import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { AppState } from "../..";
import reducer from "../../store/reducer";
import Counter from "./index";

const initialState: AppState = {
  counter: {
    count: 100,
  },
};

const store = createStore(reducer, initialState);

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
    fireEvent.click(decrementBtn);
    expect(screen.getByText("99")).toBeInTheDocument();
  });
});
