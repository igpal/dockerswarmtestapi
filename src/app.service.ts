import { Injectable } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class AppService {
  getVersion(): string {
    return '1';
  }

  exit(): void {
    process.exit(0);
  }

  crash(): void {
    process.exit(1);
  }
}
