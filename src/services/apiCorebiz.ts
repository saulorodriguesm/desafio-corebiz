import axios from 'axios'

const apiCorebiz = axios.create({
  baseURL: 'https://fakestoreapi.com/'
})

export default apiCorebiz