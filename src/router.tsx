import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Home from "./pages/Home";
import Events from "./pages/Events";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);
