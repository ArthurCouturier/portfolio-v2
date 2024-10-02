/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Home />
  },
])

function App() {

  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-400">
        Hello world!
      </h1>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
