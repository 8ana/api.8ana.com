module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, CHAR, TINYINT, BIGINT, NOW, DECIMAL, TEXT } = Sequelize;
    await queryInterface.createTable('subject', {
      id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, comment: '自增id' },
      cid: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: '分类id' },
      uid: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '用户id' },
      mcid: { type: STRING(255), defaultValue: '', comment: '小分类' },
      name: { type: STRING(255), allowNull: false, defaultValue: '', comment: '名字' },
      foreign: { type: STRING(255), defaultValue: '', comment: '外文名' },
      aliases: { type: STRING(255), defaultValue: '', comment: '别名' },
      title: { type: STRING(255), allowNull: false, defaultValue: '', comment: '副标题' },
      tag: { type: STRING(255), defaultValue: '', comment: '标签' },
      label: { type: STRING(255), defaultValue: '', comment: '关联别名例:第1季|第2季' },
      color: { type: CHAR(8), defaultValue: '', comment: '标题颜色' },
      bg_color: { type: CHAR(8), defaultValue: '', comment: '背景颜色' },
      star: { type: TEXT, defaultValue: '', comment: '明星' },
      director: { type: STRING(255), defaultValue: '', comment: '导演' },
      pic: { type: STRING(255), defaultValue: '', comment: '封面' },
      pic_thumb: { type: STRING(255), defaultValue: '', comment: '小图' },
      bigpic: { type: STRING(255), defaultValue: '', comment: '大图' },
      website: { type: STRING(255), defaultValue: '', comment: '官网' },
      original: { type: STRING(255), defaultValue: '', comment: '漫画原作' },
      company: { type: STRING(255), defaultValue: '', comment: '制作公司' },
      remark: { type: STRING(255), defaultValue: '', comment: '简评' },
      baike: { type: STRING(255), defaultValue: '', comment: '百科网址' },
      time: { type: CHAR(10), defaultValue: '', comment: '放送时间' },
      area: { type: CHAR(10), defaultValue: '', comment: '地区' },
      language: { type: CHAR(10), defaultValue: '', comment: '语言' },
      play: { type: STRING(255), defaultValue: '', comment: '播放源英文名，以$$$分隔' },
      inputer: { type: STRING(30), defaultValue: '', comment: '录入人' },
      jumpurl: { type: STRING(150), defaultValue: '', comment: '跳转url' },
      letter: { type: CHAR(2), defaultValue: '', comment: '首字母' },
      letters: { type: STRING(255), defaultValue: '', comment: '拼音' },
      seo_title: { type: STRING(255), defaultValue: '', comment: 'seo标题' },
      seo_keywords: { type: STRING(255), defaultValue: '', comment: 'seo关键字' },
      seo_description: { type: STRING(255), defaultValue: '', comment: 'seo简介' },
      filmtime: { type: STRING(255), defaultValue: '', comment: '上映日期' },
      length: { type: STRING(255), defaultValue: '', comment: '片长' },
      url: { type: TEXT('long'), defaultValue: '', comment: '播放集合，以$$$分隔' },
      content: { type: TEXT, defaultValue: '', allowNull: false, comment: '简介' },
      other: { type: TEXT('long'), defaultValue: '', allowNull: false, comment: '其他项' },
      prty: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '推荐级别' },
      year: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '年份' },
      serialized: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '连载' },
      total: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '总集数' },
      isend: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '是否完结' },
      stars: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '星级' },
      up: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '顶' },
      down: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '踩' },
      rank: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '播放源排序' },
      gold: { type: DECIMAL(3, 1), defaultValue: 0.0, comment: '评分' },
      weekday: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '星期' },
      douban: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: '豆瓣id' },
      imdb: { type: INTEGER.UNSIGNED, defaultValue: 0, comment: 'IMDB' },
      broadcast: { type: TINYINT.UNSIGNED, defaultValue: 1, comment: '是否开播0:未放送1:已放送' },
      ip: { type: INTEGER.UNSIGNED, allowNull: false, defaultValue: 0, comment: 'IP' },
      status: { type: INTEGER.UNSIGNED, allowNull: true, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
      hits: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '总' },
      hits_day: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '日' },
      hits_week: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '周' },
      hits_month: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '月' },
      hits_lasttime: { type: DATE, allowNull: false, defaultValue: NOW, comment: '热度更新时间' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('subject');
  },
};
