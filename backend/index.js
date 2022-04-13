import express from "express";
import db from "./config/Database.js";
// import Users from "./models/UserModel.js"; // Not using again cuz i've create it

const app = express();
const PORT = 5000;

try {
    await db.authenticate();
    console.log("Database Connected...");
    // await Users.sync(); // If not have table, auto create generate.
} catch(err) {
    console.log(err);
}

app.listen(PORT, () => console.log(`server running at port http://localhost:${PORT}/`));
