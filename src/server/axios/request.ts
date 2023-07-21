import Request from './index';
import { AxiosResponse } from 'axios';
import qs from 'qs';
import type { RequestConfig } from './type';
import { getDev, getTenant, getToken } from '@/utils';
import { Base64 } from 'js-base64';
import { handleSuccess, handleError } from './utils';

export interface CustomResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}

// 重写返回类型
interface CustomRequestConfig<T, R> extends RequestConfig<CustomResponse<R>> {
  data?: T;
  custom?: any;
  formData?: any;
}

let baseURL = '';
const protocol = window.location.protocol;
const host = window.location.host;
if (host.split(':')[0] === 'localhost') {
  baseURL = '/api';
} else {
  baseURL = `${protocol}//${host}${import.meta.env.VITE_GLOB_API_URL}`;
}
const request = new Request({
  baseURL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config: AxiosResponse) => {
      const token = getToken();
      const nowDev = getDev();
      if (token) {
        config.headers.token = `Bearer ${token}`;
      }
      if (nowDev) {
        config.headers['x-system-env'] = `${nowDev}`;
      }
      const {
        VITE_GLOB_MULTI_TENANT_TYPE: multiTenantType,
        VITE_GLOB_CLIENT_ID: clientId,
        VITE_GLOB_CLIENT_SECRET: clientSecret,
      } = import.meta.env;
      // 增加租户编码
      if (multiTenantType !== 'NONE') {
        config.headers.tenant = getTenant();
      }
      // 添加客户端信息
      (config as AxiosResponse).headers['Authorization'] = `Basic ${Base64.encode(
        `${clientId}:${clientSecret}`,
      )}`;
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const customRequest = <D = any, T = any>(config: CustomRequestConfig<D, T>) => {
  const method = config.method ? config.method.toLocaleUpperCase() : 'GET';
  const publicParams = {
    ts: Date.now(),
  };
  const httpDefaultOpts: any = {
    method,
    baseURL,
    url: config.url,
    responseType: config.responseType || '',
    timeout: (config?.custom && config?.custom['timeout']) || 30000,
  };
  if (config['meta']) {
    httpDefaultOpts.headers = config['meta'];
  }

  const dataRequest = ['PUT', 'GET', 'POST', 'PATCH'];
  if (dataRequest.includes(method)) {
    // console.log(config.data);
    if (config.params) {
      httpDefaultOpts.params = config.params || {};
    } else {
      httpDefaultOpts.data = config.data || {};
    }
  } else {
    httpDefaultOpts.params = {
      ...publicParams,
      ...(config.data || {}),
    };
  }
  if (
    httpDefaultOpts.headers &&
    httpDefaultOpts.headers['content-type'] &&
    httpDefaultOpts.headers['content-type'] == 'application/x-www-form-urlencoded'
  ) {
    httpDefaultOpts.data = qs.stringify(httpDefaultOpts.data);
  }
  debugger;
  if (config.formData) {
    httpDefaultOpts.transformRequest = [
      (data) => {
        const formData = new FormData();
        if (data) {
          Object.entries(data).forEach((item: any) => {
            formData.append(item[0], item[1]);
          });
        }
        return formData;
      },
    ];
  }
  return new Promise((resolve, reject) => {
    request.instance
      .request(httpDefaultOpts)
      .then((res: any) => {
        handleSuccess(res, resolve, config);
      })
      .catch((err: any) => {
        handleError(err, reject, config);
      });
  });
  // return request.request<CustomResponse<T>>(config);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};

export default customRequest;
