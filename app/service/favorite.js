'use strict';

const Service = require('egg').Service;

class Favorite extends Service {
  async get(id) {
    const favorite = await this.ctx.model.Favorite.findByPk(id);
    return favorite;
  }
}

module.exports = Favorite;
