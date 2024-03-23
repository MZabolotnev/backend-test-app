import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/users.dto'
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getUsers(): Promise<CreateUserDto[]> {
        return this.usersService.getUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
        return this.usersService.createUser(createUserDto);
    }
}