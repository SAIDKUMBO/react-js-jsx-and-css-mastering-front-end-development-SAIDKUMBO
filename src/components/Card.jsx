import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 
                    shadow-lg hover:shadow-2xl rounded-xl p-6 border border-gray-200 dark:border-gray-600 
                    transition-shadow duration-300">
      
      {title && (
        <h2 className="text-xl font-bold mb-2 text-purple-700 dark:text-pink-300">
          {title}
        </h2>
      )}
      
      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}
      
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}
