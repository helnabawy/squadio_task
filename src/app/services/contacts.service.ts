import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Contact} from '@capacitor-community/contacts';
import {IContact} from '../types/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private selectedContacts = new BehaviorSubject([]) as BehaviorSubject<IContact[]>;
  public selectedContacts$: Observable<IContact[]> = this.selectedContacts.asObservable();
  private allContacts = new BehaviorSubject([]) as BehaviorSubject<IContact[]>;
  public allContacts$: Observable<IContact[]> = this.allContacts.asObservable();

  constructor() {
  }

  setAllContacts(contacts: IContact[]) {

    this.allContacts.next(contacts);
  }

  addContact(contact: IContact) {
    console.log('add contact, ', contact.contactId);
    const contacts = this.selectedContacts.value;
    contacts.push(contact);
    this.selectedContacts.next(contacts);
  }

  removeContact(contact: IContact) {
    const contacts = this.selectedContacts.value;
     const index = this.selectedContacts.value.findIndex((v)=> v.contactId === contact.contactId);
    if (index !== -1) {
      contacts.splice(index, 1);
      this.selectedContacts.next(contacts);
      const allContacts = this.allContacts.value;
      const contactIndex = this.allContacts.value.findIndex((v)=> v.contactId === contact.contactId);
      allContacts[contactIndex].isSelected = false;
      this.allContacts.next(allContacts);
    }
  }

  removeContacts() {
    this.selectedContacts.next([]);
  }
}
