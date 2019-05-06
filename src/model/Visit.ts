import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class AppVisit {
    @PrimaryGeneratedColumn()
    id: number
    @CreateDateColumn({name: 'gmt_create'})
    gmtCreate: Date
    @UpdateDateColumn({name: 'gmt_modified'})
    gmtModified: Date
    @Column({nullable: true})
    gmt: Date
    @Column({nullable: true})
    os: number
    @Column({nullable: true})
    version: string
    @Column({nullable: true})
    count: number
    @Column({nullable: true})
    percent: number
}
/*
CREATE TABLE `app_visit` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt` date NOT NULL,
  `os` int(11) unsigned NOT NULL DEFAULT '0',
  `version` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0.0.0',
  `count` bigint(20) unsigned NOT NULL DEFAULT '0',
  `percent` float unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
*/
