import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Database connection: ${conn.connection.host}`)
    } catch (err) {
        console.log("Error while connecting database: "+err)
        process.exit(1)
    }
}