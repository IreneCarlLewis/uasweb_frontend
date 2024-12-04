import express from 'express';
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

// Mendapatkan semua produk
router.get('/', getProducts);

// Membuat produk baru
router.post('/', createProduct);

// Memperbarui produk berdasarkan ID
router.put('/:id', updateProduct);

// Menghapus produk berdasarkan ID
router.delete('/:id', deleteProduct);

export default router;