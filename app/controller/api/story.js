'use strict';

const Controller = require('egg').Controller;

class Story extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { id } = this.ctx.params;

    // this.service.news 等同于 this.ctx.service.news
    let data = await this.service.redis.get(`story_${id}`);
    if (!data) {
      data = await this.service.story.get(id);
      await this.service.redis.set(`story_${id}`, data, 60 * 60);
    }

    this.ctx.body = {
      success: !!data,
      data,
    };
  }

  async list() {
    const { pageSize = 10, pageNo = 1 } = this.ctx.request.query;
    const result = await this.service.story.list(pageSize, pageNo);

    this.ctx.body = result;
  }
}

module.exports = Story;
