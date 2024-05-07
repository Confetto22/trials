// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import "./index.css";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
// import VisitUs from "./pages/VisitUs";
import Gallery from "./pages/Gallery";
import ViewDepartments from "./pages/ViewDepartments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/join a department",
    element: <ViewDepartments />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
