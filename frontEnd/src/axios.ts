import axios from 'axios'


const apiUrl= 'http://localhost/1010/map'

const axiosApi= axios.create({
    baseURL:apiUrl
})

export default axiosApi;