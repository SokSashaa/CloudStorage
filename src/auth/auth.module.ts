import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {configServices} from "docker-compose";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  providers: [AuthService,LocalStrategy,JwtStrategy],
  imports:[UsersModule, PassportModule,JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:async (configServices:ConfigService)=>{
      return {
        secret:configServices.get('SECRET_KEY'),
        signOptions:{
          expiresIn:configServices.get('EXPIRES_IN')
        }
      }
    }
  })],
  controllers: [AuthController]
})
export class AuthModule {}
