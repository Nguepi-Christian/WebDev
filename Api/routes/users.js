import Users from '../models/Users.js'
import express from "express"
import bcrypt from 'bcrypt'

var router = express.Router();

//register
router.post("/register", async (req, res) => {
    try {
      
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
      //find  user
      const user = await Users.find({email : req.body.email});
      
     
      if(user.length==1){
        res.status(403).json("user exist");
      }else{
            const user = new Users({
                username:req.body.username,
                number:req.body.number,
                email:req.body.email,
                password:hashedPassword,
                courses:[]
            }); 
      
        await user.save();
         //save user and respond
        res.status(200).json("Your have been created");
      }

    } catch (err) {
      res.status(500).json(err)
    }
  });
  

  router.post("/add", async (req,res)=>{

      try {
        const user = await Users.findById(req.body.userId);

        await user.updateOne({ $push: { courses : req.body.course } });
     
        res.status(200).json("course added")
      } catch (error) {
        res.status(500).json(error)
      }

  })


  //login
  router.post("/login", async(req, res)=>{
   
    try {
        const user = await Users.findOne({ email: req.body.email });
        const validPassword = await bcrypt.compare(req.body.password, user.password)
       
        if(validPassword){
            const {password , ... other } = user._doc
            res.status(200).json(other)
        }else{
            res.status(403).json(" email or password incorrect !")
        }
        
      } catch (err) {
        res.status(500).json(err)
      } 
});


  
export default router;