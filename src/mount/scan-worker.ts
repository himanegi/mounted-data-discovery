import * as workerpool from 'workerpool';
import * as fs from 'fs-extra';
import * as path from 'path';

async function dirScan(dirPath: string) {
  try {
    const files = await fs.readdir(dirPath);

    const fileDetails = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);
        return {
          file,
          filePath,
          size: stats.size,
          permissions: stats.mode.toString(8),
          modifiedTime: stats.mtime,
          isDirectory: stats.isDirectory(),
        };
      }),
    );

    return fileDetails;
  } catch (error) {
    console.log('worker error: ', error);
  }
}

workerpool.worker({
  dirScan,
});
