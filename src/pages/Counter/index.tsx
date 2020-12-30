import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../..";
import { increaseCount, decreaseCount } from "../../store/counter/actions";

import Number from "../../components/Number";

const Counter: FC = () => {
  const count = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Redux Counter</h1>
      <h3>
        Counter: <Number value={count} />
      </h3>
      <div>
        <button type="button" onClick={() => dispatch(increaseCount())}>
          Increase
        </button>
        <button type="button" onClick={() => dispatch(decreaseCount())}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
