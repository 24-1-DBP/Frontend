import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Entry from "./pages/Entry.tsx";
import BookDetail from "./pages/Book-detail.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: Entry(),
  },
  {
    path: "/:id/detail",
    element: BookDetail(),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
