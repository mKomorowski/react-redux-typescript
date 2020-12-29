import React, { FC } from "react";
import { connect } from "react-redux";

import { AppState } from "../..";
import { increaseCount, decreaseCount } from "../../store/counter/actions";

import Number from "../../components/Number";

const mapState = (state: AppState) => ({
  count: state.counter.count,
});

const mapDispatch = {
  increaseCount,
  decreaseCount,
};

type CounterProps = ReturnType<typeof mapState> & typeof mapDispatch;

const Counter: FC<CounterProps> = ({ count, increaseCount, decreaseCount }) => (
  <div className="counter">
    <h1>Redux Counter</h1>
    <h3>
      Counter: <Number value={count} />
    </h3>
    <div>
      <button type="button" onClick={() => increaseCount()}>
        Increase
      </button>
      <button type="button" onClick={() => decreaseCount()}>
        Decrease
      </button>
    </div>
  </div>
);

export default connect(mapState, mapDispatch)(Counter);
