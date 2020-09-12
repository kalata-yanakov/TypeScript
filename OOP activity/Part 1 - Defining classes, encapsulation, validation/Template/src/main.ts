import { Board } from './models/board.model';
import { Task } from './models/task.model';

// Your test code goes here

const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const board = new Board();
const anotherBoard = new Board();

console.log(
  board === anotherBoard
    ? `Success: board and anotherBoard refer to the same instance.`
    : `Fail: board and anotherBoard refer to the different instances!`
);
// console.log(`Board references created: ${board.referenceCount}`);

const task1 = new Task('Validate fields', new Date('2020/09/03'));
const task2 = new Task('Write unit tests', new Date('2020/09/04'));
const task3 = new Task('Remove console.log', new Date('2020/09/05'));

console.log(board.toString());
newline();

board.add(task1);
board.add(task2);
board.add(task3);

task1.advance();
task2.complete();

console.log(board.toString());
newline();

board.remove(task3);

console.log(task1.toString());
newline();

console.log('board.itemCount:', board.taskCount);
console.log(
  'board.items.length === board.itemCount ==>',
  board.tasks.length === board.taskCount
);
