import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config()

connectDB();


const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(process.env.PORT, () => {
    console.log("Server started on http://localhost:"+process.env.PORT)
})