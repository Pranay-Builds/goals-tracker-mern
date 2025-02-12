import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const Goal = new mongoose.model("Goal", goalSchema)

