import express from "express";
var router = express.Router();

import Payement  from '../models/Payement.js'

//Creer un paiement
router.post("/add",async (req,res)=>{

    try{
        const pay = new Payement({
            coursename:req.body.coursename,
            price:req.body.price,
            author:req.body.author
        })

        await pay.save();
        res.status(200).json("paiement enregistre");

  }catch(error){
    res.status(500).json(error);
  }
     
})

//tous les cours
router.get("/all", async (req,res)=>{
    
    try{
        const paydata = await Payement.find()
        res.status(200).json(paydata);
    }catch(error){
        res.status(500).json(error);
    }
   
})

export default router;