import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-6">
      <p>&copy; {new Date().getFullYear()} React Assignment. All rights reserved.</p>
    </footer>
  );
}
