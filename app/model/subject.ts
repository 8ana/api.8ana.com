import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import * as dayjs from 'dayjs';
import subject from '../schema/subject';
import mcat from '../schema/mcat';
import play from '../schema/play';

export interface Subject extends BaseModel {}
export interface Mcat extends BaseModel {}
export interface Play extends BaseModel {}
export interface Condition<T> {
  where: {
    id?: Array<string> | object | T;
    letter?: Array<string>;
    cid?: Array<string>;
    status?: number;
    name?: Array<string>;
    area?: Array<string>;
    language?: Array<string>;
    year?: Array<string>;
    prty?: number;
    weekday?: number;
    filmtime?: object;
    stars?: number;
    hits?: object;
    gold?: object;
    up?: object;
    down?: object;
    created_at?: object;
  };
  attributes?: Array<string>;
  include?: Array<object>;
  order?: Array<string>;
  offset?: number;
  limit?: number;
}

export interface Params {
  attributes?: Array<string>;
  pageSize?: number;
  pageNo?: number;
  filter?: {
    wd?: string;
    ids?: string;
    id?: number;
    not?: number;
    letter?: string;
    cid?: string;
    status?: number;
    name?: string;
    area?: string;
    language?: string;
    year?: string;
    prty?: number;
    day?: number;
    tag?: string;
    mcid?: string;
    weekday?: number;
    filmtime?: string;
    stars?: number;
    hits?: string;
    gold?: string;
    up?: string;
    down?: string;
    created_at?: string;
  };
  order?: any;
}

