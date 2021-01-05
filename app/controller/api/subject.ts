import { Controller } from 'egg';

export default class SubjectController extends Controller {
  async get() {
    // 获取 url 中的 id 参数
    const { ctx, service, app } = this;
    const { id } = ctx.params;
    const data = await service.subject.get(id);
    let format: any = {};
    if (data) {
      format = ctx.helper.copy(data);
      const { mcid, actor, director, original, url, play, cid, content } = format;
      const typeList = await service.subject.typeList();
      format.cid = typeList.filter(item => item.list_id === cid);
      format.pid = typeList.filter(item => item.list_id === format.cid[0].list_pid);
      format.content = content.replace(/<.*?>/g, '');
      if (mcid) {
        format.mcid = await service.subject.mcat({ cid: mcid.split(',') });
      }

      if (actor) {
        format.actor = await ctx.getSatr(actor.split(','), service);
      }

      if (director) {
        format.director = await ctx.getSatr(director.split(','), service);
      }

      if (original) {
        format.original = await ctx.getSatr(original.split(','), service);
      }

      if (url) {
        const playlist = await service.subject.play();
        const playArr = play.split('$$$');
        const urlArr = url.split('$$$');

        playlist.forEach(({ play_display }, index) => {
          if (play_display === 0) {
            playlist.splice(index, 1);
            playArr.splice(index, 1);
          }
        });

        const playText = ['免费观看', 'VIP免费观看', '单片付费', 'VIP提前看', '单集付费提前看']; // 0 免费观看 1 VIP免费观看 2 单片付费 3 单集付费提前看
        const list: Array<any> = [];
        const key = ctx.helper.md5(String(new Date().getTime()) + id + 'plain');
        playArr.forEach((item, index) => {
          const url = this.playlist_one(urlArr[index], key, item);
          const info = playlist.filter(sitem => sitem.play_name === item)[0];
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
        format.hits = await ctx.hits({ arr: data, model: 'Subject' }, app);
        format.key = key;
        format.url = list;
        delete format.play;
        ctx.helper.deleleParams(format);
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

  async add() {
    const { ctx, service } = this;
    const result = await service.subject.add(ctx.request.body);
    if (result) {
      const { id, cid, uid } = result;
      const ip = this.ctx.request.ip;
      await service.feed.add({ ip, sid: 1, cid, uid, type: 4, feed_vid: id });
      ctx.helper.success(ctx, { data: result, message: '添加成功' });
    } else {
      ctx.helper.fail(ctx, { data: 0, message: '添加失败' });
    }
  }

  async edit() {
    const { ctx, service } = this;
    const result = await service.subject.edit(ctx.request.body);
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

  // 分解单组播放地址链接
  private playlist_one(url, key, type) {
    const arr = url.replace(/\r\n|\n|\r/, '\r').split('\r');
    return arr.map((item, index) => {
      const i = index + 1;
      const list: any = {};
      list.pid = i;
      if (item.indexOf('$') !== -1) {
        const urlArr = item.split('$');
        if (type === 'all') {
          urlArr.unshift('');
        }
        const [name = '', path = '', pic = '', fen = '', miao = '', source = ''] = urlArr;
        list.name = name.trim();
        list.path = this.app.utils.Tool.encrypt(path.trim(), key);
        // list.path2 = app.utils.Tool.decrypt(list.path, key);
        if (pic) list.pic = pic.trim();
        if (fen) list.fen = fen.trim();
        if (miao) list.miao = miao.trim();
        if (source) list.source = source.trim();
      } else {
        if (type === 'quote') {
          list.name = '';
          list.path = this.app.utils.Tool.encrypt(item.trim(), key);
        } else {
          list.name = `第${index}集`;
          list.path = this.app.utils.Tool.encrypt(item.trim(), key);
        }
      }
      return list;
    });
  }
}
