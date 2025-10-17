import React from 'react'
import TaskManager from '../widgets/TaskManager'

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Task Manager
      </h1>

      {/* Task Manager Container */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 
                      p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
        <TaskManager />
      </div>

    </div>
  )
}
