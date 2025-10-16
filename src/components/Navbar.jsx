import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">React Week 3 Project</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-2 py-1 rounded-md font-semibold"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}
