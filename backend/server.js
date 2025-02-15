import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/goals.routes.js";
dotenv.config()

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/goals', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on http://localhost/"+PORT)
})