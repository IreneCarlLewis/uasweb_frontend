import express from "express";
import { getUsers, getUser, createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.post('/login', loginUser);

export default router;
