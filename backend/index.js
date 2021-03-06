import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cors from "cors";
// import Users from "./models/UserModel.js"; // Not using again cuz i've create it

dotenv.config();
const app = express();
const PORT = 5000;

try {
    await db.authenticate();
    console.log("Database Connected...");
    // await Users.sync(); // If not have table, auto create generate.
} catch(err) {
    console.log(err);
}

// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server running at port http://localhost:${PORT}/`));
