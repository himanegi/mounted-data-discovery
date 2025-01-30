import { Module } from '@nestjs/common';
import { MountModule } from './mount/mount.module';

@Module({
  imports: [MountModule],
})
export class AppModule {}
