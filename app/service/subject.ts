import { Service } from 'egg';

export default class Subject extends Service {
  public async get(id) {
    const { app } = this;
    const data = await await app.model.Subject.get({
      id,
      attributes: [
        'vod_id',
        'vod_name',
        'vod_cid',
        'vod_tag',
        'vod_pic',
        'vod_aliases',
        'vod_addtime',
        'vod_actor',
        'vod_director',
        'vod_original',
        'vod_play',
        'vod_url',
        'vod_mcid',
        'vod_content',
        'vod_bigpic',
        'vod_website',
        'vod_company',
        'vod_tvcont',
        'vod_prty',
        'vod_time',
        'vod_area',
        'vod_language',
        'vod_year',
        'vod_continu',
        'vod_total',
        'vod_up',
        'vod_down',
        'vod_gold',
        'vod_filmtime',
        'vod_weekday',
        'vod_doubanid',
        'vod_baike',
        'vod_uid',
        'vod_hits',
        'vod_hits_day',
        'vod_hits_week',
        'vod_hits_month',
        'vod_hits_lasttime',
      ],
    });

    return data;
  }

  async list(params = {}) {
    const { app } = this;
    const subject = await app.model.Subject.query({
      ...params,
      attributes: ['vod_id', 'vod_name', 'vod_pic', 'vod_addtime'],
    });
    return subject;
  }

  async add(params = {}) {
    const param = { ...params, vod_status: 0 };
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