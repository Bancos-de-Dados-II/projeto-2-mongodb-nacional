import axios from 'axios'


const apiUrl= 'http://localhost/1010/map' //endpoint de mapa

const axiosApi= axios.create({
    baseURL:apiUrl
})

export default axiosApi;