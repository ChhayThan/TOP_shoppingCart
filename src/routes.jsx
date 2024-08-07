import App from "./App";
import ErrorPage from "./ErrorPage";
import Store from "./components/Store";
import Home from "./components/Home";
import StoreItem from "./components/StoreItem";
import Bag from "./components/Bag";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:item",
        element: <StoreItem />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
];

export default routes;
