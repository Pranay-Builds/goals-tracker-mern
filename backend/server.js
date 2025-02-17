import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/goals.routes.js";
import path from "path";
import { fileURLToPath } from "url"; 

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Backend Directory:", __dirname);

app.use("/api/goals", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'goal-tracker', 'dist')));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'goal-tracker', 'dist', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
