import Post from "../models/Post.js";



/*
    Use this route to  Create a new post
*/
export const CreatePost = async(req,res)=>{
   
    try {
        const newPost = new Post({ 
            userId:req.body.userid,
            region:req.body.region,
            description:req.body.description,
            phone_number:req.body.phone_number,
            price:req.body.price,
            type:req.body.type,
            images:req.body.images
        })

        await newPost.save();
        res.status(200).json(newPost)

    } catch (error) {
        console.log(error)
    }
    
}

/*
    Use this Route to upadate a post
*/
export const UpdatePost = async(req,res)=>{
   
    try {
        const updatePost = await Post.findByIdAndUpdate(req.body.postid,
            {$set:
                {   type:req.body.type,
                    region:req.body.region,
                    phone_number:req.body.phone_number,
                    price:req.body.price,
                    description:req.body.description,
                    images:req.body.images  
            }
        },{new : true})
        res.status(200).json(updatePost)
    } catch (error) {
        res.status(200).json(error)
    }
}

/*
    Use this Route to delete a post
*/
export const  DeletePost = async(req,res)=>{
    try {
        const _id = req.params.postid;

        await Post.findByIdAndDelete(_id)
        res.status(200).json("Post Deleted !")
    } catch (error) {
        res.status(200).json(error)
    }
}

/*
    Use this Route to post by userid
*/
export const GetPostByUser = async(req,res)=>{
    try {
        const post=await Post.find({userId:req.params.userid})
        if(post.length === 0){
            res.status(404).json("no posts found for this user !");
        }else{
            res.status(200).json(post);
        }
       
    } catch (error) {
        res.status(500).json(error)
    }
}
/* 
    Use This route to found a post given the parameters
*/
export const findPost = async(req,res)=>{
    try {
        const query = req.query.param;
        const price = req.query.price
        const region = req.query.region;
        const type = req.query.type;

        const data = {
            query,
            price,
            region,
            type
        }

        const post = [];

        if(price && region && type){
            console.log(data)
        }else{
        post = await Post.find(
            {
                description:{$regex : query , $options :"i"},
                price:price,
                type:type,
                region:region
            })
        }
        if(post.length === 0){
            res.status(403).json("no posts found !");
        }
        else{
             res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


/* 
    Use This route to load a post given the id
*/
export const findPostbyId = async(req,res)=>{
    try {
        const post = await Post.find({_id:req.params.postid})
        if(post.length === 0){
            res.status(403).json("no posts found !");
        }
        else{
             res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

/*
    Use this Route to delete a post
*/
export const GetAllPost = async(req,res)=>{
    try {
        const post = await Post.find()
        if(post.length === 0){
            res.status(403).json("no posts found  !");
        }else{
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json(eror)
    }
}

export const Upload_File = (req , res)=> {
    
    try {
      console.log("done")
      return res.status(200).json("Files uploded successfully");
    } catch (error) {
      console.error(error);
    }
  };