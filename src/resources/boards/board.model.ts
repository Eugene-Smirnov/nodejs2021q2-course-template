import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Board extends BaseEntity {
  @PrimaryColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column()
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
    super();
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
