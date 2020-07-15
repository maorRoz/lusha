import {
  Controller,
  Get,
  Post,
  Body,
  ConflictException,
  Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './models/user.model';
import { encrypt } from './encrypt';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(
    @Query('page') page = 0
  ): Promise<Omit<User, 'password'>[]> {
    const users = await this.userService.getAllUsers(page);
    return users.map(({ firstName, lastName, email, description }) => ({
      firstName,
      lastName,
      email,
      description
    }));
  }

  @Post()
  async createUser(@Body() userDto: User): Promise<Omit<User, 'password'>> {
    try {
      const {
        firstName,
        lastName,
        email,
        description
      } = await this.userService.createUser({
        ...userDto,
        password: encrypt(userDto.password)
      });

      return {
        firstName,
        lastName,
        email,
        description
      };
    } catch (e) {
      throw new ConflictException();
    }
  }
}
