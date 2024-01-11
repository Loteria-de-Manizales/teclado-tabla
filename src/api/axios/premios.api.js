import axios from "axios"

export const getAllPremios = () => {
    return axios.get('https://resultados-loteria-manizales.onrender.com/api/v1/premios/')
}

export const getPremio = (id) => axios.get(`https://resultados-loteria-manizales.onrender.com/api/v1/premios/${id}`)

export const createPremio = (premio) => {
    return axios.post('https://resultados-loteria-manizales.onrender.com/api/v1/premios/', premio)
}

export const deletePremio = (id) => axios.delete(`https://resultados-loteria-manizales.onrender.com/api/v1/premios/${id}`)

export const updatePremio = (id, premio) => axios.put(`https://resultados-loteria-manizales.onrender.com/api/v1/premios/${id}`, premio)