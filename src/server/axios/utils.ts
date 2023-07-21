import { removeLocalStorage } from '@/utils';
import { TIMEOUT, OTHER, NOLOGIN } from './error-code';
import { ElMessage, ElMessageBox } from 'element-plus';
import { LOGIN_OUT_PATH } from '@/utils/helpers';
import { isDev } from '@/utils/is';
// 如果是本地开发环境就跳转到登录页面
const LOGIN_PATH = isDev() ? '/login' : LOGIN_OUT_PATH;

// 成功处理函数
export function handleSuccess(res: any, resolve: Function, opts?: any) {
  let isAlert: boolean = opts.custom ? opts.custom['isAlert'] : false;
  isAlert = isAlert === undefined ? true : isAlert;
  console.log(isAlert);
  const data: any = res.data;
  // console.log(data);
  if (data.isSuccess == false) {
    // 未登录
    if (NOLOGIN.includes(data.code)) {
      ElMessageBox({
        type: 'error',
        message: data.msg || data.message,
      }).then(() => {
        removeLocalStorage();
        window.location.hash = LOGIN_PATH;
      });
    } else {
      ElMessage({
        message: data.msg || data.message || '',
        type: 'error',
      });
    }
  }
  resolve(data);
}

// 失败处理函数
export function handleError(error: any, reject: Function, opts?: any) {
  console.log(error, 'error');
  console.log(error.response);
  console.log(opts);
  if (error.code == TIMEOUT) {
    ElMessage({
      message: '请求超时',
      type: 'error',
    });
  } else if (error.response && error.response.data) {
    if (error.response.status === 500) {
      ElMessage({
        message: error.response.data,
        type: 'error',
      });
    }
    if (NOLOGIN.includes(error.response.data.code)) {
      ElMessageBox({
        type: 'error',
        message: error.response.data.errorMsg || error.response.data.msg,
      }).then(() => {
        removeLocalStorage();
        window.location.hash = LOGIN_PATH;
      });
    } else {
      const resData = error.response.data;

      if (OTHER.includes(resData.code)) {
        ElMessageBox({
          type: 'error',
          message: resData.msg || resData.message,
        }).then(() => {
          removeLocalStorage();
          window.location.hash = LOGIN_PATH;
        });
      } else if (resData.msg) {
        console.log('我是不是错了？');
        ElMessage({
          message: resData.msg,
          type: 'error',
        });
      } else if (resData.message) {
        ElMessage({
          message: resData.message,
          type: 'error',
        });
        window.location.hash = LOGIN_PATH;
      }
    }
  } else if (error.message || error.msg) {
    ElMessage({
      message: error.message || error.msg,
      type: 'error',
    });
  }
  reject(error);
}
