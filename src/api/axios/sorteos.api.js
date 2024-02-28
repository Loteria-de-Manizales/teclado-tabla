import axios from "axios"

//const BASE_URL='http://localhost:8000/api/v1/'
const BASE_URL='https://resultados-loteria-manizales.onrender.com/api/v1/'

export const getAllSorteos = () => {
    return axios.get(`${BASE_URL}sorteos/`)
}

export const getSorteo = (id) => axios.get(`${BASE_URL}sorteos/${id}`)

export const createSorteo = (sorteo) => {
    return axios.post(`${BASE_URL}sorteos/`, sorteo)
}

export const deleteSorteo = (id) => axios.delete(`${BASE_URL}sorteos/${id}`)

export const updateSorteo = (id, sorteo) => axios.put(`${BASE_URL}sorteos/${id}`, sorteo)