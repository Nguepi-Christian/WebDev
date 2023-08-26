import axios from "axios"

const axio_api = axios.create({
    baseURL:'http://localhost:1000/api',
    timeout:5000,
    headers:{
        'Accept':'application/json'
    }
})

export const LoginCall = async (userCredential,dispatch) =>{
    dispatch({
        type:"LOGIN_START",
    })
    try {
        const res = await axio_api.post("/admin/login",userCredential)
        dispatch({
            type:"LOGIN_SUCCESS", 
            payload : res.data 
        })
    } 
    catch (err) {
        dispatch({
            type:"LOGIN_FAILURE", 
            payload : err
        }) 
    }
}


export const RegisterApi = async (userCredential)=>{
    try {
        const res = axio_api.post("/auth/register",userCredential)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
} 

export const UploadProfileImge = async (data)=>{
    try {
        const res = await axio_api.post("/upload",data)
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

//upload post images 
export const postImages =async (data) =>{
    try {
        await axio_api.post("/upload",data);
    } catch (error ) {
        console.log(error)
    }
} 
// upload post 
export const Post =async (postdata) =>{
    try {
        await axio_api.post("/post/create",postdata);
    } catch (error ) {
        console.log(error)
    }
} 

// loadt all posts 
 export const Posts = async () =>{
    try {
       const posts = await axio_api.get("post/posts/all")
       return posts.data
    } catch (error) {
        console.log(error)
    }
 }
 
//show details
 export const getPostsDetails = async (id) =>{
    try {
       const post = await axio_api.get("post/get/"+id)
       return post.data
    } catch (error) {
        console.log(error)
    }
 }

//get post by  userId
 export const GetUserPost = async (id) =>{
    try {
       const post = await axio_api.get("post/postbyuser/"+id)
       return post.data
    } catch (error) {
        console.log(error)
    }
 }

 //get post by  userId
 export const findpost = async (expression,dispatch,user) =>{
    try {
       const post = await axio_api.get("post/findPost/"+expression)
       dispatch({
          type:"SEARCH",
          results : post,
          user : user
       })

       //return post.data
    } catch (error) {
        console.log(error)
    }
 }



