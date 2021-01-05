import { Service } from 'egg';

export default class Feed extends Service {
  async get(id) {
    const feed = await this.app.model.Feed.get({
      id,
      attributes: ['id', 'cid', 'sid', 'type', 'hits', 'hits_month', 'hits_day', 'hits_week', 'hits_lasttime'],
    });
    return feed;
  }

  async list(params = {}) {
    const feed = await this.app.model.Feed.query({
      ...params,
      attributes: ['id', 'cid', 'sid', 'type'],
    });
    return feed;
  }

  async add(params: any = {}) {
    const { sid, cid, uid, type, ip } = params;
    const { app } = this;
    return await app.model.Feed.add({
      ...params,
      sid,
      cid,
      uid,
      type,
      ip: app.utils.Tool.ip2long(ip),
      status: 1,
    });
  }

  async edit(params = {}) {
    return await this.app.model.Feed.edit(params);
  }

  async delete(params = {}) {
    return await this.app.model.Feed.delete(params);
  }
}
