import mongoose from "mongoose";

const Timetable = new mongoose.Schema({

    filiere : {
        type : String ,
        require : true,
    },

    niveau : {
        type : String ,
        require : true,
    },
    
    faculte : {
        type : String ,
        require : true,
    },

    specialite : {
        type : String ,
        require : true,
    },

    semestre : {
        type : String ,
        require : true,
    },

    data : {
        type : Array ,
        require : true,
    }

},{ timestamps: true }
)

export default mongoose.model("Timetable",Timetable);