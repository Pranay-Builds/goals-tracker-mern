import { create } from 'zustand';

export const useGoalsStore = create((set, get) => ({
  goals: [],
  setGoals: (goals) => set({ goals }),

  fetchGoals: async () => {
    const res = await fetch('/api/goals');
    const data = await res.json();
    console.log(data)
    set({ goals: data.data });
  },

  fetchGoalById: async (id) => {
    const res = await fetch(`/api/goals/${id}`);
    const data = await res.json();
    console.log(data)

    return data.data;
  },

  deleteGoal: async (id) => {
    const { goals } = get();

    const res = await fetch(`/api/goals/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json();
    console.log(data)

    set({ goals: goals.filter((goal) => goal._id !== id) });

  },

  createGoal: async (goalData) => {
    const res = await fetch('/api/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goalData),
    });

    const data = await res.json();

    if (res.ok && data?.data) {
      set((state) => ({ goals: [...state.goals, data.data] }));  
      return true;
    }

    return false;  
  },

  updateGoal: async (id, goalData) => {
    const res = await fetch(`/api/goals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goalData)
    })

    const data = await res.json()

    if (res.ok && data?.data) {
      set((state) => ({ goals: state.goals.map((goal) => goal._id === id ? data.data : goal) }));
      return true;
    }
    
    return false;
  }
}));
