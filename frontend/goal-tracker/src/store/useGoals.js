import { create } from "zustand";

export const useGoalsStore = () => create({
    goals: [],
    setGoals: (goals) => set({ goals }),

    fetchGoals: async () => {
        const res = await fetch('/api/goals');
        const data = await res.json();
        set({ goals: data });
    }
})