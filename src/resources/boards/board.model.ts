import { v4 } from 'uuid';

export class Board {
  public id: string;

  public title: string;

  public columns: Set<{ title: string; order: number }>;

  constructor({
    id = v4(),
    title = 'BOARD',
    columns = new Set(),
  }: {
    id?: string;
    title?: string;
    columns?: Set<{ title: string; order: number }>;
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
