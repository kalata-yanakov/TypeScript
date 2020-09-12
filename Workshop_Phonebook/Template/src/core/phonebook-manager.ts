import { Phonebook } from '../models/phonebook';
import { Contact } from '../models/contact';

export class PhonebookManager {

  private static readonly log: string[] = [];

  private constructor() {}

  public static addContact(contact: Contact): void {
    PhonebookManager.execute(
      () => Phonebook.addContact(contact),
      () => `Contact ${contact?.name} was added to the phonebook.`,
    );
  }

  public static removeContact(name: string): void {
    PhonebookManager.execute(
      () => Phonebook.removeContact(name),
      () => `Contact ${name} was removed from the phonebook.`,
    );
  }

  public static updateContact(name: string, phone: string): void {
    PhonebookManager.execute(
      () => Phonebook.updateContact(name, phone),
      () => `Contact ${name}'s phone was updated to ${phone}.`,
    );
  }

  public static listAllContacts(): void {
    let contactResult: string;
    PhonebookManager.execute(
      () => contactResult = Phonebook.listAllContacts(),
      () => contactResult,
    );
  }

  public static search(partialName: string): void {
    let contactResults: string;
    PhonebookManager.execute(
      () => {
        const contacts = Phonebook.search(partialName);
        if (contacts.length === 0) {
          contactResults = `No results found for ${partialName}`;
        } else {
          contactResults = `Results found for ${partialName}:\n` + contacts.map(c => `  ${c.name}: [${c.phone}]`).join('\n');
        }
      },
      () => contactResults,
    );
  }

  public static printLog(): void {
    console.log(PhonebookManager.log.join('\n'));
  }

  private static execute(task: () => void, messageFn: () => string): void {
    try {
      task();
      PhonebookManager.log.push(messageFn());
    } catch (error) {
      PhonebookManager.log.push(error.message);
    }
  }

}
