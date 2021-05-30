import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import productAction from "../actions/Products";
import { productsSelector } from "../selectors/Products";
export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const actions = useMemo(
    () => bindActionCreators(productAction, dispatch),
    [dispatch]
  );
  return useMemo(
    () => ({
      // eslint-disable-next-line no-unused-expressions
      actions,
      products,
    }),
    [actions, products]
  );
};
