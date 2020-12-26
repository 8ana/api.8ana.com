import user from '../schema/user';

export default app => {
  // 获取数据类型
  const { Sequelize, model } = app;
  const { Op } = Sequelize;

  const userSchema = user(app);
  const User = model.define(`${app.config.prefix}user`, userSchema);

  User.query = async ({ attributes, pageSize = 10, pageNo = 1, order = ['user_reg_time', 'DESC'] }) => {
    const condition = {
      attributes,
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: app.utils.Tool.toInt(pageSize),
      where: { user_status: 1 },
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
  };

  User.get = async (params, attributes = ['user_id', 'user_name', 'user_admin']) => {
    const condition = {
      attributes,
      where: {},
    };
    if (params.not_id) {
      params.user_id = {
        [Op.not]: params.not_id,
      };
      delete params.not_id;
    }
    condition.where = params;
    const result = await User.findOne(condition);
    return result || {};
  };

  // 添加
  User.add = async params => {
    const result = await User.create(params);
    return result;
  };
  // 更新
  User.edit = async params => {
    const { user_id } = params;
    const result = await User.update(params, { where: { user_id } });
    console.log(result);
    return user_id;
  };

  // 删除
  User.delete = async params => {
    const result = await User.destroy({ where: params });
    return result;
  };

  return User;
};
