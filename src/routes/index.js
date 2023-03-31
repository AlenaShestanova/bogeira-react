import React from 'react';
import { RoutesNames } from './routes-names';
import { lazy } from 'react';
import Home from '../pages/home';
import About from '../pages/about';

// const LazyHome = lazy(() => import('../pages/home'));
const LazyAbout = lazy(() => import('../pages/about'));

export const appRoutes = [
  {
    fallback: <div>Loading...</div>,
    path: RoutesNames.INDEX,
    element: <Home />,
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
];
