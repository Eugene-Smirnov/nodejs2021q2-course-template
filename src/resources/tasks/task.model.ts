import {
  Entity,
  PrimaryColumn,
  Column,
  // ManyToOne,
  // JoinColumn,
  // BaseEntity,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Task {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number | null;

  @Column()
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  userId: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  boardId: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  columnId: string | null;

  constructor({
    id = v4(),
    title = 'Task',
    order = null,
    description = 'Task number 1',
    userId = null,
    boardId = null,
    columnId = null,
  }: Partial<Task> = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
