import { fork } from "redux-saga/effects";
import products from "./Product";
import register from "./Register";
import users from "./User";

export function* rootSaga() {
  yield fork(products);
  yield fork(register);
  yield fork(users);
}
