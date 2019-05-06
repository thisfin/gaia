import * as Koa from 'koa'
import * as cors from 'koa2-cors'
import { createConnection } from 'typeorm'
import { router } from './router'

const port: number = 3000

const koa = new Koa()
    .use(cors()) // 跨域, 保证在 router 之前
    .use(router.routes())
    .listen(port)
console.log(`Server running on port ${port}`)

// db init
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'wenyou',
    password: '1234',
    database: 'app',
    entities: [
        __dirname + '/model/**/*.ts'
    ]
}).then(connection => {
}).catch(error => console.log(error))
