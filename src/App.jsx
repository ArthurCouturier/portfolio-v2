import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Menu from './pages/Menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default function App() {
  const [circleExpanded, setCircleExpanded] = useState(false);

  const handleCircleClick = () => {
    if (circleExpanded) {
      setCircleExpanded(false);
    } else {
      setTimeout(() => {
        setCircleExpanded(true);
      }, 1500);
    }
  };

  return (
    <div className="bg-indigo-300 w-[100vw] h-[100vh] relative overflow-hidden"> {/* Ajoute overflow-hidden et relative ici */}
      <Header handleCircleExpanded={handleCircleClick} />
      <RouterProvider router={router} />
      <div
        className={`transition-all duration-500 ease-in-out 
          ${circleExpanded ? 'z-10 opacity-100' : 'z-[-1] invisible'} absolute`}
      >
        <Menu />
      </div>
    </div>
  );
}
