import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import usersAPI from "../../services/usersAPI";
import { userAction } from "../actions/Users";

export function* Users() {
  try {
    const response = yield call(usersAPI.getAll);
    console.log(response);
    yield put({
      type: userAction.GET_USER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: userAction.GET_USER_ERR,
      payload: error,
    });
  }
}
export function* watchGetUsers() {
  yield takeLatest(userAction.GET_USER, Users);
}
export default function* reward() {
  yield fork(watchGetUsers);
}
