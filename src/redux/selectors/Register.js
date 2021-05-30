import { createSelector } from "reselect";

const getRegister = (state) => state.register;
console.log(getRegister);
export const registerSelector = createSelector(
  getRegister,
  (register) => register
);
