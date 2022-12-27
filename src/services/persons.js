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

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`, {})
    return request.then(response => response.data)
}

export default { getAll, create, remove};