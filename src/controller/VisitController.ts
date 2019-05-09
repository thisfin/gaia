import * as Koa from "koa";
import { VisitService } from "../service/VisitService"
import { AppVisit } from '../model/AppVisit'
import { RequestResult } from '../model/RequestResult'

export class VisitController {
    static async create(ctx: Koa.ParameterizedContext<{}>): Promise<any> {
        console.log('post body: ' + JSON.stringify(ctx.request.body))
        // todo 类型转换太搓了
        let model = new AppVisit()
        model.os = +ctx.request.body.oss // string to number 貌似不用这样
        model.gmt = ctx.request.body.gmt
        model.version = ctx.request.body.version
        model.count = ctx.request.body.count
        model.percent = ctx.request.body.percent
        console.log(ctx.request.body)
        await new VisitService().create(model).then( value => {
            ctx.body = new RequestResult(true, undefined)
        }).catch(error => {
            console.log(error)
            ctx.body = new RequestResult(false, undefined)
        })
    }

    static async select(ctx: Koa.ParameterizedContext<{}>): Promise<any> {
        await new VisitService().select(ctx.request.query.os).then( value => {
            ctx.body = value
            // ctx.set('Access-Control-Allow-Origin', '*')
            ctx.response.type = 'json'
        })
    }
}
