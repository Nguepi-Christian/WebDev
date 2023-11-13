import multer from "multer";

/************* POSTS PHOTO STORAGE  **************/
const PostImagesStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
		
      cb(null, Date.now() +"_post_p_"+ file.originalname);
    },
});

/************* PROFILE PHOTO STORAGE  **************/
const ProfilePhotoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/profiles");
  },
  filename: (req, file, cb) => {
  
    cb(null, Date.now() +"_profile_f_"+ file.originalname);
  },
});

export const UPLOAD_POST_PHOTO = multer({ storage: PostImagesStorage });
export const UPLOAD_PROFILE_PHOTO = multer({ storage: ProfilePhotoStorage });
export const IMG_LENGTH_SIZE = 8;
/***********************************************/

