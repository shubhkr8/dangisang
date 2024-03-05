import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import BioForm from "../pages/BioForm/BioForm";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bioform",
        element: <BioForm />,
      },
    ],
  },
]);
