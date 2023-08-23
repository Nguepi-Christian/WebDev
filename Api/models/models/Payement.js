import mongoose from "mongoose";

const Payement = new mongoose.Schema({
    
    coursename:{
        type:String,
    },
    
    price:{
        type: String,
        require: false,
    },

    author:{
        type:String
    },
    userid : {
        type : String
    },
},
{ timestamps: true }
)

export default mongoose.model("Payement",Payement);