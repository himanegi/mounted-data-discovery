import { Module } from '@nestjs/common';
import { MountService } from './mount.service';

@Module({
  providers: [MountService]
})
export class MountModule {}
