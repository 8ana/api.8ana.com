import { Service } from 'egg';

export default class List extends Service {
  async list(params = {}) {
    return await this.app.model.List.query(params);
  }

  async get(params) {
    return await this.app.model.List.get(params);
  }

  async add(params = {}) {
    return await this.app.model.List.add(params);
  }

  async edit(params = {}) {
    return await this.app.model.List.edit(params);
  }

  async delete(params = {}) {
    return await this.app.model.List.delete(params);
  }
}
