/**
 * 根据两个纬经度，算距离
 * @param lat1 纬度
 * @param lng1 经度
 * @param lat2 纬度
 * @param lng2 经度
 * @returns 距离KM
 */
export function getDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number | undefined {
  if (!lat1 || !lng1 || !lat2 || !lng2) return;
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = radLat1 - radLat2;
  const b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
  let s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137; // EARTH_RADIUS;
  s = Math.round(s * 100) / 100; // 保留两位小数
  return s;
}
