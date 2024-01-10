import axios from "axios"

export const getAllPremios = () => {
    return axios.get('http://localhost:8000/api/v1/premios/')
}