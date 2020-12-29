import React, { FC } from "react";
import classnames from "classnames";

import "./index.scss";

type NumberProps = {
  value: number;
};

const Number: FC<NumberProps> = ({ value }) => (
  <span
    className={classnames("number", {
      positive: value > 0,
      negative: value < 0,
    })}
  >
    {value}
  </span>
);

export default Number;
