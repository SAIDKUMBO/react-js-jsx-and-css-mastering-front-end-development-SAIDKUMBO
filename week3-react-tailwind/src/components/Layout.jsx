import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Navbar area with dark mode toggle */}
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="flex justify-between items-center container mx-auto px-4 py-4">
          <Navbar />
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            {document.documentElement.classList.contains("dark") ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
