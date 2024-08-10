import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./style/reset.css";
import "./style/global.css";

import { BagProvider } from "./BagContext"; // Import BagProvider

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BagProvider>
      <RouterProvider router={router} />
    </BagProvider>
  </React.StrictMode>
);
