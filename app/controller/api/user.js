'use strict';

const { Controller } = require('egg');
const { ip2long } = require('../../util');
class User extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserLoginTransfer = {
      user_name: { type: 'string', required: true, allowEmpty: false },
      user_password: { type: 'string', required: true, allowEmpty: false },
    };
  }

  // 用户登入
  async login() {
    const { ctx, config, app } = this;
    const { service, helper } = ctx;
    // 校验参数
    ctx.validate(this.UserLoginTransfer);
    const { user_name, user_password } = ctx.request.body;
    const user = await service.user.findByName(user_name);

    if (!user) {
      helper.fail(ctx, { message: '用户名错误' });
    } else if (user.user_status === 0) {
      helper.fail(ctx, { message: '用户未审核' });
    } else {
      const pwd = helper.md5(helper.md5(user_password) + user.user_salt);
      if (pwd === user.user_password) {
        // 生成Token令牌
        const token = app.jwt.sign(
          {
            user_id: user.user_id,
            user_name: user.user_name,
            user_avatar: user.user_avatar,
          },
          config.jwt.secret,
          { expiresIn: '7d' }
        );
        try {
          await app.redis.set(`token_${user.user_id}`, token);
          helper.success(ctx, { data: token });
        } catch (e) {
          console.error(e);
          helper.fail(ctx, { message: '服务器忙，请稍后再试' });
        }
      } else {
        helper.fail(ctx, { message: '密码不正确' });
      }
    }
  }

  async userInfo() {
    const { ctx } = this;
    const { user } = ctx.state;
    ctx.helper.success(ctx, { data: user });
  }

  async logout() {
    const { ctx } = this;
    ctx.helper.success(ctx, { data: '退出成功' });
  }

  async get() {
    // 获取 url 中的 id 参数
    const { ctx } = this;
    const { id } = ctx.params;
    const user = await this.service.user.get(id);
    ctx.helper.success(ctx, { data: user });
  }

  async list() {
    const { ctx, service } = this;
    const result = await service.user.list(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  async add() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const ip = this.ctx.request.ip;
    const rand = ctx.helper.randomString(6);
    params.user_password = ctx.helper.md5(ctx.helper.md5(params.user_password) + rand);
    const result = await service.user.add({ ...params, user_salt: rand, user_reg_ip: ip2long(ip), user_last_login_ip: ip2long(ip) });
    ctx.helper.success(ctx, { data: result });
  }

  async edit() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    if (params.user_password) {
      const rand = ctx.helper.randomString(6);
      params.user_salt = rand;
      params.user_password = ctx.helper.md5(ctx.helper.md5(params.user_password) + rand);
    }
    const result = await service.user.edit(params);
    ctx.helper.success(ctx, { data: result });
  }

  async delete() {
    const { ctx, service } = this;
    const result = await service.user.delete(ctx.request.body);
    ctx.helper.success(ctx, { data: result });
  }
}

module.exports = User;
