import express from "express";
import { getUsers, getUser, createUser, loginUser, updateUser,  deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers); // Mengambil semua pengguna
router.get("/:id", getUser); // Mengambil pengguna berdasarkan ID
router.post("/", createUser); // Membuat pengguna baru
router.post("/login", loginUser); // Login pengguna
router.put("/:id", updateUser); // Memperbarui pengguna berdasarkan ID
router.delete("/:id", deleteUser); // Menghapus pengguna berdasarkan ID

export default router;
