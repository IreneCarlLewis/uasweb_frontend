import express from "express";
import { getComments, addComment, editComment, deleteComment } from "../controllers/commentController.js";

const router = express.Router();

// Get all comments for a specific product
router.get("/:productId", getComments);

// Add a new comment
router.post("/", addComment);

// Edit an existing comment
router.put("/:commentId", editComment);

// Delete a comment
router.delete("/:commentId", deleteComment);

export default router;
