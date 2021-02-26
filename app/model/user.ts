import { Context } from 'egg';
import { BaseModel, BaseModelStatic } from '../core/model';
import user from '../schema/user';

export interface User extends BaseModel {}

export default (app: Context) => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;

  const userSchema = user(app);
  const User = model.define('user', userSchema) as BaseModelStatic<User>;

  return class extends User<User> {
    static async query({ attributes, pageSize = 10, pageNo = 1, order = ['created_at', 'DESC'] }) {
      const condition: any = {
        attributes,
        order: [order],
        offset: pageSize * (pageNo - 1),
        limit: app.utils.Tool.toInt(pageSize),
        where: { status: 0 },
      };
      const { count, rows } = await User.findAndCountAll(condition);

      return {
        list: rows,
        pages: {
          pageNo,
          pageSize,
          total: count,
        },
      };
    }

    static async get(params, attributes = ['id', 'username', 'admin']) {
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
      const result = await User.findOne(condition);
      return result;
    }

    static async find(params) {
      return await User.findOne(params);
    }

    // 添加
    static async add(params) {
      const result = await User.create(params);
      return result;
    }
    // 更新
    static async edit(params) {
      const { id } = params;
      const result = await User.update(params, { where: { id } });
      console.log(result);
      return id;
    }

    // 删除
    static async delete(params) {
      const result = await User.destroy({ where: params });
      return result;
    }
  };
};
