import mongoose from 'mongoose';
const {Schema}=mongoose;

//User Schema
const UserSchema=new mongoose.Schema({
     username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:false
     },
     email:{
        type:String,
        require:true,
        max:50,
        unique:true
     },
     password:{
        type:String,
        require:true,
        min:6
     },
     profilePicture:{
        type:String,
        default:"cover.png"
     },
},
{timestamps:true}
);

export default mongoose.model("User",UserSchema) 