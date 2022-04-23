import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Contact} from '@capacitor-community/contacts';
import {IContact} from '../types/contacts';
import * as _ from 'lodash';
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

  addSelectedContact(contact: IContact) {
    const contacts = this.selectedContacts.value;
    contacts.push(contact);
    this.selectedContacts.next(contacts);
  }

  removeAllSelectedContacts() {
    this.selectedContacts.next([]);
    const contacts = this.allContacts.value;
    contacts.forEach(c => c.isSelected = false);
    this.allContacts.next(contacts);
  }

  removeContact(contact: IContact) {
    const contacts = this.selectedContacts.value;
     const index = this.selectedContacts.value.findIndex((v)=> v.contactId === contact.contactId);
    if (index !== -1) {
      this.selectedContacts.next(contacts.filter(c => c.contactId !== contact.contactId));
      const allContacts = this.allContacts.value;
      const contactIndex = this.allContacts.value.findIndex((v)=> v.contactId === contact.contactId);
      allContacts[contactIndex].isSelected = false;
      this.allContacts.next(allContacts);
    }
  }

  changeContactSelectStatus(index: number, status: boolean) {
    const contact = this.allContacts.value[index];
    if (contact != null) {
      contact.isSelected = status;
    }
    this.allContacts.next(this.allContacts.value);
  }

  selectAllContacts(maximumNumberOfSelectedContacts: number) {
    const contacts = this.allContacts.value;
    contacts.forEach((c, index) => c.isSelected = index < maximumNumberOfSelectedContacts - 1);
    this.selectedContacts.next(_.uniqBy(contacts.slice(0, maximumNumberOfSelectedContacts - 1)));
  }
}
