import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../../types/user';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO, LoginDTO } from 'src/auth/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  private sanitizeUser(user: User) {
    return user.depopulate('password');
  }

  async create(userDto: RegisterDTO) {
    const { username } = userDto;
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }

    const newUser = new this.userModel(userDto);
    await newUser.save();
    return this.sanitizeUser(newUser);
  }

  async findbyLogin(userDto: LoginDTO) {
    const { username, password } = userDto;
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
