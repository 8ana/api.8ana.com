import { Service } from 'egg';

export default class Feed extends Service {
  async get(id) {
    const feed = await this.app.model.Feed.get({
      id,
      attributes: ['feed_id', 'feed_cid', 'feed_sid', 'feed_type', 'feed_hits', 'feed_hits_month', 'feed_hits_day', 'feed_hits_week', 'feed_hits_lasttime'],
    });
    return feed;
  }

  async list(params = {}) {
    const feed = await this.app.model.Feed.query({
      ...params,
      attributes: ['feed_id', 'feed_cid', 'feed_sid', 'feed_type'],
    });
    return feed;
  }

  async add(params: any = {}) {
    const { sid, cid, uid, type, ip } = params;
    const { app } = this;
    return await app.model.Feed.add({
      ...params,
      feed_sid: sid,
      feed_cid: cid,
      feed_uid: uid,
      feed_type: type,
      feed_ip: app.utils.Tool.ip2long(ip),
      feed_status: 1,
    });
  }

  async edit(params = {}) {
    return await this.app.model.Feed.edit(params);
  }

  async delete(params = {}) {
    return await this.app.model.Feed.delete(params);
  }
}
