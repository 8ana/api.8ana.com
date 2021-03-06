// 新闻专栏表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, CHAR, TINYINT, BIGINT, NOW, DECIMAL, TEXT } = Sequelize;
    await queryInterface.createTable('news', {
      id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, comment: '自增id' },
      cid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '分类id' },
      uid: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '用户id' },
      mcid: { type: STRING(255), defaultValue: '', comment: '小分类' },
      name: { type: STRING(255), allowNull: false, defaultValue: '', comment: '名字' },
      title: { type: STRING(255), allowNull: false, defaultValue: '', comment: '副标题' },
      tag: { type: STRING(255), defaultValue: '', comment: '标签' },
      color: { type: CHAR(8), defaultValue: '', comment: '标题颜色' },
      bg_color: { type: CHAR(8), defaultValue: '', comment: '背景颜色' },
      time: { type: CHAR(10), defaultValue: '', comment: '预告片时长' },
      pic: { type: STRING(255), defaultValue: '', comment: '封面' },
      pic_thumb: { type: STRING(255), defaultValue: '', comment: '小图' },
      bigpic: { type: STRING(255), defaultValue: '', comment: '大图' },
      banner: { type: STRING(255), defaultValue: '', comment: 'banner大图' },
      inputer: { type: STRING(30), defaultValue: '', comment: '录入人' },
      jumpurl: { type: STRING(150), defaultValue: '', comment: '跳转url' },
      letter: { type: CHAR(2), defaultValue: '', comment: '首字母' },
      letters: { type: STRING(255), defaultValue: '', comment: '拼音' },
      seo_title: { type: STRING(255), defaultValue: '', comment: 'seo标题' },
      seo_keywords: { type: STRING(255), defaultValue: '', comment: 'seo关键字' },
      seo_description: { type: STRING(255), defaultValue: '', comment: 'seo简介' },
      summary: { type: STRING(255), defaultValue: '', allowNull: false, comment: '摘要' },
      content: { type: TEXT, defaultValue: '', allowNull: false, comment: '内容' },
      stars: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '星级' },
      up: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '顶' },
      down: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '踩' },
      gold: { type: DECIMAL(3, 1), defaultValue: 0.0, comment: '评分' },
      is_spoiler: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '是否剧透0:否1:是' },
      is_sticky: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '是否置顶0:否1:是' },
      status: { type: TINYINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
      hits: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '总' },
      hits_day: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '日' },
      hits_week: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '周' },
      hits_month: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '月' },
      hits_lasttime: { type: DATE, allowNull: false, defaultValue: NOW, comment: '热度更新时间' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('news');
  },
};
