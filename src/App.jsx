/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Home />
  },
])

export default function App() {

  const [circleExpanded, setCircleExpanded] = React.useState(false);

  const handleCircleClick = () => {
    setCircleExpanded(!circleExpanded);
  }

  return (
    <div className='bg-blue-300 w-[100vw]'>
      <Header handleCircleExpanded={handleCircleClick} />
      {circleExpanded?
        <div className='bg-red-300 h-20 w-20 rounded-full'> </div>
        : 
        <RouterProvider router={router}/>
      }
    </div>
  )
}
