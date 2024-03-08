import {Controller, Request, Post, UseGuards, Body} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {ApiBody} from "@nestjs/swagger";
import {UserEntity} from "../users/entities/user.entity";
import {LocalGuard} from "./guards/local.guard";

@Controller()
export class AuthController {
    constructor(private readonly authService:AuthService) {
    }
    @UseGuards(LocalGuard)
    @Post('auth/login')
    @ApiBody({type:CreateUserDto})
    async login(@Request() req) {
      return this.authService.login(req.user as UserEntity)
    }

    @Post('auth/register')
    register(@Body() dto:CreateUserDto){
        return this.authService.register(dto)
    }
}