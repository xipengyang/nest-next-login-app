import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { user } = context.switchToHttp().getRequest();
    if (user && user.seller) return true;

    throw new HttpException('Unauthorized Access', HttpStatus.UNAUTHORIZED);
  }
}
