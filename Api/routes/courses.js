import express from "express";
import Courses  from '../models/Courses.js'

var router = express.Router();

//creer un Courses
router.post("/create",async (req,res)=>{

    try{
        const courses = new Courses({
          name : req.body.name ,
      	  category : req.body.category ,
      	  image : req.body.image ,
          langage : req.body.langage,
      	  description : req.body.description,
          students : req.body.students ,
      	  creator  : req.body.creator ,
      	  actual_price : req.body.actual_price,
          what_you_will_learn  : req.body.what_you_will_learn ,
          part : req.body.part
        })

        await courses.save();
        res.status(200).json("Cours enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})


//update Cours
router.put("/update",async (req,res)=>{
    
    try{

      await Courses.findByIdAndUpdate(req.body.id,{$set : req.body})
      res.status(200).json("Cours mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete Course
router.post("/delete", async (req,res)=>{
    
    try{

        await Courses.findByIdAndDelete(req.body.id)
        res.status(200).json("Cours supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//all Courses
router.get("/all", async (req,res)=>{
    
    try{

        const courses = await Courses.find()
        res.status(200).json(courses);

    }catch(error){
        res.status(500).json(error);
  }
     
})

//Single Course
router.get("/one/:id", async (req,res)=>{
    
    try{
    
        const courses = await Courses.find({_id : req.params.id})
        res.status(200).json(courses);

    }catch(error){
        res.status(500).json(error);
  }
     
})


export default router;