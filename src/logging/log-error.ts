import { Request } from 'express';
import HttpException from '../exceptions/HttpException';
import { log } from './log';
import { errJournalLog } from './log-errjournal';

interface logErrModel {
  err: HttpException;
  method: string;
  url: string;
  body: Record<string, string | number>;
  query: Request['query'];
}

export function logError(logErr: logErrModel): void {
  const { err, method, url, body, query } = logErr;
  const timeStamp = new Date();

  const content = `----
  ERROR
  ---- ${timeStamp}
    ${method}: ${url}
    Query-params: ${JSON.stringify(query)}
    Body: ${JSON.stringify(body)}
    Error: ${JSON.stringify(err)}
    \n`;

  log(content);
  errJournalLog(content);
}
