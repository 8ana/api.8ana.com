'use strict';

module.exports = app => {
  // 获取数据类型
  const DataTypes = app.Sequelize;

  return app.model.define(
    `${app.config.prefix}actor`,
    {
      actor_id: {
        autoIncrement: true,
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      actor_cid: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_vid: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_prty: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      actor_keywords: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      actor_description: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      actor_addtime: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_hits: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_hits_day: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_hits_week: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_hits_month: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_hits_lasttime: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_skin: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: '',
      },
      actor_status: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
      },
      actor_stars: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      actor_reurl: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      actor_uid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'actor_id' }],
        },
        {
          name: 'actor_vid',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'actor_vid' }, { name: 'actor_status' }],
        },
        {
          name: 'actor_id',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'actor_id' }],
        },
        {
          name: 'actor_addtime',
          using: 'BTREE',
          fields: [{ name: 'actor_addtime' }],
        },
        {
          name: 'actor_hits',
          using: 'BTREE',
          fields: [{ name: 'actor_hits' }],
        },
        {
          name: 'actor_hits_day',
          using: 'BTREE',
          fields: [{ name: 'actor_hits_day' }],
        },
        {
          name: 'actor_hits_week',
          using: 'BTREE',
          fields: [{ name: 'actor_hits_week' }],
        },
        {
          name: 'actor_hits_month',
          using: 'BTREE',
          fields: [{ name: 'actor_hits_month' }],
        },
        {
          name: 'actor_cid',
          using: 'BTREE',
          fields: [
            { name: 'actor_cid' },
            { name: 'actor_addtime' },
            { name: 'actor_hits' },
            { name: 'actor_hits_day' },
            { name: 'actor_hits_week' },
            { name: 'actor_hits_month' },
            { name: 'actor_status' },
          ],
        },
        {
          name: 'actor_prty',
          using: 'BTREE',
          fields: [{ name: 'actor_prty' }],
        },
        {
          name: 'actor_uid',
          using: 'BTREE',
          fields: [{ name: 'actor_uid' }],
        },
      ],
    }
  );
};
