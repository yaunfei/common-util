/**
 * 复制文本到剪切板中
 * @param value 需要复制的文本
 */
export function copyToClipBoard(value: string): Promise<void> {
  const type = "text/plain";
  const blob = new Blob([value], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  return navigator.clipboard.write(data);
}

/**
 * 使用浏览器API 获取纬度和经度
 * @returns {Promise}
 */
export function getLocaLatLon(): Promise<
  Record<"latitude" | "longitude", number>
> {
  return new Promise<Record<"latitude" | "longitude", number>>(
    (reslove, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const {
              coords: { latitude, longitude },
            } = position;
            reslove({ latitude, longitude });
          },
          function (error) {
            reject(error);
          },
          {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 600000,
          }
        );
      } else {
        reject("该浏览器不支持获取地理位置。");
      }
    }
  );
}

/**
 * 获取浏览器环境
 * @param userAgent?
 * @param platform?
 * @returns
 */
export function checkEnv(userAgent?: string, platform?: string): Lib.CheckEnv {
  if (!userAgent) userAgent = window.navigator.userAgent;
  if (!platform) platform = window.navigator.platform;
  userAgent = userAgent.toLowerCase();
  platform = platform.toLowerCase();
  return {
    isIos: /(iphone|ipad|ipod|ios|mac)/i.test(userAgent),
    isAndroid: userAgent.includes("android"),
    isWechat: userAgent.includes("micromessenger"),
    isMobile: /(iphone|ipod|webos|android|blackberry)/i.test(userAgent),
    isWin: platform.startsWith("win"),
    isZiJie: userAgent.includes("toutiaomicroapp"),
    isMiniprogram: userAgent.includes("miniprogram"),
  };
}
