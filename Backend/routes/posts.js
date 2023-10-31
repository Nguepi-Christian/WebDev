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

/***********************************************/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });
/***********************************************/

const router = express.Router();


router.post("/create", verify_token ,CreatePost);

//update post 
router.put("/update",verify_token,UpdatePost);

//Delete post
router.delete("/delete/:postid",verify_token,DeletePost);

//get post
router.get ("/postbyuser/:userid",GetPostByUser);

//find post
router.get ("/findpost",findPost);

//find post
router.get ("/get/:postid",findPostbyId);

router.get ("/posts/all",GetAllPost);

//create post
router.post("/file/upload", verify_token ,upload.single("file"), Upload_File );
  
  
  
  
export default router;