import { Controller, Get, Res } from '@nestjs/common';
import { RenderableResponse } from 'nest-next';
import { Principal } from './utilities/principal.decorator';

@Controller()
export class AppController {
  // tslint:disable-next-line: no-empty
  constructor() {}

  @Get()
  public index(@Res() res: RenderableResponse, @Principal() principal: any) {
    // tslint:disable-next-line: no-console
    console.log(principal);
    res.render(Math.random() > 0.5 ? 'login' : 'index', {});
  }
}
