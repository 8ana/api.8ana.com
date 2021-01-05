import list from '../schema/list';

export default app => {
  // 获取数据类型
  const { model } = app;

  const listSchema = list(app);
  const List = model.define('list', listSchema, { timestamps: false });

  List.query = async params => {
    const { orderBy = 'rank', order = 'DESC' } = params;
    const rows = await List.findAll({
      attributes: ['id', 'pid', 'name'],
      where: {
        status: 1,
      },
      order: [[orderBy, order]],
    });

    return rows;
  };

  return List;
};
