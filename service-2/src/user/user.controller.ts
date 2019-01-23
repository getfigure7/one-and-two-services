import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  Client,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class UserController {
  @Client({
    transport: Transport.REDIS,
    options: { 
      retryAttempts: 5,
      retryDelay: 3000,
      url: 'redis://localhost:32768'
    },
  })
  client: ClientProxy;

  @Get('sum-users')
  call(): Observable<number> {
    const pattern = { getSum: 'sum' };
    const data = [1, 2, 3, 4, 5];
    return this.client.send<number>(pattern, data);
  }
}