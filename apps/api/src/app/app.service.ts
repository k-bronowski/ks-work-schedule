import { Injectable } from '@nestjs/common';
import { Message } from '@ks-work-schedule/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
