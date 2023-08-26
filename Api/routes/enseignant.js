import express from "express";
import Enseignant  from '../models/Enseignant.js'
import bcrypt from 'bcrypt'

var router = express.Router();

//creer un Enseignant
router.post("/create",async (req,res)=>{
  //console.log(req.body)
    try{
    
        const enseignant = new Enseignant({
          nom:req.body.nom,
          email:req.body.email,
          prenom:req.body.prenom,
          password:req.body.password,
          specialite:req.body.specialite,
          grade:req.body.grade,
          cours:[]
        })

        await enseignant.save();
        res.status(200).json("Enseignant enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})


//update un Enseignant
router.put("/update",async (req,res)=>{
    
    try{
        await Enseignant.findByIdAndUpdate(req.body.id,{$set : req.body})
        res.status(200).json("Enseignant mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un Enseignant
router.post("/delete", async (req,res)=>{
    
    try{
        await Enseignant.findByIdAndDelete(req.body.id)
        res.status(200).json("Enseignant supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les Enseignant
router.get("/all", async (req,res)=>{
    
    try{
        const enseignant = await Enseignant.find()
        res.status(200).json(enseignant);

    }catch(error){
        res.status(500).json(error);
  }
     
})

//un les Enseignant
router.post("/one", async (req,res)=>{
    
    try{
        const Enseignant = await Enseignant.find(req.body.nom)
        res.status(200).json(Enseignant);

    }catch(error){
        res.status(500).json(error);
  }
     
})


// Register
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //find  user
    const user = await Enseignant.find({email : req.body.email});
    
   
    if(user.length==1){
      res.status(200).json("user exist");
    }else{
          const enseignant = new Enseignant({
              nom:req.body.nom,
              email:req.body.email,
              prenom:req.body.prenom,
              password:hashedPassword,
              specialite:req.body.specialite,
              grade:req.body.grade,
              cours:[]
          }); 
    
      await enseignant.save();
       //save user and respond
      res.status(200).json("enseignant ajouter");
    }

  } catch (err) {
    res.status(500).json(err)
  }
});



//login
router.post("/login", async(req, res)=>{
 
  if(req.body.password && req.body.email){
      try {
          const pwd = req.body.password;

          const findUser = await Enseignant.findOne({email:req.body.email});

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