import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../../types/user';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  private sanitizeUser(user: User) {
    return user.depopulate('password');
  }

  create() {}

  findbyLogin() {}
}
