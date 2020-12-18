'use strict';
const dayjs = require('dayjs');
const { toInt } = require('../util');

module.exports = app => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;
  const subjectSchema = require('../schema/subject')(app);
  const mcatSchema = require('../schema/mcat')(app);
  const playSchema = require('../schema/play')(app);
  const Subject = model.define(`${app.config.prefix}vod`, subjectSchema);
  const Mcat = model.define(`${app.config.prefix}mcat`, mcatSchema);
  const Play = model.define(`${app.config.prefix}play`, playSchema);

  // 添加
  Subject.add = async params => {
    const result = await Subject.create(params);
    return result;
  };
  // 更新
  Subject.edit = async params => {
    const { vod_id } = params;
    const result = await Subject.update(params, { where: { vod_id } });
    return result;
  };

  // 删除
  Subject.delete = async params => {
    const { vod_id } = params;
    const result = await Subject.destroy({ where: { vod_id } });
    if (result) {
      model.Mcid.destroy({ where: { mcid_id: vod_id, mcid_sid: 1 } });
      model.Tag.destroy({ where: { tag_id: vod_id, tag_sid: 1 } });
      model.Topic.destroy({ where: { topic_did: vod_id, topic_sid: 1 } });
      model.Actors.destroy({ where: { actors_id: vod_id } });
      model.Story.destroy({ where: { story_vid: vod_id } });
      model.Part.destroy({ where: { part_vid: vod_id } });
      model.Actor.destroy({ where: { actor_vid: vod_id } });
      model.Role.destroy({ where: { role_vid: vod_id } });
      // db('Gold')->where('gold_vid',$vod->vod_id)->delete();
      // db('playlog')->where('log_vid',$vod->vod_id)->delete();
      // db('cm')->where(['cm_vid'=>$vod->vod_id,'cm_sid'=>1])->delete();
      // db('favorite')->where('favorite_vid',$user->user_id)->delete();
      // db('remind')->where('remind_vid',$user->user_id)->delete();
    }
    return result;
  };

  Subject.play = async params => {
    const { orderBy = 'play_oid', order = 'DESC' } = params;
    const rows = await Play.findAll({
      attributes: ['play_title', 'play_name', 'play_display', 'play_oid'],
      where: {
        play_status: 1,
        play_display: 1,
      },
      order: [[orderBy, order]],
    });

    return rows;
  };

  Subject.mcat = async params => {
    const { orderBy = 'm_order', order = 'DESC', sid = 3, cid = '' } = params;
    const rows = await Mcat.findAll({
      attributes: ['m_cid', 'm_name'],
      where: {
        m_list_id: sid,
        m_cid: cid,
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
  Subject.query = async ({ attributes, pageSize, pageNo, filter = '{}', order = ['vod_addtime', 'DESC'] }) => {
    const { wd, ids, not, letter, cid, name, area, language, year, filmtime, stars, hits, gold, up, down, addtime, day, prty, weekday, tag, mcid } = JSON.parse(filter);
    console.log(JSON.parse(filter));
    const condition = {
      attributes,
      include: [{ model: model.User, attributes: ['user_id', 'user_name', 'user_nickname', 'user_avatar'], as: 'user' }],
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: toInt(pageSize),
      where: { vod_status: 1 },
    };

    if (wd) {
      condition.where[Op.or] = [
        { vod_name: { [Op.like]: `%%${wd}%%` } },
        { vod_letters: { [Op.like]: `%%${wd}%%` } },
        { vod_aliases: { [Op.like]: `%%${wd}%%` } },
        { vod_actor: { [Op.like]: `%%${wd}%%` } },
        { vod_keywords: { [Op.like]: `%%${wd}%%` } },
        { vod_director: { [Op.like]: `%%${wd}%%` } },
        { vod_tag: { [Op.like]: `%%${wd}%%` } },
        { vod_title: { [Op.like]: `%%${wd}%%` } },
        { vod_play: { [Op.like]: `%%${wd}%%` } },
      ];
    }

    if (ids) {
      condition.where.vod_id = ids.split(',');
    }

    if (not) {
      condition.where.vod_id = {
        [Op.not]: not,
      };
    }

    if (letter) {
      condition.where.vod_letter = letter.split(',');
    }

    if (cid) {
      condition.where.vod_cid = cid.split(',');
    }

    if (name) {
      condition.where.vod_name = name.split(',');
    }

    if (area) {
      condition.where.vod_area = area.split(',');
    }

    if (language) {
      condition.where.vod_language = language.split(',');
    }

    if (year) {
      condition.where.vod_year = year.split(',');
    }

    if (prty) {
      condition.where.vod_prty = prty;
    }

    if (weekday) {
      condition.where.vod_weekday = weekday;
    }

    if (filmtime) {
      const now = new Date().getTime();
      if (filmtime === 1) {
        condition.where.vod_filmtime = {
          [Op.lte]: now,
        };
      } else {
        const arr = filmtime.trim().split('|');
        if (arr[1]) {
          condition.where.vod_filmtime = {
            [Op.between]: [new Date(arr[0]).getTime() / 1000, new Date(arr[1]).getTime() / 1000],
          };
        } else {
          condition.where.vod_filmtime = {
            [Op.gt]: now / 1000,
          };
        }
      }
    }

    if (stars) {
      condition.where.vod_stars = stars;
    }

    if (hits) {
      const arr = hits.split(',');
      if (arr.length > 1) {
        condition.where.vod_hits = {
          [Op.between]: [arr[0], arr[1]],
        };
      } else {
        condition.where.vod_hits = {
          [Op.gt]: arr[0],
        };
      }
    }

    if (gold) {
      const arr = gold.split(',');
      if (arr.length > 1) {
        condition.where.vod_gold = {
          [Op.between]: [arr[0], arr[1]],
        };
      } else {
        condition.where.vod_gold = {
          [Op.gt]: arr[0],
        };
      }
    }

    if (up) {
      const arr = up.split(',');
      if (arr.length > 1) {
        condition.where.vod_up = {
          [Op.between]: [arr[0], arr[1]],
        };
      } else {
        condition.where.vod_up = {
          [Op.gt]: arr[0],
        };
      }
    }

    if (down) {
      const arr = down.split(',');
      if (arr.length > 1) {
        condition.where.vod_down = {
          [Op.between]: [arr[0], arr[1]],
        };
      } else {
        condition.where.vod_down = {
          [Op.gt]: arr[0],
        };
      }
    }

    if (addtime) {
      const arr = addtime.split(',');
      const getTime = time => new Date(time).getTime() / 1000;
      if (arr.length > 1) {
        condition.where.vod_addtime = {
          [Op.between]: [getTime(arr[0]), getTime(arr[1])],
        };
      } else {
        condition.where.vod_addtime = {
          [Op.gt]: getTime(arr[0]),
        };
      }
    }

    if (day) {
      condition.where.vod_addtime = {
        [Op.gt]: dayjs().subtract(day, 'day').valueOf() / 1000,
      };
    }

    if (tag) {
      const res = await model.Tag.findAll({ attributes: ['tag_id'], where: { tag_name: tag, tag_sid: 1 } });
      let ids = res.map(item => item.tag_id);
      if (not) {
        ids = ids.filter(item => item !== not);
      }
      condition.where.vod_id = ids;
    } else if (mcid) {
      const arr = mcid.split(',');
      const res = await model.Mcid.findAll({ attributes: ['mcid_id'], where: { mcid_mid: arr } });
      let ids = res.map(item => item.mcid_id);
      if (not) {
        ids = ids.filter(item => item !== not);
      }
      condition.where.vod_id = ids;
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
          attributes: ['user_id', 'user_name', 'user_nickname', 'user_avatar'],
          as: 'user',
        },
        {
          model: model.Role,
          as: 'role',
          attributes: ['role_id', 'role_name', 'role_star'],
          include: [
            {
              model: model.Star,
              as: 'star',
              attributes: ['star_id', 'star_name'],
            },
          ],
        },
        {
          model: model.Story,
          as: 'story',
          attributes: ['story_id', 'story_vid'],
          include: [
            {
              model: model.Part,
              as: 'part',
              attributes: ['part_id', 'part_name', 'part_title', 'part_content'],
              limit: 3,
              order: [['part_oid', 'DESC']],
            },
          ],
        },
        { model: model.Music, as: 'music', attributes: ['music_id', 'music_star', 'music_type', 'music_name', 'music_url', 'music_lyric'] },
        { model: model.Lines, as: 'lines', attributes: ['lines_id', 'lines_role', 'lines_addtime'] },
        {
          model: model.Picture,
          attributes: ['picture_id', 'picture_name', 'picture_pic'],
          as: 'pic',
          through: {
            where: { topic_sid: 1, topic_tsid: 16 },
            attributes: [],
          },
        },
        {
          model: model.News,
          attributes: ['news_id', 'news_name', 'news_pic', 'news_addtime'],
          as: 'news',
          through: {
            where: { topic_sid: 1, topic_tsid: 2 },
            attributes: [],
          },
        },
        {
          model: model.Subject,
          attributes: ['vod_id', 'vod_label'],
          as: 'associate1',
          through: {
            where: { topic_sid: 1, topic_tsid: 1 },
            attributes: [],
          },
        },
        {
          model: model.Subject,
          attributes: ['vod_id', 'vod_label'],
          as: 'associate2',
          through: {
            where: { topic_sid: 1, topic_tsid: 1 },
            attributes: [],
          },
        },
      ],
      where: { vod_id: id, vod_status: 1 },
    });
    return result;
  };

  Subject.associate = () => {
    Subject.hasOne(model.User, { foreignKey: 'user_id', sourceKey: 'vod_uid', as: 'user' });
    Subject.hasMany(model.Role, { foreignKey: 'role_vid', as: 'role' });
    Subject.hasMany(model.Story, { foreignKey: 'story_vid', as: 'story' });
    Subject.hasMany(model.Music, { foreignKey: 'music_vid', as: 'music' });
    Subject.hasMany(model.Lines, { foreignKey: 'lines_vid', as: 'lines' });
    Subject.belongsToMany(model.Picture, { through: model.Topic, foreignKey: 'topic_did', otherKey: 'topic_tid', as: 'pic' });
    Subject.belongsToMany(model.News, { through: model.Topic, foreignKey: 'topic_did', otherKey: 'topic_tid', as: 'news' });
    Subject.belongsToMany(model.Subject, { through: model.Topic, foreignKey: 'topic_tid', otherKey: 'topic_did', as: 'associate1' }); // 正向
    Subject.belongsToMany(model.Subject, { through: model.Topic, foreignKey: 'topic_did', otherKey: 'topic_tid', as: 'associate2' }); // 反向
  };

  return Subject;
};
