import React from "react";
import { Redirect, Route } from "react-router-dom";

PrivateAuth.propTypes = {};

function PrivateAuth({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("users") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateAuth;
