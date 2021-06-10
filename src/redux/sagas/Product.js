import { call, fork, put, takeLatest } from "@redux-saga/core/effects";
import productsAPI from "../../services/productAPI";
import { productAction } from "../actions/Products";

export function* Product(params) {
  try {
    const response = yield call(productsAPI.getAll);
    // localStorage.setItem("listData", JSON.stringify(response));

    yield put({
      type: productAction.GET_PRODUCT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: productAction.GET_PRODUCT_ERR,
      payload: error,
    });
  }
}
export function* watchGetProduct() {
  yield takeLatest(productAction.GET_PRODUCT, Product);
}
export default function* reward() {
  yield fork(watchGetProduct);
}
