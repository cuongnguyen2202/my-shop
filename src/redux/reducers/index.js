import { combineReducers } from "redux";
import users from "./User";
import products from "./Products";
import register from "./Register";
import cart from "./Cart";
const rootReducer = combineReducers({ users, products, register, cart });
export default rootReducer;
