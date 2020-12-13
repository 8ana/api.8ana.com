'use strict';

const crypto = require('crypto');
const { encode } = require('../util/authcode');

module.exports = {
  // 处理成功请求后的响应
  success(ctx, { data = {}, status = 200, message = '' } = {}) {
    if (!data) status = 404;
    ctx.body = {
      status: 200,
      data: data || {},
      message: message || ctx.errCodes[status],
    };
    ctx.status = 200;
  },
  // 处理失败请求后的响应
  fail(ctx, { message = '', status = 500, data = {} } = {}) {
    if (message) {
      if (message instanceof Object) {
        message = message.message;
      }
      ctx.body = {
        status: 500,
        message: message || ctx.errCodes[status],
        data: data || {},
      };
      ctx.status = 200;
    } else {
      throw new Error(message);
    }
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
  // 分解单组播放地址链接
  playlist_one(url, key, type) {
    const arr = url.replace(/\r\n|\n|\r/, '\r').split('\r');
    return arr.map((item, index) => {
      const i = index + 1;
      const list = {};
      list.pid = i;
      if (item.indexOf('$') !== -1) {
        const urlArr = item.split('$');
        if (type === 'all') {
          urlArr.unshift('');
        }
        const [name = '', path = '', pic = '', fen = '', miao = '', source = ''] = urlArr;
        list.name = name.trim();
        list.path = encode(path.trim(), key);
        if (pic) list.pic = pic.trim();
        if (fen) list.fen = fen.trim();
        if (miao) list.miao = miao.trim();
        if (source) list.source = source.trim();
      } else {
        if (type === 'quote') {
          list.name = '';
          list.path = encode(item.trim(), key);
        } else {
          list.name = `第${index}集`;
          list.path = encode(item.trim(), key);
        }
      }
      return list;
    });
  },
  deleleParams(obj, name) {
    delete obj[`${name}_hits`];
    delete obj[`${name}_hits_day`];
    delete obj[`${name}_hits_week`];
    delete obj[`${name}_hits_month`];
    delete obj[`${name}_hits_lasttime`];
  },
};
