import { Service } from 'egg';

export default class Subject extends Service {
  public async get(id) {
    const { app } = this;
    const data = await await app.model.Subject.get({
      id,
      attributes: [
        'id',
        'name',
        'cid',
        'tag',
        'pic',
        'aliases',
        'created_at',
        'star',
        'director',
        'original',
        'play',
        'url',
        'mcid',
        'content',
        'bigpic',
        'website',
        'company',
        'prty',
        'time',
        'area',
        'language',
        'year',
        'continu',
        'total',
        'up',
        'down',
        'gold',
        'filmtime',
        'weekday',
        'douban',
        'baike',
        'uid',
        'hits',
        'hits_day',
        'hits_week',
        'hits_month',
        'hits_lasttime',
      ],
    });

    return data;
  }

  async list(params = {}) {
    const { app } = this;
    const subject = await app.model.Subject.query({
      ...params,
      attributes: ['id', 'name', 'pic', 'created_at'],
    });
    return subject;
  }

  async add(params = {}) {
    const param = { ...params, status: 0 };
    return await this.app.model.Subject.add(param);
  }

  async edit(params = {}) {
    return await this.app.model.Subject.edit(params);
  }

  async delete(params = {}) {
    return await this.app.model.Subject.delete(params);
  }

  public async mcat(params = {}) {
    return await this.app.model.Subject.mcat(params);
  }

  async typeList(params = {}) {
    const { app } = this;
    const typeList = await app.model.List.query(params);
    return typeList;
  }

  async play(params = {}) {
    return await this.app.model.Subject.play(params);
  }
}
