import React from "react";
import { Link, useLocation } from "react-router-dom";

const Heading = () => {
  return (
    <header className="heading">
      <div className="container">
        <div className="heading__content">
          <div className="heading__left">
            <p className="heading__item">PHONE: XXXXXXXXX</p>
            <p className="heading__item">EMAIL: XXXXXXXXX</p>
          </div>
          <div className="heading__right">
            <Link className="heading__item" to="/signup">
              Sign Up
            </Link>
            <Link to="/signin" className="heading__item">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;
