import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FileEntity} from "../../files/entities/file.entity";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    password:string

    @OneToMany(()=>FileEntity,file=>file.user)
    files:FileEntity[]
}
