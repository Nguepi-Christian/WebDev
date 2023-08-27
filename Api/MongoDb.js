import mongoose from 'mongoose';

const mongoConnection = () =>{
    try {
            mongoose.connect("mongodb+srv://gopepeter:azerty@free.rtxn2k4.mongodb.net/", {useNewUrlParser: true},()=>{
            console.log("Connected to mongoDB");
        })
    } catch (error) {
       console.log(error) 
    }
     
    
};

export default mongoConnection;

