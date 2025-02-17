import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/goals.routes.js";
import path from "path";
dotenv.config()

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
    })
}

app.use('/api/goals', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on http://localhost/"+PORT)
})