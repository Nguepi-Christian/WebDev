import axios from "axios"
export const Server_img = "http://localhost:8000/images/"
export const LocalServer = 'http://localhost:1000/api'
export const OnlineServer = 'https://api-32mk.onrender.com/api'
export const paypal_client_key = "AUo14rE30g25vgkjtUfXBzLWSvJywSXpTrUDOp9s4nR7yYHtTp7I0EtqgGob6XU-jp5PUzTwJ6kkO8MF"

const online = true;

//end point configuration
export const api = axios.create({
    baseURL: online ? OnlineServer : LocalServer ,
    timeout:10000,
    headers:{
        'Accept':'application/json'
    }
})
