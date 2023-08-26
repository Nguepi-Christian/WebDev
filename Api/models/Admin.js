import mongoose from "mongoose";

const Admin = new mongoose.Schema({
    
    nom:{
        type:String,
    },
    email:{
        type : String ,
        require : true ,
    },
    password:{
        type : String,
        require : true,
    },
    prenom:{
        type:String,
        require:false,
    },

},{ timestamps: true }
)

export default mongoose.model("Admin",Admin);