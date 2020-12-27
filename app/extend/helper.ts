import crypto = require('crypto');
import { Context } from 'egg';

export interface IFail {
  message?: string;
  status?: number;
  data?: object | number | string;
}

export default {
  // 处理成功请求后的响应
  success(ctx: Context, { data = {}, status = 200, message = '' }: IFail) {
    ctx.body = {
      status: 200,
      data: data || {},
      message: message || ctx.errCodes[status],
    };
    ctx.status = 200;
  },
  // 处理失败请求后的响应
  fail(ctx: Context, { message = '', status = 500, data = {} }: IFail) {
    console.log(ctx.errCodes[status], status, 'errCodes');
    ctx.body = {
      status: status || 500,
      message: message || ctx.errCodes[status],
      data: data || {},
    };
    ctx.status = 200;
  },

  md5(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  },
  copy(data) {
    return JSON.parse(JSON.stringify(data));
  },
  randomString(len) {
    len = len || 32;
    const chars = 'ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    const maxPos = chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  },
  deleleParams(obj, name) {
    delete obj[`${name}_hits`];
    delete obj[`${name}_hits_day`];
    delete obj[`${name}_hits_week`];
    delete obj[`${name}_hits_month`];
    delete obj[`${name}_hits_lasttime`];
  },
};
