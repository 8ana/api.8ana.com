import * as dayjs from 'dayjs';
import { Controller } from 'egg';

const formatDate = 'YYYY-MM-DD HH:mm:ss';
const formatDay = 'YYYY-MM-DD';

const care = {
  47: 7,
  48: 29,
  49: 53,
  50: 49,
  51: 48,
  52: 14,
  53: 15,
  54: 25,
  55: 24,
  56: 18,
  57: 11,
  58: 3,
  59: 1,
  60: 2,
  61: 21,
  63: 22,
  64: 28,
  104: 6,
  105: 16,
  106: 8,
  107: 54,
  108: 9,
  109: 5,
  116: 26,
  122: 4,
  126: 68,
  127: 20,
  128: 19,
  129: 30,
  130: 31,
  131: 17,
  132: 39,
  133: 65,
  134: 33,
  135: 50,
  136: 40,
  137: 63,
  138: 27,
  139: 64,
  140: 32,
  141: 23,
  142: 67,
  143: 51,
  144: 66,
  145: 52,
  146: 55,
  147: 56,
  148: 69,
  149: 57,
  150: 58,
  151: 59,
  152: 60,
  153: 61,
  154: 62,
  155: 44,
  156: 43,
  157: 10,
  158: 34,
  159: 35,
  160: 38,
  161: 36,
  162: 37,
  163: 41,
  164: 42,
  165: 13,
  166: 12,
  167: 70,
  168: 71,
  169: 72,
  170: 46,
  171: 45,
  172: 47,
  173: 73,
  174: 74,
  175: 75,
  176: 76,
  177: 77,
  178: 78,
  179: 79,
  180: 80,
  181: 81,
  182: 82,
  183: 83,
  184: 84,
  185: 85,
  186: 86,
};

export default class ReController extends Controller {
  async list() {
    const findMcid = (mcid = '') => {
      const ids = mcid.split(',');
      const r = [];
      for (let i = 0; i < ids.length; i++) {
        const v = care[ids[i]] as never;
        r.push(v);
      }
      return r.join(',');
    };

    const findCid = cid => {
      const care = {
        201: 2,
        202: 4,
        203: 3,
        204: 6,
        4: 5,
        35: 7,
      };
      return care[cid];
    };
    const { ctx, service } = this;

    const result = await service.re.list();
    const data = ctx.helper.copy(result);
    const page = 50;
    const len = data.length / page;
    for (let i = 0; i < len; i++) {
      const a = data.splice(0, page);
      const r = [];
      for (let j = 0; j < a.length; j++) {
        const {
          vod_id: id,
          vod_cid: cid,
          vod_mcid: mcid,
          vod_name: name,
          vod_foreign: foreign,
          vod_aliases: aliases,
          vod_tag: tag,
          vod_label: label,
          vod_color: color,
          vod_actor: star,
          vod_director: director,
          vod_pic: pic,
          vod_pic_thumb: pic_thumb,
          vod_bigpic: bigpic,
          vod_website: website,
          vod_content: content,
          vod_original: original,
          vod_company: company,
          vod_time: time,
          vod_baike: baike,
          vod_area: area,
          vod_language: language,
          vod_url: url,
          vod_letter: letter,
          vod_letters: letters,
          vod_total: total,
          vod_length: length,
          vod_filmtime: filmtime,
          vod_hits: hits,
          vod_hits_day: hits_day,
          vod_hits_week: hits_week,
          vod_hits_month: hits_month,
          vod_hits_lasttime: hits_lasttime,
          vod_isend: isend,
          vod_play: play,
          vod_inputer: inputer,
          vod_gold: gold,
          vod_up: up,
          vod_down: down,
          vod_isfilm: broadcast,
          vod_douban: douban,
          vod_continu: serialized,
          vod_uid: uid,
          vod_stars: stars,
          vod_prty: prty,
          vod_weekday: weekday,
          vod_addtime: created_at,
        } = a[j];
        const newD = {
          id,
          name,
          foreign,
          aliases,
          tag,
          label,
          color,
          star,
          director,
          pic,
          pic_thumb,
          bigpic,
          website,
          original,
          company,
          baike,
          time,
          area,
          language,
          play,
          url,
          letter,
          letters,
          total,
          serialized,
          length,
          filmtime: dayjs(filmtime * 1000).format(formatDay),
          hits,
          hits_day,
          hits_week,
          hits_month,
          isend,
          inputer,
          gold,
          up,
          down,
          broadcast,
          douban,
          stars,
          prty,
          weekday,
          created_at: dayjs(created_at * 1000).format(formatDate),
          updated_at: dayjs(created_at * 1000).format(formatDate),
          hits_lasttime: dayjs(hits_lasttime * 1000).format(formatDate),
          cid: findCid(cid),
          mcid: findMcid(mcid),
          uid: uid || 1,
          content: content.replace(/<.*?>/g, ''),
        } as never;
        r.push(newD);
      }
      // console.log(r);
      await service.re.adds(r);
    }
  }

