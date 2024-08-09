import App from "./App";
import ErrorPage from "./ErrorPage";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import StoreItem from "./components/StoreItem/StoreItem";
import Bag from "./components/Bag/Bag";

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
        path: "/store/:itemTitle",
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
