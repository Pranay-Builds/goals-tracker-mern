import React, { useEffect } from 'react'
import { useGoalsStore } from '../store/useGoals'

function Home() {

  const { goals, fetchGoals } = useGoalsStore();

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals])


  return (
    <main className='p-4'>
      <h1 className='text-3xl font-bold text-center mt-3'>Goals 🚀</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.length === 0 ? (
          <p className="text-center col-span-full">No goals available. Add some!</p>
        ) : (
          goals.map((goal) => (
            <div key={goal._id} className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 ease-in-out duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{goal.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{goal.description}</p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Started: {new Date(goal.startDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
              </div>
            </div>

          ))
        )}
      </div>
    </main>
  )
}

export default Home