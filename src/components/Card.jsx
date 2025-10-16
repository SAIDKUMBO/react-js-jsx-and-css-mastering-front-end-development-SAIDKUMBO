import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 border border-gray-200 dark:border-gray-700">
      {title && <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{title}</h2>}
      {description && <p className="text-gray-600 dark:text-gray-400 mb-3">{description}</p>}
      {children}
    </div>
  );
}
