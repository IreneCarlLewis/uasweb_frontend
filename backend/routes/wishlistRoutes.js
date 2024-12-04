import express from "express";
import { getWishlist, addItemToWishlist, removeItemFromWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/", getWishlist); // Retrieve the wishlist
router.post("/", addItemToWishlist); // Add an item to the wishlist
router.delete("/", removeItemFromWishlist); // Remove an item from the wishlist

export default router;
