// 身份证
export const idReg =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;

// 手机号正则
export const telReg =
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;

// http｜ https
export const httpReg = /^(((ht|f)tps?):\/\/)/;

// 3位分割正则
export const splitReg = /(?!^)(?=(\w{3})+$)/g;

// 手机号脱敏正则
export const telSecrecyReg = /(\d{3})\d{4}(\d{4})/;

// 视频后缀
export const videoRegExp = /(.mp4|.mov)$/;

// 手机号脱敏
export const getTelSecrecy = (telPhoneNumber: string) => {
  telPhoneNumber.replace(telSecrecyReg, "$1****$2");
};

// 3位分割
export const getThreeSplit = (code: string) => {
    code.replace(splitReg, ',');
};
