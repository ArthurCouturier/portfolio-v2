/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Menu from './pages/Menu';
import Skills from './pages/Skills';
import Missions from './pages/Missions';
import FrontSkillsPage from './pages/skills/FrontSkillsPage';
import BackSkillsPage from './pages/skills/BackSkillsPage';
import ToolsSkillsPage from './pages/skills/ToolsSkillsPage';
import PepperzMissionPage from './pages/missions/PepperzMissionPage';
import GalaxyMissionPage from './pages/missions/GalaxyMissionPage';
import PlanAppetitPage from './pages/missions/PlanAppetitPage';
import PlanAppetitArticle from './pages/missions/PlanAppetitArticle';
import MissionArticlePage from './pages/missions/MissionArticlePage';
import { LanguageProvider } from './i18n/LanguageContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/web-skills',
    element: <Skills />,
  },
  {
    path: '/web-skills/frontend',
    element: <FrontSkillsPage />,
  },
  {
    path: '/web-skills/backend',
    element: <BackSkillsPage />,
  },
  {
    path: '/web-skills/tools',
    element: <ToolsSkillsPage />,
  },
  {
    path: '/missions',
    element: <Missions />,
  },
  {
    path: '/missions/pepperz-app',
    element: <PepperzMissionPage />,
  },
  {
    path: '/missions/telespazio',
    element: <MissionArticlePage slug="telespazio" />,
  },
  {
    path: '/missions/openairlines',
    element: <MissionArticlePage slug="openairlines" />,
  },
  {
    path: '/missions/lyra',
    element: <MissionArticlePage slug="lyra" />,
  },
  {
    path: '/missions/galaxy',
    element: <GalaxyMissionPage />,
  },
  {
    path: '/missions/plan-appetit',
    element: <PlanAppetitPage />,
  },
  {
    path: '/missions/plan-appetit/article/:slug',
    element: <PlanAppetitArticle />,
  },
]);

export default function App() {
  // Single source of truth for the visit-card overlay — robust to rapid double-clicks.
  const [menuOpen, setMenuOpen] = useState(false);
  // Origin of the circular "liquid" reveal: the centre of the profile photo.
  const [origin, setOrigin] = useState({ x: '92%', y: '8%' });
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    const photo = document.getElementById('profile-photo');
    if (photo) {
      const r = photo.getBoundingClientRect();
      setOrigin({ x: `${r.left + r.width / 2}px`, y: `${r.top + r.height / 2}px` });
    }
    setMenuOpen((open) => !open);
  };

  return (
    <LanguageProvider>
      <div className="bg-indigo-300 w-screen h-screen relative overflow-hidden font-semibold text-xl" id="app">
        {/* Scrollable content fills the viewport; the header overlays it (transparent),
            so content stays visible behind the header while scrolling. The top padding
            keeps the content below the header at scroll-top. */}
        <div
          style={{ paddingTop: `${headerHeight}px` }}
          className={`absolute inset-0 overflow-y-auto overflow-x-hidden transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <RouterProvider router={router} />
        </div>

        {/* Transparent header overlay. The wrapper ignores pointer events so clicks reach
            the content behind it; interactive elements re-enable them individually. */}
        <div ref={headerRef} className="absolute top-0 inset-x-0 pointer-events-none">
          <Header onToggleMenu={toggleMenu} />
        </div>

        {/* Visit-card overlay: a coutPurple background revealed with a circular "liquid"
            wipe emanating from the photo, with the 3D card fading in as it fills. */}
        <div
          aria-hidden={!menuOpen}
          className="absolute inset-0 z-40 bg-coutPurple overflow-hidden"
          style={{
            clipPath: `circle(${menuOpen ? '150vmax' : '0px'} at ${origin.x} ${origin.y})`,
            transition: 'clip-path 650ms cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: menuOpen ? 'auto' : 'none',
          }}
        >
          <div
            className="w-full h-full"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: menuOpen
                ? 'opacity 400ms ease-out 250ms'
                : 'opacity 150ms ease-in',
            }}
          >
            <Menu />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
