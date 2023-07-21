export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isObject(val: any): val is Object {
  return val && Object.prototype.toString.call(val);
}

export function isDev() {
  return import.meta.env.DEV;
}
