/**
 * 路由相关
 */
import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

const modules = import.meta.glob("./views/*/*.tsx");

const createRoutes = (routes = __APP_ROUTERS__ || []) => {
  return routes.reduce((prev, curr) => {
    const { element, routes: childRoutes, ...rest } = curr;

    if (Array.isArray(childRoutes) && childRoutes.length) {
      return createRoutes(childRoutes);
    }

    let Component;
    if (element && modules[element]) {
      Component = lazy(modules[element] as any);
      return [
        ...prev,
        {
          ...rest,
          element: (
            <Suspense fallback={<p>loading</p>}>
              <Component />
            </Suspense>
          ),
        },
      ];
    } 
    return prev;
  }, []);
};

const initRouters = createRoutes([...(__APP_ROUTERS__ || [])]);

const RouteSetting = () => {
  return <RouterProvider router={createHashRouter(initRouters)} />;
};
export default RouteSetting;
