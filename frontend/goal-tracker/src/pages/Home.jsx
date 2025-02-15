import React, { useEffect, useState } from "react";
import { useGoalsStore } from "../store/useGoals";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { goals, fetchGoals, deleteGoal } = useGoalsStore();
  const [completedGoals, setCompletedGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("completedGoals")) || [];
  });



  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  useEffect(() => {
    localStorage.setItem("completedGoals", JSON.stringify(completedGoals));
  }, [completedGoals]);

  const toggleCompletion = (goalId) => {
    setCompletedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]
    );
  };

  const handleDeleteGoal = (goalId) => {
    const confirmed = window.confirm("Are you sure you want to delete this goal?");
    if (confirmed) {
      deleteGoal(goalId);
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold text-center mt-3">Goals 🚀</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.length === 0 ? (
          <p className="text-center col-span-full">No goals available. Add some!</p>
        ) : (
          goals.map((goal) => {
            const isCompleted = completedGoals.includes(goal._id);

            return (
              <div
                key={goal._id}
                className={`p-6 mt-3 rounded-xl shadow-lg transition-shadow transform hover:scale-105
                  border border-transparent hover:border-blue-500 ease-in-out duration-300
                  ${isCompleted
                    ? "bg-gray-400 dark:bg-gray-700 opacity-70"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                  }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h2
                    className={`text-2xl font-semibold ${isCompleted ? "line-through text-gray-500" : "text-gray-900 dark:text-white"
                      }`}
                  >
                    {goal.title}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${new Date(goal.deadline) < new Date()
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                      }`}
                  >
                    {new Date(goal.deadline) < new Date() ? "Overdue" : "Active"}
                  </span>
                </div>

                <p
                  className={`mb-4 ${isCompleted ? "text-gray-500" : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {goal.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    📅 Started:{" "}
                    {new Date(goal.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ⏳ Deadline:{" "}
                    {new Date(goal.deadline).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <button
                  className={`w-full px-4 py-2 rounded ${isCompleted
                      ? "bg-gray-500 text-white cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  onClick={() => toggleCompletion(goal._id)}
                >
                  {isCompleted ? "Completed ✅" : "Mark as Completed"}
                </button>

                <div className="flex justify-between mt-3">

                <button
                    className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => navigate('/edit/'+goal._id)}
                  >
                    <FaEdit />
                  </button>
  

                  <button
                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => handleDeleteGoal(goal._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>


  
    </main>
  );
}

export default Home;
