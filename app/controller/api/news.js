'use strict';

const Controller = require('egg').Controller;

class News extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { id } = this.ctx.params;

    // this.service.news 等同于 this.ctx.service.news
    let data = await this.service.redis.get(`news_${id}`);
    if (!data) {
      data = await this.service.news.get(id);
      await this.service.redis.set(`news_${id}`, data, 60 * 60);
    }

    this.ctx.body = {
      success: !!data,
      data,
    };
  }

  async list() {
    const { pageSize = 10, pageNo = 1 } = this.ctx.request.query;
    const result = await this.service.news.list(pageSize, pageNo);

    this.ctx.body = result;
  }
}

module.exports = News;
