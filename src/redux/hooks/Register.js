import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSelector } from "../selectors/Register";
import { bindActionCreators } from "redux";
import registerAction from "../actions/Register";

export const useRegister = () => {
  const dispatch = useDispatch();
  const registers = useSelector(registerSelector);
  const actions = useMemo(
    () => bindActionCreators(registerAction, dispatch),
    [dispatch]
  );

  return useMemo(
    () => ({
      actions,
      registers,
    }),
    [actions, registers]
  );
};
