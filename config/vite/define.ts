import { appUrl, appPrefix } from "../app";
import { baseRouters } from "../routes";

const getJsonString = (value: any) => JSON.stringify(value);

export function createViteDefine(): Record<string, any> {
  let { BUILD_ENV } = process.env;
  if (!BUILD_ENV) BUILD_ENV = "dev";

  const viteDefine: Record<string, any> = {
    // 定义全局常量,定义的变量需要用JSON.stringify包裹
    __APP_URL__: getJsonString(appUrl[BUILD_ENV]),
    __APP_PREFIX__: getJsonString(appPrefix),
    __APP_ROUTERS__: getJsonString(baseRouters),
    __BUILD_ENV__: getJsonString(BUILD_ENV),
  };

  return viteDefine;
}
