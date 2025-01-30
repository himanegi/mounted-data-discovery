import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MountModule } from './mount/mount.module';

@Module({
  imports: [MountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
