import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseCount, decreaseCountAsync } from "../../store/counter/actions";
import { counterValueSelector } from "../../store/counter/selectors";

import Number from "../../components/Number";

const Counter: FC = () => {
  const count = useSelector(counterValueSelector);
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
        <button type="button" onClick={() => dispatch(decreaseCountAsync())}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
