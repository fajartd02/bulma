import express from "express";
import { getUsers } from "../controller/Users.js";
const router = express.Router();

router.get('/', getUsers);

export default router;