import User from "../models/User.js";
import bcrypt  from "bcrypt";
import { CreateToken } from "../Extras/Security.js";

export const Register = async (req,res)=>{
   try {

    const findUser = await User.findOne({email:req.body.email});

        if(!findUser){
            const salt=bcrypt.genSaltSync(10)
            const hashpwd = bcrypt.hashSync(req.body.password , salt)

            const newUser= new User({
                    username:req.body.username,
                    password:hashpwd,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture
            });

            await newUser.save();
            res.status(200).json("user created !");
        }else{
            res.status(401).json("e-mail exist ...")
        }
    
   } catch (error) {
    res.status(500).json("internal error or invalid request params .try again whit another data")
   }
}
  
 export const Login = async(req, res)=>{
   
    if(req.body.password && req.body.email){
        try {
            const pwd = req.body.password;

            const findUser=await User.findOne({email:req.body.email});
            
            if(!findUser){
                res.status(404).json("user not found")
            } else{
                const ispwd  =await bcrypt.compare(pwd , findUser.password)

                if(!ispwd){
                    res.status(400).json("wrong password or email!")
                }  
                else{
                    
                    const {password,...others} = findUser._doc
                    const token = CreateToken(findUser._doc);

                    res.cookie("access_token",token).status(200).json({...others , token})
                    
                }
            } 
        } catch (error) {
            console.log(error)
        }
    } 
    else{
        res.status(403).json("invalid request !")
    }
}

