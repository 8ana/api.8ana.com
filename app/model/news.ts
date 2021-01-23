import { Context, Application } from 'egg';
import { BaseModel, BaseModelStatic, ICondition, IParams } from '../core/model';
import news from '../schema/news';

export interface News extends BaseModel {}

type IWhere = {
  status?: number;
};

export default (app: Context & Application) => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;

  const newsSchema = news(app);
  const News = model.define('news', newsSchema) as BaseModelStatic<News>;

  return class extends News<News> {
    static async query(params: IParams<{}>) {
      const { attributes, pageSize = 10, pageNo = 1, order = [['created_at', 'DESC']] } = params;
      const condition: ICondition<IWhere> = {
        attributes,
        order,
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
    static async get({ params, attributes = ['id', 'name', 'pic'] }) {
      const condition = {
        attributes,
        where: { status: 0 },
      };
      if (params.not_id) {
        params.id = {
          [Op.not]: params.not_id,
        };
        delete params.not_id;
      }
      condition.where = params;
      return await News.findOne(condition);
    }

    // 添加
    static async add(params) {
      return await News.create(params);
    }
    // 更新
    static async edit(params) {
      const { id } = params;
      await News.update(params, { where: { id } });
      return id;
    }

    // 删除
    static async delete(params) {
      return await News.destroy({ where: params });
    }
  };
};
