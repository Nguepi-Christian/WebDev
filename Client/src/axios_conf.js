import axios from 'axios'


//axios conf base url
const axio_api = axios.create({
    baseURL:'http://localhost:1000/api',
    timeout:10000,
    headers:{
        'Accept':'application/json'
    }
})

export default axio_api ; 