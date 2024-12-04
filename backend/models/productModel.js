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
        type: String, // URL untuk gambar utama
        required: true,
    },
    hoverImage: {
        type: String, // URL untuk gambar hover
        required: true,
    },
    link: {
        type: String, // URL untuk tautan produk
        required: true,
    },
}, {
    timestamps: true, // Menambahkan createdAt dan updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product;