import { AppVisit } from '../model/Visit'
import { createConnection, Connection, getConnection } from 'typeorm'

export class VisitService {
    create() {
        let date = new Date()
        let model = new AppVisit()
        model.gmtCreate = date
        model.gmtModified = date
        model.gmt = date
        model.os = 1
        model.count = 10
        model.percent = 10.5
        model.count = 1024
        model.version = '1.0.0'

        getConnection().manager.save(model)

        // createConnection().then(async connection => {
        //     await connection.getRepository(Visit).save(model)
        //     // await connection.manager.save(model)
        // }).catch(error => console.log(error))
    }

    select(): Promise<AppVisit[]> {
        return getConnection().manager.find(AppVisit, {
            order: {
                "gmtCreate": "DESC"
            }
        })
    }
}
