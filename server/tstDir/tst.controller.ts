import {Router} from 'express'
import TestService from './tst.service'
import TestDao from './tst.dao'

export const TestController = Router()
// tslint:disable-next-line:new-parens
const testService = new TestService(new TestDao)

TestController.get('/test', (req, res, next) => {
  try {
    testService.getTestData()
    .then(v => {
      return res.json(v)
    })
  } catch (err) {
    next(err)
  }
})
