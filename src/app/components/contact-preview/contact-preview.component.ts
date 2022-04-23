import {Component, Input, OnInit} from '@angular/core';
import {IContact} from '../../types/contacts';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: IContact;
  constructor() { }

  ngOnInit() {}

}
