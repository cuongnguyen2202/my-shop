import produce from "immer";
import { userAction } from "../actions/Users";

const initialState = {
  data: [],
  errors: "",
  loading: false,
};
const users = (state = initialState, actions) =>
  produce(state, (draft) => {
    const { type, payload } = actions;
    switch (type) {
      case userAction.GET_USER:
        draft.loading = true;
        break;
      case userAction.GET_USER_SUCCESS:
        draft.loading = false;
        draft.data = payload;
        break;
      case userAction.GET_USER_ERR:
        draft.loading = false;
        draft.data = payload;
        break;

      default:
        break;
    }
  });
export default users;
