import { Model, BuildOptions, DataTypes, ThroughOptions } from 'sequelize';

const { DATE, NOW, TINYINT, BIGINT } = DataTypes;

export interface BaseModel extends Model {
  // 创建时间
  readonly created_at: Date;
  // 修改时间
  readonly updated_at: Date;
  // 删除时间
  readonly deleted_at: Date;
}

export type BaseModelStatic<T> = typeof Model & ThroughOptions & (new (values?: object, options?: BuildOptions) => T);

export const BaseModelProps = {
  status: { type: TINYINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '状态：0正常 1禁用 2审核中 3审核拒绝 4审核忽略 -1删除' },
  hits: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '总' },
  hits_day: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '日' },
  hits_week: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '周' },
  hits_month: { type: BIGINT.UNSIGNED, allowNull: true, defaultValue: 0, comment: '月' },
  hits_lasttime: { type: DATE, allowNull: false, defaultValue: NOW, comment: '热度更新时间' },
  created_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '创建时间' },
  updated_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '更新时间' },
  deleted_at: { type: DATE, allowNull: false, defaultValue: NOW, comment: '删除时间' },
};
