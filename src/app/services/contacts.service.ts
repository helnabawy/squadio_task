import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Contact} from "@capacitor-community/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private selectedContacts = new BehaviorSubject([]) as BehaviorSubject<Contact[]>;
  public selectedContacts$: Observable<Contact[]> = this.selectedContacts.asObservable();


  constructor() {
  }

  addContact(contact: Contact) {
    const contacts = this.selectedContacts.value;
    contacts.push(contact);
    this.selectedContacts.next(contacts);
  }

  removeContact(contact: Contact) {
    const contacts = this.selectedContacts.value;
    const index = this.selectedContacts.value.findIndex((v)=> v.contactId === contact.contactId);
    contacts.splice(index, 1);
    this.selectedContacts.next(contacts);
  }
}
