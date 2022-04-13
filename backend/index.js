import express from "express";
import db from "./config/Database.js";

const app = express();
const PORT = 5000;

try {
    await db.authenticate();
    console.log("Database Connected...");
} catch(err) {
    console.log(err);
}

app.listen(PORT, () => console.log(`server running at port http://localhost:${PORT}/`));
