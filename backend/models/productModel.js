import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
    hoverImage: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;