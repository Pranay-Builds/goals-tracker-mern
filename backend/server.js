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

app.listen(process.env.PORT, () => {
    console.log("Server started on http://localhost:"+process.env.PORT)
})