/* jshint indent: 2 */
'use strict';

const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ff_feed',
    {
      feed_id: {
        autoIncrement: true,
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        primaryKey: true,
      },
      feed_cid: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '分类id',
      },
      feed_sid: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '模型ID',
      },
      feed_type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '类型1关注2评分3评价',
      },
      feed_content_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        comment: '内容ID',
      },
      feed_type_content_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        comment: '类型内容的ID',
      },
      feed_uid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        comment: '用户ID',
      },
      feed_hits: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: '总',
      },
      feed_hits_day: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: '日',
      },
      feed_hits_week: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: '周',
      },
      feed_hits_month: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: '月',
      },
      feed_ip: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        comment: 'IP',
      },
      feed_status: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0,
        comment: '状态',
      },
      feed_addtime: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '添加时间',
      },
      feed_uptime: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '更新时间',
      },
    },
    {
      sequelize,
      tableName: 'ff_feed',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'feed_id' }],
        },
        {
          name: 'feed_id',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'feed_id' }],
        },
      ],
    }
  );
};
