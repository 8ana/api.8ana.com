module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, CHAR, TINYINT, BIGINT, NOW, DECIMAL } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, comment: '用户ID' },
      username: { type: STRING(100), allowNull: false, unique: true, comment: '用户名' },
      password: { type: STRING(100), allowNull: false, comment: '密码' },
      pay_password: { type: STRING(100), allowNull: false, defaultValue: '', comment: '支付密码' },
      avatar: { type: STRING(255), comment: '头像地址' },
      email: { type: STRING(100), comment: '邮箱' },
      mobile: { type: STRING(20), comment: '手机号' },
      signature: { type: STRING(255), comment: '签名' },
      realname: { type: STRING(20), defaultValue: '', comment: '身份证姓名' },
      identity: { type: CHAR(18), defaultValue: '', comment: '身份证号码' },
      birthday: { type: CHAR(16), defaultValue: '', comment: '生日' },
      nickname: { type: CHAR(16), defaultValue: '', comment: '昵称' },
      salt: { type: CHAR(10), allowNull: false, comment: '密码加盐' },
      amount: { type: DECIMAL(8, 2), allowNull: false, defaultValue: 0.0, comment: '余额' },
      sex: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '1:男2:女' },
      admin: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '权限' },
      score: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '积分' },
      login: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '登录次数' },
      email_confirmed: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '0:未验证1:已验证' },
      mobile_confirmed: { type: TINYINT.UNSIGNED, defaultValue: 0, comment: '0:未验证1:已验证' },
      is_remind: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '是否开通订阅提醒外' },
      is_station: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '是否开通站内订阅提醒' },
      register_ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '注册IP' },
      last_login_ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '最后登录 ip 地址' },
      update_ip: { type: BIGINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '更新信息 ip 地址' },
      status: { type: TINYINT.UNSIGNED, allowNull: false, defaultValue: 0, comment: '用户状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略' },
      login_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '最后登录时间' },
      avatar_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '头像修改时间' },
      joined_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '付费加入时间' },
      expired_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '付费到期时间' },
      created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
      updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
      deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
