import {Router} from 'express'
import { sendMessage, getMessage, getMessageDetails } from './message.controller.js';
import { asyncHandler } from '../../utils/catchError.js';
import auth from '../../middleware/auth.js';
import { validation } from '../../middleware/validation.js';
import { messageSchema } from './message.validation.js';
const router = Router();

//get messages
// router.get('/',auth(),asyncHandler(getMessage));

//create message
router.post('/:id',auth(),validation(messageSchema) ,asyncHandler(sendMessage));

//get Messages
router.get('/',auth(),asyncHandler(getMessageDetails));

export default router;