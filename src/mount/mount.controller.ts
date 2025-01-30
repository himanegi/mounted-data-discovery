import { Controller, Get } from '@nestjs/common';
import { MountService } from './mount.service';

@Controller('mount')
export class MountController {
  rootDir = 'test-dir';
  constructor(private mountService: MountService) {}

  @Get('scan')
  nfs() {
    return this.mountService.scan(this.rootDir);
  }
}
