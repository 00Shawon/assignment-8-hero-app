import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import Apps from "./Pages/Apps.jsx";
import Installation from "./Pages/Installation.jsx";
import Error from "./Pages/Error.jsx";
import AppDetails from "./Pages/AppDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
      { path:'/', Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      { path:'/app/:id', Component: AppDetails},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
