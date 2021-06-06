import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import cartAction from "../actions/Cart";
import { cartItemSelector } from "../selectors/Cart";
export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartItemSelector);
  const action = useMemo(
    () => bindActionCreators(cartAction, dispatch),
    [dispatch]
  );
  return useMemo(
    () => ({
      // eslint-disable-next-line no-unused-expressions
      action,
      cart,
    }),
    [action, cart]
  );
};
