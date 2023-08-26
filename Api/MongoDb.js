import mongoose from 'mongoose';

const mongoConnection = () =>{
     mongoose.connect("mongodb://127.0.0.1:27017/wahtsapp", {useNewUrlParser: true},()=>{
     console.log("Connected to mongoDB");
    })
};

export default mongoConnection;

