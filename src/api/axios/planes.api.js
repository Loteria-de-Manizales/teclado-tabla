import axios from "axios"

//const BASE_URL='http://localhost:8000/api/v1/'
const BASE_URL='https://resultados-loteria-manizales.onrender.com/api/v1/'

export const getAllPlanes = () => {  
    return axios.get(`${BASE_URL}planes/`)
}

export const getPlan = (id) => axios.get(`${BASE_URL}planes/${id}`)

export const createPlan = (plan) => {
    return axios.post(`${BASE_URL}planes/`, plan)
}

export const deletePlan = (id) => axios.delete(`${BASE_URL}planes/${id}`)

export const updatePlan = (id, plan) => axios.put(`${BASE_URL}planes/${id}`, plan)