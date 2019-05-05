import * as KoaRouter from 'koa-router'
import { TestController } from './TestController'

export const router = new KoaRouter({ prefix: "/api" })
    .get('/sayHello/:name', TestController.sayHello)
    .get('/sayHello', TestController.sayHello)
