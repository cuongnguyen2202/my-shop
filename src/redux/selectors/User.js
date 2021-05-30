import { createSelector } from "reselect";

const getUser = (state) => state.users;
console.log(getUser);
export const userSelector = createSelector(getUser, (users) => users);
