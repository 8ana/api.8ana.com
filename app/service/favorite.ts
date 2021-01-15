import { Service } from 'egg';

export default class Favorite extends Service {
  async get(params) {
    const favorite = await this.ctx.model.Favorite.get(params);
    return favorite;
  }
}
