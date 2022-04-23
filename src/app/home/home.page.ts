import {Component} from '@angular/core';
import {SelectContactState} from '../types/enums.types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberOfSelectedContacts = 0;
  maximumNumberOfSelectedContacts = 9;

  constructor(private router: Router) {}


  onSelect() {
    this.numberOfSelectedContacts = this.numberOfSelectedContacts < 9 ? 9 : 0;
  }

  get selectText(): string {
    return this.canSelectAllContacts ? SelectContactState.selectAll : SelectContactState.deselectAll;
  }

  get canSelectAllContacts(): boolean {
    return  this.numberOfSelectedContacts < this.maximumNumberOfSelectedContacts;
  }

  onCreateGroup() {
    this.router.navigate(['/group-create']);
  }
}
