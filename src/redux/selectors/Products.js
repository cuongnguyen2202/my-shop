import { createSelector } from "reselect";

const getProduct = (state) => state.products;
export const productsSelector = createSelector(getProduct, (users) => users);
