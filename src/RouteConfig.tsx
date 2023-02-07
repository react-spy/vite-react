/**
 * 路由相关
 */
import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

const modules = import.meta.glob("./views/*/*.tsx");
const initRouters = [...(__APP_ROUTERS__ || [])].reduce((prev, curr) => {
  let Component;
  if (curr?.element && typeof modules[curr.element]) {
    Component = lazy(modules[curr.element] as any);
  }
  if (Component) {
    return [
      ...prev,
      {
        ...curr,
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Component />
          </Suspense>
        ),
      },
    ];
  }
}, []);

const RouteSetting = () => {
  return <RouterProvider router={createHashRouter(initRouters)} />;
};
export default RouteSetting;
