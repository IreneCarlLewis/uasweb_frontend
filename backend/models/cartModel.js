import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
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
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;