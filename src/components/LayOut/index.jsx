import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cart from "../Cart";
import Header from "../Header";
import ListPage from "../Product/pages/ListPage";
const Layout = () => {
  return (
    <>
      <Header />;
      <div className="container">
        <Switch>

          <Route path='/products' component={ListPage} />
          <Route path='/checkout' component={Cart} />

        </Switch>
      </div>
    </>
  );
};

export default Layout;
