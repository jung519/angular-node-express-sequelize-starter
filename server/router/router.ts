import * as express from 'express'
import { IServer } from '../../interface/serverInterfase'
import {TestController} from '../tstDir/tst.controller'

export default class Routes {
    static init(server: IServer): void {
        const router: express.Router = express.Router()

        server.app.use('/', router)

        // db connect test
        server.app.use('/test', TestController)

        server.app.use(express.static('public'))
    }
}
