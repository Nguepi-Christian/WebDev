import mongoose from "mongoose";

const User=new mongoose.Schema({

    username:{
        type:String,
        require:true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    number:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:false
    },
    profile:{
        type:String,
        
    },


},{ timestamps: true }
)

export default mongoose.model("User",User);