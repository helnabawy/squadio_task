import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '@capacitor-community/contacts';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit() {}

}
