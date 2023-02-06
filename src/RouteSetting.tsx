/**
 * 路由相关
 */
import type { RouteObject } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import baseRouter from "./routes";

const RouteSetting = () => {
  return <RouterProvider router={baseRouter} />;
};
export default RouteSetting;
