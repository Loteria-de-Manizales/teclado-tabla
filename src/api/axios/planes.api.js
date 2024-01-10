import axios from "axios"

export const getAllPlanes = () => {
    return axios.get('http://localhost:8000/api/v1/planes/')
}