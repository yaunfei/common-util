/**
 * 进入和退出全屏
 * @param el
 * @param fullFlag
 */
export function fullScreen(el: Element, fullFlag: boolean): void {
  if (!el) return;
  if (fullFlag) {
    el.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// 删除 对象为 '' null undefined的值
export function deleteObjNull(obj: Object) {
  if (!obj || !Object.keys(obj).length) return;
  for (const i in obj) {
    if (obj[i] === '' || obj[i] === null || obj[i] === undefined) {
      delete obj[i];
    }
  }
  return obj;
}
