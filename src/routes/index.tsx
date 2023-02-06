import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

export const errorPage = [
  {
    path: "*",
    element: <div>错误页面</div>,
  },
];

export const baseRouter: RouteObject[] = [
  {
    path: "/",
    element: <div>首页</div>,
  },
];

export default createBrowserRouter(baseRouter);
