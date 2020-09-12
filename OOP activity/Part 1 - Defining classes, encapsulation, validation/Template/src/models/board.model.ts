import { Task } from './task.model';

export class Board {
  private _tasks: Task[] = [];

  public get tasks() {
    return [...this._tasks];
  }

  public get taskCount() {
    return this._tasks.length;
  }

  public add(task: Task) {
    this._tasks = [...this._tasks, task];
  }

  public remove(task: Task) {
    this._tasks = this._tasks.filter(t => t !== task);
  }

  public toString() {
    return [
      '---Task Board---\n',
      'Tasks:\n',
      this._tasks.length ? this._tasks.join('\n--------\n') : 'No tasks at the moment.'
    ].join('\n');
  }
}
