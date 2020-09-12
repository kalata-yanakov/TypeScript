import { TaskStatus } from './../common/task-status';
import moment from 'moment';

export class Task {
  private _name: string;
  private _status: TaskStatus = TaskStatus.ToDo;
  private _due: Date;

  constructor(name: string, due: Date) {
    this._name = name;
    this._due = due;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value === undefined || null || '' && value.length < 6 || value.length > 20) {
     throw new Error('Invalid name');
    }
    this._name = value;
  }

  public get due(): Date {
    return this._due;
  }

  public set due(value: Date) {
    if (value === undefined || null || '') {
     throw new Error('Invalid date');
    }
    this._due = value;
  }

  public reset() {
    this._status = TaskStatus.ToDo;
  }

  public advance() {
    this._status = TaskStatus.InProgress;
  }

  public complete() {
    this._status = TaskStatus.Done;
  }

  public toString() {
    const name = `Name: ${this._name}`;
    const status = `Status: ${TaskStatus[this._status]}`;
    const due = `Due: ${moment(this.due).format('M/D/YYYY hh:mm:ss A')}`;

    return [name, status, due].join('\n');
  }
}
