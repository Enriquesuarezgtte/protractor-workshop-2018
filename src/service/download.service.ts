import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import 'isomorphic-fetch';
import * as e6p from 'es6-promise';
(e6p as any).polyfill();

export class DownloadService {
  private tempFolder: string;

  constructor() {
    this.tempFolder = resolve('temp');
  }

  public async downloadFile(link: string, filename: string): Promise<void> {
    if (!existsSync(this.tempFolder)) {
      mkdirSync(this.tempFolder);
    }
    const fileContent: Buffer = await fetch(link)
      .then((response: any) => response.buffer());
    writeFileSync(resolve(this.tempFolder, filename), fileContent);
  }

  public readFileFromTemp(filename: string): Buffer {
    if (existsSync(this.tempFolder)) {
      return readFileSync(resolve(this.tempFolder, filename));
    }
  }
}
