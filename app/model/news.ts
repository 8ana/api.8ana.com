import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import news from '../schema/news';

export interface News extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;

  const newsSchema = news(app);
  const News = model.define('news', newsSchema) as BaseModelStatic<News>;

  return class extends News<News> {
    static async query({ attributes, pageSize = 10, pageNo = 1, order = ['created_at', 'DESC'] }) {
      const condition: any = {
        attributes,
        order: [order],
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: { status: 0 },
      };
      const { count, rows } = await News.findAndCountAll(condition);

      return {
        list: rows,
        pages: {
          pageNo,
          pageSize,
          total: count,
        },
      };
    }
    static async get(params, attributes = ['id', 'name', 'pic']) {
      const condition = {
        attributes,
        where: {},
      };
      if (params.not_id) {
        params.id = {
          [Op.not]: params.not_id,
        };
        delete params.not_id;
      }
      condition.where = params;
      const result = await News.findOne(condition);
      return result;
    }

    // 添加
    static async add(params) {
      const result = await News.create(params);
      return result;
    }
    // 更新
    static async edit(params) {
      const { id } = params;
      const result = await News.update(params, { where: { id } });
      console.log(result);
      return id;
    }

    // 删除
    static async delete(params) {
      const result = await News.destroy({ where: params });
      return result;
    }
  };
};
