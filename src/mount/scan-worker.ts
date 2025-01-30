import workerpool from 'workerpool';

async function dirScan(dirPath: string) {
  console.log(`scanning ${dirPath}`);
}

workerpool.worker({
  dirScan,
});
