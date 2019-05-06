import * as Koa from "koa";
import { VisitService } from "../service/VisitService"

export class VisitController {
    static async create(ctx: Koa.ParameterizedContext<{}>): Promise<any> {
        new VisitService().create()
        ctx.body = 'finish'
    }

    static async select(ctx: Koa.ParameterizedContext<{}>): Promise<any> {
        await new VisitService().select().then( value => {
            ctx.body = value
            ctx.response.type = 'json'
        })
    }
}
