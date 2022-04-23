import {Component, Input, OnInit} from '@angular/core';
import {IContact} from '../../types/contacts';
import {ContactsService} from '../../services/contacts.service';


@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {

  @Input() contact: IContact;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
  }

  onChange(event: any) {
    if (event.detail.checked) {
      this.contactsService.addContact(this.contact);
    } else {
      this.contactsService.removeContact(this.contact);
    }
  }
}
