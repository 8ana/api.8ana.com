import * as dayjs from 'dayjs';
import subject from '../schema/subject';
import mcat from '../schema/mcat';
import play from '../schema/play';

export default app => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;
  const subjectSchema = subject(app);
  const mcatSchema = mcat(app);
  const playSchema = play(app);
  const Subject = model.define('subject', subjectSchema);
  const Mcat = model.define('mcat', mcatSchema, { timestamps: false });
  const Play = model.define('play', playSchema, { timestamps: false });

  // 添加
  Subject.add = async params => {
    const result = await Subject.create(params);
    return result;
  };
  // 更新
  Subject.edit = async params => {
    const { id } = params;
    const result = await Subject.update(params, { where: { id } });
    return result;
  };

  // 删除
  Subject.delete = async params => {
    const { id } = params;
    const result = await Subject.destroy({ where: { id } });
    if (result) {
      model.Mcid.destroy({ where: { id, sid: 1 } });
      model.Tag.destroy({ where: { id, sid: 1 } });
      model.Association.destroy({ where: { aid: id, sid: 1 } });
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
  };

  Subject.play = async params => {
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
  };

  Subject.mcat = async params => {
    const { orderBy = 'rank', order = 'DESC', sid = 3, cid = '' } = params;
    const rows = await Mcat.findAll({
      attributes: ['cid', 'name'],
      where: {
        list_id: sid,
        cid,
      },
      order: [[orderBy, order]],
    });

    return rows;
  };

  /**
   * 查询商品分页列表
   * @param {object} { attributes, pageSize, pageNo, filter } - 条件
   * @return {object|null} - 查找结果
   */
  Subject.query = async ({ attributes, pageSize, pageNo, filter = '{}', order = ['created_at', 'DESC'] }) => {
    const { wd, ids, not, letter, cid, name, area, language, year, filmtime, stars, hits, gold, up, down, created_at, day, prty, weekday, tag, mcid } = JSON.parse(filter);
    console.log(JSON.parse(filter));
    const condition: any = {
      attributes,
      include: [{ model: model.User, attributes: ['id', 'username', 'nickname', 'avatar'], as: 'user' }],
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: app.utils.Tool.toInt(pageSize),
      where: { status: 1 },
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
      if (filmtime === 1) {
        condition.where.filmtime = {
          [Op.lte]: now,
        };
      } else {
        const arr = filmtime.trim().split('|');
        if (arr[1]) {
          condition.where.filmtime = {
            [Op.between]: [new Date(arr[0]).getTime() / 1000, new Date(arr[1]).getTime() / 1000],
          };
        } else {
          condition.where.filmtime = {
            [Op.gt]: now / 1000,
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
      const getTime = time => new Date(time).getTime() / 1000;
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
        [Op.gt]: dayjs().subtract(day, 'day').valueOf() / 1000,
      };
    }

    if (tag) {
      const res = await model.Tag.findAll({ attributes: ['id'], where: { name: tag, sid: 1 } });
      let ids = res.map(item => item.id);
      if (not) {
        ids = ids.filter(item => item !== not);
      }
      condition.where.id = ids;
    } else if (mcid) {
      const arr = mcid.split(',');
      const res = await model.Mcid.findAll({ attributes: ['id'], where: { mid: arr } });
      let ids = res.map(item => item.id);
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
  };

  Subject.get = async ({ id, attributes }) => {
    const result = await Subject.findOne({
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
      where: { id, status: 1 },
    });
    return result;
  };

  Subject.associate = () => {
    Subject.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
    // Subject.hasMany(model.Role, { foreignKey: 'role_vid', as: 'role' });
    // Subject.hasMany(model.Story, { foreignKey: 'story_vid', as: 'story' });
    // Subject.hasMany(model.Music, { foreignKey: 'music_vid', as: 'music' });
    // Subject.hasMany(model.Lines, { foreignKey: 'lines_vid', as: 'lines' });
    // Subject.belongsToMany(model.Picture, { through: model.Topic, foreignKey: 'aid', otherKey: 'taid', as: 'pic' });
    // Subject.belongsToMany(model.News, { through: model.Topic, foreignKey: 'aid', otherKey: 'taid', as: 'news' });
    Subject.belongsToMany(model.Subject, { through: model.Association, foreignKey: 'taid', otherKey: 'aid', as: 'associate1' }); // 正向
    Subject.belongsToMany(model.Subject, { through: model.Association, foreignKey: 'aid', otherKey: 'taid', as: 'associate2' }); // 反向
  };

  return Subject;
};
