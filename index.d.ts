export function scriptInit(
  url: string,
  name?: string
): (Window & typeof globalThis) | Promise<unknown>;
export function downloadFile(blob: Blob, filename: string): void;
export function fullScreen(el: Element, fullFlag: boolean): void;
export function getDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number | undefined;
export function base64ToFile(base64Data: string): File;
export function copyToClipBoard(value: string): Promise<void>;
export function getLocaLatLon(): Promise<
  Record<"latitude" | "longitude", number>
>;
export function checkEnv(userAgent?: string, platform?: string): Lib.CheckEnv;

declare namespace Lib {
  interface CheckEnv {
    isIos: boolean;
    isAndroid: boolean;
    isWechat: boolean;
    isMobile: boolean;
    isWin: boolean;
    isZiJie: boolean;
    isMiniprogram: boolean;
  }
}
