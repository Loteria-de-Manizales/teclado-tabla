import axios from "axios"

export const getAllSorteos = () => {
    return axios.get('http://localhost:8000/api/v1/sorteos/')
}