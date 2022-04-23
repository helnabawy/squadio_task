import {Component} from '@angular/core';
import {SelectContactState} from '../types/enums.types';
import {Contact, Contacts} from '@capacitor-community/contacts';
import {NavController} from '@ionic/angular';
import {ContactsService} from "../services/contacts.service";
import {IContact} from "../types/contacts";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberOfSelectedContacts = 0;
  maximumNumberOfSelectedContacts = 9;
  alphabetCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
  canSelectAll = true;

  backupContacts: IContact[] = [{
    isSelected: false,
    contactId: '177C371E-701D-42F8-A03B-C61CA31627F6',
    phoneNumbers: [{number: '(555) 564-8583', label: 'mobile'}, {label: 'main', number: '(415) 555-3695'}],
    displayName: 'Kate Bell',
    emails: [{label: 'work', address: 'kate-bell@mac.com'}]
  }, {
    isSelected: false,

    displayName: 'Daniel Higgins',
    contactId: 'AB211C5F-9EC9-429F-9466-B9382FF61035',
    phoneNumbers: [{number: '555-478-7672', label: 'home'}, {
      number: '(408) 555-5270',
      label: 'mobile'
    }, {label: 'home fax', number: '(408) 555-3514'}],
    emails: [{label: 'home', address: 'd-higgins@mac.com'}]
  }, {
    isSelected: false,

    emails: [{label: 'work', address: 'John-Appleseed@mac.com'}],
    contactId: '410FE041-5C4E-48DA-B4DE-04C15EA3DBAC',
    displayName: 'John Appleseed',
    phoneNumbers: [{label: 'mobile', number: '888-555-5512'}, {label: 'home', number: '888-555-1212'}]
  }, {
    isSelected: false,

    emails: [{label: 'home', address: 'anna-haro@mac.com'}],
    phoneNumbers: [{label: 'home', number: '555-522-8243'}],
    contactId: 'F57C8277-585D-4327-88A6-B5689FF69DFE',
    displayName: 'Anna Haro'
  }, {
    isSelected: false,

    displayName: 'Hank Zakroff',
    phoneNumbers: [{label: 'work', number: '(555) 766-4823'}, {number: '(707) 555-1854', label: 'other'}],
    contactId: '2E73EE73-C03F-4D5F-B1E8-44E85A70F170',
    emails: [{address: 'hank-zakroff@mac.com', label: 'work'}]
  }, {
    isSelected: false,

    displayName: 'David Taylor',
    emails: [],
    contactId: 'E94CD15C-7964-4A9B-8AC4-10D7CFB791FD',
    phoneNumbers: [{number: '555-610-6679', label: 'home'}]
  }];

  constructor(private navController: NavController, public contactsService: ContactsService) {

    Contacts.getContacts().then(result => {
      const allContacts = result.contacts.map(c => {
        const contact = c as IContact;
        contact.isSelected = false;
        return contact;
      });
        this.contactsService.setAllContacts(allContacts);
    });

    // Browser testing
    // this.contactsService.setAllContacts(this.backupContacts);

  }

  get selectText(): string {
    return this.canSelectAll ? SelectContactState.selectAll : SelectContactState.deselectAll;
  }

  ngOnInit() {
    this.contactsService.selectedContacts$.subscribe(data => this.numberOfSelectedContacts = data.length);
  }

  ngOnDestroy() {

  }

  onSelect() {
    this.contactsService.removeAllSelectedContacts();
    if (this.canSelectAll) {
      this.contactsService.selectAllContacts(this.maximumNumberOfSelectedContacts);
    }
    this.canSelectAll = !this.canSelectAll;
  }

  onCreateGroup() {
    this.navController.navigateForward('group-create');
  }
}
