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
];
