import mongoose from "mongoose";

const Salles = new mongoose.Schema({
    
    nom:{
        type:String,
    },
    
    capacite:{
        type: String,
        require: false,
    },
    faculte:{
        type:String
    },
    

},{ timestamps: true }
)

export default mongoose.model("Salles",Salles);