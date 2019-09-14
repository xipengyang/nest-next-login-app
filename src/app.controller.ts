import { Controller, Get, UseGuards, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('something')
  public index() {
    console.log('handleer is called');
    //res.render('Index', {});
  }
}
