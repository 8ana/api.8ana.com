import { Service } from 'egg';

export default class Favorite extends Service {
  async get(params) {
    return await this.ctx.model.Favorite.get(params);
  }
}
