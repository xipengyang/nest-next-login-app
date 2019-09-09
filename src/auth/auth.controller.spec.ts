import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UserService } from '../shared/user/user.service';
import { getModelToken } from '@nestjs/mongoose';
import { AuthService } from './auth.service';

describe('Auth Controller', () => {
  let controller: AuthController;

  const mockUserService = jest.fn();
  const mockAuthService = jest.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: 'UserService',
          useValue: mockUserService,
        },
        {
          provide: 'AuthService',
          useValue: mockAuthService,
        },
      ],
    })
      .overrideProvider('UserService')
      .useValue(mockUserService)
      .overrideProvider('AuthService')
      .useValue(mockAuthService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
