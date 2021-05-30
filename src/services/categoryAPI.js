import axiosClient from "../modules/core/axiosClient";

const categoryAPI = {
  getAll(params) {
    const url = "/category";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/category";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/category";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryAPI;
