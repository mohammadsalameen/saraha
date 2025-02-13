import UserModel from "../../../DB/model/user.model.js";
import bcrypt from 'bcrypt';
import { AppError } from "../../utils/AppError.js";
import jwt from 'jsonwebtoken';
import { SendEmail } from "../../utils/sendEmail.js";


export const register = async(req, res) =>{
    const {name, userName, email, password, gender} = req.body;
    const hashPassword = bcrypt.hashSync(password, 8);
    await UserModel.create({name,userName, email, password : hashPassword, gender});
    const html = `<h2>hello ${name}`;
    SendEmail(email, "welcome", html);
    return res.status(201).json({message : "success"});
}

export const login = async (req, res, next) =>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({where : {email : email}});
    if(user == null){
        return next(new AppError("invalid email", 404));
    }
    const check = bcrypt.compareSync(password, user.password);
    if(check == false){
        return next(new AppError("invalid password", 404));
    }

    const token = jwt.sign({id : user.id, userName : user.userName, role : user.role}, 'mohammad');
    return res.status(200).json({message : "success", token});
} 