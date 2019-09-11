import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../../types/user';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO, LoginDTO } from 'src/auth/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  private sanitizeUser(user: User): Partial<User> {
    return user.depopulate('password');
  }

  async create(userDto: UserDTO) {
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
    const { password: hashed, seller } = await this.userModel
      .findOne({ username })
      .select('password seller');
    if (!hashed) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    if (await bcrypt.compare(password, hashed)) {
      return { username, authenticated: true, seller };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: any) {
    const { username } = payload;
    return await this.userModel.findOne({ username });
  }

  async findAll() {
    return await this.userModel.find();
  }
}
