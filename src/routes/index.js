import React from 'react';
import { RoutesNames } from './routes-names';
import { lazy } from 'react';

const LazyHome = lazy(() => import('../pages/home'));
const LazyAbout = lazy(() => import('../pages/about'));
const LazyDrawing = lazy(() => import('../pages/drawing'));
const LazyPainting = lazy(() => import('../pages/painting'));
const LazyProjects = lazy(() => import('../pages/projects'));
const LazySculpture = lazy(() => import('../pages/sculpture'));
const LazyGraphics = lazy(() => import('../pages/graphics'));

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
];
