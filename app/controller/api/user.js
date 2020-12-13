'use strict';

const { Controller } = require('egg');

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
      ctx.body = {
        message: 'Username or password wrong',
      };
    } else {
      const pwd = ctx.helper.md5(ctx.helper.md5(user_password) + user.user_salt);
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
          ctx.body = {
            token,
          };
        } catch (e) {
          console.error(e);
          ctx.body = {
            message: 'Server busy, please try again',
          };
        }
      } else {
        ctx.body = {
          message: 'Username or password wrong',
        };
      }
    }
    helper.success(ctx, { data: ctx.body });
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
    const { id } = this.ctx.params;

    const user = await this.service.user.get(id);

    this.ctx.body = {
      success: !!user,
      user,
    };
  }

  async list() {
    const { ctx, service } = this;
    const { pageSize = 10, pageNo = 1 } = this.ctx.request.query;
    const result = await service.user.list(pageSize, pageNo);

    // 设置响应内容和响应状态码
    ctx.helper.success(ctx, { data: result });
  }

  async reg() {
    const { ctx } = this;
    ctx.helper.success(ctx, { data: ctx.helper.randomString(6) });
  }
}

module.exports = User;
