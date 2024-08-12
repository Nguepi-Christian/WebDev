import jwt from "jsonwebtoken"

const JWT_SECT_KEY = "kdfogiherhgdfdfbhfgbdfgdfg"

//create token
export const CreateToken = ( payload) =>{

    return jwt.sign(
        {
            email : payload.email ,
            username : payload.username,
            id : payload._id
        },
        JWT_SECT_KEY,
        {expiresIn : "2d"}
        )
}

//verify token
export const verify_token  = (req , res , next) =>{

    const auth_token = req.headers.auth_token;

    if(auth_token){

        jwt.verify(auth_token , JWT_SECT_KEY,(err , payload) =>{
            if(err) res.status(403).json(" authorization requiere!")

            req.user = payload ;
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated!")
    }
}


//Authorize actions 

/*const Authorize_Actions = (req ,res,next)=>{
    verify_token(req , res ,()=>{
        if (req.user.id === req.body.id ) {
            next();
          } else {
            res.status(403).json("You are not alowed to do that!");
          }
    })
}*/


const verify_creentials = (email , password) =>{

    //check the input
    //validate the input

}

const ClearImagesFilesAfterUpdate = (images) => {

    //read the [images] 
    //Scan folder and delete that file
}