import MessageModel from "../../../DB/model/message.model.js";
import UserModel from "../../../DB/model/user.model.js";
import { AppError } from "../../utils/AppError.js";

export const getMessage = async(req, res) =>{
    const messages = await MessageModel.findAll({
        attributes : ['id','content'],
        include : {model : UserModel,
            attributes : ['id', 'name']
        }
    });
    return res.status(200).json({message : "success", messages});
}

export const sendMessage = async(req, res, next) =>{
    const {id} = req.params;
    const {content} = req.body;
    const receiver = await UserModel.findByPk(id,{
        attributes : ['id', 'name']
    });
    if(!receiver){
        return next(new AppError("user not found", 404));
    }
    const messages = await MessageModel.create({content ,UserId : id});
    return res.status(201).json({message : "success", messages, receiver});
}

export const getMessageDetails = async(req, res) =>{
    const messagesUser = await MessageModel.findAll({where : {UserId : req.id}, attributes : ['content']});
    return res.status(200).json({message : "success",messagesUser});

}