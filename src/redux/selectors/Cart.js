import { createSelector } from "reselect";
const cartItem = (state) => state.cart.item;
export const cartItemSelector = createSelector(cartItem, (item) => item);
export const cartItemCountSelector = createSelector(cartItem, (item) =>
  item.reduce((count, items) => count + Number(items.data.quantity), 0)
);

export const cartTotalSelector = createSelector(cartItem, (item) =>
  item.reduce(
    (total, item) =>
      total + Number(item.data.quantity) * Number(item.data.price),
    0
  )
);
