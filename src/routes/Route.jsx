import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import SignIn from "../pages/Authenticate/SignIn";
import DataContext from "../context/DataContext";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: (
          <DataContext>
            <Home></Home>
          </DataContext>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/authenticate/signin",
    element: <AuthenticateLayout></AuthenticateLayout>,
    children: [
      {
        path: "/authenticate/signin",
        element: <SignIn></SignIn>,
      },
      // {
      //   path: "/ff",
      //   element: <SignUP></SignUP>,
      // },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
