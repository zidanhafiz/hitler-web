import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JoinMePage from "./pages/JoinMePage.jsx";
import NewsPage from "./pages/NewsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "join-me" || "*/join-me",
    element: <JoinMePage />,
  },
  {
    path: "news" || "*/news",
    element: <NewsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
