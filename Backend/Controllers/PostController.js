import Post from "../models/Post.js";

/*
    Use this route to  Create a new post
*/
export const CreatePost = async(req,res)=>{
    
    try {
        
        if(req.files.length > 0){

            var img = []
            const filelist = req.files;

            filelist.map( i => (
                img.push(i.filename)
            ));
    
            const newPost = new Post({ 
                userId:req.body.userid,
                region:req.body.region,
                description:req.body.description,
                phone_number:req.body.phone_number,
                price:req.body.price,
                type:req.body.type,
                images : img 
            })
            
            await newPost.save();
            res.status(201).json(newPost)
        }else{
            res.status(400).json(" You most provide images ")
        }

    } catch (error) {
        console.log(error)
    }
    
}

/*
    Use this Route to upadate a post
*/
export const UpdatePost = async(req,res)=>{
   
    try {
        if(req.files.length > 0){
            var img = []
            const filelist = req.files;

            filelist.map( i => (
                img.push(i.filename)
            )); 

            req.body.images = img ;
        }
        
        const updatedPost = await Post.findByIdAndUpdate(req.body.postid,
            {
                $set:
                {   type:req.body.type,
                    region:req.body.region,
                    phone_number:req.body.phone_number,
                    price:req.body.price,
                    description:req.body.description,
                    images:req.body.images  
            }
        },
            {new : true}
        ) 

        res.status(201).json(updatedPost)
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
/* 
        const query = req.query.query ;
        const price = req.query.price ;
        const region = req.query.region ;
        const type = req.query.type ; */
        const { query , priceMin, priceMax , region, type } = req.query;

        const params = {}

        if(query){
            params.description = new RegExp(query,"i");
        }
        if(region){
            params.region = new RegExp(region,"i");
        }
        if(type){
            params.type = new RegExp(type,"i");
        }
        if(priceMin && priceMax){
            params.price = {$gte : priceMin  , $lte : priceMax} 
        }
        if(priceMin){
            params.price = {$gte : priceMin} 
        } 
        if(priceMax){
            params.price = {$lte : priceMin} 
        } 
         
        //http://localhost:8000/api/post/findpost?query=Dype&price=3000&region=ty&type=modern
        
        const post = await Post.find(params);


        console.log(post)
        if(post.length === 0){
            res.status(404).json("no posts found !");
        }
        else{
            //Search our 


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

        const start = req.query.start || 0;
       // const end = req.query.end || 10;
        const limit = req.query.limit || 10;


        const post = await Post.find()
        .limit(limit)
        .skip(start)

        if(post.length === 0){
            res.status(403).json("no posts found  !");
        }else{
            res.status(200).json(post);
        }
    } catch (error) {
        res.status(500).json(eror)
    }
}

/* get random posts */
export const GetRandomPost = async (req, res) => {
  try {
    const size = parseInt(req.query.size) || 10;
    console.log(size)
    const post = await Post.aggregate([{ $sample: { size: size } }]);

    if (post.length === 0) {
      res.status(404).json("no posts found  !");
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export const Upload_File = (req , res)=> {
    try {
      return res.status(200).json("Files uploded successfully");
    } catch (error) {
      console.error(error);
    }
};


