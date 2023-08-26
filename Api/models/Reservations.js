import mongoose from "mongoose";

const Reservations = new mongoose.Schema({
    
    salle : { type : String} ,
    hd : {type :String } ,
    hf :{type : String} ,
    desc : {type : String } ,
    cours : {type : String } ,
    enseignant : {type : String } ,
    niveau : {type : String } ,
    faculte : { type :String } ,
    filiere : {type:String} ,
    semestre : {type : String}
    

},{ timestamps: true }
)

export default mongoose.model("Reservations",Reservations);