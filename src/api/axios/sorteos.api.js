import axios from "axios"

export const getAllSorteos = () => {
    return axios.get('https://resultados-loteria-manizales.onrender.com/api/v1/sorteos/')
}

export const getSorteo = (id) => axios.get(`https://resultados-loteria-manizales.onrender.com/api/v1/sorteos/${id}`)

export const createSorteo = (sorteo) => {
    return axios.post('https://resultados-loteria-manizales.onrender.com/api/v1/sorteos/', sorteo)
}

export const deleteSorteo = (id) => axios.delete(`https://resultados-loteria-manizales.onrender.com/api/v1/sorteos/${id}`)

export const updateSorteo = (id, sorteo) => axios.put(`https://resultados-loteria-manizales.onrender.com/api/v1/sorteos/${id}`, sorteo)