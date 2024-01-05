import axios from "axios"

export const getAllResultados = () => {
    return axios.get('http://localhost:8000/sorteos/api/v1/resultados/')
}