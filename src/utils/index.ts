
export * from './storage';

import { isObject } from './is';

const IMG_LIST: any[] = [];

export function debounce<T extends (...args: any[]) => void>(func: T, delay = 500, immediate?: boolean): T {
  let timerId: any

  return function (this: any, ...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }
    if (immediate) {
      const callNow = !timerId
      timerId = setTimeout(() => {
        timerId = null
      }, delay)
      if (callNow) {
        func.apply(this, args)
      }
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  } as T
}
// 时间格式化
export const dateFormatting = (time: any, cFormat?: string) => {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  // 字符串数字形式的时间戳要转换下
  let newTime = time
  if (/^\d+?$/.test(time)) {
    newTime = parseInt(time)
  }
  const date = typeof time === 'object' ? time : new Date(newTime)
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|w)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'w') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}
// 动态远程加载script脚本
export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = src
    document.head.appendChild(script)
  })
}
// 随机数字符串
export const randomString = (len: number) => {
  len = len || 32
  const str = 'ABCDEFGHIJKMNOPQSTWXYZabcdefghijklmnopqrstwxyz1234567890'
  let n = ''
  for (let i = 0; i < len; i++) {
    n += str.charAt(Math.floor(Math.random() * str.length))
  }
  return n
}

export const jsonParseStringify = (val: any) => {
  if (typeof val === 'object') {
    return JSON.parse(JSON.stringify(val))
  } else {
    return val
  }
}
/**
 * 设置或获取local session storage
 * @param key
 * @param data　有值时set，否则get
 * @param type local/session默认
 */
export const getSetStorage = (key: string, data?: string, type = 'session') => {
  //console.log(key, data)
  const winType = type === 'session' ? 'sessionStorage' : 'localStorage'
  if (data) {
    window[winType].setItem(key, data)
  } else {
    return window[winType].getItem(key)
  }
}


export function getRandomImg() {
  return IMG_LIST[Math.floor(Math.random() * 5)];
}

/**
 *
 * 设置租户请求头
 *
 */
export function setDev(dev?: string) {
  dev && localStorage.setItem('xSystemEnv', dev);
}

/**
 *
 * 获取置租户请求头
 *
 */
