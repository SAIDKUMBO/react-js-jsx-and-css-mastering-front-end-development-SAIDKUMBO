import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home(){
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">This project demonstrates React components, state, hooks, Tailwind styling, and API integration.</p>
        <div className="mt-4 flex gap-2">
          <Link to="/tasks" className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md">Try Tasks</Link>
          <Link to="/api" className="inline-block px-4 py-2 border rounded-md">Browse API</Link>
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Features</h3>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
          <li>Task manager with persistence</li>
          <li>Theme switcher (dark/light)</li>
          <li>JSONPlaceholder posts with search + pagination</li>
        </ul>
      </Card>
    </div>
  )
}
