<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

## Boardr - task organizing system

### 1. Project information

1. Run `npm install`
1. There are a few scripts you could run

   - `npm run start` - run the project
   - `npm run start:safe` - run the project but makes a check in TSLint and if any of the rules fail the project won't run
   - `npm run test` - run the tests
   - `npm run majestic` - run the tests with [Majestic](https://github.com/Raathigesh/majestic)
   - `npm run lint -s` - lint the project
   - `npm run lint:fix -s` - fix the problems with lint

   - The `-s` flag in lint means to run it silent and not report back exceptions

### 2. Description

In its complete form _Boardr_ will be a system for creating, updating, organizing, and managing tasks, issues, and notes. The application will be built **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP).

### 3. Goal

Your **goal** is to design the two main **models** of the system - the `Board` class and the `Task` class. You need to **encapsulate** correctly all fields and use **validation** whenever necessary.

What we will exercise:

- defining a class
- how to create fields and properties:
  - fields are the state - the part that holds the data
  - properties expose fields through getters and setters - a property can have both getter and setter, only a getter, or only a setter
- how to encapsulate the class - fields should be private (or protected) and should be exposed through properties that are validated
- how to use validation in properties
- when to make a method public or private - only methods used outside the class should be public, everything else should be private or protected
- how to create a custom `toString` method for a class
- how to manage the state of the class:
  - through encapsulated fields, exposed through validated properties
  - through dedicated methods (also validated whenever necessary)

Field:

```typescript
private _name: string;
```

Property:

```typescript
public get name(): string {
  return this._name;
}
public set name(value: string) {
  if (value && value.length > 6) {
    this._name = value;
  }
}
```

### 4. The `Task` model

Each task should have the following public properties:

- `name: string` - **name** should never be **null, undefined or an empty string**, its length should be between **6 and 20 characters**
- `due: Date` - the date of the deadline. Think of what validation will be needed here
- `status` - the task's status should be one of the three `Todo`, `InProgress`, or `Done`. Think of what is the best way to represent the value and its type. Also, the status of the task should be changed only from within the `class` through public methods, we should not be able to update the status from an instance of the class

The following methods should be implemented as well:

- `reset(): void` - it should set the status of the task to `Todo`
- `advance(): void` - it should set the status of the task to `InProgress`
- `complete(): void` - it should set the status of the task to `Done`

Think of why we want to put the logic for changing the status in methods rather than expose a setter for `status`.

Now, when you have the `Task` class implemented try to create a few instances of the class:

```typescript
const task1 = new Task('Validate fields', new Date('2020/09/03'));
const task2 = new Task('Write unit tests', new Date('2020/09/04'));
const task3 = new Task('Remove console.log', new Date('2020/09/05'));
```

What happens when you put the tasks in an array and try to print the array?

```typescript
const tasks: Task[] = [task1, task2, task3];
console.log(tasks);
```

In some cases the compiler will try to convert the array to string and you might see something like this:

```json
[object Object],[object Object],[object Object]
```

Remember what are the two methods common to every JavaScript object and type (except for `null`, `undefined`, and objects created with `Object.create(null)`)

- `toString()` and `valueOf()`.

The built-in `toString` method of the `Array` class will return a string with the values of the array converted to strings on their own, separated with comma. In order to force the array to be printed this way you can use the method explicitly:

```typescript
console.log(tasks.toString());
```

Because this format is not very readable, think of a way to **override** the `toString()` method of the task so that it returns a more meaningful string, i.e.

```text
Name: Update naming
Status: Todo
Due: 9/4/2020 12:00:00 AM
```

#### Hint: You can use `moment.js` to format the date to your liking.

```ts
npm i moment
import moment from 'moment';
```

### 5. The `Board` model

The `Board` model will hold all the different tasks we create. Its role will be to _contain_ the tasks and expose some functionality to manage them.

You need to implement the different properties and methods of the class:

- `tasks: Task[]` - we need to expose the list of tasks outside the class, however, we should do so by not allowing the user to `push`, or `pop`, or modify the original `Task[]` array in any way. Think of a way to encapsulate the task list
- `taskCount: number` - should return the number of tasks added to the board

The board should expose the proper methods which allow for tasks to be added or removed from the board. Think of the needed checks and validation:

- `public add(task: Task): void` - should add a task to the list of tasks in the board. A single task can be added only once
- `public remove(task: Task): void` - should remove a task from the list of tasks. The board should not allow for a task to be removed if it's not in the list, i.e. it should throw an error
- `referenceCount: number` - should return the number of times we have required an instance of the board

You need to override the `toString` method of the board as well, it should return a string that contains useful information about the object, example of such return is as follows:

#### Empty board

```text
---Task Board---

Tasks:

No tasks at the moment.
```

#### Board with some tasks

```text
---Task Board---

Tasks:

Name: Validate fields
Status: InProgress
Due: 9/3/2020 12:00:00 AM
--------
Name: Write unit tests
Status: Done
Due: 9/4/2020 12:00:00 AM
--------
Name: Remove console.log
Status: Todo
Due: 9/5/2020 12:00:00 AM
```

### 6. Testing the `Board` and the `Task` models

Sample test code:

```typescript
// Print a colorful line on the console
const newline = () => console.log('\n \x1b[35m* * * * *\x1b[37m \n');

const board = new Board();
const anotherBoard = new Board();

console.log(
  board === anotherBoard
    ? `Success: board and anotherBoard refer to the same instance.`
    : `Fail: board and anotherBoard refer to the different instances!`
);
console.log(`Board references created: ${board.referenceCount}`);

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
```

Sample output text:

```text
Success: board and anotherBoard refer to the same instance.

 * * * * *

---Task Board---

Tasks:

No tasks at the moment.

 * * * * *

---Task Board---

Tasks:

Name: Validate fields
Status: InProgress
Due: 9/3/2020 12:00:00 AM
--------
Name: Write unit tests
Status: Done
Due: 9/4/2020 12:00:00 AM
--------
Name: Remove console.log
Status: Todo
Due: 9/5/2020 12:00:00 AM

 * * * * *

Name: Validate fields
Status: InProgress
Due: 9/3/2020 12:00:00 AM

 * * * * *

board.itemCount: 2
board.items.length === board.itemCount ==> true
```

You can test the difference [here](https://www.diffchecker.com/).

### 7. Things to consider

In order to achieve all of the above, you will need to make proper use of private properties, getters and setters, static fields and validation. Think of a way to reuse validation code, if there is any repetition. Think of when we need to use only getters, and if and when validation logic should be in the constructor, or in the setters.

### 8. Advanced task

Finally, we want to have only one instance of the `Board` class. We should be able to get the same instance of the class wherever and whenever we require it (in the same method, class, in the same or in different .ts file). Think of a way how to implement this (singleton pattern). Remember what static fields and methods are, and what we use them for

- `public static INSTANCE(): Board` - should always return the same instance of `Board`
  - the below code would return a new instance every time. Think of a way to achieve a single instance.

```typescript
public static INSTANCE(): Board {
  return new Board();
}
```

```typescript
const board = Board.INSTANCE();

const anotherBoard = Board.INSTANCE();

console.log(
  board === anotherBoard
    ? `Success: board and anotherBoard refer to the same instance.`
    : `Fail: board and anotherBoard refer to the different instances!`
);
```
