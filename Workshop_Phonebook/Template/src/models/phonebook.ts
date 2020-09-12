import { Contact } from './contact';

export class Phonebook {
  private static contacts: Contact[] = [];
  private static instance: Phonebook;

  constructor() {
    if (!Phonebook.instance) {
      Phonebook.instance = this;
    }
    return Phonebook.instance;
  }

  public static addContact(contact: Contact): void {
    if (!contact) {
      throw new Error('Error: Please provide a contact!');
    }
    if (this.contacts.some((el: Contact) => el.name === contact.name)) {
      throw new Error('Contact already in Phonebook');
    }
    this.contacts.push(contact);
  }

  public static removeContact(name: string): void {
    if (!name) {
      throw new Error('Error: Please provide a contact name!');
    }
    if (!this.contacts.some((el: Contact) => el.name === name)) {
      throw new Error(`Error: Contact ${name} does not exist!`);
    }
   this.contacts = this.contacts.filter((el: Contact) => el.name !== name);
  }

  public static updateContact(name: string, phone: string): void {
    if (!name) {
      throw new Error(`Error: Please provide a contact name!`);
    }
    if (!phone) {
      throw new Error('Error: Please provide a contact phone!');
    }
    if (!this.contacts.some((el: Contact) => el.name === name)) {
      throw new Error(`Error: Contact ${name} does not exist!`);
    }
    const contact = this.contacts.find((el: Contact) => el.name === name);
      contact.phone = phone;
    }

    public static listAllContacts(): string {
    let result: string = '';

    if (this.contacts.length > 0) {
      result += 'All contacts:\n' + this.contacts.map((el: Contact) => ` ${el.name}: [${el.phone}]`).join('\n');
    } else {
      result += 'No contacts.';
    }
    return result;
  }

  public static search(partialName: string): Contact[] {
    return this.contacts.filter((el: Contact) => el.name.match(new RegExp(partialName)));
  }

}
