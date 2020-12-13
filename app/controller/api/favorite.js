'use strict';

const Controller = require('egg').Controller;

class Favorite extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { id } = this.ctx.params;

    // this.service.user 等同于 this.ctx.service.user
    const favorite = await this.service.favorite.get(id);

    this.ctx.body = {
      success: !!favorite,
      favorite,
    };
  }
}

module.exports = Favorite;
