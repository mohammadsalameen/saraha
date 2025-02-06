import { Router } from "express";
import UserModel from "../../../DB/model/user.model.js";
import auth from "../../middleware/auth.js";

const router = Router();

//get users
router.get('/',auth() ,async(req, res) =>{
    const user = await UserModel.findAll({
        attributes : ['name', 'userName']
    });
    return res.json({message : "success", user})
});


export default router;