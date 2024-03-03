import App from "../App";
import Dashboard from "../pages/Dashboard";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: App(),
  },
  {
    id: "dashboard",
    path: "/dashboard",
    element: Dashboard(),
  },
]);

export default router;