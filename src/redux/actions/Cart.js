export const cartAction = Object.freeze({
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_QUANTITY: "SET_QUANTITY",
});
const addToCart = (data) => ({
  type: cartAction.ADD_TO_CART,
  payload: { data },
});
const removeFromCart = (data) => ({
  type: cartAction.REMOVE_FROM_CART,
  payload: { data },
});
const setQuantity = (data) => ({
  type: cartAction.SET_QUANTITY,
  payload: { data },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addToCart,
  removeFromCart,
  setQuantity,
};
