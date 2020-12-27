import { Controller } from 'egg';

export default class UserController extends Controller {
  UserLoginTransfer: { user_name: { type: string; required: boolean }; user_password: { type: string; required: boolean } };
  UserAdd: { user_name: { type: string; required: boolean }; user_password: { type: string }; user_email: { type: string } };
  constructor(ctx) {
    super(ctx);

    this.UserLoginTransfer = {
      user_name: { type: 'string', required: true },
      user_password: { type: 'string', required: true },
    };

    this.UserAdd = {
      user_name: { type: 'string', required: true },
      user_password: { type: 'password' },
      user_email: { type: 'email' },
    };
  }

  // 用户登入
  async login() {
    const { ctx, config, app } = this;
    const { service, helper } = ctx;
    // 校验参数
    ctx.validate(this.UserLoginTransfer);
    const { user_name, user_password } = ctx.request.body;
    const user = await service.user.findUser({ user_name });

    if (!user) {
      helper.fail(ctx, { message: '用户名错误' });
    } else if (user.user_status === 0) {
      helper.fail(ctx, { message: '用户未审核' });
    } else {
      const { user_admin, user_id, user_name, user_avatar, user_salt } = user;
      const pwd = helper.md5(helper.md5(user_password) + user_salt);
      if (pwd === user.user_password) {
        // 生成Token令牌
        const token = app.jwt.sign(
          {
            user_id,
            user_name,
            user_avatar,
            user_admin,
          },
          config.jwt.secret,
          { expiresIn: '7d' }
        );
        try {
          await app.redis.set(`token_${user.user_id}`, token);
          helper.success(ctx, { data: token });
        } catch (e) {
          console.error(e);
          helper.fail(ctx, {});
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
    const { ctx, service, UserAdd, app } = this;
    const params = ctx.request.body;
    // 校验参数
    ctx.validate(UserAdd);
    const { user_name, user_email, user_captcha } = params;
    if (user_captcha) {
      const captcha = ctx.cookies.get('captcha', { encrypt: true });
      if (!(user_captcha === captcha)) {
        ctx.helper.fail(ctx, { message: '验证码错误' });
        return;
      }
    }
    if (user_name) {
      const user = await service.user.findUser({ user_name });
      if (user.user_name === user_name) {
        ctx.helper.fail(ctx, { message: '用户名重复' });
        return;
      }
    }
    if (user_email) {
      const email = await service.user.findUser({ user_email });
      if (email.user_email === user_email) {
        ctx.helper.fail(ctx, { message: '邮箱已被使用' });
        return;
      }
    }
    const ip = ctx.request.ip;
    const rand = ctx.helper.randomString(6);
    params.user_password = ctx.helper.md5(ctx.helper.md5(params.user_password) + rand);
    const result = await service.user.add({ ...params, user_salt: rand, user_reg_ip: app.utils.Tool.ip2long(ip), user_last_login_ip: app.utils.Tool.ip2long(ip) });
    ctx.helper.success(ctx, { data: result });
  }

  async edit() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const { user_password, user_email, user_id, user_username } = params;
    if (user_username) {
      delete params.user_username;
      ctx.helper.fail(ctx, { message: '用户名不能修改' });
      return;
    }
    if (user_password) {
      const rand = ctx.helper.randomString(6);
      params.user_salt = rand;
      params.user_password = ctx.helper.md5(ctx.helper.md5(params.user_password) + rand);
    }
    if (user_email) {
      const email = await service.user.findUser({ user_email, not_id: user_id });
      if (email.user_email === user_email) {
        ctx.helper.fail(ctx, { message: '邮箱已被使用' });
        return;
      }
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
