import { Service } from 'egg';

export default class List extends Service {
  async list(params = {}) {
    return await this.app.model.List.query(params);
  }
}
