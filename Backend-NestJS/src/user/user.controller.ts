import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entries/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    // print the user object to the console
    console.log('User object:', user);
    // need validation here TBC
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  // @Get()
  // async printUsers(): Promise<string> {
  //   return "Hello, this is the user controller!";
  // }
}