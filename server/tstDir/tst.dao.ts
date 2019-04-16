import {SQ} from '../sequelize'
import * as Bluebird from 'bluebird'
import {Tst} from '../../interface/test'
import * as test from '../models/test'

export default class TstDao extends SQ {
  constructor() {
    super()
  }

  async getTestData(): Bluebird<Tst[]> {
    return test.tst.findAll()
  }
}
