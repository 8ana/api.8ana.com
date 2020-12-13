'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
class CaptchaController extends Controller {
  async getcaptcha() {
    const { ctx } = this;
    const captcha = svgCaptcha.create({
      width: 96, // svg图像的宽度
      height: 38, // svg图像的高度
      ignoreChars: '0o1i', // 生成验证码时忽略的字符
      size: 4, // 字符长度
      noise: 2, // 干扰度
      background: '#f0f1f5', // 背景颜色
      color: true,
    });
    ctx.cookies.set('captcha', captcha.text.toLocaleLowerCase(), {
      maxAge: 300 * 1000,
      httpOnly: true,
      signed: true,
      encrypt: true, // 推荐加密存储  获取cookie时也要带上该参数值
    });
    ctx.body = captcha.data; // 接口返回验证码的SVG图像代码
  }

  async expCaptcha() {
    const { ctx } = this;
    const c = this.ctx.cookies.get('captcha', { encrypt: true });
    console.log(c);
    ctx.helper.success(ctx, { data: c });
  }
}
module.exports = CaptchaController;
