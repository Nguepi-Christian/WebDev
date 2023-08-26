import mongoose from "mongoose";

const Enseignant = new mongoose.Schema({
    
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
    specialite:{
        type:String
    },
    grade:{
        type:String
    },
    cours:{
        type:Array,
    },

},{ timestamps: true }
)

export default mongoose.model("Enseignant",Enseignant);