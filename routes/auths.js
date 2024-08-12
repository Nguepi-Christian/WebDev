import express from "express"
const router = express.Router()
import {Register,Login} from "../Controllers/AuthController.js"
import { UPLOAD_PROFILE_PHOTO } from "../Extras/Multer.Upload.images.js";


//Register
router.post("/register",UPLOAD_PROFILE_PHOTO.single("images"),Register);
//Login
router.post("/login",Login);


export default router; 