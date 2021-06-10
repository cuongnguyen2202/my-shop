import { Route, Router, Switch } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";
import Layout from "./components/LayOut";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { history } from "./helps/history";
import productsAPI from "./services/productAPI";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await productsAPI.getAll();
      localStorage.setItem("listData", JSON.stringify(productsList));
    };
    return fetchProducts();
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
