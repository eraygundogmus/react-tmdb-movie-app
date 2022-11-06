import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const RouteProvider = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);

  return routes;
};

export default RouteProvider;
