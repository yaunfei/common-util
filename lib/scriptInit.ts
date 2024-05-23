/**
 * 代码中动态引入js库
 * @param url cdn地址
 * @param name? 全局变量名称，可选
 * @returns promise
 */
export const scriptInit = (
  url: string,
  name?: string
): Window & typeof globalThis | Promise<unknown> => {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    script.onerror = reject;
    script.onload = function () {
      name ? resolve(window[name]) : resolve(window);
    };
    document.head.appendChild(script);
  });
};
