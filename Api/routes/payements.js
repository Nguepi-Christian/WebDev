import express from "express";
var router = express.Router();

/* import Cours  from '../models/Cours.js'



//creer un cours
router.post("/create",async (req,res)=>{

    try{
    
        const cours = new Cours({
            code:req.body.code,
            intitule:req.body.intitule,
            filiere:req.body.filiere,
            specialite:req.body.specialite
        })

        await cours.save();
        res.status(200).json("Cours enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})


//update un cours
router.put("/update",async (req,res)=>{
   
    try{
        await Cours.findById(req.body.id).updateOne({$set : req.body})
        res.status(200).json("Cours mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un cours
router.post("/delete", async (req,res)=>{
    
    try{
        await Cours.findByIdAndDelete(req.body.id)
        res.status(200).json("Cours supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les cours
router.get("/all", async (req,res)=>{
    
    try{
        const cours = await Cours.find()
        res.status(200).json(cours);

    }catch(error){
        res.status(500).json(error);
  }
     
})

//un les cours
router.get("/one", async (req,res)=>{
    
    try{
        const cours = await Cours.find(req.body.intitule)
        res.status(200).json(cours);

    }catch(error){
        res.status(500).json(error);
  }
     
})
 */

export default router;