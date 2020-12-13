/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ff_model', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "模型ID"
    },
    name: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: "",
      comment: "模型标识"
    },
    title: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: "",
      comment: "模型名称"
    },
    extend: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "继承的模型"
    },
    icon: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "模型图标"
    },
    relation: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "继承与被继承模型的关联字段"
    },
    is_user_show: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "是否会员中心显示"
    },
    need_pk: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "新建表时是否需要主键字段"
    },
    field_sort: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "表单字段排序"
    },
    field_group: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "1:基础",
      comment: "字段分组"
    },
    field_list: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "字段列表"
    },
    attribute_list: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "属性列表（表的字段）"
    },
    attribute_alias: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "属性别名定义"
    },
    list_grid: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "列表定义"
    },
    list_row: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 10,
      comment: "列表数据长度"
    },
    search_key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      comment: "默认搜索字段"
    },
    search_list: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "高级搜索的字段"
    },
    template_list: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "列表显示模板"
    },
    template_add: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "新增模板"
    },
    template_edit: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "编辑模板"
    },
    template_list_skin: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "前台栏目模版"
    },
    template_list_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "前台检索模版"
    },
    template_list_detail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "前台内容模版"
    },
    template_list_play: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "前台播放模版"
    },
    create_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "创建时间"
    },
    update_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "更新时间"
    },
    status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "状态"
    },
    engine_type: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "MyISAM",
      comment: "数据库引擎"
    }
  }, {
    sequelize,
    tableName: 'ff_model',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "title",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "create_time",
        using: "BTREE",
        fields: [
          { name: "create_time" },
        ]
      },
      {
        name: "update_time",
        using: "BTREE",
        fields: [
          { name: "update_time" },
        ]
      },
    ]
  });
};
