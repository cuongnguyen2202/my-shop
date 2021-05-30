export const productAction = Object.freeze({
  GET_PRODUCT: "GET_PRODUCT",
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_ERR: "GET_PRODUCT_ERR",
});
const getProduct = () => ({
  type: productAction.GET_PRODUCT,
  payload: {},
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProduct,
};
