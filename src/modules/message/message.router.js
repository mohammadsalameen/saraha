import {Router} from 'express'
import { createMessage, getMessage } from './message.controller.js';
import { asyncHandler } from '../../utils/catchError.js';
const router = Router();

//get messages
router.get('/',asyncHandler(getMessage));

//create message
router.post('/', asyncHandler(createMessage));

export default router;