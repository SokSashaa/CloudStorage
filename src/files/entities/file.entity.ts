import {Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";

export enum FileType {
    PHOTOS = 'photos',
    TRASH = 'trash',
}
@Entity('files')
export class FileEntity {

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    originalName:string

    @Column()
    size:number

    @Column()
    mimeType:string

    @DeleteDateColumn()
    deleteAt?:Date

    @ManyToOne(()=>UserEntity,user=>user.files)
    user:UserEntity
}
