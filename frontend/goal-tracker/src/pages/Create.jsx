import { useGoalsStore } from "../store/useGoals";
import { useState } from "react";

function Create() {

    const { createGoal } = useGoalsStore();

    const [ newGoal, setNewGoal ] = useState({
        title: "",
        description: "",
        deadline: "",
        startDate: "",
    })


    console.log(newGoal)

    const handleCreateGoal = async () => {

        if (newGoal.title && newGoal.description && newGoal.deadline && newGoal.startDate) {
            const success = await createGoal(newGoal)
            
            if (success) {
                alert("Goal created successfully! Good luck!")
                setNewGoal({
                    title: "",
                    description: "",
                    deadline: "",
                    startDate: "",
                })
            }
        } else {
            alert("Please fill in all fields")
        }
    }

    return (
      <div className="min-h-screen">
        <main className="flex flex-col items-center justify-center p-6">
          <div className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Create a Goal 🎯
            </h1>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter your goal title..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                />
              </div>
  
              <div>
                <label className="block text-gray-800 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  placeholder="Describe your goal..."
                  rows="3"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                />
              </div>
  
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-800 dark:text-gray-300 mb-2">Start Date</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                    value={newGoal.startDate}
                    onChange={(e) => setNewGoal({ ...newGoal, startDate: e.target.value })}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-800 dark:text-gray-300 mb-2">Deadline</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-none outline-none"
                    value={newGoal.deadline}
                    onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                  />
                </div>
              </div>
  
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                    e.preventDefault()
                    handleCreateGoal()
                }}
              >
                🚀 Create Goal
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
  
  export default Create;
  