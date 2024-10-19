import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import Blood from "../pages/blood/Blood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blood",
        element: <Blood />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
