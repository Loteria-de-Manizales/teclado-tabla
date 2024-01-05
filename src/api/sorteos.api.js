import axios from "axios"

export const getAllSorteos = () => {
    return axios.get('http://localhost:8000/sorteos/api/v1/sorteos/')
}