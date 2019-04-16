import * as Bluebird from 'bluebird'
import {Tst} from '../../interface/test'
import TestDao from './tst.dao'

export default class TstService {
  constructor(
    private testDao: TestDao
  ) {}

  async getTestData(): Bluebird<Tst[]> {
    try {
      return await this.testDao.getTestData()
    } catch (error) {
      throw error
    }
  }
}
