import { createBrowserRouter, Router } from "react-router";
import HomePage from "../Components/HomePage/HomePage";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path:"/plants",
        element:<Plants></Plants>
      }
    ],
  },
]);

export default router;
