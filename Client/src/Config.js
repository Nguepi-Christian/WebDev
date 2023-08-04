import axios from "axios"
export const Server_img = "http://localhost:8000/images/"
export const Server = 'http://localhost:1000/api'

//end point configuration
export const api = axios.create({
    baseURL: Server,
    timeout:5000,
    headers:{
        'Accept':'application/json'
    }
})