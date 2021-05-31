import axiosClient from "../modules/core/axiosClient";
const apiURL = "https://60ac62539e2d6b001745711d.mockapi.io/myshop/users";

const registerAPI = {
  async add(data) {
    const url = apiURL;
    const { fullname, email, password } = data;
    return axiosClient.post(url, { fullname, email, password });
  },
};
export default registerAPI;
