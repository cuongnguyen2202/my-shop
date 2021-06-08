import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../Cart";
import Footer from "../Footer";
import Header from "../Header";
import ListPage from "../Product/pages/ListPage";
const Layout = () => {
  return (
    <>
      <Header />;
      <div className="container">
        <Switch>
          <Route path='/checkout' component={Cart} />
          <Route path='/' component={ListPage} />
        </Switch>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
