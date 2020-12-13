'use strict';

module.exports = app => {
  // 获取数据类型
  const { INTEGER, TINYINT, BIGINT, NOW } = app.Sequelize;
  // 定义模型 用户收藏数据表
  const History = app.model.define(`${app.config.prefix}history`, {
    history_id: { type: INTEGER(10).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
    history_sid: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 1, comment: '模型ID' },
    history_cid: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '分类ID' },
    history_uid: { type: INTEGER(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户ID' },
    history_type: { type: TINYINT(10).UNSIGNED, allowNull: false, defaultValue: 0, comment: '关联内容的ID' },
    history_ip: { type: BIGINT(20).UNSIGNED, allowNull: false, defaultValue: 0, comment: 'IP' },
    history_addtime: { type: INTEGER(11).UNSIGNED, allowNull: false, defalutValue: NOW, comment: '添加时间' },
  }, {
    // 禁用 history_addtime 自动转换，使用 mysql 管理
    // 方便后续迁移 ORM 等需求
    timestamps: false,
  });

  return History;
};

/**
 * CREATE TABLE `ff_history` (
  `history_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `history_sid` int(10) unsigned NOT NULL DEFAULT '1',
  `history_cid` int(10) unsigned NOT NULL DEFAULT '0',
  `history_uid` int(10) unsigned NOT NULL DEFAULT '0',
  `history_type` int(10) unsigned NOT NULL DEFAULT '0',
  `history_ip` bigint(20) unsigned NOT NULL DEFAULT '0',
  `history_addtime` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`history_id`),
  KEY `history_addtime` (`history_addtime`),
  KEY `history_type` (`history_type`,`history_addtime`),
  KEY `history_uid` (`history_uid`,`history_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='历史记录数据表';
 */
