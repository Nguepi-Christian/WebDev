import express from "express";
import Salles  from '../models/Salles.js'

var router = express.Router();

//creer un salle
router.post("/create",async (req,res)=>{
    
    try{
    
        const salle = new Salles({
          nom:req.body.nom,
          capacite:req.body.capacite,
          faculte:req.body.faculte,
        })

        await salle.save();
        res.status(200).json("salle enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})


//update un salle
router.put("/update",async (req,res)=>{
    
    try{
     // console.log(req.body)
       const u = await Salles.find({_id : req.body.id}).update({$set : req.body})
      // u.update({set : req.body})
       console.log(u) 
       res.status(200).json("salle mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un salle
router.post("/delete", async (req,res)=>{
    
    try{
        await Salles.findByIdAndDelete(req.body.id)
        res.status(200).json("salle supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les salle
router.get("/all", async (req,res)=>{
    
    try{
        const salle = await Salles.find()
        res.status(200).json(salle);

    }catch(error){
        res.status(500).json(error);
  }
     
})

//un les salle
router.post("/one", async (req,res)=>{
    
    try{
        const salle = await salle.find(req.body.intitule)
        res.status(200).json(salle);

    }catch(error){
        res.status(500).json(error);
  }
     
})


export default router;