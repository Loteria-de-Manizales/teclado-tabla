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

export const createResultado = (resultado) => {
    return axios.post('http://localhost:8000/api/v1/resultados/', resultado)
}