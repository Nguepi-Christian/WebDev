import mongoose from 'mongoose';

//User Schema
const PostSchema=new mongoose.Schema({
     userId:{
        type:String,
        require:true,
     },
     region:{
      type: String,
      require : true,
     },
     phone_number:{
      type:String,
      require : true
     },
     price:{
      type:Number,
      require : true
     },
     description:{
      type:String,
      require : true
     },
     type:{
      type:String , 
      require : true 
     },
     images:{
      type:[String],
      default:[]
     },
},
{timestamps:true}
);

export default mongoose.model("Post",PostSchema);