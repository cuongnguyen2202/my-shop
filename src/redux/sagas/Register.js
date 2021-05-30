import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import registerAPI from "../../services/register";
import { registerAction } from "../actions/Register";
import { delay } from "redux-saga/effects";
import { history } from "../../helps/history";

export function* register(params) {
  console.log(params);
  yield delay(2000);
  try {
    const resp = yield call(registerAPI.add, params.payload);
    yield delay(1000);
    history.push("signin");
    yield put({
      type: registerAction.REGISTER_SUCCESS,
      payload: resp,
    });
  } catch (error) {
    yield put({
      type: registerAction.REGISTER_ERR,
      payload: error,
    });
  }
}

export function* watchRegister() {
  yield takeLatest(registerAction.REGISTER, register);
}

export default function* reward() {
  yield fork(watchRegister);
}
