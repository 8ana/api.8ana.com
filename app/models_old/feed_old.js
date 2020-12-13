'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, MEDIUMINT, TINYINT, BIGINT, SMALLINT } = app.Sequelize;
  // 定义模型 用户收藏数据表
  const Feed = app.model.define(`${app.config.prefix}feed`, {
    feed_id: { type: MEDIUMINT(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false, comment: 'ID' },
    feed_cid: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '分类id' },
    feed_sid: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '模型ID' },
    feed_type: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '类型1关注2评分3评价' },
    feed_content_id: { type: SMALLINT(10).UNSIGNED, allowNull: false, comment: '内容ID' },
    feed_type_content_id: { type: SMALLINT(10).UNSIGNED, allowNull: false, comment: '类型内容的ID' },
    feed_uid: { type: INTEGER(11).UNSIGNED, allowNull: false, comment: '用户ID' },
    feed_status: { type: TINYINT(1).UNSIGNED, defaultValue: 0, comment: '状态' },
    feed_hits: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, comment: '总' },
    feed_hits_day: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, comment: '日' },
    feed_hits_week: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, comment: '周' },
    feed_hits_month: { type: MEDIUMINT(10).UNSIGNED, defaultValue: 0, comment: '月' },
    feed_ip: { type: BIGINT(20).UNSIGNED, defaultValue: 0, comment: 'IP' },
    feed_addtime: { type: INTEGER(11).UNSIGNED, allowNull: false, comment: '添加时间' },
    feed_uptime: { type: INTEGER(11).UNSIGNED, allowNull: false, comment: '更新时间' },
  }, {
    // 禁用 favorite_addtime 自动转换，使用 mysql 管理
    // 方便后续迁移 ORM 等需求
    timestamps: false,
  });

  return Feed;
};

/**
 * CREATE TABLE `ff_feed` (
  `feed_id` mediumint(10) NOT NULL AUTO_INCREMENT,
  `feed_cid` tinyint(10) unsigned NOT NULL COMMENT '分类id',
  `feed_sid` tinyint(10) unsigned NOT NULL COMMENT '模型ID',
  `feed_type` tinyint(10) unsigned NOT NULL COMMENT '类型1关注2评分3评价',
  `feed_content_id` smallint(10) unsigned NOT NULL COMMENT '内容ID',
  `feed_type_content_id` smallint(10) unsigned NOT NULL COMMENT '类型内容的ID',
  `feed_uid` int(11) unsigned DEFAULT NULL COMMENT '用户ID',
  `feed_hits` mediumint(10) unsigned DEFAULT '0' COMMENT '总',
  `feed_hits_day` mediumint(10) unsigned DEFAULT '0' COMMENT '日',
  `feed_hits_week` mediumint(10) unsigned DEFAULT '0' COMMENT '周',
  `feed_hits_month` mediumint(10) unsigned DEFAULT '0' COMMENT '月',
  `feed_ip` bigint(20) NOT NULL DEFAULT '0' COMMENT 'IP',
  `feed_status` tinyint(1) unsigned DEFAULT '0' COMMENT '状态',
  `feed_addtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '添加时间',
  `feed_uptime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`feed_id`),
  UNIQUE KEY `feed_id` (`feed_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
 */
