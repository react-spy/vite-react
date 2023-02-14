/**
 * 路由配置  import { RouteObject } from "react-router-dom";
 * @description https://reactrouter.com/en/main/routers/router-provider
 * @description elementPath 用于渲染的 React 组件路径
 */
export const baseRouters = [
  {
    path: "/",
    children: [
      {
        path: "home",
        elementPath: "./views/Home/index.tsx",
      },
    ],
  },
  {
    path: "/user/login",
    elementPath: "./views/Login/index.tsx",
  },
];
