import { combineReducers } from "redux";
import users from "./User";
import products from "./Products";
import register from "./Register";
const rootReducer = combineReducers({ users, products, register });
export default rootReducer;
