import { Service } from 'egg';

export default class Comments extends Service {
  async get(params) {
    const data = await this.ctx.model.Comments.get(params);
    return data;
  }

  async list(params = {}) {
    const data = await this.app.model.Comments.query({
      ...params,
      attributes: ['id', 'name', 'pic', 'created_at'],
    });
    return data;
  }
}
