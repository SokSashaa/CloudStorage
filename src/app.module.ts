import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import {UserEntity} from "./users/entities/user.entity";
import {ConfigModule} from "@nestjs/config";
import {FileEntity} from "./files/entities/file.entity";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [UserEntity,FileEntity],
    synchronize: true,
  }),UsersModule, FilesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
