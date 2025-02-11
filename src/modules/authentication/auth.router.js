import {Router} from 'express'
import { login, register } from './auth.controller.js';
import { loginSchema, registerSchema } from './auth.validation.js';
import { validation } from '../../middleware/validation.js';
import { asyncHandler } from '../../utils/catchError.js';

const router = Router();

//register service
router.post('/register', validation(registerSchema) ,asyncHandler(register));
//login service
router.post('/login',validation(loginSchema),asyncHandler(login));
export default router
