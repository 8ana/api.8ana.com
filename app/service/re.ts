import { Service } from 'egg';

export default class Re extends Service {
  public async list() {
    return await this.app.model.Vod.query();
  }

  public async mcat() {
    return await this.app.model.Omcat.query();
  }

  public async mcid() {
    return await this.app.model.Omcid.query();
  }

  public async addsMcat(params = {}) {
    return await this.app.model.Subject.addsMcat(params);
  }

  public async addsMcid(params = {}) {
    return await this.app.model.Mcid.adds(params);
  }

  public async adds(params = []) {
    return await this.app.model.Subject.adds(params);
  }

  public async gold() {
    return await this.app.model.Gold.query();
  }

  public async addsGold(params) {
    return await this.app.model.Favorite.adds(params);
  }
}
