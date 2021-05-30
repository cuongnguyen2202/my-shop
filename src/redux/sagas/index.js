import { fork, cancel } from "redux-saga/effects";
import products from "./Product";
import users from "./User";
import register from "./Register";

export function* rootSaga() {
  yield fork(products);
  yield fork(register);
  yield fork(users);
}
