import * as KoaRouter from 'koa-router'
import { TestController } from './controller/TestController'
import { VisitController } from './controller/VisitController'

export const router = new KoaRouter({ prefix: "/api" })
    .get('/sayHello/:name', TestController.sayHello)
    .get('/sayHello', TestController.sayHello)
    .get('/visit/select', VisitController.select)
    .get('/visit/create', VisitController.create)
    .post('/visit/create', VisitController.create)
