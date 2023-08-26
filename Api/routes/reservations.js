import express from  "express"
import Reservations from "../models/Reservations.js"

var router = express.Router()

//insert data planing 
router.post('/create',async (req,res)=>{

    try {
        const reservation = new Reservations({
            sallle:req.body.sallle,
            hd : req.body.hd,
            hf : req.body.hf ,
            desc : req.body.desc ,
            cours : req.body.cours,
            ensegnant : req.body.ensegnant ,
            niveau : req.body.niveau ,
            faculte : req.body.faculte ,
            filiere : req.body.filiere ,
            semestre : req.body.semestre ,
        })
    
        await reservation.save()
        res.status(200).json("saved")
    } catch (error) {
        res.status(500).json(error)
    }
})



//update un 
router.put("/update",async (req,res)=>{
   
    try{
        await Reservations.findById(req.body.id).updateOne({$set : req.body})
        res.status(200).json("planing mise-a-jour");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//delete un cours
router.post("/delete", async (req,res)=>{
    
    try{
        await Reservations.findByIdAndDelete(req.body.id)
        res.status(200).json("Planing supprimer");

    }catch(error){
        res.status(500).json(error);
  }
     
})

//tous les 
router.get("/all", async (req,res)=>{
    
    try{
        const rese = await Reservations.find()
        res.status(200).json(rese);

    }catch(error){
        res.status(500).json(error);
  }
     
})


//tous les 
router.get("/deleteall", async (req,res)=>{
    
    try{
        await Reservations.collection.drop()
        res.status(200).json('delete');

    }catch(error){
        res.status(500).json(error);
  }
     
})


export default router