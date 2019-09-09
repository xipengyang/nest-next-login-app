import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { UserService } from '../shared/user/user.service';
import { RegisterDTO, LoginDTO } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDto: LoginDTO) {
    const user = await this.userService.findbyLogin(userDto);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() userDto: RegisterDTO) {
    const { username, seller } = await this.userService.create(userDto);
    const payload = {
      username,
      seller,
    };
    const token = await this.authService.signPayload(payload);
    return { username, seller, token };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  tempAuth() {
    return { auth: 'works' };
  }
}
