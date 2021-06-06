import * as fs from 'fs';
import * as path from 'path';
import { ReqModel } from './request.model';

export function handleLogging(logReq: ReqModel): void {
  const { method, url, body, query, ms, statusCode } = logReq;
  const timeStamp = new Date();

  const content = `---- ${timeStamp}
    ${method}: ${url} [${statusCode}]
    Completed in: ${ms}
    Query-params: ${JSON.stringify(query)}
    Body: ${JSON.stringify(body)}
    \n`;

  fs.writeFileSync(path.resolve(__dirname, '../../journal.log'), content, {
    flag: 'a+',
  });
}
