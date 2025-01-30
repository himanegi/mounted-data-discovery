import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MountModule } from './mount/mount.module';
import { MounController } from './moun/moun.controller';

@Module({
  imports: [MountModule],
  controllers: [AppController, MounController],
  providers: [AppService],
})
export class AppModule {}
