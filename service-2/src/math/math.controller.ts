import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  Client,
  Transport,
  MessagePattern,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class MathController {
  @MessagePattern({ getSum: 'sum' })
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
