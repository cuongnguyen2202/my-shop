import { createSelector } from "reselect";
const cartItem = (state) => state.cart;
export const cartItemSelector = createSelector(cartItem, (item) => item);
export const cartItemCountSelector = createSelector(
  cartItem,
  (item) => item.reduce((count, items) => count + items.quantity),
  0
);
export const cartTotalSelector = createSelector(
  cartItem,
  (item) => item.reduce((total, item) => total + item.quantity * item.price),
  0
);
