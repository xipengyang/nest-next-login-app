import { Controller, Get, UseGuards, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { render } from 'react-dom';
import { RenderableResponse } from 'nest-next';
import { Principal } from './utilities/principal.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public index(@Res() res: RenderableResponse, @Principal() principal: any) {
    console.log(principal);
    res.render('index', {});
  }
}
