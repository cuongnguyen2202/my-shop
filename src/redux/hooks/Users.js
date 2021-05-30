import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import userAction from "../actions/Users";
import { userSelector } from "../selectors/User";
export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const action = useMemo(
    () => bindActionCreators(userAction, dispatch),
    [dispatch]
  );
  return useMemo(
    () => ({
      // eslint-disable-next-line no-unused-expressions
      action,
      users,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [action, users]
  );
};
