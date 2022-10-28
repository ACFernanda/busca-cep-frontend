import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getAddress = async (cep) => {
  return api.post(`/address`, {cep});
};