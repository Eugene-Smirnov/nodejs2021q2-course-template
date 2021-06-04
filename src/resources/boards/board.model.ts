import { v4 } from 'uuid';

export class Board {
  public id: string;

  public title: string;

  public columns: Set<string>;

  constructor({ id = v4(), title = 'BOARD', columns = new Set(['']) } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
