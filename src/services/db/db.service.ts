import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/users.dto';

@Injectable()
export class DbService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const _user = this.userRepository.create(user);
    return this.userRepository.save(_user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}