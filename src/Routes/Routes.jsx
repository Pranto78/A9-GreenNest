import { createBrowserRouter, Router } from "react-router";
import HomePage from "../Components/HomePage/HomePage";
import Home from "../Pages/Home";

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
        
      }
    ],
  },
]);

export default router;
