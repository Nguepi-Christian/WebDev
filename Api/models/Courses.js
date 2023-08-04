import mongoose from "mongoose";

const Course = new mongoose.Schema({

    name : {
        type : String ,
        require : true,
    },

    langage : {
        type : String
    },

    category : {
        type : String ,
    },
    
    image : {
        type : String ,
    },

    description : {
        type : String ,
    },

    students : {
        type : Number ,
    },

    creator : {
        type : String ,
    },

    actual_price : {
        type : Number ,
    },

    what_you_will_learn : {
        type : Array ,  
    },

    part : {
        type : Array
    }
    
      

},{ timestamps: true }
)

export default mongoose.model("Course",Course);