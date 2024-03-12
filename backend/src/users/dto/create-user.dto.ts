import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    default: 'G123dfew!e',
  })
  @IsString()
  password: string;

  @ApiProperty({
    default: 'Ivan',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    default: 'Ivanov',
  })
  @IsString()
  lastName: string;
}
