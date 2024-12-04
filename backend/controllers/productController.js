import Product from "../models/productModel.js";

// Mendapatkan semua produk
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mendapatkan produk berdasarkan ID
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Membuat produk baru
export const createProduct = async (req, res) => {
    const { name, price, category, link, mainImage, hoverImage } = req.body;

    try {
        const newProduct = new Product({
            name,
            price,
            category,
            link,
            mainImage,
            hoverImage,
        });

        await newProduct.save();
        res.status(201).json({
            message: 'Product created successfully!',
            product: newProduct
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Memperbarui produk
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, category, link, mainImage, hoverImage } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, category, link, mainImage, hoverImage },
            { new: true } // Mengembalikan dokumen yang telah diperbarui
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: 'Product updated successfully!',
            product: updatedProduct
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Menghapus produk
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: 'Product deleted successfully!',
            product: deletedProduct
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};