import express from  "express"
import Planing from "../models/Planing.js"

var router = express.Router()

//insert data planing 
router.post('/create',async (req,res)=>{

    try {
        const planing = new Planing({
            subject:req.body.subject,
            StartTime : req.body.StartTime,
            EndTime : req.body.EndTime ,
            day : req.body.day ,
            description : req.body.description,
            event : req.body.event ,
            niveau : req.body.niveau ,
            faculte : req.body.faculte ,
            filiere : req.body.filiere ,
            semestre : req.body.semestre ,
        })
    
        await planing.save()
        res.status(200).json("saved")
    } catch (error) {
        res.status(500).json(error)
    }
})



//update un 
router.put("/update",async (req,res)=>{
   
    try{
        await Planing.findById(req.body.id).updateOne({$set : req.body})
        res.status(200).json("planing mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un cours
router.post("/delete", async (req,res)=>{
    
    try{
        await Planing.findByIdAndDelete(req.body.id)
        res.status(200).json("Planing supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les 
router.get("/all", async (req,res)=>{
    
    try{
        const planing = await Planing.find()
        res.status(200).json(planing);

    }catch(error){
        res.status(500).json(error);
  }
     
})


//tous les 
router.get("/deleteall", async (req,res)=>{
    
    try{
        await Planing.collection.drop()
        res.status(200).json('delete');

    }catch(error){
        res.status(500).json(error);
  }
     
})


export default router