import { Service } from 'egg';

export default class Favorite extends Service {
  public async get(params) {
    return await this.app.model.Favorite.get(params);
  }

  public async add(params) {
    return await this.app.model.Favorite.add(params);
  }

  public async edit(params) {
    return await this.app.model.Favorite.edit(params);
  }

  public async delete(params) {
    return await this.app.model.Favorite.delete(params);
  }
}
