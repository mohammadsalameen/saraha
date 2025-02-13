import UserModel from "../../../DB/model/user.model.js";
import { AppError } from "../../utils/AppError.js";

export const getUser = async(req, res) =>{
    const user = await UserModel.findAll({
        attributes : ['name', 'userName']
    });
    return res.json({message : "success", user})
}

export const deleteUser = async(req, res, next) =>{
    const {id} = req.params;
    const user = await UserModel.findByPk(id);
    if(user == null){
        return next(new AppError("user not found", 404));
    }
    await UserModel.destroy({where : {id : id}});
    return res.status(200).json({message : "success"});
}