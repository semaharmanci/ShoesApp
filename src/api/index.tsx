import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/",
});
export default api;

export const getShoes = (paramsStr: string) =>
  api.get(paramsStr? `/shoes${paramsStr}` : "/shoes").then((res) => res.data);

  export const getShoe = (id: string) =>
  api.get(`/shoes/${id}`).then((res) => res.data);
