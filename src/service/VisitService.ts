import { AppVisit } from '../model/AppVisit'
import { getConnection } from 'typeorm'

export class VisitService {
    create(model: AppVisit): Promise<AppVisit> {
        let date = new Date()
        model.gmtCreate = date
        model.gmtModified = date

        return getConnection().manager.save(model)
    }

    select(os?: string, date?: Date): Promise<AppVisit[]> {
        return getConnection().manager.find(AppVisit, {
            where: {
                'os': os
            },
            order: {
                'gmt': 'ASC',
                'version': 'DESC'
            }
        })
    }
}
