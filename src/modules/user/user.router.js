import { Router } from "express";
import UserModel from "../../../DB/model/user.model.js";
import auth from "../../middleware/auth.js";
import { deleteUser, getUser } from "./user.controller.js";

const router = Router();

//get users
router.get('/', auth(), getUser);

//delete user
router.delete('/:id', auth(), deleteUser)
export default router;