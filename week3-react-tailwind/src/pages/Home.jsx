import React from 'react'
import Card from '../../week3-react-tailwind/components/Card'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-2xl transition-shadow">
        <h2 className="text-2xl font-bold text-purple-700 dark:text-pink-300">Welcome</h2>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          This project demonstrates React components, state, hooks, Tailwind styling, and API integration.
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            to="/tasks"
            className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Try Tasks
          </Link>
          <Link
            to="/api"
            className="inline-block px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-colors"
          >
            Browse API
          </Link>
        </div>
      </Card>

      {/* Features Card */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-2xl transition-shadow">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Features</h3>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
          <li>Task manager with persistence</li>
          <li>Theme switcher (dark/light)</li>
          <li>JSONPlaceholder posts with search + pagination</li>
        </ul>
      </Card>

    </div>
  )
}
