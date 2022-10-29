import axios from "axios";

export const api = axios.create({
  baseURL: "https://busca-cep.onrender.com",
});

export const getAddress = async (cep) => {
  return api.post(`/address`, {cep});
};