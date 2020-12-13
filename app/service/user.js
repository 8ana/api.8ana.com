'use strict';

const Service = require('egg').Service;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

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

  async list(pageSize, pageNo, orderBy = 'user_reg_time', order = 'DESC') {
    const offset = pageSize * (pageNo - 1);

    const { count, rows } = await this.ctx.model.User.findAndCountAll({
      attributes: ['user_id'],
      where: {
        user_status: 1,
      },
      order: [[orderBy, order]],
      limit: toInt(pageSize),
      offset,
    });

    return {
      list: rows,
      pages: {
        pageNo,
        pageSize,
        total: count,
      },
    };
  }
}

module.exports = User;
