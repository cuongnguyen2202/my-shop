import produce from "immer";
import { cartAction } from "../actions/Cart";

const initialCart = {
  item: [],
};

const cart = (state = initialCart, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case cartAction.ADD_TO_CART:
        const newItem = payload;
        const indexCart = draft.item.findIndex(
          (item) => item.data.id === newItem.data.id
        );
        if (indexCart >= 0) {
          draft.item[indexCart].data.quantity += 1;
        } else {
          draft.item.push(newItem);
        }
        break;
      case cartAction.SET_QUANTITY:
        const { id, newQuantity } = payload.data;
        //check id
        const index = draft.item.findIndex((item) => item.data.id === id);
        if (index >= 0) {
          draft.item[index].data.quantity = newQuantity;
        }
        break;
      case cartAction.REMOVE_FROM_CART:
        const idRemove = payload.data;
        draft.item = draft.item.filter((item) => item.data.id !== idRemove);
        break;

      default:
        return;
    }
  });
export default cart;
