import Cart from "../models/cartModel.js";

// Get all cart items for a specific user
export const getCart = async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed in the URL

    try {
        const cart = await Cart.find({ userId }).populate('productId');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add an item to the cart
export const addItemToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        // Check if the item already exists in the cart
        const existingItem = await Cart.findOne({ userId, productId });
        if (existingItem) {
            existingItem.quantity += quantity; // Increment the quantity if item is already in the cart
            await existingItem.save();
            return res.status(200).json({ message: "Item quantity updated", cartItem: existingItem });
        }

        const newItem = new Cart({ userId, productId, quantity });
        await newItem.save();

        res.status(201).json({
            message: "Item added to cart",
            cartItem: { userId: newItem.userId, productId: newItem.productId, quantity: newItem.quantity }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove an item from the cart
export const removeItemFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const removedItem = await Cart.findOneAndDelete({ userId, productId });
        if (!removedItem) {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Checkout the cart items
export const checkout = async (req, res) => {
    const { userId } = req.body;

    try {
        const cartItems = await Cart.find({ userId });
        if (cartItems.length === 0) {
            return res.status(400).json({ message: "Your cart is empty" });
        }

        // Clear the cart after checkout
        await Cart.deleteMany({ userId });

        res.status(200).json({ message: "Payment successful. Cart is now empty." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
