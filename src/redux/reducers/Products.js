import produce from "immer";
import { productAction } from "../actions/Products";

const initialState = {
  data: [],
  errors: "",
  loading: false,
};
const products = (state = initialState, actions) =>
  produce(state, (draft) => {
    const { type, payload } = actions;
    switch (type) {
      case productAction.GET_PRODUCT:
        draft.loading = true;
        break;
      case productAction.GET_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.data = payload;
        break;
      case productAction.GET_PRODUCT_ERR:
        draft.loading = false;
        draft.data = payload;
        break;
      default:
        break;
    }
  });
export default products;
