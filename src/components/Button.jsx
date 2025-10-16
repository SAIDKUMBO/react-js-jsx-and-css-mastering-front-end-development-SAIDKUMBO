import React from "react";

export default function Button({ children, variant = "primary", onClick }) {
  const base =
    "px-4 py-2 rounded font-semibold focus:outline-none transition duration-200";

  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    danger: `${base} bg-red-500 text-white hover:bg-red-600`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
