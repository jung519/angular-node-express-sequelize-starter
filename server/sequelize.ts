import * as Sequelize from 'sequelize'
import * as Bluebird from 'bluebird'

require('dotenv').config()

const sequelize = new Sequelize.Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  dialect: process.env.MYSQL,
  port: Number(process.env.MYSQL_PORT),
})

export default sequelize

export class SQ {

  private op

  constructor() {
    this.op = Sequelize.Op
  }

  sequelizeQuery(query: any, options: any): Bluebird <any> {
    return sequelize.query(query, options)
  }

  queryType(type: string): any {
    return Sequelize.QueryTypes[type]
  }

  literal(type: any): any {
    return Sequelize.literal(type)
  }
}
