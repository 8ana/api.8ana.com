import { Service } from 'egg';

export default class Tag extends Service {
  public async list(params) {
    return await this.app.model.Tag.query(params);
  }

  public async edit(params) {
    return await this.app.model.Tag.edit(params);
  }

  public async delete(params) {
    return await this.app.model.Tag.delete(params);
  }
}
