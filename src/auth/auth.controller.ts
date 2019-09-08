import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../shared/user/user.service';
import { logicalExpression } from '@babel/types';
import { RegisterDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(@Body() userDto: any) {
    return this.userService.findbyLogin(userDto);
  }

  @Post('register')
  async register(@Body() userDto: RegisterDTO) {
    return this.userService.create(userDto);
  }
}