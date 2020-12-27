import { Service } from 'egg';

export default class User extends Service {
  // 获取非当前登录用户的信息
  async get(id) {
    // const { ctx } = this;
    // ctx.state.user 可以提取到JWT编码的data
    // const id = ctx.state.user.data.user_id;
    return await this.app.model.User.get({ user_id: id });
  }
  // 登录时验证用户信息
  async findUser(params = {}) {
    return await this.app.model.User.get(params, ['user_password', 'user_id', 'user_name', 'user_avatar', 'user_status', 'user_salt', 'user_email', 'user_admin']);
  }

  async list(params = {}) {
    const user = await this.app.model.User.query({
      ...params,
      attributes: ['user_id', 'user_name'],
    });
    return user;
  }

  async add(params = {}) {
    return await this.app.model.User.add(params);
  }

  async edit(params = {}) {
    return await this.app.model.User.edit(params);
  }

  async delete(params = {}) {
    return await this.app.model.User.delete(params);
  }
}
