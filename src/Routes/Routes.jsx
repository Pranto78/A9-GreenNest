import { createBrowserRouter, Router } from "react-router";
import HomePage from "../Components/HomePage/HomePage";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import PlantsDetails from "../Pages/PlantsDetails";
import AuthLayout from "../Auth/AuthLayout";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile";

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
        element:<Plants></Plants>,
        loader:()=> fetch('/Plants.json')
      },
      {
        path:"/profile",
        element:(
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        )

      },
      {
        path:"/plantsDetails/:id",
        element:(
          <PrivateRoute>
            <PlantsDetails></PlantsDetails>
          </PrivateRoute>
        ),
        loader:()=> fetch('/Plants.json')
      },
    ],
  },

  {
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/registration",
        element:<Registration></Registration>
      },
      {
        path:"/auth/login",
        element:<Login></Login>
      }
    ]
  }
]);

export default router;
