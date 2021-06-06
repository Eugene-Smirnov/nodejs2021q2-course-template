import * as fs from 'fs';
import * as path from 'path';

export function log(content: string): void {
  fs.writeFileSync(path.resolve(__dirname, '../../journal.log'), content, {
    flag: 'a+',
  });
}
