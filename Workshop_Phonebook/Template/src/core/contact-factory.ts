import { Contact } from '../models/contact';

export class ContactFactory {

  private constructor() {}

  public static createContact(name: string, phone: string): Contact {
    return new Contact(name, phone);
  }

}
