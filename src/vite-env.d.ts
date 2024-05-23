/// <reference types="vite/client" />

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
