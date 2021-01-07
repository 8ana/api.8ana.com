import { Service } from 'egg';

export default class User extends Service {
  // 获取非当前登录用户的信息
  async get(id) {
    // const { ctx } = this;
    // ctx.state.user 可以提取到JWT编码的data
    // const id = ctx.state.user.data.id;
    return await this.app.model.User.get({ id });
  }
  // 登录时验证用户信息
  async findUser(params = {}) {
    return await this.app.model.User.get(params, ['id', 'admin', 'password', 'username', 'avatar', 'status', 'salt', 'email']);
  }

  async list(params = {}) {
    const user = await this.app.model.User.query({
      ...params,
      attributes: ['id', 'username'],
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
