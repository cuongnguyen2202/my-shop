import produce from "immer";
import { registerAction } from "../actions/Register";

const initialRegister = {
  err: "",
  isLoading: false,
};

const register = (state = initialRegister, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case registerAction.REGISTER:
        draft.isLoading = true;
        break;
      case registerAction.REGISTER_SUCCESS:
        draft.isLoading = false;
        break;
      case registerAction.REGISTER_ERR:
        draft.err = payload;
        draft.isLoading = false;
        break;
      default:
        return;
    }
  });
export default register;
