import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  async create(dto: CreateUserDto) {
    const salt = await genSalt(10);

    const hashedPassword = await hash(dto.password, salt);

    const newUser = this.repository.create({
      ...dto,
      password: hashedPassword,
    });

    return await this.repository.save(newUser);
  }
}
