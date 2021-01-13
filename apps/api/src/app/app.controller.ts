import { Controller, Get, Res } from '@nestjs/common';

import { Message } from '@ks-work-schedule/api-interfaces';

import { AppService } from './app.service';
import * as path from 'path';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('main')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(@Res() response): void {
    response.sendFile(path.resolve('dist/apps/frontend/index.html'));
  }

  @Get('api/hello')
  getData(): Message {
    return this.appService.getData();
  }
}
