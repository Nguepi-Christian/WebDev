import axios from "axios"
export const Server_img = "http://localhost:8000/images/"
export const LocalServer = 'http://localhost:1000/api'
export const OnlineServer = 'https://api-32mk.onrender.com/api'
export const paypal_client_key = "AW671_f_kbI3ow8HmLzw00GXGttKLmk5gdY0WfnV0HyPCCKGoZc9jm5rsaSgvmqG43AGiHncYjPOm61q"

const online = true;

//end point configuration
export const api = axios.create({
    baseURL: online ? OnlineServer : LocalServer ,
    timeout:10000,
    headers:{
        'Accept':'application/json'
    }
})
