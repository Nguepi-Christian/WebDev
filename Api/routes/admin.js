import express from "express";
import Admin  from '../models/Admin.js'
import bcrypt from 'bcrypt'

var router = express.Router();

//register
router.post("/register", async (req, res) => {
    try {
        console.log(req.body)
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //find  user
      const user = await Admin.find({email : req.body.email});
      
     
      if(user.length==1){
        res.status(200).json("user exist");
      }else{
            const admin = new Admin({
                nom:req.body.nom,
                email:req.body.email,
                prenom:req.body.prenom,
                password:hashedPassword,
            }); 
      
        await admin.save();
         //save user and respond
        res.status(200).json(user);
      }

    } catch (err) {
      res.status(500).json(err)
    }
  });
  
  //login
  router.post("/login", async(req, res)=>{
   

    console.log(req.body)
    if(req.body.password && req.body.email){
        try {
            
            const pwd = req.body.password;

            const findUser = await Admin.findOne({email:req.body.email});

            if(!findUser){
                res.status(404).json("user not found")
            } else{
                const ispwd = await bcrypt.compare(pwd,findUser.password)
              
                if(!ispwd){
                    res.status(400).json("wrong password !")
                }  
                else{
                    const {password,...neededdata} = findUser._doc;
                    res.status(200).json(neededdata)
                }
            } 
        } catch (error) {
            console.log(error)
        }
    } 
    else{
        res.status(403).json("invalid request !")
    }
});


export default router;