import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/";
//const BASE_URL='https://resultados-loteria-manizales.onrender.com/api/v1/'
const BASE_URL = "http://localhost:8000/api/v1/";
//const BASE_URL='https://resultados-loteria-manizales.onrender.com/api/v1/'

export const getAllResultados = () => {
  return axios.get(`${BASE_URL}resultados/`);
};

export const getResultado = (id) => axios.get(`${BASE_URL}resultados/${id}`);

export const createResultado = (resultado) => {
  return axios.post(`${BASE_URL}resultados/`, resultado);
};

export const deleteResultado = (id) =>
  axios.delete(`${BASE_URL}resultados/${id}`);

export const updateResultado = (id, resultado) =>
  axios.put(`${BASE_URL}resultados/${id}`, resultado);
