import * as http from 'http'
import Server from './server'
import { normalizePort, onListening, onError } from './server'

console.log('app start')

const port: string | number | boolean = normalizePort(process.env.PORT || 3000)

Server.set('port', port)

console.log(`Server listening on port ${port}`)

const server: http.Server = http.createServer(Server)

server.listen(port)

server.on(
  'error',
  (error) => onError(error, port))
server.on(
  'listening',
  onListening.bind(server))
