import { v4 } from 'uuid';

export class Task {
  id: string;

  title: string;

  order: number | null;

  description: string;

  userId: string | null;

  boardId: string | null;

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
