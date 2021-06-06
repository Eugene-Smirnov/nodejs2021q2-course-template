import { Request } from 'express';
import { log } from './log';

interface ReqModel {
  method: string;
  url: string;
  body: Record<string, string | number>;
  query: Request['query'];
  ms: number;
  statusCode: number;
}

export function logRequest(logReq: ReqModel): void {
  const { method, url, body, query, ms, statusCode } = logReq;
  const timeStamp = new Date();

  const content = `---- ${timeStamp}
    ${method}: ${url} [${statusCode}]
    Completed in: ${ms}
    Query-params: ${JSON.stringify(query)}
    Body: ${JSON.stringify(body)}
    \n`;

  log(content);
}
