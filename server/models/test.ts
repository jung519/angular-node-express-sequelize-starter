import * as sq from 'sequelize'
import sequelize from '../sequelize'

export const tst =  sequelize.define('test', {
  cnt : {type: sq.INTEGER, autoIncrement: true, primaryKey: true},
  test_name: {type: sq.STRING}
}, {
  classMethods: {},
  tableName: 'test',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: false,
  updatedAt: false
})
