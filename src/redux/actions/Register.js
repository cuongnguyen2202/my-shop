export const registerAction = Object.freeze({
  // phần lấy về danh sách
  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERR: "REGISTER_ERR",
});

const register = (data) => ({
  type: registerAction.REGISTER,
  payload: data,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
};