export function getDev() {
  return getUser().env || 'prod';
}
// /设置token
export function setToken(token: string) {
  localStorage.setItem('token', token);
}
// 获取token'
export function getToken() {
  return localStorage.getItem('token');
}
// 删除 缓存信息
export function removeLocalStorage(key?: string) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
}
// 设置用户信息
export function setUser(userInfo: any) {
  if (isObject(userInfo)) {
    setToken(userInfo.token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  } else {
    localStorage.setItem('userInfo', userInfo);
  }
}

// 获取用户信息
export function getUser() {
  return JSON.parse(localStorage.getItem('userInfo') || '{}');
}
// 设置 tenant
export function setTenant(value: string) {
  localStorage.setItem('tenant', value);
}
// 获取 tenant
export function getTenant() {
  return localStorage.getItem('tenant') || '';
}

// 暂存代办信息
export function setApplyInfo(applyInfo: any) {
  if (isObject(applyInfo)) {
    localStorage.setItem('applyInfo', JSON.stringify(applyInfo));
  } else {
    localStorage.setItem('applyInfo', applyInfo);
  }
}

// 获取用户信息
export function getApplyInfo() {
  return JSON.parse(localStorage.getItem('applyInfo') || '{}');
}

// 退出登录
export function loginOut() {
  removeLocalStorage();
  // router.replace('/login');
}
// 手机号脱敏
export function encryptionPhone(phone: any) {
  return phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
}
// 身份证脱敏
export function encryptionIdCard(idCard: any) {
  if (null != idCard && idCard != undefined) {
    const pat = /(\d{4})\d*(\d{4})/;
    return idCard.replace(pat, '$1***********$2');
  } else {
    return '';
  }
}
// 姓名脱敏
export function encryptionName(name: any) {
  if (null != name && name != undefined) {
    if (name.length <= 3) {
      return '*' + name.substring(1, name.length);
    } else if (name.length > 3 && name.length <= 6) {
      return '**' + name.substring(2, name.length);
    } else if (name.length > 6) {
      return name.substring(0, 2) + '****' + name.substring(6, name.length);
    }
  } else {
    return '';
  }
}
// 邮箱脱敏
export function encryptionEmail(email: any) {
  let new_email = email;
  if (String(email).indexOf('@') > 0) {
    const str = email.split('@');
    let _s = '';
    if (str[0].length > 3) {
      //@前面多于3位
      for (let i = 3; i < str[0].length; i++) {
        _s += '*';
      }
      new_email = str[0].substr(0, 3) + _s + '@' + str[1];
    } else {
      //@前面小于等于于3位
      for (let i = 1; i < str[0].length; i++) {
        _s += '*';
      }
      new_email = str[0].substr(0, 1) + _s + '@' + str[1];
    }
  }
  return new_email;
}

/**
 *
 * 合并对象
 *
 */
export function marge(defaultObj: object, newObj: object) {
  return Object.assign(defaultObj, newObj);
}
/**
 * 组合函数
 * composeRight (参数从右往左)
 * compose (参数从左往右)
 *
 */
export function composeRight(...fns: any[]) {
  return function (x: any) {
    return fns.reduceRight((v, f) => f(v), x);
  };
}
export function compose(...fns: any[]) {
  return function (x: any) {
    return fns.reduce((v, f) => f(v), x);
  };
}

// 初始化列表搜索条件
export function initParams(opt: any = {}) {
  return Object.assign(
    {
      current: 1,
      size: 10,
      model: {},
      order: '',
      sort: 'id',
      extra: {},
    },
    opt,
  );
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time: string | number, cFormat: string) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time.replace(/\-/g, '/')); // 兼容safari
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: string | any[], key: string) => {
    let value: number = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

// JS获取某月首尾日
export function getMonthDay(value: string | number | Date) {
  const date = new Date(value);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const firstdate = year + '-' + month + '-01';
  const day = new Date(year, month, 0);
  const lastdate = year + '-' + month + '-' + day.getDate();
  return { firstdate, lastdate };
}

// 获取指定日期到今天的相差天数
export function getDiffDate(targetDate: string | number | Date) {
  let date1 = new Date(targetDate);
  let date2 = new Date();
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = date2.getTime() - date1.getTime();
  const diffDate = diff / (24 * 60 * 60 * 1000);
  return diffDate + 1;
}

export function checkIdCard(val: string | number[]) {
  const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
  const code = val.substring(17);
  if (p.test(val)) {
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += val[i] * factor[i];
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true;
    }
  }
  return false;
}

export function checkPhone(val: string) {
  return /^1[3456789]\d{9}$/.test(val);
}
export function checkFixedLine(val: string) {
  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(val);
}
// 根据身份证计算年龄 性别
export interface SexAndAge {
  sex?: string | number;
  age?: string | number;
}
export function analyzeIDCard(IdCard: string | number) {
  const sexAndAge: SexAndAge = {
    age: 0,
    sex: '未知',
  };
  //获取用户身份证号码
  const userCard = IdCard.toString();
  //如果用户身份证号码为undefined则返回空
  if (!userCard) {
    return sexAndAge;
  }

  // 获取性别
  if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
    sexAndAge.sex = '1 男';
  } else {
    sexAndAge.sex = '0 女';
  }

  // 获取出生日期
  // userCard.substring(6,10) + "-" + userCard.substring(10,12) + "-" + userCard.substring(12,14)
  const yearBirth = userCard.substring(6, 10);
  const monthBirth = userCard.substring(10, 12);
  const dayBirth = userCard.substring(12, 14);
  // 获取当前年月日并计算年龄
  const myDate = new Date();
  const monthNow = myDate.getMonth() + 1;
  const dayNow = myDate.getDate();
  let age = myDate.getFullYear() - yearBirth;
  if (monthNow < monthBirth || (monthNow == monthBirth && dayNow < dayBirth)) {
    age--;
  }
  // 得到年龄
  sexAndAge.age = age;
  // 返回 性别和年龄
  return sexAndAge;
}
// 返还单位千米
export function getDistance(lng1: number, lng2: number, lat1: number, lat2: number) {
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = radLat1 - radLat2;
  const b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
  let s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2),
      ),
    );
  s = s * 6378.137; // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}
