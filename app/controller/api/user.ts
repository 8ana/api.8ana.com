import { Controller } from 'egg';

export default class UserController extends Controller {
  UserLoginTransfer: { username: { type: string; required: boolean }; password: { type: string; required: boolean } };
  UserAdd: { username: { type: string; required: boolean }; password: { type: string }; email: { type: string } };
  constructor(ctx) {
    super(ctx);

    this.UserLoginTransfer = {
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    };

    this.UserAdd = {
      username: { type: 'string', required: true },
      password: { type: 'password' },
      email: { type: 'email' },
    };
  }

  // 用户登入
  async login() {
    const { ctx, config, app } = this;
    const { service, helper } = ctx;
    // 校验参数
    ctx.validate(this.UserLoginTransfer);
    const { username, password } = ctx.request.body;
    const user: any = await service.user.findUser({ username });

    if (!user) {
      helper.fail(ctx, { message: '用户名错误' });
    } else if (user.status === 2) {
      helper.fail(ctx, { message: '用户未审核' });
    } else {
      const { id, username, avatar, salt, admin } = user;
      const pwd = helper.md5(password + salt);
      if (pwd === user.password) {
        // 生成Token令牌
        const token = app.jwt.sign(
          {
            id,
            admin,
            username,
            avatar,
          },
          config.jwt.secret,
          { expiresIn: '7d' }
        );
        try {
          await app.redis.set(`token_${user.id}`, token);
          helper.success(ctx, { data: { token, refreshToken: token } });
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
    if (user) {
      ctx.helper.success(ctx, { data: user });
    } else {
      ctx.helper.fail(ctx, { message: '没有找到内容' });
    }
  }

  async exist() {
    const { ctx } = this;
    const user: any = await this.service.user.exist({});
    ctx.helper.success(ctx, { data: user ? user.id : 'init' });
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
    const { username, email, captcha, isAdmin } = params;
    if (captcha) {
      const getCaptcha = ctx.cookies.get('captcha', { encrypt: true });
      if (!(captcha === getCaptcha)) {
        ctx.helper.fail(ctx, { message: '验证码错误' });
        return;
      }
    }
    if (username) {
      const user: any = await service.user.findUser({ username });
      if (user && user.username === username) {
        ctx.helper.fail(ctx, { message: '用户名重复' });
        return;
      }
    }
    if (email) {
      const user: any = await service.user.findUser({ email });
      if (user && user.email === email) {
        ctx.helper.fail(ctx, { message: '邮箱已被使用' });
        return;
      }
    }
    const ip = ctx.request.ip;
    const rand = ctx.helper.randomString(6);
    params.password = ctx.helper.md5(params.password + rand);
    const user = await service.user.exist();
    if (isAdmin && !user) {
      params.admin = 100;
    }
    const result = await service.user.add({ ...params, salt: rand, reg_ip: app.utils.Tool.ip2long(ip), last_login_ip: app.utils.Tool.ip2long(ip) });
    ctx.helper.success(ctx, { data: result });
  }

  async edit() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const { password, email, id, username } = params;
    if (username) {
      delete params.username;
      ctx.helper.fail(ctx, { message: '用户名不能修改' });
      return;
    }
    if (password) {
      const rand = ctx.helper.randomString(6);
      params.salt = rand;
      params.password = ctx.helper.md5(ctx.helper.md5(params.password) + rand);
    }
    if (email) {
      const user: any = await service.user.findUser({ email, not_id: id });
      if (user.email === email) {
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
