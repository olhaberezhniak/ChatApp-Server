import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): unknown {
    return { title: 'Hello World' };
  }
}
