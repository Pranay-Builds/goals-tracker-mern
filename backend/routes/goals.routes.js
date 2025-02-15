import express from "express";
import { Goal } from "../models/goal.model.js";
import mongoose from "mongoose";

const router = express.Router();

// Retrieve all goals
router.get('/', async (req, res) => {
    try {
        const goals = await Goal.find({});
        res.status(200).json({ success: true, data: goals });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching goals' });
    }
})

// Fetch a particular goal by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const goal = await Goal.findById(id);
        if (!goal) {
            return res.status(404).json({ success: false, message: 'Goal not found'})
        }
        res.status(200).json({ success: true, data: goal });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching goal' });
    }
})

// Create a goal
router.post('/', async (req, res) => {
    const { title, description, startDate, deadline } = req.body;
    
    if (!title || !description || !startDate || !deadline) {
        res.status(400).json({ success: false, message: 'Please provide all required fields'})
    }

    const newGoal = {
        title,
        description,
        startDate: new Date(startDate),
        deadline: new Date(deadline)
    }


    try {
        const goal = await Goal.create(newGoal);
        res.status(201).json({ success: true, data: goal });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error creating goal' });
    }
})

// Delete a goal
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ success: false, message: 'Invalid  ID' });
    }

    try {
        const goal = await Goal.findByIdAndDelete(id);
        res.status(200).json({ success: true, data: goal });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting goal' });
    }
})

// Update a goal
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ success: false, message: 'Invalid  ID' });
    }

    try {
        const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, data: goal });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update goal" });
    }
})


export default router;