import express from 'express';
import authroute from "./routes/auths.js"
import userroute from "./routes/users.js"
import postroute from "./routes/posts.js"
import {fileURLToPath} from 'url';
import cors from "cors"
import path from "path"
import {ConnectToMongoDB} from "./Extras/MongoDB.js"
import { RequestInfo } from './Extras/RequestInfo.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from "./swagger.json";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use(
  cors({
    origin:'*'
}))


//connect to DB
ConnectToMongoDB();

app.use(express.static('public'))
app.use(express.json());
app.use(RequestInfo);


app.use("/api/auth",authroute)
app.use("/api/user",userroute)
app.use("/api/post",postroute)
 




app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(8000,()=>{
    console.log(" - API Runnging on port 8000");
    //ApiDoc(app,8000)
})

