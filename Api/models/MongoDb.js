import mongoose from 'mongoose';

const mongoConnection = () =>{
    try {
            mongoose.connect("mongodb://127.0.0.1:27017/wahtsapp", {useNewUrlParser: true},()=>{
            console.log("Connected to mongoDB");
        })
    } catch (error) {
       console.log(error) 
    }
     
    
};

export default mongoConnection;

