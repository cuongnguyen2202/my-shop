import produce from "immer";
import { cartAction } from "../actions/Cart";

const initialCart = {
  item: [],
};

const register = (state = initialCart, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case cartAction.ADD_TO_CART:
        const newItem = payload;
        const indexCart = draft.item.findIndex(
          (item) => item.id === newItem.id
        );
        if (indexCart > 0) {
          draft.item[indexCart].quantity += newItem.quantity;
        } else {
          draft.item.push(newItem);
        }
        break;
      case cartAction.SET_QUANTITY:
        const { id, quantity } = payload;
        //check id
        const index = draft.item.findIndex((item) => item.id === id);
        if (index > 0) {
          draft.item[index].quantity = quantity;
        }
        break;
      case cartAction.REMOVE_FROM_CART:
        const idRemove = payload;
        draft.item = draft.item.filter((item) => item.id !== idRemove);
        break;

      default:
        return;
    }
  });
export default register;
