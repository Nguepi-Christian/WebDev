import express from "express"
const router=express.Router()



//delete user
router.delete("/:id",async (req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
        try{
            const user =await User.findOneAndDelete(req.params.id);
            res.status(200).json("Account Deleted");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You can Only Delete your account");
    }
});

//get a user 
router.get("/:id", async  (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,updateAt,...other}=user._doc;
        res.status().json(other); 
    }catch(err){
        return res.status(500).json(err);
    }
});
//follow a user
router.put("/id/follow", async  (req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
            const user= await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}});
                return res.status(200).json("User has been follow");
            }else{
                res.status(403).json("you allready follow user");
            }
        }catch(err){
            return res.status(403).json(err);
        }
    }else{
        return res.status(403).json("Yo cant follow yourself");
    }
});

//unfollow a user
router.put("/id/unfollow", async  (req,res)=>{
    if(req.body.userId!==req.params.id){
        try{
            const user= await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.params.id}});
                return res.status(200).json("user has been unfollowed");
            }else{
                res.status(403).json("you allready unfollow this user");
            }
        }catch(err){
            return res.status(403).json(err);
        }
    }else{
        return res.status(403).json("you cant unfollow yourself");
    }
});
//

export default router; 