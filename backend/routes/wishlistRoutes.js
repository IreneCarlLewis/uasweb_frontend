import express from "express";
import { getWishlist, addItemToWishlist, removeItemFromWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

// Fetch wishlist for a specific user
router.get("/:userId", getWishlist); // Retrieve the wishlist for a user

// Add an item to the wishlist
router.post("/", addItemToWishlist);

// Remove an item from the wishlist
router.delete("/", removeItemFromWishlist);

export default router;
