import express from "express";
import Timetable  from '../models/TimeTable.js'

var router = express.Router();

//creer un Timetable
router.post("/create",async (req,res)=>{
    
    try{
 
        const timetable = new Timetable({
          filiere : req.body.filiere ,
      	  niveau : req.body.niveau ,
      	  faculte : req.body.faculte ,
      	  specialite : req.body.specialite ,
      	  semestre  : req.body.semestre ,
      	  data : req.body.data,
        })

        await timetable.save();
        res.status(200).json("Timetable enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})


//update un Timetable
router.put("/update",async (req,res)=>{
    
    try{
    
        await Timetable.findByIdAndUpdate(req.body.id,{$set : req.body})
        res.status(200).json("Timetable mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un Timetable
router.post("/delete", async (req,res)=>{
    
    try{
      console.log(req.body.id)
        await Timetable.findByIdAndDelete(req.body.id)
        res.status(200).json("Timetable supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les Timetable
router.get("/all", async (req,res)=>{
    
    try{
        const timetable = await Timetable.find()
        res.status(200).json(timetable);

    }catch(error){
        res.status(500).json(error);
  }
     
})

//un les Timetable
router.post("/one", async (req,res)=>{
    
    try{
     //console.log(req.body._id.id)
        const timetable = await Timetable.find({_id : req.body._id.id})
        res.status(200).json(timetable);

    }catch(error){
        res.status(500).json(error);
  }
     
})


export default router;