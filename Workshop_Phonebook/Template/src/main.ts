import { Contact } from './models/contact';
import { ContactFactory } from './core/contact-factory';
import { PhonebookManager } from './core/phonebook-manager';

// const testContactModel = (): void => {
//   const contact1 = ContactFactory.createContact('Pesho', '0111-123-123');
//   const contact2 = ContactFactory.createContact('Gosho', '0222-321-321');
//   const contact3 = ContactFactory.createContact('Steven', '0333-213-213');

//   contact1.call();
//   contact2.call();

//   contact1.message('Pesho vdigni go toq telefon');
//   contact1.call();
//   contact1.call();

//   contact1.viewHistoryLog();
//   contact2.viewHistoryLog();
//   contact3.viewHistoryLog();
// };

// testContactModel();

const testPhonebookModel = (): void => {
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
};

testPhonebookModel();
