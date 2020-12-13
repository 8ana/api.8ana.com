'use strict';

const { Controller } = require('egg');
const { encode } = require('../../util/authcode');

class Subject extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { ctx, service } = this;
    const { id } = ctx.params;
    const data = await service.subject.get(id);
    let format = {};
    if (data) {
      format = ctx.helper.copy(data);
      const { vod_mcid, vod_actor, vod_director, vod_original, vod_url, vod_play, vod_cid, vod_content } = format;
      const typeList = await service.subject.typeList();
      format.vod_cid = typeList.filter(item => item.list_id === vod_cid);
      format.vod_pid = typeList.filter(item => item.list_id === format.vod_cid[0].list_pid);
      format.vod_content = vod_content.replace(/<.*?>/g, '');
      if (vod_mcid) {
        format.vod_mcid = await service.subject.mcat({ cid: vod_mcid.split(',') });
      }

      if (vod_actor) {
        format.vod_actor = await ctx.getSatr(vod_actor.split(','));
      }

      if (vod_director) {
        format.vod_director = await ctx.getSatr(vod_director.split(','));
      }

      if (vod_original) {
        format.vod_original = await ctx.getSatr(vod_original.split(','));
      }

      if (vod_url) {
        const play = await service.subject.play();
        const playArr = vod_play.split('$$$');
        const urlArr = vod_url.split('$$$');

        play.forEach(({ play_display }, index) => {
          if (play_display === 0) {
            play.splice(index, 1);
            playArr.splice(index, 1);
          }
        });

        const playText = ['免费观看', 'VIP免费观看', '单片付费', 'VIP提前看', '单集付费提前看']; // 0 免费观看 1 VIP免费观看 2 单片付费 3 单集付费提前看
        const list = [];
        const key = encode(String(new Date().getTime() + id), 'plain');
        playArr.forEach((item, index) => {
          const url = ctx.helper.playlist_one(urlArr[index], key, item);
          const info = play.filter(sitem => sitem.play_name === item)[0];
          const price = url[0].pic || 0;
          let i = 0;
          const obj = {
            // player_sort: info.play_oid,
            // play_sid: index + 1,
            play_title: info.play_title,
            play_name: item,
            play_count: url.length,
            play_price: playText[price],
            play_urls: url,
          };
          if (item === 'all' || item === 'quote') {
            format[item] = obj.play_urls.map(({ path, pic }) => {
              return item === 'all' ? { price: playText[pic || 0], path } : { path };
            });
          } else {
            list[i] = obj;
            i++;
          }
        });
        format.hits = await ctx.hits({ arr: data, name: 'vod', model: 'Subject' });
        format.key = key;
        format.vod_url = list;
        delete format.vod_play;
        ctx.helper.deleleParams(format, 'vod');
      }
      ctx.helper.success(ctx, { data: format });
    } else {
      ctx.helper.fail(ctx, { data: format, message: '没有找到内容' });
    }
  }

  async list() {
    const { ctx, service } = this;
    const result = await service.subject.list(ctx.request.query);

    ctx.helper.success(ctx, { data: result });
  }

  async saveNew() {
    const { ctx, service } = this;
    const result = await service.subject.saveNew(ctx.request.body);
    if (result) {
      const { vod_id, vod_cid, vod_uid } = result;
      const ip = this.ctx.request.ip;
      await service.feed.saveNew({ ip, sid: 1, cid: vod_cid, uid: vod_uid, type: 4, feed_vid: vod_id });
      ctx.helper.success(ctx, { data: result, message: '添加成功' });
    } else {
      ctx.helper.fail(ctx, { data: 0, message: '添加失败' });
    }
  }

  async saveModify() {
    const { ctx, service } = this;
    const result = await service.subject.saveModify(ctx.request.body);
    if (result[0]) {
      ctx.helper.success(ctx, { data: 1, message: '更新成功' });
    } else {
      ctx.helper.fail(ctx, { data: 0, message: '没有找到相关内容或内容没有更新' });
    }
  }

  async delete() {
    const { ctx, service } = this;
    const result = await service.subject.delete(ctx.request.body);
    if (result) {
      ctx.helper.success(ctx, { data: 1, message: '删除成功' });
    } else {
      ctx.helper.fail(ctx, { data: 0, message: '没有找到相关内容' });
    }
  }
}

module.exports = Subject;
