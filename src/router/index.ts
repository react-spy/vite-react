/**
 * 路由配置
 * @description https://reactrouter.com/en/main/routers/router-provider
 * @description elementPath 用于渲染的 React 组件路径
 */
import type { RouteObject } from "react-router-dom";

export const baseRouters: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "home",
        id: "./views/Home/index.tsx",
      },
    ],
  },
  {
    path: "/user/login",
    id: "./views/Login/index.tsx",
  },
];
