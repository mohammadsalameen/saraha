import Joi from 'joi';

export const messageSchema = Joi.object({
    content : Joi.string().min(5).max(300).required()
});