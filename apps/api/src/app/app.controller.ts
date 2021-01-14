import { Controller, Get } from '@nestjs/common';

import { Message } from '@ks-work-schedule/api-interfaces';

import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData(): Message {
    return this.appService.getData();
  }
}
