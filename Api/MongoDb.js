import mongoose from 'mongoose';

const mongoConnection = () =>{
     mongoose.connect("mongodb+srv://gopepeter:9876543210Aa@free.rtxn2k4.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true},()=>{
     console.log("Connected to mongoDB");
    })
};

export default mongoConnection;

