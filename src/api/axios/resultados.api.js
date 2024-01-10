import axios from "axios"

// const apiURL = axios.create(
//     {
//         baseURL:'http://localhost:8000/api/v1/resultados/'
//     }
// )

export const getAllResultados = () => {
    return axios.get('http://localhost:8000/api/v1/resultados/')
    //return axios.get('/')
}

export const getResultado = (id) => axios.get(`http://localhost:8000/api/v1/resultados/${id}`)

export const createResultado = (resultado) => {
    return axios.post('http://localhost:8000/api/v1/resultados/', resultado)
}

export const deleteResultado = (id) => axios.delete(`http://localhost:8000/api/v1/resultados/${id}`)

export const updateResultado = (id, resultado) => axios.put(`http://localhost:8000/api/v1/resultados/${id}`, resultado)