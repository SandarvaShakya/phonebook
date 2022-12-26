import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    const data = request.then(response => response.data)
    return data
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    const data = request.then(response => response.data)
    return data
}

export default { getAll, create};