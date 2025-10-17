React Week 3 Project – Tailwind Edition

Project Overview

This project is a React front-end application demonstrating:

Functional components with props

State management with React hooks

Tailwind CSS styling for modern, responsive UI

Dark/Light theme switcher

API integration with JSONPlaceholder

Task management with persistence

Features
Home Page

Welcome card with description

Buttons linking to Tasks and API pages

Features card listing project capabilities

Modern gradients and hover effects

Tasks Page

Fully functional Task Manager

Add, delete, and mark tasks as completed

Dark/light mode ready

Responsive layout

API Page

Browse JSONPlaceholder posts

Search and pagination

Clean card-based UI with dark/light mode support

Dark Mode Toggle

Switch themes globally using the toggle in the navbar

Smooth transitions for all components

Technologies Used

React (v18+)

Tailwind CSS

React Router for navigation

Context API for theme management

JSONPlaceholder API for demo data

Installation

Clone the repository:

git clone https://github.com/SAIDKUMBO/react-js-jsx-and-css-mastering-front-end-development-SAIDKUMBO.git


Navigate to the project folder:

cd week3-react-tailwind


Install dependencies:

npm install


Start the development server:

npm start


Open your browser at http://localhost:3000

Folder Structure
week3-react-tailwind/
│
├── src/
│   ├── components/       # Reusable components (Card, Navbar, Footer, Layout)
│   ├── pages/            # Home, TasksPage, ApiPage
│   ├── widgets/          # TaskManager
│   ├── context/          # ThemeContext for dark/light mode
│   ├── App.jsx
│   └── index.js
│
├── public/
├── package.json
└── tailwind.config.js

Screenshots

Home Page – Light Mode


Home Page – Dark Mode


Tasks Page


API Page


(Replace link-to-screenshot-* with actual image URLs if desired.)

Usage

Navigate between pages using the navbar

Use the Dark Mode toggle to switch themes

On the Tasks page, add, complete, or delete tasks

On the API page, search for posts and browse paginated results

Contributing

Fork the repository

Create a branch (git checkout -b feature-name)

Make your changes

Commit (git commit -m 'Add new feature')

Push (git push origin feature-name)

Open a Pull Request
