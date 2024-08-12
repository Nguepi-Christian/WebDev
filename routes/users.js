import express from "express"
import { UpdateUser } from "../Controllers/UserController.js";
import { verify_token } from "../Extras/Security.js";

const router = express.Router()

//Update
router.put("/update", verify_token , UpdateUser);


export default router; 