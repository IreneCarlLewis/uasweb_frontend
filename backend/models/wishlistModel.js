import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            validate: {
                validator: async function (v) {
                    const user = await mongoose.model('User').findById(v);
                    return user !== null;
                },
                message: 'User does not exist',
            },
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            validate: {
                validator: async function (v) {
                    const product = await mongoose.model('Product').findById(v);
                    return product !== null;
                },
                message: 'Product does not exist',
            },
        },
    },
    {
        timestamps: true,
    }
);

// Exporting the Wishlist model as default
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;  // Use default export
