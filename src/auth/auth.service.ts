import { Injectable } from '@nestjs/common';
import { UserService } from '../shared/user/user.service';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(payload: any) {
    return await this.userService.findByPayload(payload);
  }

  async signPayload(payload: any) {
    return sign(payload, 'secretkey', { expiresIn: '12h' });
  }
}
