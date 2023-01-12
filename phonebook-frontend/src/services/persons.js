import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

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

const update = (id, previousPerson, newNumber) => {
    const request = axios.put(`${baseUrl}/${id}`, {...previousPerson, number: newNumber})
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

//eslint-disable-next-line
export default { getAll, create, update, remove };