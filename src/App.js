import { Route, Router, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./components/LayOut";
import PrivateAuth from "./components/PrivateAuth";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { history } from "./helps/history";

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productsList = await productsAPI.getAll();
  //     console.log(productsList);
  //   };
  //   return fetchProducts();
  // }, []);
  return (
    <Router history={history}>
      <div className="App">
        <div className="wrapper">
          <Switch>
            <PrivateAuth exact path="/" component={Layout} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
