interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
}

export interface ReqModel {
  method: string;
  url: string;
  body: Record<string, string | number>;
  query: ParsedQs;
  ms: number;
  statusCode: number;
}
