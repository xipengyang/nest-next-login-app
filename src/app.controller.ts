import { Controller, Get, UseGuards, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public index(@Res() res) {
    res.render('Index', {});
  }
}
