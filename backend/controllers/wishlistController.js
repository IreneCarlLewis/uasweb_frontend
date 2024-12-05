import Wishlist from "../models/wishlistModel.js";

// Get all wishlist items for a specific user
export const getWishlist = async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed in the URL

    try {
        const wishlist = await Wishlist.find({ userId }).select("productId");
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Add an item to the wishlist
export const addItemToWishlist = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        // Check if the item already exists in the wishlist
        const existingItem = await Wishlist.findOne({ userId, productId });
        if (existingItem) {
            return res.status(400).json({ message: "Item already in wishlist" });
        }

        const newItem = new Wishlist({ userId, productId });
        await newItem.save();

        res.status(201).json({
            message: "Item added to wishlist",
            wishlistItem: { userId: newItem.userId, productId: newItem.productId }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove an item from the wishlist
export const removeItemFromWishlist = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const removedItem = await Wishlist.findOneAndDelete({ userId, productId });
        if (!removedItem) {
            return res.status(404).json({ message: "Item not found in wishlist" });
        }

        res.status(200).json({ message: "Item removed from wishlist" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
