/**
 * 路由配置
 * @description path 路径
 * @description routes 配置子路由
 * @description element 用于渲染的 React 组件路径
 */

export interface RouteConfig {
  path: string;
  element?: string;
  routes?: RouteConfig[];
}

export const baseRouters: RouteConfig[] = [
  {
    path: "/",
    routes: [
      {
        path: "/",
        element: "./views/Home/index.tsx",
      },
    ],
  },
  {
    path: "/user/login",
    element: "./views/Login/index2.tsx",
  },
];
