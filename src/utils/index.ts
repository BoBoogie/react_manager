/**
 * 工具函数封装
 */

// 格式化金额
export const formatMoney = (num?: number | string) => {
  if (!num) return '0.00';
  const a = parseFloat(num.toString());
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' });
};

// 格式化数字
export const formatNum = (num?: number | string) => {
  if (!num) return '0';

  const a = num.toString();
  if (a.indexOf('.') > -1) return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
};

// 格式化日期
export const formatDate = (date?: Date | string, rule?: string) => {
  let curDate = new Date();
  if (date instanceof Date) curDate = date;
  else if (date) curDate = new Date(date);

  let fmt = rule || 'yyyy-MM-dd HH:mm:ss';
  fmt = fmt.replace(/(y+)/, curDate.getFullYear().toString());
  type OType = {
    [key: string]: number;
  };
  const O: OType = {
    'M+': curDate.getMonth() + 1,
    'd+': curDate.getDate(),
    'H+': curDate.getHours(),
    'm+': curDate.getMinutes(),
    's+': curDate.getSeconds()
  };
  for (const k in O) {
    // const val = O[k].toString();
    fmt = fmt.replace(new RegExp(`(${k})`), O[k] > 9 ? O[k].toString() : '0' + O[k].toString());
    // fmt = fmt.replace(new RegExp(`(${k})`), ('00' + val).substring(val.length));
  }
  return fmt;
};
