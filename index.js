import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./backend/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

app.use(bodyParser.json());

connectDB(MONGOURL);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
