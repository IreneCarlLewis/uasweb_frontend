import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // FK ke Produk
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // FK ke User
    comment: { type: String, required: true },  // Isi komentar
}, { timestamps: true }); // Menyimpan waktu komentar dibuat

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
