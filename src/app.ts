import * as Koa from 'koa'
import { router } from './router'

const port: number = 3000

const koa = new Koa().use(router.routes()).listen(port)
console.log(`Server running on port ${port}`)
