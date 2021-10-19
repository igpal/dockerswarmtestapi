import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getVersion')
  getVersion(): string {
    return this.appService.getVersion();
  }
  @Get('/exit')
  exit(): void {
    return this.appService.exit();
  }
  @Get('/crash')
  crash(): void {
    return this.appService.crash();
  }
}
