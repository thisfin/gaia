import * as Koa from "koa";

export class TestController {
    /**
     * http://127.0.0.1:3000/api/sayHello
     * http://127.0.0.1:3000/api/sayHello/liyi
     *
     * @param ctx
     */
    static async sayHello(ctx: Koa.ParameterizedContext<{}>): Promise<any> {
        const name = ctx.params["name"] ? ctx.params["name"] : "Wrold";
        ctx.body = `Hello, ${name}!`;
        ctx.response.type = "json";
        console.log(`${ctx.params["name"]}`);
    }
}

// export { TestController }
