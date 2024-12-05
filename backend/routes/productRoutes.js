import express from 'express';
import {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

// Mendapatkan semua produk
router.get('/', getProducts);

// Mendapatkan produk berdasarkan ID
router.get('/:id', getProduct);

// Membuat produk baru
router.post('/', createProduct);

// Memperbarui produk berdasarkan ID
router.put('/:id', updateProduct);

// Menghapus produk berdasarkan ID
router.delete('/:id', deleteProduct);

export default router;