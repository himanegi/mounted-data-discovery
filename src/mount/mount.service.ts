import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as workerpool from 'workerpool';

@Injectable()
export class MountService {
  private pool: workerpool.Pool;
  constructor() {
    this.pool = workerpool.pool(path.join(__dirname, 'scan-worker'), {
      maxWorkers: 4,
    });
  }

  async workerScan(dirPath: string) {
    try {
      return await this.pool.exec('dirScan', [dirPath]);
    } catch (error) {
      console.log('Worker error: ', error);
      throw error;
    }
  }

  async scan(dirPath: string) {
    const files = await this.workerScan(dirPath);

    const dirs = files.filter((file) => file.isDirectory());

    const results = await Promise.all(
      dirs.map((dir) => this.scan(dir.filePath)),
    );

    return files.concat(...results);
  }
}
