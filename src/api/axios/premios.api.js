import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/";
//const BASE_URL = "https://resultados-loteria-manizales.onrender.com/api/v1/";

export const getAllPremios = () => {
  return axios.get(`${BASE_URL}premios/`);
};

export const getPremio = (id) => axios.get(`${BASE_URL}premios/${id}`);

export const searchPremio = (titulo) =>
  axios.get(`${BASE_URL}premios/?search=${titulo}`);

export const createPremio = (premio) => {
  return axios.post(`${BASE_URL}premios/`, premio);
};

export const deletePremio = (id) => axios.delete(`${BASE_URL}premios//${id}`);

export const updatePremio = (id, premio) =>
  axios.put(`${BASE_URL}premios/${id}`, premio);
