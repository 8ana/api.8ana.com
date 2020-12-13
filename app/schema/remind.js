'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, TINYINT, BIGINT, STRING, NOW } = app.Sequelize;
  // 定义模型 用户收藏数据表
  return {
    remind_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    remind_sid: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '模型ID' },
    remind_cid: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '分类ID' },
    remind_uid: { type: INTEGER(10).UNSIGNED, allowNull: false, comment: '用户ID' },
    remind_tags: { type: STRING(255), defaultValue: '', comment: '标签' },
    remind_type: { type: TINYINT(10).UNSIGNED, allowNull: false, comment: '关联内容的ID' },
    remind_content: { type: STRING(255), defaultValue: '', comment: '短评' },
    remind_ip: { type: BIGINT(20).UNSIGNED, allowNull: false, defaultValue: 0, comment: 'IP' },
    remind_rating: { type: TINYINT(1).UNSIGNED, allowNull: false, defaultValue: 0, comment: '评分1~5' },
    remind_interest: { type: TINYINT(1).UNSIGNED, allowNull: false, defaultValue: 0, comment: '想看1|看过2|在看3|搁置4|抛弃5' },
    remind_addtime: { type: INTEGER(11).UNSIGNED, allowNull: false, defalutValue: NOW, comment: '添加时间' },
    remind_uptime: { type: INTEGER(11).UNSIGNED, allowNull: false, comment: '订阅的影片最后更新时间' },
  };
};

/**
 * CREATE TABLE `ff_remind` (
  `remind_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `remind_sid` tinyint(10) unsigned NOT NULL DEFAULT '1' COMMENT '模型ID',
  `remind_uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `remind_cid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '分类ID',
  `remind_tags` varchar(255) NOT NULL DEFAULT '' COMMENT '标签',
  `remind_type` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联内容的ID',
  `remind_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '短评',
  `remind_ip` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'IP地址',
  `remind_rating` tinyint(1) unsigned DEFAULT '0' COMMENT '评分1~5',
  `remind_interest` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '想看1|看过2|在看3|搁置4|抛弃5',
  `remind_addtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '添加时间',
  `remind_uptime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '订阅的影片最后更新时间',
  PRIMARY KEY (`remind_id`),
  KEY `remind_addtime` (`remind_addtime`),
  KEY `remind_uptime` (`remind_uptime`),
  KEY `remind_vid` (`remind_vid`,`remind_uid`),
  KEY `remind_uid` (`remind_uid`,`remind_cid`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COMMENT='用户订阅数据表';
 */
