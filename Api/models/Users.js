import mongoose from "mongoose";

const Users = new mongoose.Schema({

    username:{
        type:String,
        require:true,
    },
    password: {
        type: String,
        required: true,
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    courses:{
        type:Array
    },
    
},{ timestamps: true }
)

export default mongoose.model("Users",Users);