import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => (
  <div className="not-found">
    <h2>Page not found</h2>
    <Link to="/">Return to the Home Page</Link>
  </div>
);

export default NotFound;
