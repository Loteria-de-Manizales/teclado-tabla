import axios from "axios"

// const apiURL = axios.create(
//     {
//         baseURL:'http://localhost:8000/api/v1/resultados/'
//     }
// )

export const getAllResultados = () => {
    return axios.get('https://resultados-loteria-manizales.onrender.com/api/v1/resultados/')
    //return axios.get('/')
}

export const getResultado = (id) => axios.get(`https://resultados-loteria-manizales.onrender.com/api/v1/resultados/${id}`)

export const createResultado = (resultado) => {
    return axios.post('https://resultados-loteria-manizales.onrender.com/api/v1/resultados/', resultado)
}

export const deleteResultado = (id) => axios.delete(`https://resultados-loteria-manizales.onrender.com/api/v1/resultados/${id}`)

export const updateResultado = (id, resultado) => axios.put(`https://resultados-loteria-manizales.onrender.com/api/v1/resultados/${id}`, resultado)