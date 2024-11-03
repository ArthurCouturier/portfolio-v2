/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Menu from './pages/Menu';
import Skills from './pages/Skills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/web-skills',
    element: <Skills />,
  },
]);

export default function App() {
  const [circleExpanded, setCircleExpanded] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const handleCircleClick = () => {
    if (circleExpanded) {
      setTimeout(() => {
        setCircleExpanded(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setCircleExpanded(true);
      }, 500);
    }
  };

  return (
    <div className="bg-indigo-300 w-screen min-h-screen relative overflow-hidden font-semibold text-xl">
      <div ref={headerRef}>
        <Header handleCircleExpanded={handleCircleClick} />
      </div>
      <div
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
        className={`transition-opacity duration-500 ease-in-out ${circleExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'} overflow-y-auto relative inset-x-0`}
      >
        <RouterProvider router={router} />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${circleExpanded ? 'opacity-100 z-10 visible' : 'opacity-0 invisible'} absolute inset-0`}
      >
        <Menu />
      </div>
    </div>
  );
}
