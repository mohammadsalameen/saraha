import MessageModel from "../../../DB/model/message.model.js";

export const getMessage = async(req, res) =>{
    const message = await MessageModel.findAll({
        attributes : ['content']
    });
    return res.json(message);
}

export const createMessage = async(req, res) =>{
    const {content} = req.body;
    const message = await MessageModel.create({content});
    return res.json({message : "success", message});
}