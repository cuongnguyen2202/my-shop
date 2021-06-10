import React, { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";

import "./App.scss";
import Layout from "./components/LayOut";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { history } from "./helps/history";
import { useProducts } from "./redux/hooks/Products";

function App() {
  const { actions } = useProducts();
  useEffect(() => {
    actions.getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router history={history}>
      <div className="App">
        <div className="wrapper">
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" component={Layout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
