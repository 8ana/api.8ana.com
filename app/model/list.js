'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const listSchema = require('../schema/list')(app);
  const List = model.define(`${app.config.prefix}list`, listSchema);

  List.query = async params => {
    const { orderBy = 'list_oid', order = 'DESC' } = params;
    const rows = await List.findAll({
      attributes: ['list_id', 'list_pid', 'list_name'],
      where: {
        list_status: 1,
      },
      order: [[orderBy, order]],
    });

    return rows;
  };

  return List;
};
