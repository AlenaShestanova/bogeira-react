import React from 'react';
import { lazy } from 'react';

import { RoutesNames } from './routes-names';

const LazyHome = lazy(() => import('../pages/home'));
const LazyAbout = lazy(() => import('../pages/about'));

const LazyDrawing = lazy(() => import('../pages/about/sub-pages/drawing'));
const LazyPainting = lazy(() => import('../pages/about/sub-pages/painting'));
const LazyProjects = lazy(() => import('../pages/about/sub-pages/projects'));
const LazySculpture = lazy(() => import('../pages/about/sub-pages/sculpture'));
const LazyGraphics = lazy(() => import('../pages/about/sub-pages/graphics'));

const LazyTouchByTouch = lazy(() => import('../pages/touch-by-touch'));
const LazyJewelryPieces = lazy(() => import('../pages/jewelry'));

const LazyAquarius = lazy(() => import('../pages/jewelry/sub-pages/aquarius'));
const LazyNs = lazy(() => import('../pages/jewelry/sub-pages/n&s'));
const LazyIntellectual = lazy(() => import('../pages/jewelry/sub-pages/intellectual'));
const LazyAllMyLove = lazy(() => import('../pages/jewelry/sub-pages/all-my-love'));
const LazyMaki = lazy(() => import('../pages/jewelry/sub-pages/maki'));
const LazyHealthNutGirl = lazy(() => import('../pages/jewelry/sub-pages/heath-nut-girl'));
const LazyRosemary = lazy(() => import('../pages/jewelry/sub-pages/rosemary'));

const LazyContacts = lazy(() => import('../pages/contacts'));

export const appRoutes = [
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.INDEX,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyHome />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyAbout />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT_SUB_PAGES.DRAWING,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyDrawing />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT_SUB_PAGES.PAINTING,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyPainting />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT_SUB_PAGES.PROJECTS,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyProjects />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT_SUB_PAGES.GRAPHICS,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyGraphics />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.ABOUT_SUB_PAGES.SCULPTURE,
    element: (
      <React.Suspense fallback="Loading...">
        <LazySculpture />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.TOUCH_BY_TOUCH,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyTouchByTouch />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyJewelryPieces />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.AQUARIUS,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyAquarius />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.INTELLECTUAL_AND_STYLISH,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyIntellectual />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.NS,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyNs />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.MAKI,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyMaki />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.HEALTH_NUT_GIRL,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyHealthNutGirl />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.ROSEMARY,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyRosemary />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.JEWELRY_SUB_PAGES.ALL_MY_LOVE,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyAllMyLove />
      </React.Suspense>
    ),
  },
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.CONTACTS,
    element: (
      <React.Suspense fallback="Loading...">
        <LazyContacts />
      </React.Suspense>
    ),
  },
];
