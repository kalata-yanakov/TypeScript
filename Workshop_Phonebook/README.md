<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## Phonebook

### 1. Project information

1. Run `npm install`
1. There are a few scripts you could run

   - `npm run start` - run the project
   - `npm run start:safe` - run the project but makes a check in TSLint and if any of the rules fail the project won't run
   - `npm run lint -s` - lint the project
   - `npm run lint:fix -s` - fix the problems with lint

   - The `-s` flag in lint means to run it silent and not report back exceptions

### 2. Description

Phonebook is a phone contact management system for creating, storing, updating and deleting phone contacts. The application should be built **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP).

### 3. Goal

Your **goal** is to design the two main **models** of the system - the `Contact` class and the `Phonebook` class. You need to **encapsulate** correctly all fields and use **validation** whenever necessary.

What we will exercise:

- defining a class
- how to create fields and properties:
  - fields are the state - the part that holds the data
  - properties expose fields through getters and setters - a property can have both getter and setter, only a getter, or only a setter
- how to encapsulate the class - fields should be private (or protected) and should be exposed through properties that are validated
- how to use validation in properties
- when to make a method public or private - only methods used outside the class should be public, everything else should be private or protected
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

### 4. The `Contact` model

Each contact should have the following public properties:

- `name: string` - **name** should never be **null, undefined or an empty string**, its length should be between **3 and 25 characters**
- `phone: string` - **phone** should never be **null, undefined or an empty string**, it should be in the format `0xxx-xxx-xxx` or `0xxx xxx xxx`, where `x` is any digit

Constructor should throw when invalid values have been passed to it.

The `Contact` model should be keeping a history of all events, registered with the methods described below.

The following methods should be implemented:

- `call(): void` - should "call" the contact, i.e. register a record of the event as a string in the following format `[month/day/year hour:minutes:seconds AM/PM]Call (xx sec)` where the seconds `xx` are a random number between 1 and 150.
- `message(msg: string): void` - should "message" the contact, i.e. register a record of the event as a string in the following format `[month/day/year hour:minutes:seconds AM/PM]Message: (XXX)` where `XXX` is the message `msg`, should throw if the message is `null`, `undefined` or an empty string
- `viewHistoryLog(): void` - should show all of the registered events from the **most recent** to the oldest

The testing code is `main.ts`. Make sure you have the `testContactModel` function call uncommented in order to run the test code.

Test code:

```typescript
const contact1 = ContactFactory.createContact('Pesho', '0111-123-123');
const contact2 = ContactFactory.createContact('Gosho', '0222-321-321');
const contact3 = ContactFactory.createContact('Steven', '0333-213-213');

contact1.call();
contact2.call();

contact1.message('Pesho vdigni go toq telefon');
contact1.call();
contact1.call();

contact1.viewHistoryLog();
contact2.viewHistoryLog();
contact3.viewHistoryLog();
```

Output (dates and call durations will differ):

```txt
Pesho's call log:
[6/5/2020 2:09:46 PM]Call: Duration: 97 sec.
[6/5/2020 2:09:46 PM]Call: Duration: 50 sec.
[6/5/2020 2:09:46 PM]Message: (Pesho vdigni go toq telefon).
[6/5/2020 2:09:46 PM]Call: Duration: 134 sec.
Gosho's call log:
[6/5/2020 2:09:46 PM]Call: Duration: 119 sec.
Steven's call log:
No entries
```

### 5. The `Phonebook` model

We will implement this model as a singleton. This time around we will use another way to create a singleton - make everything static, so it exist only on the class object and not on the instance.

You have to make sure no one can make an instance of the class, i.e. this should not be possible:

```typescript
const phoneBook = new Phonebook();
```

Think of a way to achieve this.

The `Phonebook` class should hold a collection of contacts, but it should not expose that collection to the outside, except for a few methods, designed to update the collection - add, remove and list contacts. Here is a list of the public methods:

- `public static addContact(contact: Contact): void` - should add a contact to the collection of contacts. This method should validated that no `null` or `undefined` was passed and should throw and error if it was. This method should throw when you try a contact that already exist in the collection (validation is done by the name of the contact)
- `public static removeContact(name: string): void` - should remove a contact from the collection by its name. This method should validate if `name` is `null` or `undefined`, or an empty string and it should throw if it is. It should throw if no contact with the passed name exists in the collection
- `public static updateContact(name: string, phone: string): void` - should update a contact's phone by its name. This method should validated that no `null` or `undefined` was passed and should throw and error if it was. This method should throw if the contact doesn't exists.
- `public static listAllContacts(): string` - should return a list of all contacts or - if no the collection is empty - should return `No contacts.`
- `public static search(partialName: string): Contact[]` - should return a list of all contacts with name containing `partialName`, i.e. if `Pesho`, `Gosho`, and `Steven` are the contacts and `partialName` is `sh` it should return `Pesho` and `Gosho` as a collection of their contacts

To test the `Phonebook` model make sure you have the `testPhonebookModel` function call in `main.ts` uncommented. Please also notice that throwing code will not interrupt the program flow, but will be instead registered as an event in the `PhonebookManager` class and be displayed as `Error: ${error.message}` when the log is printed.

Test code:

```typescript
const contact1 = ContactFactory.createContact('Pesho', '0111-123-123');
const contact2 = ContactFactory.createContact('Gosho', '0222-321-321');
const contact3 = ContactFactory.createContact('Steven', '0333-213-213');

PhonebookManager.listAllContacts();
PhonebookManager.addContact(contact1);
PhonebookManager.addContact(null);
PhonebookManager.addContact(contact2);
PhonebookManager.addContact(contact3);
PhonebookManager.removeContact('Gosho');
PhonebookManager.removeContact('Penka');
PhonebookManager.updateContact(undefined, undefined);
PhonebookManager.updateContact('Steven', '0123-456-789');
PhonebookManager.removeContact(null);
PhonebookManager.listAllContacts();
PhonebookManager.search('sh');

PhonebookManager.printLog();
```

Output:

```txt
No contacts.
Contact Pesho was added to the phonebook.
Error: Please provide a contact!
Contact Gosho was added to the phonebook.
Contact Steven was added to the phonebook.
Contact Gosho was removed from the phonebook.
Error: Contact Penka does not exist!
Error: Please provide a contact name!
Contact Steven's phone was updated to 0123-456-789.
Error: Please provide a contact name!
All contacts:
  Pesho: [0111-123-123]
  Steven: [0123-456-789]
Results found for sh:
  Pesho: [0111-123-123]
```

### 6. The `PhonebookManager` class (Advanced)

The `PhonebookManager` class is fully implemented - you don't need to change anything.

Take a look at the implementation. There should be a few familiar things - closures used on several places, throwing code tested inside a function (we passed a throwing code inside a function when using `jest` for unit testing), etc.