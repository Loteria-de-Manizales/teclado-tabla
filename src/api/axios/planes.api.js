import axios from "axios"

export const getAllPlanes = () => {
    //('http://localhost:8000/api/v1/planes/')
    return axios.get('https://resultados-loteria-manizales.onrender.com/api/v1/planes/')
}

export const getPlan = (id) => axios.get(`https://resultados-loteria-manizales.onrender.com/api/v1/planes/${id}`)

export const createPlan = (plan) => {
    return axios.post('https://resultados-loteria-manizales.onrender.com/api/v1/planes/', plan)
}

export const deletePlan = (id) => axios.delete(`https://resultados-loteria-manizales.onrender.com/api/v1/planes/${id}`)

export const updatePlan = (id, plan) => axios.put(`https://resultados-loteria-manizales.onrender.com/api/v1/planes/${id}`, plan)