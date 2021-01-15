import { Service } from 'egg';

export default class News extends Service {
  async get(params) {
    const news = await this.ctx.model.News.get(params);
    return news;
  }

  async list(params = {}) {
    const news = await this.app.model.News.query({
      ...params,
      attributes: ['id', 'name', 'pic', 'created_at'],
    });
    return news;
  }
}
