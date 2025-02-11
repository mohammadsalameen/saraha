import Joi from 'joi';

export const registerSchema = Joi.object({
    name : Joi.string().required(),
    userName: Joi.string().min(3).max(30).required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(6).required(),
    gender : Joi.string().required()
});
export const loginSchema = Joi.object({
    userName: Joi.string().min(3).max(30),
    email : Joi.string().email().required(),
    password : Joi.string().min(6).required()
});
