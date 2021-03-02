import { Service } from 'egg';

export default class Mcat extends Service {
  public async list(params) {
    return await this.app.model.Mcat.query(params);
  }

  public async get(params = {}) {
    return await this.app.model.Mcat.get(params);
  }

  public async add(params) {
    return await this.app.model.Mcat.add(params);
  }

  public async edit(params) {
    return await this.app.model.Mcat.edit(params);
  }

  public async delete(params) {
    return await this.app.model.Mcat.delete(params);
  }
}
