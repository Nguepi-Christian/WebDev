import express from "express"
import multer from "multer"
import 
{
	CreatePost,
	UpdatePost,
	DeletePost,
	findPost,
	GetPostByUser,
	GetAllPost,
	findPostbyId,
	Upload_File
} from "../Controllers/PostController.js"
import { verify_token } from "../Extras/Security.js";
import {  IMG_LENGTH_SIZE, UPLOAD_POST_PHOTO} from "../Extras/Multer.Upload.images.js";

const router = express.Router();

//Create post
router.post("/create",verify_token ,UPLOAD_POST_PHOTO.array("file",IMG_LENGTH_SIZE),CreatePost);

//update post 
router.put("/update",verify_token,UPLOAD_POST_PHOTO.array("file",IMG_LENGTH_SIZE),UpdatePost);

//Delete post
router.delete("/delete/:postid",verify_token,DeletePost);

//get post
router.get ("/user/:userid",GetPostByUser);

//find post
router.get ("/find",findPost);
 
//find post
router.get ("/posts/:postid",findPostbyId);

router.get ("/all",GetAllPost);

//create post
//router.post("/file/upload", verify_token , UPLOAD.single("file",IMG_LENGTH_SIZE), Upload_File );
  
  
  
  
export default router;