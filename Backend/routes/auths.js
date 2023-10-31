import express from "express"
const router = express.Router()
import {Register,Login} from "../Controllers/AuthController.js"


//Register
router.post("/register",Register);
//Login
router.post("/login",Login);


export default router; 