import { Service } from 'egg';

export default class News extends Service {
  async get(params) {
    return await this.ctx.model.News.get(params);
  }

  async list(params = {}) {
    return await this.app.model.News.query({
      ...params,
      attributes: ['id', 'name', 'pic', 'created_at'],
    });
  }
}
