import { Module } from '@nestjs/common';
import { MountService } from './mount.service';
import { MountController } from './mount.controller';

@Module({
  providers: [MountService],
  controllers: [MountController]
})
export class MountModule {}