export default (app: Context) => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;
  const subjectSchema = subject(app);
  const mcatSchema = mcat(app);
  const playSchema = play(app);
  const Subject = model.define('subject', subjectSchema) as BaseModelStatic<Subject>;
  const Mcat = model.define('mcat', mcatSchema, { timestamps: false }) as BaseModelStatic<Mcat>;
  const Play = model.define('play', playSchema, { timestamps: false }) as BaseModelStatic<Play>;

  return class extends Subject<Subject> {
    // 添加
    static async add(params) {
      const result = await Subject.create(params);
      return result;
    }
    // 更新
    static async edit(params) {
      const { id } = params;
      const result = await Subject.update(params, { where: { id } });
      return result;
    }

    // 删除
    static async delete(params) {
      const { id } = params;
      const result = await Subject.destroy({ where: { id } });
      if (result) {
        const param: object = { where: { id, sid: 1 } };
        model.Mcid.destroy(param);
        model.Tag.destroy(param);
        model.Association.destroy({ where: { aid: id, sid: 1 } } as object);
        // model.Actors.destroy({ where: { actors_id: id } });
        // model.Story.destroy({ where: { story_vid: id } });
        // model.Part.destroy({ where: { part_vid: id } });
        // model.Actor.destroy({ where: { actor_vid: id } });
        // model.Role.destroy({ where: { role_vid: id } });
        // db('Gold')->where('gold_vid',$vod->id)->delete();
        // db('playlog')->where('log_vid',$vod->id)->delete();
        // db('cm')->where(['cvid'=>$vod->id,'csid'=>1])->delete();
        // db('favorite')->where('favorite_vid',$user->id)->delete();
        // db('remind')->where('remind_vid',$user->id)->delete();
      }
      return result;
    }

    static async play(params) {
      const { orderBy = 'rank', order = 'DESC' } = params;
      const rows = await Play.findAll({
        attributes: ['title', 'name', 'display', 'rank'],
        where: {
          status: 1,
          display: 1,
        },
        order: [[orderBy, order]],
      });

      return rows;
    }

    static async mcat(params) {
      const { orderBy = 'rank', order = 'DESC', cid = '' } = params;
      const rows = await Mcat.findAll({
        attributes: ['cid', 'name'],
        where: {
          cid,
        },
        order: [[orderBy, order]],
      });

      return rows;
    }

    /**
     * 查询商品分页列表
     * @param params {object} { attributes, pageSize, pageNo, filter } - 条件
     * @return {object|null} - 查找结果
     */
    static async query(params: Params) {
      const { attributes, pageSize = 10, pageNo = 1, filter = {}, order = [['created_at', 'DESC']] } = params;
      const { wd, ids, not, letter, cid, name, area, language, year, filmtime, stars, hits, gold, up, down, created_at, day, prty, weekday, tag, mcid } = filter;
      const condition: Condition<string> = {
        attributes,
        order,
        include: [{ model: model.User, attributes: ['id', 'username', 'nickname', 'avatar'], as: 'user' }],
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: { status: 0 },
      };

      if (wd) {
        condition.where[Op.or] = [
          { name: { [Op.like]: `%%${wd}%%` } },
          { letters: { [Op.like]: `%%${wd}%%` } },
          { aliases: { [Op.like]: `%%${wd}%%` } },
          { actor: { [Op.like]: `%%${wd}%%` } },
          { keywords: { [Op.like]: `%%${wd}%%` } },
          { director: { [Op.like]: `%%${wd}%%` } },
          { tag: { [Op.like]: `%%${wd}%%` } },
          { title: { [Op.like]: `%%${wd}%%` } },
          { play: { [Op.like]: `%%${wd}%%` } },
        ];
      }

      if (ids) {
        condition.where.id = ids.split(',');
      }

      if (not) {
        condition.where.id = {
          [Op.not]: not,
        };
      }

      if (letter) {
        condition.where.letter = letter.split(',');
      }

      if (cid) {
        condition.where.cid = cid.split(',');
      }

      if (name) {
        condition.where.name = name.split(',');
      }

      if (area) {
        condition.where.area = area.split(',');
      }

      if (language) {
        condition.where.language = language.split(',');
      }

      if (year) {
        condition.where.year = year.split(',');
      }

      if (prty) {
        condition.where.prty = prty;
      }

      if (weekday) {
        condition.where.weekday = weekday;
      }

      if (filmtime) {
        const now = new Date().getTime();
        if (+filmtime === 1) {
          condition.where.filmtime = {
            [Op.lte]: now,
          };
        } else {
          const arr = filmtime.trim().split('|');
          if (arr[1]) {
            condition.where.filmtime = {
              [Op.between]: [new Date(arr[0]).getTime(), new Date(arr[1]).getTime()],
            };
          } else {
            condition.where.filmtime = {
              [Op.gt]: now,
            };
          }
        }
      }

      if (stars) {
        condition.where.stars = stars;
      }

      if (hits) {
        const arr = hits.split(',');
        if (arr.length > 1) {
          condition.where.hits = {
            [Op.between]: [arr[0], arr[1]],
          };
        } else {
          condition.where.hits = {
            [Op.gt]: arr[0],
          };
        }
      }

      if (gold) {
        const arr = gold.split(',');
        if (arr.length > 1) {
          condition.where.gold = {
            [Op.between]: [arr[0], arr[1]],
          };
        } else {
          condition.where.gold = {
            [Op.gt]: arr[0],
          };
        }
      }

      if (up) {
        const arr = up.split(',');
        if (arr.length > 1) {
          condition.where.up = {
            [Op.between]: [arr[0], arr[1]],
          };
        } else {
          condition.where.up = {
            [Op.gt]: arr[0],
          };
        }
      }

      if (down) {
        const arr = down.split(',');
        if (arr.length > 1) {
          condition.where.down = {
            [Op.between]: [arr[0], arr[1]],
          };
        } else {
          condition.where.down = {
            [Op.gt]: arr[0],
          };
        }
      }

      if (created_at) {
        const arr = created_at.split(',');
        const getTime = time => new Date(time).getTime();
        if (arr.length > 1) {
          condition.where.created_at = {
            [Op.between]: [getTime(arr[0]), getTime(arr[1])],
          };
        } else {
          condition.where.created_at = {
            [Op.gt]: getTime(arr[0]),
          };
        }
      }

      if (day) {
        condition.where.created_at = {
          [Op.gt]: dayjs().subtract(day, 'day').valueOf(),
        };
      }

      if (tag) {
        const param: any = { attributes: ['id'], where: { name: tag, sid: 1 } };
        const res = await model.Tag.findAll(param);
        let ids = res.map((item: any) => item.id);
        if (not) {
          ids = ids.filter(item => item !== not);
        }
        condition.where.id = ids;
      } else if (mcid) {
        const arr = mcid.split(',');
        const param: any = { attributes: ['id'], where: { mid: arr } };
        const res = await model.Mcid.findAll(param);
        let ids = res.map((item: any) => item.id);
        if (not) {
          ids = ids.filter(item => item !== not);
        }
        condition.where.id = ids;
      }

      console.log(condition, 'condition');

      const { count, rows } = await Subject.findAndCountAll(condition);

      return {
        list: rows,
        pages: {
          pageNo,
          pageSize,
          total: count,
        },
      };
    }

    static async get({ id, attributes }) {
      const condition: any = {
        attributes,
        include: [
          {
            model: model.User,
            attributes: ['id', 'username', 'nickname', 'avatar'],
            as: 'user',
          },
          // {
          //   model: model.Role,
          //   as: 'role',
          //   attributes: ['role_id', 'role_name', 'role_star'],
          //   include: [
          //     {
          //       model: model.Star,
          //       as: 'star',
          //       attributes: ['star_id', 'star_name'],
          //     },
          //   ],
          // },
          // {
          //   model: model.Story,
          //   as: 'story',
          //   attributes: ['story_id', 'story_vid'],
          //   include: [
          //     {
          //       model: model.Part,
          //       as: 'part',
          //       attributes: ['part_id', 'part_name', 'part_title', 'part_content'],
          //       limit: 3,
          //       order: [['part_oid', 'DESC']],
          //     },
          //   ],
          // },
          // { model: model.Music, as: 'music', attributes: ['music_id', 'music_star', 'music_type', 'music_name', 'music_url', 'music_lyric'] },
          // { model: model.Lines, as: 'lines', attributes: ['lines_id', 'lines_role', 'lines_created_at'] },
          // {
          //   model: model.Picture,
          //   attributes: ['picture_id', 'picture_name', 'picture_pic'],
          //   as: 'pic',
          //   through: {
          //     where: { sid: 1, tsid: 16 },
          //     attributes: [],
          //   },
          // },
          // {
          //   model: model.News,
          //   attributes: ['news_id', 'news_name', 'news_pic', 'news_created_at'],
          //   as: 'news',
          //   through: {
          //     where: { sid: 1, tsid: 2 },
          //     attributes: [],
          //   },
          // },
          {
            model: model.Subject,
            attributes: ['id', 'label'],
            as: 'associate1',
            through: {
              where: { sid: 1, tsid: 1 },
              attributes: [],
            },
          },
          {
            model: model.Subject,
            attributes: ['id', 'label'],
            as: 'associate2',
            through: {
              where: { sid: 1, tsid: 1 },
              attributes: [],
            },
          },
        ],
        where: { id, status: 0 },
      };
      return await Subject.findOne(condition);
    }

    static associate() {
      Subject.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
      Subject.hasMany(model.Comments, { foreignKey: 'aid', as: 'comments' });
      // Subject.hasMany(model.Role, { foreignKey: 'role_vid', as: 'role' });
      // Subject.hasMany(model.Story, { foreignKey: 'story_vid', as: 'story' });
      // Subject.hasMany(model.Music, { foreignKey: 'music_vid', as: 'music' });
      // Subject.hasMany(model.Lines, { foreignKey: 'lines_vid', as: 'lines' });
      // Subject.belongsToMany(model.Picture, { through: model.Topic, foreignKey: 'aid', otherKey: 'taid', as: 'pic' });
      // Subject.belongsToMany(model.News, { through: model.Topic, foreignKey: 'aid', otherKey: 'taid', as: 'news' });
      Subject.belongsToMany(model.Subject, { through: model.Association, foreignKey: 'taid', otherKey: 'aid', as: 'associate1' }); // 正向
      Subject.belongsToMany(model.Subject, { through: model.Association, foreignKey: 'aid', otherKey: 'taid', as: 'associate2' }); // 反向
    }
  };
};
