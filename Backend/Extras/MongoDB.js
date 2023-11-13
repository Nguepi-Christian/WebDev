import mongoose from "mongoose"

const DB_name = "immo"
const URL = "mongodb+srv://gopepeter:azerty@free.rtxn2k4.mongodb.net/"
const FullUrl = URL + DB_name

export const ConnectToMongoDB = () => {
    try {
        mongoose.connect(FullUrl , {useNewUrlParser: true}).then(()=>{
            console.log(" - Connected To "+DB_name);
        })
    } catch (error) {
        console.log("Error :"+error);
    }
} 

/* Use this function to stop a connection to your database */
export const StopConnection = () =>{
    mongoose.disconnect().then(()=>console.log(" - Disconnected to DB !"))
}
