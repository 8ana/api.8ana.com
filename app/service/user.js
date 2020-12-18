'use strict';

const { Service } = require('egg');

class User extends Service {
  async get(id) {
    // const { ctx } = this;
    // ctx.state.user 可以提取到JWT编码的data
    // const id = ctx.state.user.data.user_id;
    const user = await this.ctx.model.User.findByPk(id);
    return user;
  }

  async findByName(name) {
    const {
      ctx: { model },
    } = this;
    const user = await model.User.findOne({
      where: {
        user_name: name,
      },
    });
    return user;
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

module.exports = User;
