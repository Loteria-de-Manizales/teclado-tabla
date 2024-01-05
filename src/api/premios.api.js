import axios from "axios"

export const getAllPremios = () => {
    return axios.get('http://localhost:8000/sorteos/api/v1/premios/')
}