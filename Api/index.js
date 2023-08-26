import express from "express";
import helmet from "helmet"
import morgan from "morgan"; 
import enseignant from "./routes/enseignant.js"
import cours from "./routes/cours.js"
import salles from "./routes/salle.js"
import admin from "./routes/admin.js"
import timetable from "./routes/timetable.js"
import planing from './routes/planing.js'
import reservation from './routes/reservations.js'
import mongoose from 'mongoose';
import cors from 'cors'

/* Setting up mongodb connection */
mongoose.connect("mongodb://127.0.0.1:27017/time", {useNewUrlParser: true},()=>{
     console.log("Connected to mongoDB");
})

const app = express();
//alow all origin
app.use(
    cors({
      origin:'*'
  }))
  
app.use(express.static('public'))
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/cours",cours)
app.use("/api/salles",salles)
app.use("/api/enseignant",enseignant)
app.use("/api/admin",admin)
app.use("/api/timetable",timetable)
app.use("/api/planing",planing)
app.use("/api/reservation" ,reservation)




app.listen(1000,()=>{
    console.log("-----> Timetable back - end is runing on port 1000")
})



