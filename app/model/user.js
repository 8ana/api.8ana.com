'use strict';
const { toInt } = require('../util');

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const userSchema = require('../schema/user')(app);
  const User = model.define(`${app.config.prefix}user`, userSchema);

  User.query = async ({ attributes, pageSize = 10, pageNo = 1, order = ['user_reg_time', 'DESC'] }) => {
    const condition = {
      attributes,
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: toInt(pageSize),
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
