import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Project Title */}
      <h1 className="text-lg font-bold text-white">React Week 3 Project</h1>

      {/* Links and Toggle */}
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="hover:underline hover:text-yellow-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/tasks"
          className="hover:underline hover:text-yellow-300 transition-colors duration-200"
        >
          Tasks
        </Link>
        <Link
          to="/api"
          className="hover:underline hover:text-yellow-300 transition-colors duration-200"
        >
          API
        </Link>

        {/* Dark/Light Mode Button */}
        <button
          onClick={toggleTheme}
          className="bg-white text-purple-700 px-3 py-1 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-colors duration-200"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}
