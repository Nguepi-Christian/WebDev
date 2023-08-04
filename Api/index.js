import express from "express";
import helmet from "helmet"
import morgan from "morgan"; 
import cors from 'cors'
import mongoConnection from './MongoDb.js'
import courses from "./routes/courses.js"
import users from "./routes/users.js"
import payements from './routes/payements.js'
import multer from 'multer'

/* Setting up mongodb connection */
mongoConnection()

/* Create server */
const app = express();

//alow all origin
app.use(
    cors({
      origin:'*'
  }))

/* Storage path */
app.use(express.static('public'))

/* Upload image */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.originalName);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    console.log("done")
    return res.status(200).json("Files uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
/* end */

/* Setting middlewares */
app.use(express.static('public'))
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/courses",courses)
app.use("/api/users",users)
app.use("/api/payements",payements)


app.listen(1000,()=>{
    console.log("-----> Udefree.io back - end is runing on port 1000")
})



