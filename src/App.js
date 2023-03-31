import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';
import { Layout } from './pages/layout';
import { RoutesNames } from './routes/routes-names';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesNames.INDEX} element={<Layout />}>
          {appRoutes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
