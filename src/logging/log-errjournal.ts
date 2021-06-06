import * as fs from 'fs';
import * as path from 'path';

export function errJournalLog(content: string): void {
  fs.writeFileSync(
    path.resolve(__dirname, '../../error-journal.log'),
    content,
    {
      flag: 'a+',
    }
  );
}
