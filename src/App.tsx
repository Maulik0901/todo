import React from 'react'
import { Routes, Route } from 'react-router-dom'

import TodoList from './todo/list'

import './App.css'

/**
 * @name App
 * This is the root component of the React application.
 * It sets up the main routing for the application using React Router.
 * The application contains only one route, which maps to the `TodoList` component.
 * The `TodoList` component will be rendered when the route matches the root URL ("/").
 */
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<TodoList />} />
            </Routes>
        </div>
    )
}

export default App
