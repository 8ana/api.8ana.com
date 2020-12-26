export default app => {
  // 获取数据类型
  const { MEDIUMINT, TINYINT, SMALLINT, INTEGER, BIGINT, NOW, DATE } = app.Sequelize;

  return {
    feed_id: {
      autoIncrement: true,
      type: MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    feed_cid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      comment: '分类id',
    },
    feed_sid: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      comment: '模型ID',
    },
    feed_type: {
      type: TINYINT.UNSIGNED,
      allowNull: false,
      comment: '类型1关注2评分3评价',
    },
    feed_vid: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_news_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_star_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_story_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_pic_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_music_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_role_id: {
      type: SMALLINT.UNSIGNED,
      comment: '内容ID',
    },
    feed_lines_id: {
      type: SMALLINT.UNSIGNED,
      comment: '类型内容的ID',
    },
    feed_uid: {
      type: INTEGER.UNSIGNED,
      allowNull: true,
      comment: '用户ID',
    },
    feed_hits: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '总',
    },
    feed_hits_day: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '日',
    },
    feed_hits_week: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '周',
    },
    feed_hits_month: {
      type: MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '月',
    },
    feed_ip: {
      type: BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: 'IP',
    },
    feed_status: {
      type: TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: '状态',
    },
    feed_hits_lasttime: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
      comment: '热度更新时间',
    },
    feed_addtime: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
      comment: '添加时间',
    },
    feed_uptime: {
      type: DATE,
      allowNull: false,
      defaultValue: NOW,
      comment: '更新时间',
    },
  };
};
