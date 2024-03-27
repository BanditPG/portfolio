import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Stylesheets
import './stylesheets/global.scss';
import './stylesheets/animations.scss';
import './stylesheets/structure.scss';
import './stylesheets/text.scss';

// Components
import Landing from './components/Landing';
import {
  ThirdEyeModule,
  Possibility,
  Edusat
} from './components/Projects';

// Router 
const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Landing />,
  },
  {
    path: "/portfolio/3rdem",
    element: <ThirdEyeModule />
  },
  {
    path: "/portfolio/possibility",
    element: <Possibility />
  },
  {
    path: "/portfolio/edusat",
    element: <Edusat />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);