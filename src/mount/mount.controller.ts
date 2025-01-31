import { Controller, Get } from '@nestjs/common';
import { MountService } from './mount.service';

@Controller('mount')
export class MountController {
  rootDir = 'nfs_mount';
  constructor(private mountService: MountService) {}

  @Get('scan')
  scan() {
    return this.mountService.scan(this.rootDir);
  }
}
