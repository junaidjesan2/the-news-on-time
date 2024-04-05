import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import SignIn from "../pages/Authenticate/SignIn";
import SignUP from "../pages/Authenticate/SignUP";

export const Route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      {
        path: "/authenticate/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
]);
