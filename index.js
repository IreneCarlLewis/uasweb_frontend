import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./backend/config/database.js";
import userRoutes from "./backend/routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);

connectDB(MONGOURL);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
