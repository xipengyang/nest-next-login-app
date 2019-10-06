import { Controller, Get, UseGuards, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public index(@Res() res: {render: any}) {
    return {};
  }
}
