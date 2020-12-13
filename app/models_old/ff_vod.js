/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_vod', {
    vod_id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    vod_cid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    vod_pid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_mcid: {
      type: DataTypes.STRING(222),
      allowNull: false,
      defaultValue: ""
    },
    vod_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_foreign: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "操作人"
    },
    vod_aliases: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_tag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_color: {
      type: DataTypes.CHAR(8),
      allowNull: false,
      defaultValue: ""
    },
    vod_actor: {
      type: DataTypes.STRING(8000),
      allowNull: false,
      defaultValue: ""
    },
    vod_director: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_pic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_pic_thumb: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_bigpic: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_website: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "官网"
    },
    vod_original: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "漫画原作"
    },
    vod_company: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "制作公司"
    },
    vod_remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "简评"
    },
    vod_diantai: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    vod_tvcont: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_tvexp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_prty: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_time: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "时间"
    },
    vod_area: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    vod_language: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      defaultValue: ""
    },
    vod_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    vod_continu: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "0"
    },
    vod_total: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    vod_isend: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_addtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    vod_hits: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_hits_day: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_hits_week: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_hits_month: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_hits_lasttime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_stars: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1
    },
    vod_lock: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_copyright: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_up: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_down: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_play: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_playoid: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_server: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vod_inputer: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    vod_reurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_jumpurl: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    vod_letter: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    vod_skin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    vod_gold: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true,
      defaultValue: 0.0
    },
    vod_golder: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_isfilm: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1
    },
    vod_filmtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_length: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_weekday: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    reid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    HasGetComment: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_letters: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_stitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "关键字"
    },
    vod_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_doubanid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_baike: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    vod_vipplay: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_pay: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_downpay: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_trysee: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    vod_uid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ff_vod',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vod_id" },
        ]
      },
      {
        name: "vod_letters",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vod_letters" },
          { name: "vod_status" },
        ]
      },
      {
        name: "vod_mcid",
        using: "BTREE",
        fields: [
          { name: "vod_mcid" },
        ]
      },
      {
        name: "vod_title",
        using: "BTREE",
        fields: [
          { name: "vod_title" },
        ]
      },
      {
        name: "vod_tag",
        using: "BTREE",
        fields: [
          { name: "vod_tag" },
        ]
      },
      {
        name: "vod_actor",
        using: "BTREE",
        fields: [
          { name: "vod_actor", length: 333 },
        ]
      },
      {
        name: "vod_director",
        using: "BTREE",
        fields: [
          { name: "vod_director" },
        ]
      },
      {
        name: "vod_diantai",
        using: "BTREE",
        fields: [
          { name: "vod_diantai" },
        ]
      },
      {
        name: "vod_prty",
        using: "BTREE",
        fields: [
          { name: "vod_prty" },
        ]
      },
      {
        name: "vod_language",
        using: "BTREE",
        fields: [
          { name: "vod_language" },
        ]
      },
      {
        name: "vod_year",
        using: "BTREE",
        fields: [
          { name: "vod_year" },
        ]
      },
      {
        name: "vod_isend",
        using: "BTREE",
        fields: [
          { name: "vod_isend" },
        ]
      },
      {
        name: "vod_addtime",
        using: "BTREE",
        fields: [
          { name: "vod_addtime" },
        ]
      },
      {
        name: "vod_hits",
        using: "BTREE",
        fields: [
          { name: "vod_hits" },
        ]
      },
      {
        name: "vod_hits_day",
        using: "BTREE",
        fields: [
          { name: "vod_hits_day" },
        ]
      },
      {
        name: "vod_hits_week",
        using: "BTREE",
        fields: [
          { name: "vod_hits_week" },
        ]
      },
      {
        name: "vod_hits_month",
        using: "BTREE",
        fields: [
          { name: "vod_hits_month" },
        ]
      },
      {
        name: "vod_hits_lasttime",
        using: "BTREE",
        fields: [
          { name: "vod_hits_lasttime" },
        ]
      },
      {
        name: "vod_stars",
        using: "BTREE",
        fields: [
          { name: "vod_stars" },
        ]
      },
      {
        name: "vod_lock",
        using: "BTREE",
        fields: [
          { name: "vod_lock" },
        ]
      },
      {
        name: "vod_up",
        using: "BTREE",
        fields: [
          { name: "vod_up" },
        ]
      },
      {
        name: "vod_down",
        using: "BTREE",
        fields: [
          { name: "vod_down" },
        ]
      },
      {
        name: "vod_play",
        using: "BTREE",
        fields: [
          { name: "vod_play" },
        ]
      },
      {
        name: "vod_letter",
        using: "BTREE",
        fields: [
          { name: "vod_letter" },
        ]
      },
      {
        name: "vod_gold",
        using: "BTREE",
        fields: [
          { name: "vod_gold" },
        ]
      },
      {
        name: "vod_golder",
        using: "BTREE",
        fields: [
          { name: "vod_golder" },
        ]
      },
      {
        name: "vod_isfilm",
        using: "BTREE",
        fields: [
          { name: "vod_isfilm" },
        ]
      },
      {
        name: "vod_filmtime",
        using: "BTREE",
        fields: [
          { name: "vod_filmtime" },
        ]
      },
      {
        name: "vod_weekday",
        using: "BTREE",
        fields: [
          { name: "vod_weekday" },
        ]
      },
      {
        name: "vod_doubanid",
        using: "BTREE",
        fields: [
          { name: "vod_doubanid" },
        ]
      },
      {
        name: "vod_baike",
        using: "BTREE",
        fields: [
          { name: "vod_baike" },
        ]
      },
      {
        name: "vod_uid",
        using: "BTREE",
        fields: [
          { name: "vod_uid" },
        ]
      },
      {
        name: "vod_pid",
        using: "BTREE",
        fields: [
          { name: "vod_pid" },
        ]
      },
      {
        name: "vod_status",
        using: "BTREE",
        fields: [
          { name: "vod_status" },
        ]
      },
      {
        name: "vod_area",
        using: "BTREE",
        fields: [
          { name: "vod_area" },
          { name: "vod_cid" },
          { name: "vod_status" },
          { name: "vod_addtime" },
          { name: "vod_hits" },
        ]
      },
      {
        name: "vod_name",
        using: "BTREE",
        fields: [
          { name: "vod_name" },
        ]
      },
      {
        name: "vod_aliases",
        using: "BTREE",
        fields: [
          { name: "vod_aliases" },
        ]
      },
      {
        name: "vod_cid_s",
        using: "BTREE",
        fields: [
          { name: "vod_cid" },
          { name: "vod_status" },
          { name: "vod_addtime" },
        ]
      },
      {
        name: "vod_cid_status",
        using: "BTREE",
        fields: [
          { name: "vod_cid" },
          { name: "vod_status" },
          { name: "vod_id" },
        ]
      },
      {
        name: "vod_cid",
        using: "BTREE",
        fields: [
          { name: "vod_cid" },
          { name: "vod_status" },
          { name: "vod_addtime" },
          { name: "vod_hits" },
          { name: "vod_hits_day" },
          { name: "vod_hits_week" },
          { name: "vod_hits_month" },
          { name: "vod_hits_lasttime" },
          { name: "vod_stars" },
          { name: "vod_up" },
          { name: "vod_down" },
          { name: "vod_gold" },
          { name: "vod_golder" },
          { name: "vod_prty" },
        ]
      },
    ]
  });
};
