import mongoose from 'mongoose';
const {Schema}=mongoose;

//User Schema
const UserSchema=new mongoose.Schema({
     firstname:{
        type:String,
        require:true,
        unique:false
     },
     lastname:{
      type:String,
      require:true,
      unique:false
     },
     email:{
        type:String,
        require:true,
        unique:true
     },
     password:{
        type:String,
        require:true,
     },
     phone:{
      type:Number,
      require:true,
     },
     profilePicture:{
        type:String,
        default:"noAvatar.png"
     },
},
{timestamps:true}
);

export default mongoose.model("User",UserSchema) 