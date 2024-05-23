/**
 * base64转File
 * 原生返回的二进制数据，(注意!这里没有文件前缀data:image/jpeg;base64,)
 * @param base64Data string
 * @returns file Blob
 */
export function base64ToFile(base64Data: string): File {
  const dataArr = base64Data.split(","); // 根据,来分隔
  const imageType = dataArr[0].match(/:(.*?);/)?.[1]; // 获取文件类型。使用正则捕获 image/jpeg
  const textData = window.atob(dataArr[1]); // 使用atob() 将base64 转为文本文件
  const arrayBuffer = new ArrayBuffer(textData.length); // 创建一个二进制数据缓冲区，可以理解为一个数组
  const uint8Array = new Uint8Array(arrayBuffer); // 创建一个类型化数组对象，可以理解为上面的数组的成员，给这个对象赋值就会放到上面的数组中。
  for (let i = 0; i < textData.length; i++) {
    uint8Array[i] = textData.charCodeAt(i); // 将文本文件转为UTF-16的ASCII, 放到类型化数组对象中
  }

  // 转成file
  return new File([new Blob([arrayBuffer], { type: imageType })], "", {
    type: imageType,
  });
}

/**
 * 将blob或file 文件下载
 * @param blob 对象数据
 * @param filename 文件名
 */
export function downloadFile(blob: Blob, filename: string): void {
  const link = document.createElement("a");
  const body: HTMLBodyElement = document.querySelector(
    "body"
  ) as HTMLBodyElement;
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.style.display = "none";
  body.appendChild(link);
  link.click();
  body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}
