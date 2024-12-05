import express from "express";
import { getCart, addItemToCart, removeItemFromCart, checkout } from "../controllers/cartController.js";

const router = express.Router();

// Fetch cart for a specific user
router.get("/:userId", getCart);  // Get cart based on userId

// Add an item to the cart
router.post("/", addItemToCart);  // Add item to cart

// Remove an item from the cart
router.delete("/:itemId", removeItemFromCart);  // Remove item by itemId

// Checkout cart items
router.post("/checkout", checkout);  // Checkout items in the cart

export default router;
