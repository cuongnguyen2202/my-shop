import axiosClient from "../modules/core/axiosClient";
const apiURL = "https://60ac62539e2d6b001745711d.mockapi.io/myshop/users";
const usersAPI = {
  async getAll(params) {
    const url = apiURL;
    return await axiosClient.get(url, { params });
  },
};
export default usersAPI;
