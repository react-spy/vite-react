import { appUrl, appPrefix } from "../app";

export function createViteDefine(): Record<string, any> {
  let { BUILD_ENV } = process.env;
  if (!BUILD_ENV) BUILD_ENV = "dev";

  const viteDefine: Record<string, any> = {
    // 定义全局常量
    __APP_URL__: appUrl[BUILD_ENV],
    __APP_PREFIX__: appPrefix,
    __BUILD_ENV__: BUILD_ENV,
  };

  return viteDefine;
}
