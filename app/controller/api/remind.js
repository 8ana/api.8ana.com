'use strict';

const Controller = require('egg').Controller;

class Remind extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { id } = this.ctx.params;

    // this.service.news 等同于 this.ctx.service.news
    let data = await this.service.redis.get(`remind_${id}`);
    if (!data) {
      data = await this.service.remind.get(id);
      await this.service.redis.set(`remind_${id}`, data, 60 * 60);
    }

    this.ctx.body = {
      success: !!data,
      data,
    };
  }

  async list() {
    const { pageSize = 10, pageNo = 1 } = this.ctx.request.query;
    const result = await this.service.remind.list(pageSize, pageNo);

    this.ctx.body = result;
  }
}

module.exports = Remind;
