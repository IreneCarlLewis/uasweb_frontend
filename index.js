import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./backend/config/database.js";
import userRoutes from "./backend/routes/userRoutes.js";
import productRoutes from "./backend/routes/productRoutes.js";
import wishlistRoutes from "./backend/routes/wishlistRoutes.js";
import cartRoutes from "./backend/routes/cartRoutes.js";
import commentRoutes from "./backend/routes/commentRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/comments", commentRoutes);


connectDB(MONGOURL);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
