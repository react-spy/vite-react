import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/views/Home";

export const errorPage = [
  {
    path: "*",
    element: <div>错误页面</div>,
  },
];

export const baseRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default createBrowserRouter(baseRouter);
