import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import reportWebVitals from './reportWebVitals';

import ChurrasList from "./routes/ChurrasList"
import ChurrasDetail from "./routes/ChurasDetail"
import LoginPage from "./routes/LoginPage"
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/churras",
        element: <ChurrasList />,
      },
      {
        path: "/agenda",
        element: <ChurrasDetail />,
      }
    ],
    errorElement: <Error />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
