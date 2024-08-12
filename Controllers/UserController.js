import express from "express";
import User from  "../models/User.js"

//Update User
export const UpdateUser = async (req , res) =>{

        try {

            if(req.file){
                req.body.profilePicture = req.file.filename ;
            }
            
            if(req.body.password){
                const salt = bcrypt.genSaltSync(10)
                const hashpwd = bcrypt.hashSync(req.body.password , salt)
                req.body.password = hashpwd;
            }

            console.log(req.body)

            const update_user = await User.findByIdAndUpdate(req.body.id,
                {
                    $set:
                    {   
                        firstname:req.body.firstname,
                        lastname:req.body.lastname ,
                        phone:req.body.phone,
                        email:req.body.email,
                    }
            },
                {new : true}
            ) 
            console.log(update_user);
            res.status(201).json("update_user")
        } catch (error) {
            console.log(error)
        }
}
