import { Service } from 'egg';

export default class Comments extends Service {
  public async get(params) {
    return await this.ctx.model.Comments.get(params);
  }

  public async list(params = {}) {
    const data = await this.app.model.Comments.query({
      ...params,
      attributes: ['id', 'content', 'device', 'created_at', 'is_sticky', 'up', 'down'],
    });
    return data;
  }
  public async add(params) {
    return await this.ctx.model.Comments.add(params);
  }
  public async addReply(params) {
    return await this.ctx.model.Comments.addReply(params);
  }
  public async edit(params) {
    return await this.ctx.model.Comments.edit(params);
  }
  public async delete(params) {
    return await this.ctx.model.Comments.delete(params);
  }
}
