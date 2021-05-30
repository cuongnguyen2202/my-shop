export const userAction = Object.freeze({
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_ERR: "GET_USER_ERR",
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
});
const getUser = () => ({
  type: userAction.GET_USER,
  payload: {},
});

const login = (data) => ({
  type: userAction.LOGIN,
  payload: data,
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser,
  login,
};
