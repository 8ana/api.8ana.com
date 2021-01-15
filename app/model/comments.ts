import comments from '../schema/comments';
import repty from '../schema/repty';

export default app => {
  // 获取数据类型
  const { model } = app;

  const commentsSchema = comments(app);
  const reptySchema = repty(app);
  const Comments = model.define('comments', commentsSchema);
  const Repty = model.define('repty', reptySchema);

  Comments.query = async ({ attributes, pageSize = 10, pageNo = 1, order = ['created_at', 'DESC'] }) => {
    const condition = {
      attributes,
      order: [order],
      offset: pageSize * (pageNo - 1),
      limit: app.utils.Tool.toInt(pageSize),
      where: { status: 0 },
    };
    const { count, rows } = await Comments.findAndCountAll(condition);

    return {
      list: rows,
      pages: {
        pageNo,
        pageSize,
        total: count,
      },
    };
  };

  Comments.get = async (params, attributes = ['id', 'uid', 'content']) => {
    const condition = {
      attributes,
      where: {},
    };
    condition.where = params;
    const result = await Comments.findOne(condition);
    return result;
  };

  // 添加
  Comments.add = async params => {
    const result = await Comments.create(params);
    return result;
  };
  // 更新
  Comments.edit = async params => {
    const { id } = params;
    const result = await Comments.update(params, { where: { id } });
    console.log(result);
    return id;
  };

  // 删除
  Comments.delete = async params => {
    const result = await Comments.destroy({ where: params });
    return result;
  };

  Comments.associate = () => {
    Comments.hasOne(model.User, { foreignKey: 'id', sourceKey: 'uid', as: 'user' });
    Comments.hasMany(Repty, { foreignKey: 'aid', as: 'repty' });
  };

  return Comments;
};
