import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users.dto';
import { usersMock } from 'src/mocks/users.mock';
import { DbService } from './db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  private users: CreateUserDto[] = usersMock;

  async getUsers(): Promise<CreateUserDto[]> {
    return await this.dbService.getAllUsers();
  }

  async createUser(user: CreateUserDto): Promise<CreateUserDto> {
    return await this.dbService.createUser(user);
  }
}
