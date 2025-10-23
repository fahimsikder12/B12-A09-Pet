import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Peges/Home";
import Login from "../Peges/Login";
import Register from "../Peges/Register";
import Myprofile from "../Peges/Myprofile";
import HoomDetails from "../Peges/HoomDetails";
import PrivetRouts from "../Privetrouts/PrivetRouts";
import ForgetPass from "../Peges/ForgetPass";
import ErrorPage from "../Peges/ErrorPage";
import AbutBox from "../Peges/AbutBox";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/newsAlldata.json").then(res => res.json()),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myProfile",
        element: (
          <PrivetRouts>
            <Myprofile></Myprofile>
          </PrivetRouts>
        ),
      },
      {
        path: "/homeDetails/:id",
        element: (
          <PrivetRouts>
            <HoomDetails />
          </PrivetRouts>
        ),
        loader: () => fetch("/newsAlldata.json").then((res) => res.json()),
      },
      {
        path: "/forgetpass",
        Component: ForgetPass,
      },
      {
        path: "/aboutbox",
        element: (
          <PrivetRouts>
            <AbutBox></AbutBox>
          </PrivetRouts>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
