import { AppVisit } from '../model/AppVisit'
import { getConnection } from 'typeorm'

export class VisitService {
    create(model: AppVisit): Promise<AppVisit> {
        let date = new Date()
        model.gmtCreate = date
        model.gmtModified = date

        return getConnection().manager.save(model)
    }

    select1(os?: string, date?: Date): Promise<AppVisit[]> {
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

    select(os?: string, date?: Date): Promise<AppVisit[]> {
        const day = new Date()
        day.setTime(day.getTime() - 1000 * 60 * 60 * 24 * 16)

        return getConnection().manager.getRepository(AppVisit)
            .createQueryBuilder()
            .where('os = :os', { os: os })
            .andWhere('gmt >= :gmt', { gmt: day })
            .orderBy('gmt', 'ASC')
            .addOrderBy('version', 'DESC')
            .getMany()
    }
}
