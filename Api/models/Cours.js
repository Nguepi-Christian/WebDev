import mongoose from "mongoose";


const Cours = new mongoose.Schema({
    
    code:{
        type:String,
        require:true,
    },
    
    intitule:{
        type:String,
        require:false
    },

    filiere:{
        type:String,
        require:false
    },

    specialite:{
        type:String,
        require:true,
    },
},
{ 
    timestamps: true }
)

export default mongoose.model("Cours",Cours);