import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGoalsStore } from "../store/useGoals";

const EditPage = () => {
  const { id } = useParams();
  const { fetchGoalById, updateGoal } = useGoalsStore();
  const [updatedGoal, setUpdatedGoal] = useState({
    title: "",
    description: "",
    deadline: "",
    startDate: "",
  });

  useEffect(() => {
    const fetchGoal = async () => {
      const goal = await fetchGoalById(id);
      if (goal) {
        setUpdatedGoal({
          title: goal.title || "",
          description: goal.description || "",
          deadline: goal.deadline || "",
          startDate: goal.startDate || "",
        });
      }
    };

    fetchGoal();
  }, [id, fetchGoalById]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await updateGoal(id, updatedGoal);
    if (success) {
      alert("Goal updated successfully!");
    } else {
      alert("Failed to update goal.");
    }
  }

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Edit Goal ✏️
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-800 dark:text-gray-300 mb-2">Title</label>
              <input
                type="text"
                placeholder="Edit your goal title..."
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                value={updatedGoal.title}
                onChange={(e) => setUpdatedGoal({ ...updatedGoal, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-800 dark:text-gray-300 mb-2">Description</label>
              <textarea
                placeholder="Edit goal description..."
                rows="3"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                value={updatedGoal.description}
                onChange={(e) => setUpdatedGoal({ ...updatedGoal, description: e.target.value })}
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Start Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                  value={updatedGoal.startDate}
                  onChange={(e) => setUpdatedGoal({ ...updatedGoal, startDate: e.target.value })}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Deadline</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                  value={updatedGoal.deadline}
                  onChange={(e) => setUpdatedGoal({ ...updatedGoal, deadline: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              ✅ Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditPage;
