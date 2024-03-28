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
import App from './components/App';
import Landing from './components/Landing';
import ThirdEyeModule from './components/projects/ThirdEyeModule';
import Possibility from './components/projects/Posibility';
import Edusat from './components/projects/Edusat';

// Router 
const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />
      },
      {
        path: "3rdem",
        element: <ThirdEyeModule />
      },
      {
        path: "possibility",
        element: <Possibility />
      },
      {
        path: "edusat",
        element: <Edusat />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);