import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import feed from '../schema/feed';

export interface Feed extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { model } = app;

  const feedSchema = feed(app);
  const Feed = model.define('feed', feedSchema) as BaseModelStatic<Feed>;

  return class extends Feed<Feed> {
    static async query(params) {
      const { attributes, pageSize, pageNo, order = ['created_at', 'DESC'] } = params;
      const condition: any = {
        attributes,
        include: [
          { model: model.User, attributes: ['id', 'username', 'nickname', 'avatar'], as: 'user' },
          { model: model.Subject, attributes: ['id', 'name', 'pic', 'created_at'], as: 'subject' },
          // { model: model.Role, attributes: ['role_id'], as: 'role' },
          // { model: model.Story, attributes: ['story_id'], as: 'story' },
          // { model: model.Star, attributes: ['star_id'], as: 'star' },
          // { model: model.Music, attributes: ['music_id'], as: 'music' },
          // { model: model.Lines, attributes: ['lines_id'], as: 'lines' },
          // { model: model.Picture, attributes: ['picture_id'], as: 'pic' },
        ],
        order: [order],
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: { status: 1 },
      };
      const { count, rows } = await Feed.findAndCountAll(condition);

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
      const param: any = {
        attributes,
        include: [
          { model: model.User, attributes: ['id', 'name', 'nickname', 'avatar'], as: 'user' },
          { model: model.Subject, attributes: ['id', 'name', 'pic', 'created_at'], as: 'subject' },
          // { model: model.Role, attributes: ['role_id'], as: 'role' },
          // { model: model.Story, attributes: ['story_id'], as: 'story' },
          // { model: model.Star, attributes: ['star_id'], as: 'star' },
          // { model: model.Music, attributes: ['music_id'], as: 'music' },
          // { model: model.Lines, attributes: ['lines_id'], as: 'lines' },
          // { model: model.Picture, attributes: ['picture_id'], as: 'pic' },
        ],
        where: { id, status: 1 },
      };
      return await Feed.findOne(param);
    }

    // 添加
    static async add(params) {
      const result = await Feed.create(params);
      console.log(result);
      return result;
    }
    // 更新
    static async edit(params) {
      const { id } = params;
      const result = await Feed.update(params, { where: { id } });
      console.log(result);
      return id;
    }

    // 删除
    static async delete(params) {
      const result = await Feed.destroy({ where: params });
      return result;
    }

    static associate() {
      Feed.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
      Feed.hasOne(model.Subject, { foreignKey: 'id', sourceKey: 'aid', as: 'subject' });
      // Feed.hasOne(model.Role, { foreignKey: 'role_id', sourceKey: 'role_id', as: 'role' });
      // Feed.hasOne(model.Story, { foreignKey: 'story_id', sourceKey: 'story_id', as: 'story' });
      // Feed.hasOne(model.Star, { foreignKey: 'star_id', sourceKey: 'star_id', as: 'star' });
      // Feed.hasOne(model.Music, { foreignKey: 'music_id', sourceKey: 'music_id', as: 'music' });
      // Feed.hasOne(model.Lines, { foreignKey: 'lines_id', sourceKey: 'lines_id', as: 'lines' });
      // Feed.hasOne(model.Picture, { foreignKey: 'picture_id', sourceKey: 'pic_id', as: 'pic' });
    }
  };
};