  async mcat() {
    const { ctx, service } = this;
    const result = await service.re.mcat();
    const data = ctx.helper.copy(result);
    const r = [];
    for (let i = 0; i < data.length; i++) {
      const { m_name: name, m_ename: title, m_order: rank } = data[i];
      const t = { cid: 1, name, title, rank } as never;
      r.push(t);
    }
    console.log(r);
    await service.re.addsMcat(r);
  }

  async mcid() {
    const { ctx, service } = this;
    const result = await service.re.mcid();
    const data = ctx.helper.copy(result);
    const r = data.map((item: any) => {
      const { mcid_id: aid, mcid_mid: mid } = item;
      return { aid, mid: care[mid], sid: 1 };
    });
    console.log(data, care, r);
    await service.re.addsMcid(r);
  }

  async gold() {
    const { ctx, service } = this;
    const result = await service.re.gold();
    const data = ctx.helper.copy(result);
    const page = 50;
    const len = data.length / page;
    for (let i = 0; i < len; i++) {
      const a = data.splice(0, page);
      const r = [];
      for (let j = 0; j < a.length; j++) {
        const { gold_vid: aid, gold_addtime: created_at, gold_ip: ip, F1, F2, F3, F4, F5 } = a[j];
        let rating = 0;
        if (F1) {
          rating = 1;
        } else if (F2) {
          rating = 2;
        } else if (F3) {
          rating = 3;
        } else if (F4) {
          rating = 4;
        } else if (F5) {
          rating = 5;
        }
        const newD = {
          aid,
          ip,
          rating,
          cid: 2,
          uid: 1,
          sid: 1,
          created_at: dayjs(created_at * 1000).format(formatDate),
          updated_at: dayjs(created_at * 1000).format(formatDate),
        } as never;
        r.push(newD);
      }
      console.log(r);
      await service.re.addsGold(r);
    }
  }

  public async tag() {
    const { ctx, service } = this;
    const result = await service.re.taglist();
    const data = ctx.helper.copy(result);
    const page = 50;
    const len = data.length / page;
    for (let i = 0; i < len; i++) {
      const a = data.splice(0, page);
      const r = [];
      for (let j = 0; j < a.length; j++) {
        const { tag_id: aid, tag_name: name } = a[j];
        const newD = {
          aid,
          name,
          cid: 2,
          sid: 1,
        } as never;
        r.push(newD);
      }
      console.log(r);
      await service.re.addsTag(r);
    }
  }

  async play() {
    const { ctx, service } = this;
    const result = await service.re.playList();
    const data = ctx.helper.copy(result);
    const r = data.reduce((tatal, { play_title: title, play_name: name, play_oid: rank }, index) => {
      tatal[index] = { name, title, rank, display: 1 };
      return tatal;
    }, []);
    console.log(r);
    await service.re.addsPlay(r);
  }
}
