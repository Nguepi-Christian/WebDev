
import mongoose from "mongoose";

const Planing = new mongoose.Schema({
    
    description:{
        type:String,
    },
    
    event:{
        type: String,
        require: false,
    },
    subject:{
        type:String
    },

     StartTime:{
        type:String
    },

     EndTime:{
        type:String
    },
    day:{
    	type : String
    },
    niveau : {
        type:String
    } ,
    faculte :{
        type : String
    },
    filiere : {
        type : String
    },
    semestre : {
        type : String
    }

},{ timestamps: true }
)

export default mongoose.model("Planing",Planing);