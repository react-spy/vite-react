/**
 * 公共函数
 */

/**
 * 判断是否为手机设备
 */
export const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

/**
 * 获取网址参数
 * @param webUrl 自定义网址
 * @returns
 */
export const getPageQuery: (webUrl?: string) => Record<string, string> = (
  webUrl = window.location.href
) =>
  [...new URL(webUrl).searchParams.entries()].reduce(
    (urlParams, [key, value]) => ({ ...urlParams, [key]: value }),
    {}
  );

/**
 * 获取静态资源[public]下的实际路径
 * @param file 文件，xxx.png
 * @param dir 文件夹名称
 * @returns
 */
export const getFilePath = (file: string, dir: string = "images") => {
  return `${__APP_PREFIX__}/${dir}/${file}`;
};
